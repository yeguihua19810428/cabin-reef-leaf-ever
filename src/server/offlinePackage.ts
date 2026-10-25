import { readFile } from "node:fs/promises";
import path from "node:path";
import { readUserCourses } from "./courseLibrary";
import { readDeepseekKey } from "@/server/deepseekKey";
import { focusPoint, madeExample, wholeBlank } from "@/lyric/utils/songFocus";
import type { Song } from "@/lyric/types";

type StoredSong = {
  title?: string;
  audioUrl?: string;
  [key: string]: unknown;
};

const audioDir = path.join(process.cwd(), "public/audio");

const README = `怎么在手机上打开
================

1. 先把整个压缩包解压，不要在压缩包里直接点。
2. 用 Chrome 打开「点这里打开.html」。不要打开 songs.json，也不要只打开 mp3。
3. 网页必须和 audio、mv 两个文件夹留在一起，不要把网页单独抽走。
4. 如果屏幕下方弹出「相关网页」，点右上角的叉关掉。那是浏览器自己的搜索，不是课件。
   还反复弹出的话，换 Chrome 打开，不要用自带浏览器。

电脑也可以双击「点这里打开.html」。
如果没有声音，再双击「打开学生包.bat」（Windows）或「打开学生包.command」（Mac）。
《Talking to the Moon》可以点底部的「欣赏」看画面。声音仍是原来的 MP3。
`;

function crc32(buffer: Buffer): number {
  let crc = 0xffffffff;
  for (let i = 0; i < buffer.length; i++) {
    crc ^= buffer[i];
    for (let bit = 0; bit < 8; bit++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function storeZip(files: Array<{ name: string; data: Buffer }>): Buffer {
  const now = new Date();
  const dosTime =
    (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
  const dosDate =
    ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
  const parts: Buffer[] = [];
  const centrals: Buffer[] = [];
  let offset = 0;

  for (const file of files) {
    const name = Buffer.from(file.name, "utf8");
    const crc = crc32(file.data);
    const local = Buffer.alloc(30 + name.length);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(0, 8);
    local.writeUInt16LE(dosTime, 10);
    local.writeUInt16LE(dosDate, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(file.data.length, 18);
    local.writeUInt32LE(file.data.length, 22);
    local.writeUInt16LE(name.length, 26);
    name.copy(local, 30);

    const central = Buffer.alloc(46 + name.length);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(dosTime, 12);
    central.writeUInt16LE(dosDate, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(file.data.length, 20);
    central.writeUInt32LE(file.data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE(offset, 42);
    name.copy(central, 46);

    parts.push(local, file.data);
    centrals.push(central);
    offset += local.length + file.data.length;
  }

  const centralStart = offset;
  const centralBlob = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralBlob.length, 12);
  end.writeUInt32LE(centralStart, 16);
  return Buffer.concat([...parts, centralBlob, end]);
}

function xml(value: string): string {
  return value
    .replace(/&/g, "&" + "amp;")
    .replace(/</g, "&" + "lt;")
    .replace(/>/g, "&" + "gt;");
}

function renderPlayer(songs: StoredSong[], deepseekKey: string): string {
  const slim = songs.map((song) => ({
    title: song.title,
    artist: song.artist,
    duration: song.duration,
    audioUrl: song.audioUrl,
    videoUrl: song.videoUrl,
    videoPoster: song.videoPoster,
    focus: song.grammarTheme,
    example: song.practiceExample,
    lines: Array.isArray(song.lines)
      ? song.lines.map((line) => {
          const row = line as {
            text?: string;
            translation?: string;
            startTime?: number;
            endTime?: number;
            fullText?: string;
            cloze?: unknown;
          };
          return {
            text: row.text,
            translation: row.translation,
            startTime: row.startTime,
            endTime: row.endTime,
            fullText: row.fullText,
            cloze: row.cloze,
          };
        })
      : [],
  }));
  const payload = JSON.stringify(slim).replace(/</g, "\\u003c");
  const first = slim[0];
  const pageTitle = xml(String(first?.title || "歌曲"));
  const firstLyrics = (first?.lines || [])
    .map((line) => {
      const text = xml(String(line.text || ""));
      const zh = xml(String(line.translation || ""));
      return text ? `<div class="line"><b>${text}</b><small>${zh}</small></div>` : "";
    })
    .join("");
  const deepseekUrl = deepseekKey ? "https://api.deepseek.com/chat/completions" : "";
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="robots" content="noindex,nofollow,noarchive" />
<title>${pageTitle}</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "PingFang SC", "Noto Sans SC", "Segoe UI", sans-serif; background: #f8fafc; color: #0f172a; }
  header { position: sticky; top: 0; z-index: 5; background: #fff; border-bottom: 1px solid #e2e8f0; padding: 10px 12px; }
  header strong { font-size: 16px; }
  select { width: 100%; margin-top: 8px; border: 1px solid #e2e8f0; border-radius: 10px; padding: 8px; font: inherit; }
  main { padding: 12px 12px 168px; }
  .line { padding: 12px 4px; border-bottom: 1px solid #f1f5f9; }
  .line b { display: block; font-size: 18px; line-height: 1.45; }
  .line small { color: #64748b; }
  .line.on b { color: #b45309; }
  .row { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; }
  button, textarea { font: inherit; }
  .chip { border: 1px solid #e2e8f0; background: #fff; border-radius: 999px; padding: 10px 14px; min-height: 40px; white-space: nowrap; }
  .play { width: 48px; height: 48px; border: 0; border-radius: 999px; background: #f59e0b; color: #fff; font-size: 18px; }
  .nav button { border: 0; background: transparent; min-height: 48px; padding: 8px 2px; font-size: 13px; color: #64748b; }
  .chip.on { background: #f59e0b; color: #fff; border-color: #f59e0b; }
  .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 12px; margin-bottom: 10px; }
  .chunk { display: inline-block; margin: 4px 4px 0 0; padding: 8px 10px; border-radius: 10px; background: #fffbeb; border: 1px solid #fde68a; }
  .opt { display: block; width: 100%; text-align: left; margin-top: 8px; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; background: #fff; }
  .opt.good { border-color: #10b981; background: #ecfdf5; }
  .opt.bad { border-color: #f43f5e; background: #fff1f2; }
  textarea { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px; }
  .dock { position: fixed; left: 0; right: 0; bottom: 0; background: #fff; border-top: 1px solid #e2e8f0; padding-bottom: env(safe-area-inset-bottom); }
  .transport { display: flex; align-items: center; gap: 8px; padding: 8px 10px 0; }
  .transport input { flex: 1; accent-color: #f59e0b; }
  .nav { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .nav button.on { color: #b45309; font-weight: 700; }
  .mv { position: relative; max-width: 420px; margin: 0 auto 10px; height: 46vh; background: #111827; border-radius: 18px; overflow: hidden; }
  .mv video { width: 100%; height: 100%; object-fit: cover; display: block; }
  .mvline { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 14px 12px; }
  .mvline b { display: block; font-size: 22px; line-height: 1.4; color: #0f172a; }
  .mvline p { margin: 8px 0 0; font-size: 15px; line-height: 1.45; color: #64748b; }
</style>
</head>
<body>
<header>
  <strong id="title">${pageTitle}</strong>
  <select id="songs"></select>
</header>
<main id="stage">${firstLyrics}</main>
<div class="dock">
  <div class="transport">
    <button class="play" id="play" type="button">▶</button>
    <button class="chip" id="prev" type="button">上一句</button>
    <button class="chip" id="next" type="button">下一句</button>
    <button class="chip" id="loop" type="button">循环这句</button>
    <input id="seek" type="range" min="0" max="0" step="0.1" value="0" aria-label="进度" />
    <input id="vol" type="range" min="0" max="1" step="0.05" value="1" aria-label="音量" style="max-width:72px" />
  </div>
  <div class="row" id="speeds" style="padding:8px 10px 0"></div>
  <nav class="nav">
    <button type="button" data-mode="mv">欣赏</button>
    <button type="button" data-mode="listen">歌词</button>
    <button type="button" data-mode="grammar">这几句</button>
    <button type="button" data-mode="karaoke">填空</button>
    <button type="button" data-mode="builder">自己的</button>
  </nav>
</div>
<audio id="audio" preload="none"></audio>
<script>
const SONGS = ${payload};
const DEEPSEEK_KEY = ${JSON.stringify(deepseekKey)};
const DEEPSEEK_URL = ${JSON.stringify(deepseekUrl)};
const audio = document.getElementById("audio");
const stage = document.getElementById("stage");
let index = 0;
let mode = "listen";
let rate = 1;
let shown = -1;
let grammarIndex = 0;
let subtitles = "both";
let loopLine = null;
let quizIndex = 0;
let quizAnswer = "";
let quizLocked = false;
let quizScore = 0;
function song() { return SONGS[index]; }
function lines() { return (song() && song().lines) || []; }
function focusName() {
  return (song() && song().focus) || "";
}
function studyLines() {
  const point = focusName();
  if (point.indexOf("已经") === 0) {
    return lines().filter(function (line) { return /they say/i.test(line.text || ""); });
  }
  if (point.indexOf("以后") === 0 || point.indexOf("If 后面") === 0) {
    return lines().filter(function (line) { return /^\\s*(and\\s+)?if\\b/i.test(line.text || ""); });
  }
  return lines();
}
function tipText() {
  if (focusName().indexOf("已经") === 0) {
    return "别人已经这么说了。嘴里却用 They say，不用 They said。听起来这消息现在还在起作用。";
  }
  return "两件事都是以后才发生的。If 后面那件，却当成现在来说，不加 will。will 只放在后面那句，说你到时会怎么做。";
}
function escapeHtml(value) {
  return String(value || "").replace(/[&<>"]/g, function (ch) {
    if (ch === "&") return "&" + "amp;";
    if (ch === "<") return "&" + "lt;";
    if (ch === ">") return "&" + "gt;";
    return "&" + "quot;";
  });
}
function activeLine() {
  const t = audio.currentTime || 0;
  let hit = 0;
  for (let i = 0; i < lines().length; i++) if (t >= lines()[i].startTime) hit = i;
  return hit;
}
function paintTabs() {
  document.querySelectorAll(".nav button").forEach(function (button) {
    button.classList.toggle("on", button.dataset.mode === mode);
  });
}
function renderListen() {
  const source = subtitles === "grammar" ? studyLines() : lines();
  const html = source.map(function (line) {
    const extra = subtitles === "en" ? "" : escapeHtml(line.translation || "");
    return '<div class="line" data-t="' + line.startTime + '"><b>' + escapeHtml(line.fullText || line.text) +
      '</b><small>' + extra + '</small></div>';
  }).join("");
  stage.innerHTML = '<div class="row">' +
    '<button class="chip" data-sub="both" type="button">中英</button>' +
    '<button class="chip" data-sub="en" type="button">只看英文</button>' +
    '<button class="chip" data-sub="grammar" type="button">只看要学的</button>' +
    '<button class="chip" id="open-grammar" type="button">听这句怎么唱</button></div>' + html;
  shown = -1;
  highlight();
}
function renderGrammar() {
  const pool = studyLines();
  const cards = pool.map(function (line) {
    return '<div class="card"><b>' + escapeHtml(line.fullText || line.text) +
      '</b><p>' + escapeHtml(line.translation || "") + '</p><button class="chip" data-t="' +
      line.startTime + '" type="button">听这句</button></div>';
  }).join("");
  stage.innerHTML = '<div class="card"><b>' + escapeHtml(focusName()) + '</b><p>' + tipText() + '</p></div>' +
    (cards || '<div class="card">这首歌里还没有对上这个点的句子。</div>') +
    '<button class="chip" id="use-pattern" type="button">我也用这句说说自己的事</button>';
}
function quizItems() {
  const items = studyLines().filter(function (line) { return line.cloze && line.cloze.blankWord; });
  const extra = song() && song().example;
  if (extra && extra.cloze) items.push(extra);
  return items;
}
function renderQuiz() {
  const items = quizItems();
  if (!items.length) { stage.innerHTML = '<div class="card">这首歌还没有填空题。</div>'; return; }
  if (quizIndex >= items.length) {
    stage.innerHTML = '<div class="card"><b>做完了</b><p>对了 ' + quizScore + ' / ' + items.length +
      '</p><button class="chip" id="quiz-restart" type="button">再练一次</button></div>';
    return;
  }
  const line = items[quizIndex];
  const cloze = line.cloze;
  const options = (cloze.options || []).map(function (opt) {
    let cls = "opt";
    if (quizLocked && opt.toLowerCase() === String(cloze.blankWord).toLowerCase()) cls += " good";
    else if (quizLocked && opt === quizAnswer) cls += " bad";
    return '<button class="' + cls + '" data-opt="' + escapeHtml(opt) + '" type="button">' + escapeHtml(opt) + '</button>';
  }).join("");
  const label = line.kind === "made" ? "换一句你自己的" : "歌里这句";
  const hear = line.startTime == null ? "" : '<button class="chip" data-t="' + line.startTime + '" type="button">听这句</button>';
  stage.innerHTML = '<div class="card"><p>第 ' + (quizIndex + 1) + ' / ' + items.length + ' 句</p><p>' +
    escapeHtml(label) + '</p><b>' + escapeHtml(cloze.sentenceWithBlank || line.text) +
    '</b><p>' + tipText() + '</p>' + hear +
    options + (quizLocked ? '<button class="chip" id="quiz-next" type="button">下一题</button>' : '') + '</div>';
}
function renderBuilder() {
  const all = studyLines();
  if (grammarIndex >= all.length) grammarIndex = 0;
  const line = all[grammarIndex] || {};
  const list = all.map(function (item, i) {
    return '<button class="line" data-pick="' + i + '" type="button"><b>' + escapeHtml(item.fullText || item.text) +
      '</b><small>' + escapeHtml(item.translation || "") + '</small></button>';
  }).join("");
  stage.innerHTML = '<div class="card"><b>换成你自己的事</b><p>' + tipText() + '</p></div>' +
    list +
    '<div class="card"><b>就改这一句</b><p>' + escapeHtml(line.fullText || line.text || "") + '</p><textarea id="sentence" rows="3" placeholder="写成完整的一句。If 后面当现在说，后面接上你会怎么做。"></textarea>' +
    '<button class="chip" id="check-sentence" type="button">检查</button><div id="sentence-result"></div></div>';
}
function renderMv() {
  const current = song() || {};
  const line = lines()[activeLine()] || {};
  if (!current.videoUrl) {
    stage.innerHTML = '<div class="card">这首还没有画面。歌和歌词还能照常听。</div>';
    return;
  }
  stage.innerHTML = '<div class="mv"><video id="mv" src="' + escapeHtml(current.videoUrl) +
    '" poster="' + escapeHtml(current.videoPoster || "") + '" muted playsinline></video></div>' +
    '<div class="mvline" id="mvline"><b>' + escapeHtml(line.text || "按播放") + '</b><p>' +
    escapeHtml(line.translation || "") + '</p></div>';
  const clip = document.getElementById("mv");
  if (!clip) return;
  clip.onerror = function () {
    stage.innerHTML = '<div class="card">画面没加载出来。先听歌、看歌词就行。</div>';
  };
  try { clip.currentTime = audio.currentTime || 0; } catch (error) {}
  if (!audio.paused) clip.play();
}
function render() {
  paintTabs();
  if (mode === "grammar") renderGrammar();
  else if (mode === "karaoke") renderQuiz();
  else if (mode === "builder") renderBuilder();
  else if (mode === "mv") renderMv();
  else renderListen();
}
function highlight() {
  if (mode !== "listen" || subtitles === "grammar") return;
  const lineNo = activeLine();
  if (lineNo === shown) return;
  shown = lineNo;
  stage.querySelectorAll(".line").forEach(function (node, i) { node.classList.toggle("on", i === lineNo); });
  const active = stage.querySelector(".line.on");
  if (active) active.scrollIntoView({ block: "center" });
}
function loadSong(next, autoplay) {
  index = next;
  const current = song();
  if (!current) return;
  document.getElementById("title").textContent = current.title || "歌曲";
  document.getElementById("songs").value = String(index);
  audio.src = current.audioUrl;
  audio.playbackRate = rate;
  grammarIndex = 0;
  quizIndex = 0;
  quizAnswer = "";
  quizLocked = false;
  quizScore = 0;
  loopLine = null;
  document.getElementById("loop").classList.remove("on");
  render();
  if (autoplay) audio.play();
}
function jump(delta) {
  const i = Math.max(0, Math.min(lines().length - 1, activeLine() + delta));
  const line = lines()[i];
  if (!line) return;
  audio.currentTime = line.startTime;
  audio.play();
}
function localNote(text) {
  const lower = text.toLowerCase();
  const ifSong = focusName().indexOf("以后") === 0 || focusName().indexOf("If") === 0;
  let note = "可以。这是本地判断。";
  if (text.split(/\\s+/).length < 3) note = "再写完整一点。";
  else if (ifSong) {
    const head = lower.split(/i'll|i will/)[0];
    if (lower.indexOf("if") < 0) note = "还是用 If 开头，后面接上你会怎么做。";
    else if (head.indexOf("will") >= 0) note = "If 后面别加 will。will 放在后面那句。";
    else if (lower.indexOf("will") < 0 && lower.indexOf("i'll") < 0) note = "后面那句也要写上，用 will 说你会怎么做。";
  } else if (focusName().indexOf("已经") === 0 && (lower.indexOf("they say") < 0 || lower.indexOf("they said") >= 0)) {
    note = "别人已经说过了。嘴里用 They say，别写成 They said。";
  }
  return note;
}
function askDeepSeek(text) {
  if (!DEEPSEEK_KEY || !DEEPSEEK_URL) return Promise.reject(new Error("no key"));
  return fetch(DEEPSEEK_URL, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: "Bearer " + DEEPSEEK_KEY },
    body: JSON.stringify({
      model: "deepseek-chat",
      temperature: 0.2,
      messages: [
        { role: "system", content: "你在帮中国大学生看一句英文。只用口语，不要用语法术语。以后的事：If 后面当现在说，不加 will，will 放在后面那句，必须写完整句。别人已经说过的事：用 They say，不要 They said。用两三句中文说清楚。" },
        { role: "user", content: "这首歌要学的：" + focusName() + "\\n学生写的：" + text }
      ]
    })
  }).then(function (res) {
    if (!res.ok) throw new Error("bad");
    return res.json();
  }).then(function (data) {
    const message = data && data.choices && data.choices[0] && data.choices[0].message;
    const reply = message && message.content ? String(message.content).trim() : "";
    if (!reply) throw new Error("empty");
    return reply;
  });
}
function checkSentence() {
  const input = document.getElementById("sentence");
  const result = document.getElementById("sentence-result");
  if (!input || !result) return;
  const text = input.value.trim();
  const local = localNote(text);
  if (!DEEPSEEK_KEY) {
    result.innerHTML = "<p>" + escapeHtml(local) + "</p>";
    return;
  }
  result.innerHTML = "<p>在问 DeepSeek…</p>";
  askDeepSeek(text).then(function (reply) {
    result.innerHTML = "<p>" + escapeHtml(reply) + "</p>";
  }).catch(function () {
    result.innerHTML = "<p>" + escapeHtml(local) + "</p><p>没连上 DeepSeek，这是本地判断。</p>";
  });
}
document.getElementById("songs").innerHTML = SONGS.map(function (item, i) {
  return '<option value="' + i + '">' + escapeHtml(item.title || "未命名") + '</option>';
}).join("");
document.getElementById("songs").onchange = function (event) { loadSong(Number(event.target.value), true); };
document.getElementById("play").onclick = function () {
  if (!song()) return;
  if (audio.paused) audio.play(); else audio.pause();
};
document.getElementById("prev").onclick = function () { jump(-1); };
document.getElementById("next").onclick = function () { jump(1); };
document.getElementById("loop").onclick = function (event) {
  if (loopLine === null) {
    loopLine = activeLine();
    event.target.classList.add("on");
  } else {
    loopLine = null;
    event.target.classList.remove("on");
  }
};
document.getElementById("seek").oninput = function (event) { audio.currentTime = Number(event.target.value); };
document.getElementById("vol").oninput = function (event) { audio.volume = Number(event.target.value); };
document.getElementById("speeds").innerHTML = [0.75, 1, 1.25].map(function (value) {
  return '<button class="chip' + (value === 1 ? ' on' : '') + '" data-rate="' + value + '" type="button">' + value + 'x</button>';
}).join("");
document.getElementById("speeds").onclick = function (event) {
  const button = event.target.closest("[data-rate]");
  if (!button) return;
  rate = Number(button.dataset.rate);
  audio.playbackRate = rate;
  document.querySelectorAll("#speeds button").forEach(function (item) { item.classList.toggle("on", item === button); });
};
document.querySelector(".nav").onclick = function (event) {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  mode = button.dataset.mode;
  shown = -1;
  render();
};
stage.onclick = function (event) {
  const sub = event.target.closest("[data-sub]");
  if (sub) { subtitles = sub.dataset.sub; renderListen(); return; }
  if (event.target.id === "open-grammar" || event.target.id === "use-pattern") {
    if (event.target.id === "open-grammar") {
      const found = studyLines().indexOf(lines()[activeLine()]);
      grammarIndex = found >= 0 ? found : 0;
      mode = "grammar";
    } else {
      mode = "builder";
    }
    render();
    return;
  }
  const picked = event.target.closest("[data-pick]");
  if (picked) { grammarIndex = Number(picked.dataset.pick); renderBuilder(); return; }
  const grammarButton = event.target.closest("[data-g]");
  if (grammarButton) { grammarIndex = Number(grammarButton.dataset.g); renderGrammar(); return; }
  const pattern = event.target.closest("[data-pattern]");
  if (pattern) {
    const item = ((song() && song().keyTakeawayPatterns) || [])[Number(pattern.dataset.pattern)];
    const box = document.getElementById("sentence");
    if (item && box && !box.value) box.value = item.dailyExample || "";
    return;
  }
  const line = event.target.closest("[data-t]");
  if (line && !event.target.closest("[data-opt]")) {
    audio.currentTime = Number(line.dataset.t);
    audio.play();
    return;
  }
  const option = event.target.closest("[data-opt]");
  if (option && !quizLocked) {
    quizAnswer = option.dataset.opt;
    quizLocked = true;
    const item = quizItems()[quizIndex];
    if (item && String(item.cloze.blankWord).toLowerCase() === String(quizAnswer).toLowerCase()) quizScore += 1;
    renderQuiz();
    return;
  }
  if (event.target.id === "quiz-next") { quizIndex += 1; quizAnswer = ""; quizLocked = false; renderQuiz(); return; }
  if (event.target.id === "quiz-restart") { quizIndex = 0; quizAnswer = ""; quizLocked = false; quizScore = 0; renderQuiz(); return; }
  if (event.target.id === "check-sentence") checkSentence();
};
audio.ontimeupdate = function () {
  const seek = document.getElementById("seek");
  seek.max = String(audio.duration || (song() && song().duration) || 0);
  seek.value = String(audio.currentTime || 0);
  document.getElementById("play").textContent = audio.paused ? "▶" : "❚❚";
  if (loopLine !== null) {
    const line = lines()[loopLine];
    if (line && audio.currentTime > line.endTime + 0.05) audio.currentTime = line.startTime;
  }
  highlight();
  if (mode === "mv") {
    const clip = document.getElementById("mv");
    const cap = document.getElementById("mvline");
    const line = lines()[activeLine()] || {};
    if (cap) cap.innerHTML = "<b>" + escapeHtml(line.text || "") + "</b><p>" + escapeHtml(line.translation || "") + "</p>";
    if (clip) {
      try {
        if (Math.abs(clip.currentTime - audio.currentTime) > 0.45) clip.currentTime = audio.currentTime;
      } catch (error) {}
      if (audio.paused) clip.pause();
      else clip.play();
    }
  }
};
audio.onplay = audio.onpause = audio.ontimeupdate;
if (song()) loadSong(0, false);
</script>
</body>
</html>
`;
}

const WINDOWS_OPENER = `@echo off
cd /d "%~dp0"
where python >nul 2>nul && start "" http://127.0.0.1:8848/ && python -m http.server 8848 && goto :eof
where py >nul 2>nul && start "" http://127.0.0.1:8848/ && py -m http.server 8848 && goto :eof
echo 没有找到 Python。请直接双击 index.html。
pause
`;

const MAC_OPENER = `#!/bin/bash
cd "$(dirname "$0")"
python3 -m http.server 8848 >/dev/null 2>&1 &
sleep 0.4
open "http://127.0.0.1:8848/"
wait
`;

export async function packSongs(preview: boolean): Promise<StoredSong[]> {
  const courses = await readUserCourses();
  const packed: StoredSong[] = [];
  const root = preview ? "/" : "";
  for (const course of courses) {
    const url = String(course.audioUrl || "");
    const filename = url.startsWith("/audio/") ? path.basename(url) : "";
    let audioPacked = false;
    if (filename) {
      try {
        await readFile(path.join(audioDir, filename));
        audioPacked = true;
      } catch {
        audioPacked = false;
      }
    }
    const lines = Array.isArray(course.lines) ? course.lines : [];
    const songLines = lines as Song["lines"];
    const withWhole = songLines.map((line) => {
      const whole = wholeBlank({ lines: songLines }, line);
      if (!line.cloze) return { ...line, fullText: whole.text };
      return {
        ...line,
        fullText: whole.text,
        cloze: { ...line.cloze, sentenceWithBlank: whole.blank },
      };
    });
    const title = String(course.title || "");
    const moon = /talking to the moon/i.test(title);
    const count = /count on me/i.test(title);
    packed.push({
      ...course,
      lines: withWhole,
      audioUrl: audioPacked ? `${root}audio/${filename}` : "",
      videoUrl: moon ? `${root}mv/moon-fast.mp4` : count ? `${root}mv/count-on-me-fast.mp4` : "",
      videoPoster: moon ? `${root}mv/poster.jpg` : count ? `${root}mv/count-on-me-poster.jpg` : "",
      grammarTheme: focusPoint(course as unknown as Song),
      practiceExample: madeExample(course as unknown as Song),
    });
  }
  return packed;
}

export async function renderStudentHtml(preview: boolean): Promise<string> {
  return renderPlayer(await packSongs(preview), await readDeepseekKey());
}

export async function buildOfflinePackage(): Promise<{ zip: Buffer; songCount: number }> {
  const courses = await readUserCourses();
  const packed = await packSongs(false);
  const files: Array<{ name: string; data: Buffer }> = [];

  for (const course of courses) {
    const url = String(course.audioUrl || "");
    const filename = url.startsWith("/audio/") ? path.basename(url) : "";
    if (!filename) continue;
    try {
      const data = await readFile(path.join(audioDir, filename));
      files.push({ name: `学生包/audio/${filename}`, data });
    } catch {
      // Skip a song file that is not on disk.
    }
  }

  const page = Buffer.from(await renderStudentHtml(false), "utf8");
  const root = "学生包";
  const mvFiles = [
    ["public/mv/moon-fast.mp4", `${root}/mv/moon-fast.mp4`],
    ["public/mv/poster.jpg", `${root}/mv/poster.jpg`],
    ["public/mv/count-on-me-fast.mp4", `${root}/mv/count-on-me-fast.mp4`],
    ["public/mv/count-on-me-poster.jpg", `${root}/mv/count-on-me-poster.jpg`],
  ] as const;
  for (const [from, to] of mvFiles) {
    try {
      files.push({ name: to, data: await readFile(path.join(process.cwd(), from)) });
    } catch {
      // Songs still export if a picture is missing.
    }
  }
  files.unshift(
    { name: `${root}/请先看我.txt`, data: Buffer.from(README, "utf8") },
    {
      name: `${root}/songs.json`,
      data: Buffer.from(JSON.stringify(packed, null, 2) + "\n", "utf8"),
    },
    { name: `${root}/点这里打开.html`, data: page },
    { name: `${root}/index.html`, data: page },
    { name: `${root}/打开学生包.bat`, data: Buffer.from(WINDOWS_OPENER, "utf8") },
    { name: `${root}/打开学生包.command`, data: Buffer.from(MAC_OPENER, "utf8") },
  );

  return { zip: storeZip(files), songCount: packed.length };
}
