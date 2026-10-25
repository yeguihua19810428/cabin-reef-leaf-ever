import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Award, C as Compass, D as CircleAlert, E as CircleCheckBig, O as ChevronRight, S as FileAudio, T as CircleCheck, _ as ListMusic, a as Upload, b as FolderDown, c as SlidersHorizontal, d as Send, f as RotateCcw, g as Music, h as Pause, i as Volume2, k as BookmarkCheck, l as SkipForward, m as Play, n as X, p as Repeat1, r as VolumeX, s as Sparkles, t as Zap, u as SkipBack, v as Lightbulb, w as CircleX, x as FileText, y as FolderUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D6OKTLEJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CURATED_SONGS = [
	{
		id: "count-on-me",
		title: "Count On Me",
		artist: "Bruno Mars",
		year: 2010,
		cefrLevel: "A2",
		genre: "Acoustic Pop / Folk",
		duration: 197,
		grammarTheme: "第一条件句 (If 引导条件状语从句) & 主将从现",
		coverImage: "/src/assets/images/song_cover_friendship_1792579064958.jpg",
		tempoBpm: 88,
		keySignature: "C Major",
		coreSummary: "本歌是学习英语条件状语从句（Conditional Sentences）的绝佳曲目！反复出现的 \"If you ever find yourself..., I'll sail...\" 完美演示了「主将从现」经典法则（主句用将来时 will，条件从句用一般现在时）。唱熟这首歌，条件从句的时态搭配将直接形成肌肉记忆。",
		keyTakeawayPatterns: [
			{
				name: "主将从现条件句 (First Conditional)",
				formula: "If + 主语 + 一般现在时动词..., 主语 + will + 动词原形...",
				exampleInSong: "If you ever find yourself stuck in the middle of the sea, I'll sail the world to find you.",
				dailyExample: "If you need help with your homework, I will come over tonight."
			},
			{
				name: "反身代词作宾语 (Reflexive Pronouns)",
				formula: "find oneself + 状态/形容词/介词短语 (发觉自己不知不觉处于某境地)",
				exampleInSong: "If you ever find yourself lost in the dark...",
				dailyExample: "After hours of walking, I found myself in front of an old bookshop."
			},
			{
				name: "宾语从句与情态动词推测",
				formula: "remind + sb. + of / that 从句 (提醒某人某事)",
				exampleInSong: "I'll be the light to guide you, to remind us of what we are really made of.",
				dailyExample: "Please remind me to send the email before 5 PM."
			}
		],
		poeticLicenseNotes: ["口语弱读与连音：歌词中的 \"I'll sail the world\" 快速连读为 /aɪl seɪl ðə wɜːrld/，will 弱化为单音 'll。", "介词短语节拍：\"in the middle of the sea\" 中的 of 几乎弱读为轻微的 /əv/，重点重音落在 middle 和 sea 上。"],
		lines: [
			{
				id: "com-1",
				startTime: 0,
				endTime: 5.5,
				text: "If you ever find yourself stuck in the middle of the sea",
				translation: "如果你有天发现自己困于汪洋大海之中",
				grammarPoint: "If 条件从句 + find oneself + 过去分词作宾补",
				patternTemplate: "If + S + V(present) + oneself + adj/done...",
				explanation: "【主将从现】If 引导的从句用一般现在时 \"find\" 表示假定的将来可能情况。\"find yourself stuck\" 表示“发现自己被困”，stuck 是过去分词作宾语补足语，表被动与状态。",
				chunks: [
					{
						phrase: "If you ever",
						role: "从属连词引导词",
						posTag: "clause"
					},
					{
						phrase: "find",
						role: "从句谓语动词(现在时)",
						posTag: "predicate"
					},
					{
						phrase: "yourself",
						role: "宾语(反身代词)",
						posTag: "subject"
					},
					{
						phrase: "stuck",
						role: "宾语补足语(过去分词)",
						posTag: "complement"
					},
					{
						phrase: "in the middle of the sea",
						role: "地点状语(介词短语)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "find",
					sentenceWithBlank: "If you ever _____ yourself stuck in the middle of the sea",
					hint: "条件从句中，主句表将来时，从句需用一般现在时（原形/三单）",
					options: [
						"find",
						"will find",
						"found",
						"have found"
					]
				}
			},
			{
				id: "com-2",
				startTime: 5.5,
				endTime: 11,
				text: "I'll sail the world to find you",
				translation: "我定会扬帆航行整座世界去寻找你",
				grammarPoint: "主句一般将来时 will + 不定式 to find you 作目的状语",
				patternTemplate: "主语 + will + V(base) + to do (目的状语)",
				explanation: "对应前面的 If 从句，主句使用了 \"I'll (I will) sail\"，确立经典的「主将从现」结构。后面的 \"to find you\" 是不定式表目的，回答“扬帆为了什么”。",
				chunks: [
					{
						phrase: "I'll (I will)",
						role: "主语 + 将来时助动词",
						posTag: "tense-marker"
					},
					{
						phrase: "sail",
						role: "谓语动词原形",
						posTag: "predicate"
					},
					{
						phrase: "the world",
						role: "宾语",
						posTag: "object"
					},
					{
						phrase: "to find you",
						role: "动词不定式(目的状语)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "I'll",
					sentenceWithBlank: "_____ sail the world to find you",
					hint: "主句需要一般将来时，表达承诺与意愿",
					options: [
						"I'll",
						"I sailed",
						"I sail",
						"I would"
					]
				}
			},
			{
				id: "com-3",
				startTime: 11,
				endTime: 16.5,
				text: "If you ever find yourself lost in the dark and you can't see",
				translation: "如果你有天发现自己迷失于黑暗、眼前一片迷茫",
				grammarPoint: "并列从句 (and) + 情态动词 can't 表达能力",
				patternTemplate: "If + clause 1 + and + clause 2",
				explanation: "连词 and 连接了两个并列的条件从句：一个是 find yourself lost，另一个是 you can't see。情态动词 can't 后面必须紧跟动词原形 see。",
				chunks: [
					{
						phrase: "If you ever find yourself lost in the dark",
						role: "条件状语从句 1",
						posTag: "clause"
					},
					{
						phrase: "and",
						role: "并列连词",
						posTag: "other"
					},
					{
						phrase: "you can't see",
						role: "条件状语从句 2 (情态动词+动词原形)",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "see",
					sentenceWithBlank: "If you ever find yourself lost in the dark and you can't _____",
					hint: "情态动词 can't 后面接动词的什么形式？",
					options: [
						"see",
						"saw",
						"seeing",
						"seen"
					]
				}
			},
			{
				id: "com-4",
				startTime: 16.5,
				endTime: 22,
				text: "I'll be the light to guide you",
				translation: "我愿成为引路之光，照亮你的方向",
				grammarPoint: "主系表结构 (S + Link Verb + Predicative) + 不定式作定语",
				patternTemplate: "S + will be + NP + to do (修饰名词)",
				explanation: "I'll be the light 是典型的主系表将来时。后面的 \"to guide you\" 充当名词 the light 的后置定语（引导你的光），简洁而极富诗意。",
				chunks: [
					{
						phrase: "I'll be",
						role: "主语 + 系动词",
						posTag: "predicate"
					},
					{
						phrase: "the light",
						role: "表语(名词短语)",
						posTag: "complement"
					},
					{
						phrase: "to guide you",
						role: "后置定语(动词不定式)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "to guide",
					sentenceWithBlank: "I'll be the light _____ you",
					hint: "用不定式修饰前面的 light，表示“用来引导你的光”",
					options: [
						"to guide",
						"guiding for",
						"guide",
						"guided"
					]
				}
			},
			{
				id: "com-5",
				startTime: 22,
				endTime: 28.5,
				text: "We find out what we're made of when we are called to help our friends in need",
				translation: "当需要挺身相助落难挚友之时，我们才会发觉自己真正的力量",
				grammarPoint: "find out (查明/发觉) + what 宾语从句 + when 状语从句被动语态 (be called to do)",
				patternTemplate: "S + find out + what clause + when clause",
				explanation: "find out 引导由 what 充当表语的名词性从句；when 引导时间状语从句，\"are called to do\" 是被动语态，表示“被召唤去行善”。",
				chunks: [
					{
						phrase: "We find out",
						role: "主句主谓",
						posTag: "subject"
					},
					{
						phrase: "what we're made of",
						role: "what 引导的宾语从句",
						posTag: "clause"
					},
					{
						phrase: "when we are called to help our friends",
						role: "时间状语从句(含被动)",
						posTag: "clause"
					},
					{
						phrase: "in need",
						role: "介词短语作后置定语 (落难的/急需帮助的)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "called",
					sentenceWithBlank: "when we are _____ to help our friends in need",
					hint: "被动语态结构：be + 动词过去分词",
					options: [
						"called",
						"calling",
						"calls",
						"call"
					]
				}
			},
			{
				id: "com-6",
				startTime: 28.5,
				endTime: 36,
				text: "You can count on me like one, two, three, I'll be there",
				translation: "你可以信赖依靠我，就像数一二三那样简单，我随叫随到",
				grammarPoint: "短语动词 count on + 介词短语 like... 作方式状语",
				patternTemplate: "count on sb. = depend on / rely on (依靠某人)",
				explanation: "count on sb. 是极高频的动词短语。like 在这里作为介词（像...一样），后接名词/代词。整句话旋律朗朗上口，一学就会。",
				chunks: [
					{
						phrase: "You can count on",
						role: "主语 + 情态动词 + 短语动词",
						posTag: "predicate"
					},
					{
						phrase: "me",
						role: "宾语",
						posTag: "object"
					},
					{
						phrase: "like one, two, three",
						role: "方式状语(介词短语)",
						posTag: "adverbial"
					},
					{
						phrase: "I'll be there",
						role: "简短主句(将来时承接)",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "on",
					sentenceWithBlank: "You can count _____ me like one, two, three",
					hint: "搭配动词 count 表示“信赖、依靠”的固定介词",
					options: [
						"on",
						"in",
						"at",
						"with"
					]
				}
			},
			{
				id: "com-7",
				startTime: 36,
				endTime: 44,
				text: "And I know when I need it I can count on you like four, three, two, you'll be there",
				translation: "而且我深知当我有所需要时，也可以信赖依靠你，你定会来到身边",
				grammarPoint: "know + 复合宾语从句 (内嵌 when 条件/时间状语从句)",
				patternTemplate: "I know that + when clause + main clause",
				explanation: "动词 know 后面省略了连词 that，宾语从句内部先出现时间状语从句 \"when I need it\"，再接主干 \"I can count on you\"，句式层次递进。",
				chunks: [
					{
						phrase: "And I know",
						role: "主句谓语动词",
						posTag: "subject"
					},
					{
						phrase: "when I need it",
						role: "宾语从句内的时间状语",
						posTag: "adverbial"
					},
					{
						phrase: "I can count on you",
						role: "宾语从句核心主干",
						posTag: "clause"
					},
					{
						phrase: "you'll be there",
						role: "将来时承诺分句",
						posTag: "predicate"
					}
				],
				cloze: {
					blankWord: "need",
					sentenceWithBlank: "when I _____ it I can count on you like four, three, two",
					hint: "时间从句中的一般现在时动词原形",
					options: [
						"need",
						"needed",
						"will need",
						"needing"
					]
				}
			},
			{
				id: "com-8",
				startTime: 44,
				endTime: 52,
				text: "'Cause that's what friends are supposed to do, oh yeah",
				translation: "因为那本就是知心朋友理应做的事",
				grammarPoint: "be supposed to do (应该/理应) + what 引导的表语从句",
				patternTemplate: "that is + what ... (那就是...的事情) & be supposed to do",
				explanation: "what 引导表语从句，并在从句中担任 do 的宾语。\"be supposed to do sth.\" 意为“按理应当/应该做某事”，是口语中表达约定俗成责任的黄金句型。",
				chunks: [
					{
						phrase: "'Cause (Because)",
						role: "原因从属连词",
						posTag: "other"
					},
					{
						phrase: "that's",
						role: "主语 + 系动词",
						posTag: "predicate"
					},
					{
						phrase: "what friends are supposed to do",
						role: "表语从句",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "supposed",
					sentenceWithBlank: "that's what friends are _____ to do",
					hint: "表示“理应、被期望”的固定搭配 be ______ to",
					options: [
						"supposed",
						"suppose",
						"supposing",
						"supposition"
					]
				}
			},
			{
				id: "com-9",
				startTime: 52,
				endTime: 62,
				text: "If you toss and you turn and you just can't fall asleep",
				translation: "如果你夜里辗转反侧、怎么也无法安然入眠",
				grammarPoint: "连词 and 连接多重动词短语 (toss, turn, fall asleep)",
				patternTemplate: "toss and turn (辗转反侧) & fall asleep (入睡)",
				explanation: "成语动词短语 \"toss and turn\" 意为在床上辗转反侧；\"fall asleep\" 中 asleep 是形容词作表语，fall 是系动词表状态转变。同样遵循条件状语从句一般现在时规则。",
				chunks: [{
					phrase: "If you toss and you turn",
					role: "条件状语从句 1",
					posTag: "clause"
				}, {
					phrase: "and you just can't fall asleep",
					role: "条件状语从句 2 (情态否定)",
					posTag: "clause"
				}],
				cloze: {
					blankWord: "asleep",
					sentenceWithBlank: "you just can't fall _____",
					hint: "表示“进入睡眠状态”的固定形容词搭配 fall ______",
					options: [
						"asleep",
						"sleep",
						"sleeping",
						"sleepy"
					]
				}
			},
			{
				id: "com-10",
				startTime: 62,
				endTime: 70,
				text: "I'll sing a song beside you",
				translation: "我便会在你身旁为你轻唱一首歌",
				grammarPoint: "主句将来时 will + 地点介词短语 beside you",
				patternTemplate: "I will + V + O + beside sb.",
				explanation: "对应前面的 \"If you toss and turn\"，主句再次使用 \"I'll sing\"，强化主将从现结构。beside 是介词，意为“在...身旁”，注意与 besides (除...之外还有) 的拼写区别！",
				chunks: [
					{
						phrase: "I'll sing",
						role: "主句主谓 (将来时 will + 动词原形)",
						posTag: "predicate"
					},
					{
						phrase: "a song",
						role: "宾语",
						posTag: "object"
					},
					{
						phrase: "beside you",
						role: "地点状语 (在...身旁)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "beside",
					sentenceWithBlank: "I'll sing a song _____ you",
					hint: "介词，表示“在某人身旁、在身边”",
					options: [
						"beside",
						"besides",
						"behind",
						"between"
					]
				}
			},
			{
				id: "com-11",
				startTime: 70,
				endTime: 80,
				text: "And if you ever forget how much you really mean to me",
				translation: "如果你有天淡忘了你在我生命中究竟有多么重要",
				grammarPoint: "forget + how much 疑问副词引导的名词性宾语从句 + mean to sb.",
				patternTemplate: "how much + S + mean to sb. (对某人有多重要)",
				explanation: "mean to sb. 表示“对某人而言具有某种意义/重要性”；how much 在从句中充当程度状语，整句作为 forget 的宾语从句。",
				chunks: [
					{
						phrase: "And if you ever forget",
						role: "条件状语引导词与谓语",
						posTag: "clause"
					},
					{
						phrase: "how much you really mean",
						role: "宾语从句核心",
						posTag: "object"
					},
					{
						phrase: "to me",
						role: "介词短语 (对...而言)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "mean",
					sentenceWithBlank: "how much you really _____ to me",
					hint: "动词原形，搭配 to 表示“对某人重要/有意义”",
					options: [
						"mean",
						"meaning",
						"meant",
						"means"
					]
				}
			},
			{
				id: "com-12",
				startTime: 80,
				endTime: 88,
				text: "Every day I will remind you",
				translation: "每一天我都会温柔地提醒你",
				grammarPoint: "时间状语置于句首 (Every day) + 将来时 will remind",
				patternTemplate: "remind sb. (提醒某人)",
				explanation: "Every day 作为时间状语提至句首，强调持久恒常的关怀。主句使用 will remind，与前面的条件从句形成呼应。",
				chunks: [
					{
						phrase: "Every day",
						role: "时间状语",
						posTag: "adverbial"
					},
					{
						phrase: "I will remind",
						role: "主句主谓 (将来时)",
						posTag: "predicate"
					},
					{
						phrase: "you",
						role: "宾语",
						posTag: "object"
					}
				],
				cloze: {
					blankWord: "remind",
					sentenceWithBlank: "Every day I will _____ you",
					hint: "助动词 will 后面搭配动词的哪种形态？",
					options: [
						"remind",
						"reminds",
						"reminded",
						"reminding"
					]
				}
			},
			{
				id: "com-13",
				startTime: 88,
				endTime: 100,
				text: "You'll always have my shoulder when you cry",
				translation: "当你哭泣时，我的肩膀永远为你守候借你依靠",
				grammarPoint: "频度副词 always 位置 (will + always + have) + when 时间状语从句",
				patternTemplate: "S + will always have + NP + when clause",
				explanation: "频度副词 always 位于助动词 will 与行为动词 have 之间；when you cry 是典型的时间状语从句，从句使用一般现在时 cry。",
				chunks: [
					{
						phrase: "You'll always have",
						role: "主谓结构 (助动词+频度副词+动词)",
						posTag: "predicate"
					},
					{
						phrase: "my shoulder",
						role: "宾语",
						posTag: "object"
					},
					{
						phrase: "when you cry",
						role: "时间状语从句",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "when",
					sentenceWithBlank: "You'll always have my shoulder _____ you cry",
					hint: "引导时间状语从句，表示“当...的时候”",
					options: [
						"when",
						"why",
						"what",
						"which"
					]
				}
			},
			{
				id: "com-14",
				startTime: 100,
				endTime: 115,
				text: "I'll never let go, never say goodbye, you know you can count on me",
				translation: "我绝不会松手放开，绝不说再见，你知道你可以永远依赖我",
				grammarPoint: "否定副词 never 并列 (never let go, never say goodbye)",
				patternTemplate: "I will never + do 1, never + do 2",
				explanation: "否定副词 never 强化了坚定的承诺，后面紧跟两个动词原形 let go 和 say goodbye；最后以主谓宾从句 \"you know you can count on me\" 圆满收尾。",
				chunks: [
					{
						phrase: "I'll never let go",
						role: "将来时否定动词短语 1",
						posTag: "predicate"
					},
					{
						phrase: "never say goodbye",
						role: "并列否定短语 2",
						posTag: "predicate"
					},
					{
						phrase: "you know you can count on me",
						role: "主句与宾语从句收束",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "count",
					sentenceWithBlank: "you know you can _____ on me",
					hint: "情态动词 can 后面接动词短语 count on",
					options: [
						"count",
						"counting",
						"counted",
						"counts"
					]
				}
			}
		]
	},
	{
		id: "if-i-were-a-boy",
		title: "If I Were A Boy",
		artist: "Beyoncé",
		year: 2008,
		cefrLevel: "B1",
		genre: "R&B / Ballad",
		duration: 250,
		grammarTheme: "与现在事实相反的虚拟语气 (Second Conditional / Subjunctive)",
		coverImage: "/src/assets/images/song_cover_reflection_1792579064958.jpg",
		tempoBpm: 90,
		keySignature: "F# Minor",
		coreSummary: "英语教学中最经典的「虚拟语气教材」！许多学生经常疑惑：“主语明明是单数 I，为什么谓语用 were 而不是 was？” 这首歌给出了最佳答案：对现在事实的假设与愿望，be 动词一律用 were，主句搭配 would/could/might + 动词原形。",
		keyTakeawayPatterns: [
			{
				name: "第二条件句·虚拟语气 (Subjunctive Mood)",
				formula: "If + 主语 + were / 动词过去式, 主语 + would/could + 动词原形",
				exampleInSong: "If I were a boy, I think I could understand how it feels to love a girl.",
				dailyExample: "If I were you, I would take that job offer immediately."
			},
			{
				name: "宾语从句与感官动词",
				formula: "understand + how 从句 (理解...是怎样的感受)",
				exampleInSong: "I could understand how it feels to love a girl.",
				dailyExample: "You will never know how it feels until you try."
			},
			{
				name: "情态动词过去式表假设推论",
				formula: "would + do (就会...)",
				exampleInSong: "I'd listen to her, 'cause I know how it hurts.",
				dailyExample: "I'd help you if I had more spare time."
			}
		],
		poeticLicenseNotes: ["I'd 的还原：歌词中反复出现的 \"I'd\" 均是 \"I would\" 的紧缩缩写形式，而非 \"I had\"。", "日常口语中的 was vs were：在非常随意口语中部分母语者会说 \"If I was\"，但在中高考、雅思托福及规范语法中，必须使用标准虚拟形式 \"If I were\"！"],
		lines: [
			{
				id: "boy-1",
				startTime: 0,
				endTime: 6,
				text: "If I were a boy, even just for a day",
				translation: "如果我能化身为男生，哪怕仅仅只有一天",
				grammarPoint: "与现在事实相反的虚拟条件句 (be 动词统一使用 were)",
				patternTemplate: "If + I + were + N (虚拟假设)",
				explanation: "【虚拟语气核心】歌手 Beyoncé 本身是女性，因此“如果我是男生”完全与事实相反。在英语语法中，与现在事实相反的虚拟条件句，be 动词无论人称均使用 were！",
				chunks: [{
					phrase: "If I were a boy",
					role: "虚拟条件状语从句",
					posTag: "clause"
				}, {
					phrase: "even just for a day",
					role: "让步程度状语(介词短语)",
					posTag: "adverbial"
				}],
				cloze: {
					blankWord: "were",
					sentenceWithBlank: "If I _____ a boy, even just for a day",
					hint: "在标准英语虚拟语气中，与现在事实相反的 be 动词形式",
					options: [
						"were",
						"am",
						"was",
						"will be"
					]
				}
			},
			{
				id: "boy-2",
				startTime: 6,
				endTime: 12,
				text: "I’d roll out of bed in the morning and throw on what I wanted and go",
				translation: "我早晨就能随意翻身起床，套上想穿的衣服拔腿就走",
				grammarPoint: "I'd (I would) + 动词原形并列 (roll, throw, go)",
				patternTemplate: "I'd (I would) + do 1 + and + do 2 + and + do 3",
				explanation: "I'd 是 I would 的缩写，表示虚拟推想中的设想行动。连词 and 串联了三个动词原形：roll out of bed, throw on ..., go。此外 \"what I wanted\" 是宾语从句作 throw on 的宾语。",
				chunks: [
					{
						phrase: "I'd roll out of bed",
						role: "主句主干 1 (would + 动词短语)",
						posTag: "predicate"
					},
					{
						phrase: "in the morning",
						role: "时间状语",
						posTag: "adverbial"
					},
					{
						phrase: "and throw on what I wanted",
						role: "并列主干 2 (含宾语从句)",
						posTag: "object"
					},
					{
						phrase: "and go",
						role: "并列动词 3",
						posTag: "predicate"
					}
				],
				cloze: {
					blankWord: "I'd",
					sentenceWithBlank: "_____ roll out of bed in the morning and throw on what I wanted",
					hint: "虚拟语气的主句，搭配情态动词 would 的缩写形式",
					options: [
						"I'd",
						"I'll",
						"I've",
						"I'm"
					]
				}
			},
			{
				id: "boy-3",
				startTime: 12,
				endTime: 18.5,
				text: "I think I could understand how it feels to love a girl",
				translation: "我想我便能够理解，爱上一个女孩究竟是怎样的心绪",
				grammarPoint: "情态动词 could (could understand) + how 引导的宾语从句 + it 形式主语",
				patternTemplate: "S + understand + how it feels to do sth.",
				explanation: "how it feels to love a girl 中，it 是形式主语，真正的主语是后面的动词不定式 \"to love a girl\"（爱一个女孩这种体验感觉如何）。结构层次严谨精妙！",
				chunks: [
					{
						phrase: "I think",
						role: "主句主谓(陈述态度)",
						posTag: "subject"
					},
					{
						phrase: "I could understand",
						role: "宾语从句主干(情态虚拟推断)",
						posTag: "predicate"
					},
					{
						phrase: "how it feels",
						role: "疑问从句(it 作形式主语)",
						posTag: "clause"
					},
					{
						phrase: "to love a girl",
						role: "动词不定式(真正的主语)",
						posTag: "subject"
					}
				],
				cloze: {
					blankWord: "could",
					sentenceWithBlank: "I think I _____ understand how it feels to love a girl",
					hint: "在虚拟语境中，can 需变成过去式 could 表假设能力",
					options: [
						"could",
						"can",
						"shall",
						"am able to"
					]
				}
			},
			{
				id: "boy-4",
				startTime: 18.5,
				endTime: 26,
				text: "I'd listen to her, 'cause I know how it hurts",
				translation: "我会耐心地倾听她，因为我深知被忽视是多么疼痛",
				grammarPoint: "would + do + 'cause 原因状语从句",
				patternTemplate: "I'd do sth. because I know how...",
				explanation: "前句 \"I'd listen to her\" 依旧延续虚拟语气（如果我是男生，我就会...）。后半句 'cause (because) 引出原因，用一般现在时 \"I know how it hurts\" 说明客观感受。",
				chunks: [
					{
						phrase: "I'd listen to",
						role: "主句谓语 (would + listen to 短语)",
						posTag: "predicate"
					},
					{
						phrase: "her",
						role: "宾语",
						posTag: "object"
					},
					{
						phrase: "'cause I know how it hurts",
						role: "原因状语从句(包含宾语从句)",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "hurts",
					sentenceWithBlank: "'cause I know how it _____",
					hint: "宾语从句中，主语 it 为第三人称单数，一般现在时动词需加 -s",
					options: [
						"hurts",
						"hurt",
						"hurting",
						"hurten"
					]
				}
			}
		]
	},
	{
		id: "lemon-tree",
		title: "Lemon Tree",
		artist: "Fools Garden",
		year: 1995,
		cefrLevel: "A2",
		genre: "Britpop / Acoustic Pop",
		duration: 198,
		grammarTheme: "现在进行时 (Present Continuous) vs 静态动词与频率副词",
		coverImage: "/src/assets/images/song_cover_lemon_groves_1792579064539.jpg",
		tempoBpm: 142,
		keySignature: "E Minor / G Major",
		coreSummary: "风靡全球的轻快金曲，是教学「现在进行时 (be + doing)」的不二之选！整首歌巧妙交替了描述当下动作的进行时（I'm sitting, I'm waiting, I'm driving, I'm hanging）与描述客观无聊状态的一般现在时（nothing ever happens），节奏鲜明，学生极易跟唱掌握。",
		keyTakeawayPatterns: [
			{
				name: "现在进行时表示当下正在发生的动作",
				formula: "主语 + am/is/are + 动词-ing + 状语",
				exampleInSong: "I'm sitting here in a boring room; I'm waiting for you.",
				dailyExample: "I'm studying English in my bedroom right now."
			},
			{
				name: "否定不定代词与单数动词搭配",
				formula: "nothing + 单数动词 (nothing ever happens)",
				exampleInSong: "And wonder, wonder, but nothing ever happens and I wonder.",
				dailyExample: "Nothing changes if nothing changes."
			},
			{
				name: "感叹句与方式副词",
				formula: "too + 形容词 / 副词 + to do (太...而致使/太快)",
				exampleInSong: "I'm driving too fast, I'm driving too far.",
				dailyExample: "You are speaking too fast for me to follow."
			}
		],
		poeticLicenseNotes: ["口语中 -ing 词尾的弱化：在流行歌中，\"sitting\", \"waiting\" 常常唱作 \"sittin'\", \"waitin'\"，不发鼻音尾音 /ŋ/，而是发 /n/。", "重复与强调：wonder 的多次重复形成了副歌的标志性记忆点，表达了内心的困惑。"],
		lines: [
			{
				id: "lemon-1",
				startTime: 0,
				endTime: 6,
				text: "I'm sitting here in a boring room",
				translation: "我正孤单地坐在这个无聊的房间里",
				grammarPoint: "现在进行时 (be + doing) + 地点状语",
				patternTemplate: "S + am/is/are + sitting + here/there...",
				explanation: "现在进行时的标准公式：主语 I 搭配系动词 am，sit 双写 t 再加 ing 变成 sitting。用于生动勾勒出歌手此时此刻正在进行的动作。",
				chunks: [
					{
						phrase: "I'm",
						role: "主语 + 助动词 am",
						posTag: "tense-marker"
					},
					{
						phrase: "sitting",
						role: "现在分词(谓语核心)",
						posTag: "predicate"
					},
					{
						phrase: "here",
						role: "地点副词",
						posTag: "adverbial"
					},
					{
						phrase: "in a boring room",
						role: "介词短语(地点状语)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "sitting",
					sentenceWithBlank: "I'm _____ here in a boring room",
					hint: "动词 sit 变现在分词时的拼写规则（辅音字母双写加 ing）",
					options: [
						"sitting",
						"siting",
						"sit",
						"sitted"
					]
				}
			},
			{
				id: "lemon-2",
				startTime: 6,
				endTime: 11.5,
				text: "It's just another rainy Sunday afternoon",
				translation: "这不过又是一个阴雨绵绵的周日下午",
				grammarPoint: "It 代指天气/时间 + another 修饰单数名词",
				patternTemplate: "It's + (just) + another + adj. + time/noun",
				explanation: "英语中表示天气、时间、距离时，常用无人称代词 it 作形式主语。\"another\" 用于修饰单数可数名词 Sunday afternoon，表示“又一个”。",
				chunks: [{
					phrase: "It's",
					role: "主语(指代时间) + 系动词 is",
					posTag: "predicate"
				}, {
					phrase: "just another rainy Sunday afternoon",
					role: "表语(名词短语)",
					posTag: "complement"
				}],
				cloze: {
					blankWord: "another",
					sentenceWithBlank: "It's just _____ rainy Sunday afternoon",
					hint: "修饰单数名词表示“另一个、又一个”的限定词",
					options: [
						"another",
						"other",
						"others",
						"the other"
					]
				}
			},
			{
				id: "lemon-3",
				startTime: 11.5,
				endTime: 17,
				text: "I'm wasting my time, I got nothing to do",
				translation: "我正虚度着光阴，无所事事",
				grammarPoint: "现在进行时 + 动词不定式 to do 作后置定语修饰 nothing",
				patternTemplate: "have/got + nothing + to do (无事可做)",
				explanation: "\"wasting my time\" 同样是现在进行时。后半句 \"nothing to do\" 中，动词不定式 to do 紧跟在不定代词 nothing 之后作后置定语，表示“可以做的事情”。口语中 I got 常等同于 I have。",
				chunks: [
					{
						phrase: "I'm wasting my time",
						role: "现在进行时分句",
						posTag: "clause"
					},
					{
						phrase: "I got nothing",
						role: "并列从句 (got = have)",
						posTag: "predicate"
					},
					{
						phrase: "to do",
						role: "不定式作后置定语(修饰 nothing)",
						posTag: "complement"
					}
				],
				cloze: {
					blankWord: "wasting",
					sentenceWithBlank: "I'm _____ my time, I got nothing to do",
					hint: "动词 waste（去 e 加 ing）的现在分词形式",
					options: [
						"wasting",
						"waste",
						"wasted",
						"wasting of"
					]
				}
			},
			{
				id: "lemon-4",
				startTime: 17,
				endTime: 23.5,
				text: "I'm hanging around, I'm waiting for you",
				translation: "我四处闲逛游荡，一直苦苦等待着你",
				grammarPoint: "短语动词 hang around (闲荡) & wait for sb. (等候某人)",
				patternTemplate: "wait for sb./sth. (不及物动词需加介词 for)",
				explanation: "wait 是不及物动词，如果要加宾语（等待某人或某事），必须带上介词 for！这首歌连续唱出 \"waiting for you\"，帮助学生彻底消除漏掉 for 的常见错误。",
				chunks: [
					{
						phrase: "I'm hanging around",
						role: "现在进行时 1 (短语动词)",
						posTag: "predicate"
					},
					{
						phrase: "I'm waiting for",
						role: "现在进行时 2 (及物介词短语)",
						posTag: "predicate"
					},
					{
						phrase: "you",
						role: "代词宾语",
						posTag: "object"
					}
				],
				cloze: {
					blankWord: "for",
					sentenceWithBlank: "I'm hanging around, I'm waiting _____ you",
					hint: "动词 wait 接宾语时不可或缺的介词",
					options: [
						"for",
						"to",
						"at",
						"with"
					]
				}
			},
			{
				id: "lemon-5",
				startTime: 23.5,
				endTime: 31,
				text: "But nothing ever happens, and I wonder",
				translation: "可生活依然波澜不惊，我陷入了茫然思索",
				grammarPoint: "不定代词 nothing 作主语时的谓语动词单复数 (happens)",
				patternTemplate: "nothing + V-(s/es) (单数第三人称规则)",
				explanation: "【高频易错考点】复合不定代词 (nothing, something, everyone) 作主语时，谓语动词必须使用第三人称单数形式，因此是 \"happens\" 而非 happen！",
				chunks: [
					{
						phrase: "But",
						role: "转折连词",
						posTag: "other"
					},
					{
						phrase: "nothing",
						role: "主语(不定代词)",
						posTag: "subject"
					},
					{
						phrase: "ever",
						role: "频度副词",
						posTag: "adverbial"
					},
					{
						phrase: "happens",
						role: "谓语动词(三单形式)",
						posTag: "predicate"
					},
					{
						phrase: "and I wonder",
						role: "并列主谓句",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "happens",
					sentenceWithBlank: "But nothing ever _____, and I wonder",
					hint: "复合不定代词 nothing 作主语时，谓语动词要用单数还是复数？",
					options: [
						"happens",
						"happen",
						"happening",
						"happened"
					]
				}
			}
		]
	},
	{
		id: "someone-like-you",
		title: "Someone Like You",
		artist: "Adele",
		year: 2011,
		cefrLevel: "B1",
		genre: "Soul / Piano Pop",
		duration: 285,
		grammarTheme: "现在完成时 (Present Perfect) vs 一般过去时 & Wish 虚拟愿望",
		coverImage: "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
		tempoBpm: 67,
		keySignature: "A Major",
		coreSummary: "深情动人的灵魂乐，饱含极具辨识度的过去与现在时态对比。歌词从听到前任安顿下来的消息（I heard that you're settled down），到回溯旧日时光，再到经典的副歌承诺 \"Never mind, I'll find someone like you\"，层层递进，语法逻辑清晰细腻。",
		keyTakeawayPatterns: [
			{
				name: "宾语从句的时态呼应与状态表达",
				formula: "hear + that 从句 (听说/得知某事)",
				exampleInSong: "I heard that you're settled down, that you found a girl and you're married now.",
				dailyExample: "I heard that they are opening a new branch in Tokyo."
			},
			{
				name: "Wish 虚拟语气表达对当下的善意祈愿",
				formula: "wish + sb. + nothing but + the best (祝愿某人一切都好)",
				exampleInSong: "I wish nothing but the best for you, too.",
				dailyExample: "We wish you nothing but happiness in your new journey."
			},
			{
				name: "不定代词 + 后置形容词/介词修饰",
				formula: "someone + like you (像你一样的人，like 作介词后置修饰)",
				exampleInSong: "Never mind, I'll find someone like you.",
				dailyExample: "I need someone like you to help organize this project."
			}
		],
		poeticLicenseNotes: ["沉静的钢琴慢歌韵律：慢板抒情歌是练习英语连读与辅音失爆的绝好素材。例如 \"settled down\" 中 /d/ 与 /d/ 顺畅合并。", "介词 like 的多功能：此处 like 为介词（例如 someone like you），切忌与动词 like（喜欢）混淆。"],
		lines: [
			{
				id: "sly-1",
				startTime: 0,
				endTime: 6.5,
				text: "I heard that you're settled down",
				translation: "我听说你已经安定了下来",
				grammarPoint: "heard + that 引导的宾语从句 + settle down 动词短语",
				patternTemplate: "I heard that + S + be + settled down",
				explanation: "heard 是一般过去时，表示过去听闻的消息；从句 \"that you're settled down\" 中，settled 是形容词化过去分词，表示已进入安稳成家的生活状态。",
				chunks: [{
					phrase: "I heard",
					role: "主句主谓 (一般过去时)",
					posTag: "predicate"
				}, {
					phrase: "that you're settled down",
					role: "that 引导的宾语从句",
					posTag: "clause"
				}],
				cloze: {
					blankWord: "settled",
					sentenceWithBlank: "I heard that you're _____ down",
					hint: "动词短语 settle down（安顿成家）的过去分词作表语",
					options: [
						"settled",
						"settle",
						"settling",
						"settlement"
					]
				}
			},
			{
				id: "sly-2",
				startTime: 6.5,
				endTime: 12,
				text: "That you found a girl and you're married now",
				translation: "听说你觅得了意中人，如今已结为连理",
				grammarPoint: "并列宾语从句 + 一般过去时 (found) 与现在进行状态 (are married now) 对照",
				patternTemplate: "that you found (过去动作) and you are married (现在的状态)",
				explanation: "found 表示过去完成的瞬间动作（找到了女孩），而 are married now 则用一般现在时陈述当下的婚姻状态。时态对照极富层次感。",
				chunks: [
					{
						phrase: "That you found a girl",
						role: "并列宾语从句 1 (一般过去时)",
						posTag: "clause"
					},
					{
						phrase: "and",
						role: "并列连词",
						posTag: "other"
					},
					{
						phrase: "you're married now",
						role: "并列宾语从句 2 (现在系表结构)",
						posTag: "clause"
					}
				],
				cloze: {
					blankWord: "found",
					sentenceWithBlank: "That you _____ a girl and you're married now",
					hint: "动词 find（找到）的不规则过去式",
					options: [
						"found",
						"finded",
						"find",
						"founded"
					]
				}
			},
			{
				id: "sly-3",
				startTime: 12,
				endTime: 18.5,
				text: "Never mind, I'll find someone like you",
				translation: "没关系，我终会找到一个像你一样的人",
				grammarPoint: "祈使短语 Never mind + 将来时 will find + like 作介词后置修饰 someone",
				patternTemplate: "I'll find someone like sb. (像某人一样的某人)",
				explanation: "Never mind 是极高频口语，意为“没关系/不用介意”。\"someone like you\" 中，like 是介词（像...一样），置于不定代词 someone 之后作后置定语。",
				chunks: [
					{
						phrase: "Never mind",
						role: "独立口语惯用祈使句",
						posTag: "adverbial"
					},
					{
						phrase: "I'll find",
						role: "主句主谓 (一般将来时)",
						posTag: "predicate"
					},
					{
						phrase: "someone like you",
						role: "宾语 (不定代词 + 介词短语定语)",
						posTag: "object"
					}
				],
				cloze: {
					blankWord: "like",
					sentenceWithBlank: "Never mind, I'll find someone _____ you",
					hint: "介词，表示“像...一样”",
					options: [
						"like",
						"as",
						"same",
						"alike"
					]
				}
			},
			{
				id: "sly-4",
				startTime: 18.5,
				endTime: 26,
				text: "I wish nothing but the best for you, too",
				translation: "我也由衷祝福你一切都好",
				grammarPoint: "wish + 双宾语/介词短语 + nothing but (仅仅/只有)",
				patternTemplate: "wish + nothing but + the best for sb.",
				explanation: "nothing but 是极其地道的固定短语，意为“除...之外什么也没有”即“唯有/只有”。\"the best\" 在这里代指所有美好的事物。",
				chunks: [
					{
						phrase: "I wish",
						role: "主句主谓",
						posTag: "subject"
					},
					{
						phrase: "nothing but the best",
						role: "直接宾语 (nothing but = only)",
						posTag: "object"
					},
					{
						phrase: "for you, too",
						role: "介词短语(对象状语)",
						posTag: "adverbial"
					}
				],
				cloze: {
					blankWord: "nothing",
					sentenceWithBlank: "I wish _____ but the best for you, too",
					hint: "搭配 but 表示“唯有、除了...什么都没有”的代词",
					options: [
						"nothing",
						"anything",
						"something",
						"everything"
					]
				}
			}
		]
	},
	{
		id: "fix-you",
		title: "Fix You",
		artist: "Coldplay",
		year: 2005,
		cefrLevel: "B1",
		genre: "Alternative Rock / Anthem",
		duration: 295,
		grammarTheme: "时间与让步状语从句 (When... but...) & 并列句",
		coverImage: "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
		tempoBpm: 69,
		keySignature: "Eb Major",
		coreSummary: "酷玩乐队最治愈的心灵之作。歌词开篇连用三个 \"When you try your best, but you don't succeed\" 句式，将时间状语与转折让步融合得淋漓尽致，堪称讲授状语复合句与并列转折连词（but）的范本。",
		keyTakeawayPatterns: [{
			name: "When 引导时间与对比复合句",
			formula: "When + 从句 1, but + 从句 2 (当你尽了全力，却未能...)",
			exampleInSong: "When you try your best, but you don't succeed.",
			dailyExample: "When you study hard, but you still make mistakes."
		}, {
			name: "What 引导名词性从句作宾语",
			formula: "get what you want / need",
			exampleInSong: "When you get what you want, but not what you need.",
			dailyExample: "Sometimes what you need is just a good rest."
		}],
		poeticLicenseNotes: ["并列省略：\"but not what you need\" 省略了主谓语 \"you do not get\"，使语气更加紧凑有力。"],
		lines: [
			{
				id: "fy-1",
				startTime: 0,
				endTime: 6,
				text: "When you try your best, but you don't succeed",
				translation: "当你已经竭尽全力，却依然未获成功",
				grammarPoint: "When 引导时间复合句 + 转折连词 but + try one's best 短语",
				patternTemplate: "When you try your best, but...",
				explanation: "try one's best 是经典动词短语。从句通过 but 形成强烈的逻辑转折，一般现在时表示一种常态或普遍的人生境遇。",
				chunks: [
					{
						phrase: "When you try your best",
						role: "时间状语从句",
						posTag: "clause"
					},
					{
						phrase: "but",
						role: "转折并列连词",
						posTag: "other"
					},
					{
						phrase: "you don't succeed",
						role: "并列转折分句",
						posTag: "predicate"
					}
				],
				cloze: {
					blankWord: "succeed",
					sentenceWithBlank: "When you try your best, but you don't _____",
					hint: "助动词 don't 后面接动词原形（注意名词 success 与动词 succeed 区别）",
					options: [
						"succeed",
						"success",
						"successful",
						"successfully"
					]
				}
			},
			{
				id: "fy-2",
				startTime: 6,
				endTime: 12,
				text: "When you get what you want, but not what you need",
				translation: "当你得到了渴望的一切，却发现并非心之所向",
				grammarPoint: "what 引导的宾语从句 + 结构并列与省略",
				patternTemplate: "get + what 从句 (得到...的东西)",
				explanation: "what 相当于 the thing that，在从句中充当 want 和 need 的宾语。\"not what you need\" 是省略结构，完整表达为 \"but you do not get what you need\"。",
				chunks: [
					{
						phrase: "When you get",
						role: "时间从句主谓",
						posTag: "clause"
					},
					{
						phrase: "what you want",
						role: "what 宾语从句 1",
						posTag: "object"
					},
					{
						phrase: "but not",
						role: "转折连词 + 否定副词",
						posTag: "other"
					},
					{
						phrase: "what you need",
						role: "what 宾语从句 2 (并列承接)",
						posTag: "object"
					}
				],
				cloze: {
					blankWord: "what",
					sentenceWithBlank: "When you get _____ you want, but not _____ you need",
					hint: "连接代词，兼具引导从句并在从句中作宾语的功能（相当于 the thing that）",
					options: [
						"what",
						"that",
						"which",
						"whom"
					]
				}
			},
			{
				id: "fy-3",
				startTime: 12,
				endTime: 18,
				text: "Lights will guide you home and ignite your bones",
				translation: "漫天微光会指引你归家的方向，重新点燃你疲惫的心骨",
				grammarPoint: "will + 并列动词原形 (guide, ignite)",
				patternTemplate: "S + will + V1 + O1 + and + V2 + O2",
				explanation: "将来时助动词 will 同时管辖两个谓语动词原形：guide you home 与 ignite your bones。home 在这里作副词表示“向家/回家”。",
				chunks: [
					{
						phrase: "Lights",
						role: "主语 (名词复数)",
						posTag: "subject"
					},
					{
						phrase: "will guide",
						role: "将来时谓语 1",
						posTag: "predicate"
					},
					{
						phrase: "you home",
						role: "宾语 + 目的副词",
						posTag: "object"
					},
					{
						phrase: "and ignite",
						role: "并列谓语 2 (will 共享)",
						posTag: "predicate"
					},
					{
						phrase: "your bones",
						role: "宾语 2",
						posTag: "object"
					}
				],
				cloze: {
					blankWord: "guide",
					sentenceWithBlank: "Lights will _____ you home and ignite your bones",
					hint: "助动词 will 后面跟动词的哪种形态？",
					options: [
						"guide",
						"guided",
						"guiding",
						"guides"
					]
				}
			},
			{
				id: "fy-4",
				startTime: 18,
				endTime: 24,
				text: "And I will try to fix you",
				translation: "而我，愿倾尽所有抚平你的创伤",
				grammarPoint: "try to do (努力/设法做某事) vs try doing (尝试某种做法)",
				patternTemplate: "try + to do (尽力做) vs try + doing (尝试一下)",
				explanation: "【经典语法辨析】try to do 强调付出努力、想方设法去克服困难达成目标；而 try doing 则强调试验某种方法。此处选用 \"try to fix you\"，表达了最深沉的关怀与坚定承诺。",
				chunks: [
					{
						phrase: "And I will",
						role: "主语 + 将来时助动词",
						posTag: "tense-marker"
					},
					{
						phrase: "try to fix",
						role: "谓语动词 + 不定式短语",
						posTag: "predicate"
					},
					{
						phrase: "you",
						role: "宾语",
						posTag: "object"
					}
				],
				cloze: {
					blankWord: "to fix",
					sentenceWithBlank: "And I will try _____ you",
					hint: "表示“尽力去抚慰、修复”，接不定式还是动名词？",
					options: [
						"to fix",
						"fixing",
						"fix",
						"fixed"
					]
				}
			}
		]
	}
];
/**
* Unified Audio Engine:
* - Plays real uploaded MP3 / audio files via HTMLAudioElement with millisecond synchronization.
* - Falls back to Web Audio API chord synthesis and Web Speech vocal guide if no MP3 is supplied.
*/
var LyricAudioEngine = class {
	audioCtx = null;
	realAudio = null;
	isPlaying = false;
	currentTime = 0;
	duration = 30;
	playbackRate = 1;
	vocalGuideEnabled = false;
	chordInterval = null;
	timeUpdateInterval = null;
	onTimeUpdateCallback = null;
	onDurationChangeCallback = null;
	onEndedCallback = null;
	keySignature = "C Major";
	currentLines = [];
	lastSpokenLineIndex = -1;
	loopLineIndex = null;
	hasRealAudio = false;
	constructor() {
		this.realAudio = new Audio();
		this.realAudio.preload = "auto";
		const handleDuration = () => {
			if (this.realAudio && Number.isFinite(this.realAudio.duration) && this.realAudio.duration > 0) {
				this.duration = this.realAudio.duration;
				if (this.onDurationChangeCallback) this.onDurationChangeCallback(this.duration);
				if (this.onTimeUpdateCallback) this.onTimeUpdateCallback(this.currentTime, this.duration);
			}
		};
		this.realAudio.addEventListener("loadedmetadata", handleDuration);
		this.realAudio.addEventListener("durationchange", handleDuration);
		this.realAudio.addEventListener("canplay", handleDuration);
		this.realAudio.addEventListener("canplaythrough", handleDuration);
		this.realAudio.addEventListener("play", handleDuration);
		this.realAudio.addEventListener("progress", handleDuration);
		this.realAudio.addEventListener("timeupdate", () => {
			if (!this.hasRealAudio) return;
			this.currentTime = this.realAudio.currentTime;
			if (Number.isFinite(this.realAudio.duration) && this.realAudio.duration > 0) {
				if (Math.abs(this.duration - this.realAudio.duration) > .5) {
					this.duration = this.realAudio.duration;
					if (this.onDurationChangeCallback) this.onDurationChangeCallback(this.duration);
				}
			}
			if (this.loopLineIndex !== null && this.currentLines[this.loopLineIndex]) {
				const loopLine = this.currentLines[this.loopLineIndex];
				if (this.currentTime >= loopLine.endTime) {
					this.realAudio.currentTime = loopLine.startTime;
					this.currentTime = loopLine.startTime;
				}
			}
			if (this.onTimeUpdateCallback) this.onTimeUpdateCallback(this.currentTime, this.duration);
		});
		this.realAudio.addEventListener("ended", () => {
			this.isPlaying = false;
			if (this.onEndedCallback) this.onEndedCallback();
		});
	}
	initAudioContext() {
		if (!this.audioCtx) {
			const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
			this.audioCtx = new AudioCtxClass();
		}
		if (this.audioCtx.state === "suspended") this.audioCtx.resume();
	}
	setSong(song) {
		this.stop();
		this.keySignature = song.keySignature || "C Major";
		this.currentLines = song.lines;
		const lastLine = song.lines[song.lines.length - 1];
		const estimatedDuration = song.duration || (lastLine ? Math.max(lastLine.endTime + 2, 60) : 180);
		this.duration = estimatedDuration;
		this.currentTime = 0;
		this.lastSpokenLineIndex = -1;
		this.loopLineIndex = null;
		if (song.audioUrl && this.realAudio) {
			this.hasRealAudio = true;
			this.realAudio.src = song.audioUrl;
			this.realAudio.playbackRate = this.playbackRate;
			this.realAudio.load();
			this.vocalGuideEnabled = false;
			if (Number.isFinite(this.realAudio.duration) && this.realAudio.duration > 0) this.duration = this.realAudio.duration;
		} else {
			this.hasRealAudio = false;
			if (this.realAudio) this.realAudio.src = "";
			this.vocalGuideEnabled = true;
		}
		if (this.onDurationChangeCallback) this.onDurationChangeCallback(this.duration);
		if (this.onTimeUpdateCallback) this.onTimeUpdateCallback(0, this.duration);
	}
	setPlaybackRate(rate) {
		this.playbackRate = rate;
		if (this.realAudio && this.hasRealAudio) this.realAudio.playbackRate = rate;
	}
	setVocalGuide(enabled) {
		this.vocalGuideEnabled = enabled;
		if (!enabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
	}
	setLoopLine(index) {
		this.loopLineIndex = index;
		if (index !== null && this.currentLines[index]) this.seek(this.currentLines[index].startTime);
	}
	play() {
		this.isPlaying = true;
		if (this.hasRealAudio && this.realAudio) {
			this.realAudio.playbackRate = this.playbackRate;
			this.realAudio.play().catch((err) => {
				console.warn("Real audio playback interrupted:", err);
			});
			return;
		}
		this.initAudioContext();
		this.startChordAccompaniment();
		const stepMs = 50;
		this.timeUpdateInterval = window.setInterval(() => {
			if (!this.isPlaying) return;
			this.currentTime += stepMs / 1e3 * this.playbackRate;
			if (this.loopLineIndex !== null && this.currentLines[this.loopLineIndex]) {
				const loopLine = this.currentLines[this.loopLineIndex];
				if (this.currentTime >= loopLine.endTime) {
					this.currentTime = loopLine.startTime;
					this.lastSpokenLineIndex = -1;
				}
			}
			const activeIdx = this.currentLines.findIndex((l) => this.currentTime >= l.startTime && this.currentTime < l.endTime);
			if (activeIdx !== -1 && activeIdx !== this.lastSpokenLineIndex) {
				this.lastSpokenLineIndex = activeIdx;
				if (this.vocalGuideEnabled) this.speakLine(this.currentLines[activeIdx].text);
			}
			if (this.onTimeUpdateCallback) this.onTimeUpdateCallback(this.currentTime, this.duration);
			if (this.currentTime >= this.duration) {
				this.stop();
				if (this.onEndedCallback) this.onEndedCallback();
			}
		}, stepMs);
	}
	pause() {
		this.isPlaying = false;
		if (this.hasRealAudio && this.realAudio) this.realAudio.pause();
		if (this.timeUpdateInterval) {
			clearInterval(this.timeUpdateInterval);
			this.timeUpdateInterval = null;
		}
		if (this.chordInterval) {
			clearInterval(this.chordInterval);
			this.chordInterval = null;
		}
		if ("speechSynthesis" in window) window.speechSynthesis.cancel();
	}
	stop() {
		this.pause();
		this.currentTime = 0;
		this.lastSpokenLineIndex = -1;
		if (this.hasRealAudio && this.realAudio) this.realAudio.currentTime = 0;
		if (this.onTimeUpdateCallback) this.onTimeUpdateCallback(0, this.duration);
	}
	seek(seconds) {
		this.currentTime = Math.max(0, Math.min(seconds, this.duration));
		this.lastSpokenLineIndex = -1;
		if (this.hasRealAudio && this.realAudio) this.realAudio.currentTime = this.currentTime;
		if ("speechSynthesis" in window) window.speechSynthesis.cancel();
		if (this.onTimeUpdateCallback) this.onTimeUpdateCallback(this.currentTime, this.duration);
	}
	onTimeUpdate(cb) {
		this.onTimeUpdateCallback = cb;
	}
	onDurationChange(cb) {
		this.onDurationChangeCallback = cb;
	}
	getDuration() {
		return this.duration;
	}
	onEnded(cb) {
		this.onEndedCallback = cb;
	}
	isUsingRealAudio() {
		return this.hasRealAudio;
	}
	playChord(frequencies) {
		if (!this.audioCtx) return;
		const now = this.audioCtx.currentTime;
		frequencies.forEach((freq, i) => {
			const osc = this.audioCtx.createOscillator();
			const gain = this.audioCtx.createGain();
			osc.type = i === 0 ? "sine" : "triangle";
			osc.frequency.setValueAtTime(freq, now + i * .04);
			gain.gain.setValueAtTime(1e-4, now + i * .04);
			gain.gain.exponentialRampToValueAtTime(.08 / (i + 1), now + i * .04 + .05);
			gain.gain.exponentialRampToValueAtTime(1e-4, now + i * .04 + 1.8);
			osc.connect(gain);
			gain.connect(this.audioCtx.destination);
			osc.start(now + i * .04);
			osc.stop(now + i * .04 + 2);
		});
	}
	startChordAccompaniment() {
		if (this.chordInterval) clearInterval(this.chordInterval);
		const chordProgressions = {
			"C Major": [
				[
					130.81,
					164.81,
					196,
					261.63
				],
				[
					146.83,
					174.61,
					220,
					293.66
				],
				[
					174.61,
					220,
					261.63,
					349.23
				],
				[
					196,
					246.94,
					293.66,
					392
				]
			],
			"F# Minor": [
				[
					185,
					220,
					277.18,
					369.99
				],
				[
					146.83,
					185,
					220,
					293.66
				],
				[
					220,
					277.18,
					329.63,
					440
				],
				[
					164.81,
					207.65,
					246.94,
					329.63
				]
			],
			"E Minor / G Major": [
				[
					164.81,
					196,
					246.94,
					329.63
				],
				[
					123.47,
					146.83,
					185,
					246.94
				],
				[
					130.81,
					164.81,
					196,
					261.63
				],
				[
					196,
					246.94,
					293.66,
					392
				]
			],
			"A Major": [
				[
					220,
					277.18,
					329.63,
					440
				],
				[
					138.59,
					164.81,
					207.65,
					277.18
				],
				[
					185,
					220,
					277.18,
					369.99
				],
				[
					146.83,
					185,
					220,
					293.66
				]
			],
			"Eb Major": [
				[
					155.56,
					196,
					233.08,
					311.13
				],
				[
					196,
					233.08,
					293.66,
					392
				],
				[
					130.81,
					155.56,
					196,
					261.63
				],
				[
					233.08,
					293.66,
					349.23,
					466.16
				]
			]
		};
		const chords = chordProgressions[this.keySignature] || chordProgressions["C Major"];
		let chordIdx = 0;
		this.playChord(chords[0]);
		this.chordInterval = window.setInterval(() => {
			if (!this.isPlaying) return;
			chordIdx = (chordIdx + 1) % chords.length;
			this.playChord(chords[chordIdx]);
		}, 2400 / this.playbackRate);
	}
	speakLine(text) {
		if (!("speechSynthesis" in window)) return;
		window.speechSynthesis.cancel();
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = "en-US";
		utterance.rate = .95 * this.playbackRate;
		utterance.pitch = 1.05;
		const voices = window.speechSynthesis.getVoices();
		const englishVoice = voices.find((v) => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Samantha") || v.name.includes("Google") || v.name.includes("Daniel"))) || voices.find((v) => v.lang.startsWith("en"));
		if (englishVoice) utterance.voice = englishVoice;
		window.speechSynthesis.speak(utterance);
	}
	playSuccessChime() {
		this.initAudioContext();
		if (!this.audioCtx) return;
		const now = this.audioCtx.currentTime;
		[
			523.25,
			659.25,
			783.99,
			1046.5
		].forEach((freq, i) => {
			const osc = this.audioCtx.createOscillator();
			const gain = this.audioCtx.createGain();
			osc.type = "sine";
			osc.frequency.setValueAtTime(freq, now + i * .08);
			gain.gain.setValueAtTime(.001, now + i * .08);
			gain.gain.exponentialRampToValueAtTime(.12, now + i * .08 + .02);
			gain.gain.exponentialRampToValueAtTime(1e-4, now + i * .08 + .35);
			osc.connect(gain);
			gain.connect(this.audioCtx.destination);
			osc.start(now + i * .08);
			osc.stop(now + i * .08 + .4);
		});
	}
};
var audioEngine = typeof window === "undefined" ? createServerStub() : new LyricAudioEngine();
function createServerStub() {
	const noop = () => {};
	return new Proxy({}, { get(_target, prop) {
		if (prop === "isUsingRealAudio") return () => false;
		if (prop === "getDuration") return () => 0;
		return noop;
	} });
}
var Header = ({ activeMode, onSelectMode, onOpenImport }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap",
						children: "LyricGrammar"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-7 text-sm font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelectMode("listen"),
							className: `whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${activeMode === "listen" ? "text-amber-600 font-semibold border-b-2 border-amber-600" : "text-slate-600 hover:text-slate-900"}`,
							children: "歌词沉浸赏析"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelectMode("grammar"),
							className: `whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${activeMode === "grammar" ? "text-amber-600 font-semibold border-b-2 border-amber-600" : "text-slate-600 hover:text-slate-900"}`,
							children: "语法成分透镜"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelectMode("karaoke"),
							className: `whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${activeMode === "karaoke" ? "text-amber-600 font-semibold border-b-2 border-amber-600" : "text-slate-600 hover:text-slate-900"}`,
							children: "卡拉OK填空挑战"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelectMode("builder"),
							className: `whitespace-nowrap transition-colors pb-0.5 cursor-pointer ${activeMode === "builder" ? "text-amber-600 font-semibold border-b-2 border-amber-600" : "text-slate-600 hover:text-slate-900"}`,
							children: "举一反三·造句工坊"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onOpenImport,
						className: "flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "导入歌曲 (MP3 & SRT)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "导入"
							})
						]
					})
				})
			]
		})
	});
};
var PedagogyHero = ({ currentSong, onStartLearn, onSelectMode }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs mb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 items-stretch",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 p-8 md:p-10 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-medium text-slate-500 mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "音乐浸润式二语习得" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["当前精选: ", currentSong.title] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-700 font-semibold",
								children: currentSong.grammarTheme
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]",
						children: "歌声入耳，语法自通：用经典英文歌打造英语思维"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl",
						children: "摆脱枯燥的死记硬背，将英语时态、条件虚拟与复合从句融入悦耳旋律。 通过「听辨感知 $\\to$ 句法积木 $\\to$ 跟唱填空 $\\to$ 场景迁移」，唱熟一首歌，牢记一类语法结构！"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-100",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => onSelectMode("listen"),
								className: "p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-amber-500",
										children: "01."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "沉浸磨耳朵" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500 mt-1",
									children: "同步双语跟读"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => onSelectMode("grammar"),
								className: "p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-amber-500",
										children: "02."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "语法透视镜" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500 mt-1",
									children: "句法成分积木"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => onSelectMode("karaoke"),
								className: "p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-amber-500",
										children: "03."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "卡拉OK填空" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500 mt-1",
									children: "律动实战考核"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => onSelectMode("builder"),
								className: "p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 border border-slate-100 hover:border-amber-200 transition-colors cursor-pointer group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-bold text-slate-900 group-hover:text-amber-700 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-amber-500",
										children: "04."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "举一反三" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-slate-500 mt-1",
									children: "AI 智能造句"
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onStartLearn,
						className: "flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 transition-transform active:scale-95 shadow-sm cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-4 h-4 fill-current ml-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"伴奏跟唱：学习《",
							currentSong.title,
							"》"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onSelectMode("grammar"),
						className: "px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer",
						children: "直接剖析该曲语法点"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100 border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
					alt: "Learning English Grammar through Song Lyrics",
					referrerPolicy: "no-referrer",
					className: "w-full h-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-mono tracking-wider uppercase text-amber-300",
							children: [
								currentSong.genre,
								" · ",
								currentSong.tempoBpm,
								" BPM"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-lg font-bold mt-1",
							children: [
								"《",
								currentSong.title,
								"》"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-slate-200 mt-0.5 line-clamp-2",
							children: currentSong.coreSummary
						})
					]
				})]
			})]
		})
	});
};
var SongSelector = ({ songs, selectedSongId, onSelectSong, onOpenImportModal }) => {
	const [filterLevel, setFilterLevel] = (0, import_react.useState)("all");
	const filteredSongs = filterLevel === "all" ? songs : songs.filter((s) => s.cefrLevel === filterLevel);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold text-slate-900 tracking-tight",
				children: "精品语法歌单"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-slate-500 mt-0.5",
				children: "挑选经典旋律，将高频易错语法点化为朗朗上口的肌肉记忆"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 p-1 bg-slate-100 rounded-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setFilterLevel("all"),
						className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${filterLevel === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
						children: [
							"全部曲目 (",
							songs.length,
							")"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilterLevel("A2"),
						className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${filterLevel === "A2" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
						children: "基础阶 A2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilterLevel("B1"),
						className: `px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${filterLevel === "B1" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
						children: "进阶阶 B1"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
			children: [filteredSongs.map((song) => {
				const isSelected = song.id === selectedSongId;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => onSelectSong(song),
					className: `group text-left p-3.5 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${isSelected ? "border-amber-400 bg-amber-50/40 ring-1 ring-amber-300 shadow-xs" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-square rounded-lg overflow-hidden bg-slate-100 mb-3 border border-slate-200",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: song.coverImage || "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
									alt: song.title,
									referrerPolicy: "no-referrer",
									className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-2 right-2 flex items-center gap-1",
									children: [song.isPermanentlySaved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-600/90 text-white backdrop-blur-xs",
										children: "已固化"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs",
										children: song.cefrLevel
									})]
								}),
								isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-amber-900/20 backdrop-blur-[1px] flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md animate-pulse",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-5 h-5 fill-current ml-0.5" })
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-slate-900 truncate",
							children: song.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-slate-500 flex items-center gap-1.5 mt-0.5 mb-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: song.artist }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: song.genre })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs font-medium text-amber-700 bg-amber-100/60 rounded px-2 py-1 line-clamp-1",
							children: ["🎯 ", song.grammarTheme]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [song.lines.length, " 核心语法句"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: song.keySignature })]
					})]
				}, song.id);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: onOpenImportModal,
				className: "border-2 border-dashed border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all cursor-pointer group min-h-[220px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-6 h-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-bold text-slate-900 mb-1",
						children: "导入 MP3 音频与 SRT 字幕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-500 max-w-[200px]",
						children: "绑定您的原声音频与时间轴，AI 自动生成专属语法教学课程"
					})
				]
			})]
		})]
	});
};
var LyricReader = ({ song, activeLineIndex, loopLineIndex, isPlaying, currentTime, syncOffset, onSelectLine, onSpeakLine, onToggleLoopLine, onSwitchToGrammarLens, onAdjustSyncOffset, onResetSyncOffset }) => {
	const [viewStyle, setViewStyle] = (0, import_react.useState)("flow");
	const [subtitleMode, setSubtitleMode] = (0, import_react.useState)("bilingual");
	const [isUserScrolling, setIsUserScrolling] = (0, import_react.useState)(false);
	const [showSyncControls, setShowSyncControls] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const activeLineRef = (0, import_react.useRef)(null);
	const scrollTimeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (isUserScrolling) return;
		if (activeLineRef.current) activeLineRef.current.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	}, [
		activeLineIndex,
		isUserScrolling,
		viewStyle
	]);
	const handleUserScroll = () => {
		setIsUserScrolling(true);
		if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
		scrollTimeoutRef.current = window.setTimeout(() => {
			setIsUserScrolling(false);
		}, 3500);
	};
	const handleResumeAutoScroll = () => {
		setIsUserScrolling(false);
		if (activeLineRef.current) activeLineRef.current.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
	};
	const currentLine = song.lines[activeLineIndex];
	const nextLine = song.lines[activeLineIndex + 1];
	const calibratedTime = Math.max(0, currentTime + syncOffset);
	const isInterlude = currentLine && calibratedTime > currentLine.endTime + .6 && nextLine && calibratedTime < nextLine.startTime - .4;
	const formatSeconds = (secs) => {
		const m = Math.floor(secs / 60);
		const s = Math.floor(secs % 60);
		return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-3.5 border-b border-slate-100 bg-slate-50/90 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-bold text-slate-900",
							children: viewStyle === "flow" ? "音乐App流式动态歌词" : "逐句教学研读卡片"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium",
							children: [
								"全曲共 ",
								song.lines.length,
								" 行"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-slate-500",
						children: [
							"第 ",
							activeLineIndex + 1,
							" 行 · 唱熟掌握: ",
							currentLine?.grammarPoint || song.grammarTheme
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center p-0.5 bg-slate-200/70 rounded-xl text-xs font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewStyle("flow"),
								className: `px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${viewStyle === "flow" ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎵 音乐App流式" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setViewStyle("cards"),
								className: `px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${viewStyle === "cards" ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📖 语法研读列表" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center p-0.5 bg-slate-200/70 rounded-xl text-xs font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSubtitleMode("bilingual"),
									className: `px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${subtitleMode === "bilingual" ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"}`,
									children: "英汉双语"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSubtitleMode("english"),
									className: `px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${subtitleMode === "english" ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"}`,
									children: "纯英沉浸"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSubtitleMode("grammar"),
									className: `px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${subtitleMode === "grammar" ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600 hover:text-slate-900"}`,
									children: "语法精析"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setShowSyncControls(!showSyncControls),
							title: "词音对不齐？点击微调歌词时间轴",
							className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer ${showSyncControls || syncOffset !== 0 ? "bg-amber-100 border-amber-300 text-amber-900 shadow-2xs" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "w-3.5 h-3.5 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: syncOffset === 0 ? "词音对齐校准" : `已校准 ${syncOffset > 0 ? "+" : ""}${syncOffset.toFixed(1)}s` })]
						})
					]
				})]
			}),
			showSyncControls && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-2.5 bg-amber-50/80 border-b border-amber-100 flex flex-wrap items-center justify-between gap-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-amber-950 font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "w-4 h-4 text-amber-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "歌词时间轴毫秒微调：" }), "若原声早于歌词请调快(+)，歌词快于原声请调慢(-)"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 font-mono",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onAdjustSyncOffset(-.5),
							className: "px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform",
							children: "-0.5s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onAdjustSyncOffset(-.2),
							className: "px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform",
							children: "-0.2s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "px-3 py-1 rounded-md bg-amber-200/70 text-amber-950 font-bold",
							children: ["偏移: ", syncOffset > 0 ? `+${syncOffset.toFixed(1)}s` : `${syncOffset.toFixed(1)}s`]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onAdjustSyncOffset(.2),
							className: "px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform",
							children: "+0.2s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onAdjustSyncOffset(.5),
							className: "px-2.5 py-1 rounded-md bg-white border border-amber-200 hover:bg-amber-100/60 text-slate-700 font-semibold cursor-pointer active:scale-95 transition-transform",
							children: "+0.5s"
						}),
						syncOffset !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onResetSyncOffset,
							title: "重置偏移量为 0",
							className: "ml-2 px-2.5 py-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-medium cursor-pointer transition-colors",
							children: "复位归零"
						})
					]
				})]
			}),
			isUserScrolling && viewStyle === "flow" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: handleResumeAutoScroll,
				className: "absolute bottom-6 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-lg shadow-amber-500/30 transition-transform active:scale-95 cursor-pointer animate-pulse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"回到正在演唱处 (第 ",
					activeLineIndex + 1,
					" 行)"
				] })]
			}),
			viewStyle === "flow" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: containerRef,
				onScroll: handleUserScroll,
				className: "px-6 md:px-16 py-20 min-h-[520px] max-h-[640px] overflow-y-auto space-y-8 scroll-smooth relative select-none",
				children: [isInterlude && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center gap-2 text-xs font-medium text-amber-700/80 bg-amber-50/80 border border-amber-200/60 max-w-sm mx-auto py-1.5 px-4 rounded-full mb-4 animate-pulse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎵 伴奏间奏中 · 准备跟唱下一句" })
				}), song.lines.map((line, idx) => {
					const isActive = idx === activeLineIndex;
					const isLooping = loopLineIndex === idx;
					const distance = Math.abs(idx - activeLineIndex);
					let opacityClass = "opacity-30 hover:opacity-70 scale-98";
					if (isActive) opacityClass = "opacity-100 scale-100";
					else if (distance === 1) opacityClass = "opacity-65 hover:opacity-90 scale-[0.99]";
					else if (distance === 2) opacityClass = "opacity-45 hover:opacity-80 scale-[0.98]";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: isActive ? activeLineRef : null,
						onClick: () => onSelectLine(idx),
						className: `transition-all duration-400 ease-out py-3 px-4 rounded-2xl cursor-pointer group relative ${opacityClass} ${isActive ? "bg-amber-500/8 text-slate-950 font-bold ring-1 ring-amber-400/40 shadow-xs" : "text-slate-600 hover:bg-slate-50"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-xs font-mono tabular-nums shrink-0 transition-colors ${isActive ? "text-amber-600 font-bold" : "text-slate-400"}`,
											children: (idx + 1).toString().padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `tracking-tight transition-all leading-snug ${isActive ? "text-2xl md:text-3xl font-extrabold text-slate-900" : "text-lg md:text-xl font-semibold text-slate-700 group-hover:text-slate-900"}`,
											children: line.text
										})]
									}),
									subtitleMode !== "english" && line.translation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-2 pl-7 text-xs md:text-sm transition-colors leading-relaxed ${isActive ? "text-amber-900/90 font-medium" : "text-slate-500 group-hover:text-slate-700"}`,
										children: line.translation
									}),
									subtitleMode === "grammar" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 pl-7 flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-semibold text-amber-800 bg-amber-100/90 rounded-md px-2.5 py-0.5",
											children: line.grammarPoint
										}), line.patternTemplate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[11px] font-mono text-slate-700 bg-slate-100 rounded-md px-2.5 py-0.5",
											children: ["公式: ", line.patternTemplate]
										})]
									}),
									isActive && isPlaying && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 pl-7 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-end gap-1 h-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1 bg-amber-500 rounded-full animate-bounce h-3 [animation-delay:-0.3s]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1 bg-amber-500 rounded-full animate-bounce h-4 [animation-delay:-0.15s]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1 bg-amber-500 rounded-full animate-bounce h-2" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1 bg-amber-500 rounded-full animate-bounce h-3.5 [animation-delay:-0.4s]" })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-amber-800 font-bold ml-1",
												children: "正在演唱 · 跟随节奏唱熟句子"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-mono text-slate-400 ml-2",
												children: [
													"[",
													formatSeconds(line.startTime),
													" - ",
													formatSeconds(line.endTime),
													"]"
												]
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onSelectLine(idx);
										},
										title: "从这句开始播放",
										className: "p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100/60 rounded-lg transition-colors cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5 fill-current ml-0.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onSpeakLine(line.text);
										},
										title: "慢速纯正跟读发音",
										className: "p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100/60 rounded-lg transition-colors cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onToggleLoopLine(idx);
										},
										title: isLooping ? "取消单句循环" : "开启该句单句循环",
										className: `p-1.5 rounded-lg transition-colors cursor-pointer ${isLooping ? "bg-amber-200 text-amber-900 font-bold" : "text-slate-400 hover:text-slate-800 hover:bg-slate-100"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat1, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onSwitchToGrammarLens(idx);
										},
										title: "在语法透镜中深度剖析该句成分",
										className: "p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" })
									})
								]
							})]
						})
					}, line.id);
				})]
			}),
			viewStyle === "cards" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 py-6 max-h-[640px] overflow-y-auto space-y-4",
				children: song.lines.map((line, idx) => {
					const isActive = idx === activeLineIndex;
					const isLooping = loopLineIndex === idx;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: isActive ? activeLineRef : null,
						onClick: () => onSelectLine(idx),
						className: `p-5 rounded-2xl border transition-all cursor-pointer ${isActive ? "border-amber-400 bg-amber-50/70 shadow-sm ring-1 ring-amber-300" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mb-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-mono font-bold text-amber-600",
												children: ["#", (idx + 1).toString().padStart(2, "0")]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-mono text-slate-400",
												children: [
													"[",
													formatSeconds(line.startTime),
													" - ",
													formatSeconds(line.endTime),
													"]"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs px-2 py-0.5 rounded bg-amber-100/90 text-amber-800 font-semibold",
												children: line.grammarPoint
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-lg font-bold text-slate-900 mb-1",
										children: line.text
									}),
									line.translation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-600 mb-3",
										children: line.translation
									}),
									line.patternTemplate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg mb-2.5",
										children: ["句型公式: ", line.patternTemplate]
									}),
									line.explanation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-600 bg-white/70 p-3 rounded-lg border border-slate-150 leading-relaxed",
										children: line.explanation
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onSelectLine(idx);
										},
										className: "p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-100/60 rounded-xl transition-colors cursor-pointer",
										title: "播放该句",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-4 h-4 fill-current ml-0.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onSpeakLine(line.text);
										},
										className: "p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-100/60 rounded-xl transition-colors cursor-pointer",
										title: "发音朗读",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: (e) => {
											e.stopPropagation();
											onToggleLoopLine(idx);
										},
										className: `p-2 rounded-xl transition-colors cursor-pointer ${isLooping ? "bg-amber-200 text-amber-900 font-bold" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"}`,
										title: isLooping ? "取消循环" : "单句循环",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat1, { className: "w-4 h-4" })
									})
								]
							})]
						})
					}, line.id);
				})
			})
		]
	});
};
var GrammarLens = ({ song, selectedLineIndex, onSelectLine, onSpeakLine, onStartSentenceBuilder }) => {
	const currentLine = song.lines[selectedLineIndex] || song.lines[0];
	const getChunkStyle = (posTag) => {
		switch (posTag) {
			case "subject": return "bg-blue-50 text-blue-800 border-blue-200";
			case "predicate": return "bg-purple-50 text-purple-800 border-purple-200";
			case "object": return "bg-emerald-50 text-emerald-800 border-emerald-200";
			case "complement": return "bg-teal-50 text-teal-800 border-teal-200";
			case "clause": return "bg-amber-50 text-amber-900 border-amber-300 font-medium";
			case "tense-marker": return "bg-rose-50 text-rose-800 border-rose-200 font-semibold";
			case "adverbial": return "bg-indigo-50 text-indigo-800 border-indigo-200";
			default: return "bg-slate-50 text-slate-700 border-slate-200";
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pb-4 mb-5 border-b border-slate-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-slate-900",
							children: [
								"第 ",
								(selectedLineIndex + 1).toString().padStart(2, "0"),
								" 句语法深度透视"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 overflow-x-auto max-w-sm py-1",
						children: song.lines.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelectLine(i),
							className: `w-7 h-7 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer shrink-0 ${i === selectedLineIndex ? "bg-amber-500 text-white font-bold shadow-xs" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`,
							children: i + 1
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-slate-50 rounded-xl p-5 border border-slate-200/80 mb-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xl font-bold text-slate-900 tracking-tight",
							children: [
								"“",
								currentLine.text,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-slate-500 mt-1.5",
							children: currentLine.translation
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSpeakLine(currentLine.text),
							className: "px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0",
							children: "🔊 慢速朗诵"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold text-slate-700 uppercase tracking-wider",
							children: "句法结构树 · 语法成分积木"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-slate-500",
							children: "点击下方积木可感受英语句型模块化拼接"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2.5 items-stretch",
						children: currentLine.chunks && currentLine.chunks.length > 0 ? currentLine.chunks.map((chunk, cIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-3 rounded-xl border flex flex-col justify-between transition-transform hover:-translate-y-0.5 ${getChunkStyle(chunk.posTag)}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-tight",
								children: chunk.phrase
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 pt-1.5 border-t border-black/5 flex items-center justify-between text-[11px] opacity-80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chunk.role })
							})]
						}, cIdx)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-slate-500",
							children: "暂无成分细分"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-amber-50/50 rounded-xl p-5 border border-amber-200/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2 text-amber-900 font-bold text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "核心句型公式提炼" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 bg-white rounded-lg border border-amber-200 text-amber-950 font-mono text-xs font-semibold",
								children: currentLine.patternTemplate || currentLine.grammarPoint
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-amber-800/90 mt-3 leading-relaxed",
								children: "💡 提炼自歌词黄金句法，背熟歌词旋律，自然而然写出符合语法的地道句子。"
							}),
							currentLine.patternTemplate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onStartSentenceBuilder(currentLine.patternTemplate),
								className: "mt-4 w-full py-2 px-3 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "套用本句型去造句" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-slate-50 rounded-xl p-5 border border-slate-200/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "语法精讲与易错点剖析" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-700 leading-relaxed",
								children: currentLine.explanation
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 pt-2.5 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["语法主题：", currentLine.grammarPoint] })]
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-base font-bold text-slate-900 mb-2",
					children: [
						"《",
						song.title,
						"》全曲核心语法知识图谱"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 mb-5 leading-relaxed",
					children: song.coreSummary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs font-bold text-slate-700 uppercase tracking-wider mb-3",
						children: "🎯 必背三大黄金句型模板 (背熟一首歌，通关一类语法)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-3",
						children: song.keyTakeawayPatterns.map((pat, pIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-slate-900",
									children: pat.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 p-2 bg-white rounded border border-slate-200 font-mono text-[11px] text-amber-800",
									children: pat.formula
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 text-[11px] text-slate-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-400",
										children: "歌词原句: "
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "italic",
										children: [
											"\"",
											pat.exampleInSong,
											"\""
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-[11px] text-slate-600",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-400",
										children: "日常造句: "
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"\"",
										pat.dailyExample,
										"\""
									] })]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onStartSentenceBuilder(pat.formula),
								className: "mt-3 pt-2 border-t border-slate-200 text-xs font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "立即练习造句" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" })]
							})]
						}, pIdx))
					})]
				}),
				song.poeticLicenseNotes && song.poeticLicenseNotes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-xl bg-amber-50/40 border border-amber-200/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-2 text-xs font-bold text-amber-950",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-3.5 h-3.5 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "英文歌词地道语用与口语缩写提醒 (Poetic License & Spoken English)" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1.5 text-xs text-slate-700 list-disc list-inside",
						children: song.poeticLicenseNotes.map((note, nIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, nIdx))
					})]
				})
			]
		})]
	});
};
var KaraokeChallenge = ({ song, onSpeakLine }) => {
	const [currentQuestionIdx, setCurrentQuestionIdx] = (0, import_react.useState)(0);
	const [selectedAnswer, setSelectedAnswer] = (0, import_react.useState)(null);
	const [isAnswered, setIsAnswered] = (0, import_react.useState)(false);
	const [score, setScore] = (0, import_react.useState)(0);
	const [streak, setStreak] = (0, import_react.useState)(0);
	const [isCompleted, setIsCompleted] = (0, import_react.useState)(false);
	const quizLines = song.lines.filter((l) => !!l.cloze);
	const currentLine = quizLines[currentQuestionIdx];
	const cloze = currentLine?.cloze;
	const handleSelectOption = (option) => {
		if (isAnswered || !cloze) return;
		setSelectedAnswer(option);
		setIsAnswered(true);
		if (option.toLowerCase() === cloze.blankWord.toLowerCase()) {
			setScore((prev) => prev + 100 + streak * 20);
			setStreak((prev) => prev + 1);
			audioEngine.playSuccessChime();
		} else setStreak(0);
	};
	const handleNext = () => {
		if (currentQuestionIdx < quizLines.length - 1) {
			setCurrentQuestionIdx((prev) => prev + 1);
			setSelectedAnswer(null);
			setIsAnswered(false);
		} else setIsCompleted(true);
	};
	const handleRestart = () => {
		setCurrentQuestionIdx(0);
		setSelectedAnswer(null);
		setIsAnswered(false);
		setScore(0);
		setStreak(0);
		setIsCompleted(false);
	};
	if (!quizLines.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-white rounded-2xl border border-slate-200 p-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-slate-500",
			children: "该歌曲暂未配置填空挑战题"
		})
	});
	if (isCompleted) {
		const accuracy = Math.round(score / (quizLines.length * 100) * 100);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-xl mx-auto shadow-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-8 h-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-xl font-bold text-slate-900 mb-1",
					children: [
						"恭喜完成《",
						song.title,
						"》语法填空挑战！"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 mb-6",
					children: "旋律已经印在脑海中，正确的语法规则已不知不觉转化为直觉！"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl mb-6 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-slate-500",
						children: "最终得分"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-2xl font-bold font-mono text-slate-900 tabular-nums",
						children: [score, " 分"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-slate-500",
						children: "通关正确率"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-2xl font-bold font-mono text-amber-600 tabular-nums",
						children: [Math.min(100, accuracy), "%"]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleRestart,
						className: "flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "再练一次加深记忆" })]
					})
				})
			]
		});
	}
	const isCurrentCorrect = selectedAnswer && cloze && selectedAnswer.toLowerCase() === cloze.blankWord.toLowerCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-xs max-w-3xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between pb-4 mb-6 border-b border-slate-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold text-amber-600 uppercase tracking-wider",
					children: "卡拉OK律动填空 · 语法实战"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-slate-500 mt-0.5",
					children: [
						"第 ",
						currentQuestionIdx + 1,
						" / ",
						quizLines.length,
						" 关 · 跟着旋律把语法填对"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [streak > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-bold animate-pulse",
						children: [
							"🔥 连对 ",
							streak,
							" 题!"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-slate-400",
							children: "当前积分"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-base font-bold font-mono text-slate-900 tabular-nums",
							children: score
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6 text-center relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-medium text-amber-700 bg-amber-100/70 rounded px-2.5 py-1 inline-block mb-3",
						children: ["考查语法点: ", currentLine.grammarPoint]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-relaxed",
						children: cloze?.sentenceWithBlank.split("_____").map((part, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `inline-block mx-1.5 px-3 py-1 rounded-lg border-2 font-mono text-lg transition-all ${isAnswered ? isCurrentCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "border-rose-400 bg-rose-50 text-rose-800" : "border-dashed border-amber-400 bg-amber-50 text-amber-900 min-w-[70px]"}`,
							children: selectedAnswer || "_____"
						})] }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-500 mt-3",
						children: currentLine.translation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onSpeakLine(currentLine.text),
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "听原曲人声伴读" })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",
				children: cloze?.options.map((opt) => {
					let optStyle = "border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 text-slate-800";
					if (isAnswered) {
						if (opt.toLowerCase() === cloze.blankWord.toLowerCase()) optStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
						else if (selectedAnswer === opt) optStyle = "border-rose-400 bg-rose-50 text-rose-900";
						else optStyle = "border-slate-200 opacity-50 text-slate-400";
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: isAnswered,
						onClick: () => handleSelectOption(opt),
						className: `p-4 rounded-xl border text-sm font-semibold tracking-tight transition-all text-center cursor-pointer disabled:cursor-default flex items-center justify-center gap-2 ${optStyle}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt }),
							isAnswered && opt.toLowerCase() === cloze.blankWord.toLowerCase() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600" }),
							isAnswered && selectedAnswer === opt && opt.toLowerCase() !== cloze.blankWord.toLowerCase() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-4 h-4 text-rose-600" })
						]
					}, opt);
				})
			}),
			isAnswered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `p-4 rounded-xl border mb-6 transition-all ${isCurrentCorrect ? "bg-emerald-50/60 border-emerald-200 text-emerald-950" : "bg-rose-50/60 border-rose-200 text-rose-950"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [isCurrentCorrect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-5 h-5 text-emerald-600 shrink-0 mt-0.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "w-5 h-5 text-rose-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold mb-1",
								children: isCurrentCorrect ? "太棒了，完全正确！" : `别灰心，正确答案是: ${cloze?.blankWord}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed opacity-90",
								children: cloze?.hint
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 text-[11px] font-mono text-slate-600",
								children: ["句型依据: ", currentLine.patternTemplate || currentLine.grammarPoint]
							})
						]
					})]
				})
			}),
			isAnswered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleNext,
					className: "flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentQuestionIdx < quizLines.length - 1 ? "下一句挑战" : "查看最终成绩" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-300" })]
				})
			})
		]
	});
};
var SentenceBuilder = ({ song, initialPattern, onSpeakText }) => {
	const [selectedPattern, setSelectedPattern] = (0, import_react.useState)(initialPattern || song.keyTakeawayPatterns[0]?.formula || "If + S + V(present), S + will + V(base)");
	const [studentInput, setStudentInput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const sampleStarters = [
		"If you come to my city, I will show you around.",
		"If I were a millionaire, I would build an animal shelter.",
		"I am sitting here in the library, waiting for my friend.",
		"I heard that you started a new company in Shanghai."
	];
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!studentInput.trim()) return;
		setLoading(true);
		setErrorMessage("");
		setFeedback(null);
		try {
			const res = await fetch("/api/check-sentence", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					formula: selectedPattern,
					studentSentence: studentInput.trim(),
					promptContext: `歌曲《${song.title}》的主题: ${song.grammarTheme}`
				})
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "检查失败");
			setFeedback(data.feedback);
		} catch (err) {
			console.warn("Network fetch error in SentenceBuilder, using offline local evaluator:", err);
			const trimmed = studentInput.trim();
			const hasCapital = /^[A-Z]/.test(trimmed);
			const hasPunctuation = /[.!?]$/.test(trimmed);
			const formulaLower = (selectedPattern || "").toLowerCase();
			const sentLower = trimmed.toLowerCase();
			let matchedCore = true;
			let coreNote = "句子结构完整，主谓成分清晰。";
			if (formulaLower.includes("if") && !sentLower.includes("if")) {
				matchedCore = false;
				coreNote = "提示：本句型核心是 If 条件状语从句，句中记得包含 If 引导假设。";
			}
			setFeedback({
				isCorrect: matchedCore,
				score: matchedCore ? hasCapital && hasPunctuation ? 95 : 90 : 85,
				praise: "（本地离线模式）造句非常顺畅！结构契合所选句型！",
				grammarAnalysis: `${coreNote} 时态语序符合英语日常表达习惯。`,
				betterAlternative: hasCapital && hasPunctuation ? trimmed : `${trimmed.charAt(0).toUpperCase() + trimmed.slice(1)}.`,
				tips: "唱熟歌词后多尝试举一反三替换主语或动词，语感会越来越强！"
			});
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl border border-slate-200 p-6 shadow-xs max-w-4xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pb-4 mb-6 border-b border-slate-200",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-amber-600 uppercase tracking-wider",
						children: "举一反三 · 句型造句工坊"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-lg font-bold text-slate-900 mt-1",
						children: [
							"将《",
							song.title,
							"》的歌词句式迁移应用到你自己的生活表达中"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-500 mt-0.5",
						children: "唱熟了旋律，现在请运用句型造句，AI 语法教练会为你即时提供逐句纠错与地道表达润色。"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",
					children: "第一步：选择你想挑战的语法句型模板"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-2.5",
					children: song.keyTakeawayPatterns.map((pat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setSelectedPattern(pat.formula);
							setFeedback(null);
						},
						className: `p-3 rounded-xl border text-left transition-all cursor-pointer ${selectedPattern === pat.formula ? "border-amber-500 bg-amber-50/50 ring-1 ring-amber-300 shadow-2xs" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold text-slate-900 mb-1",
							children: pat.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-mono text-amber-800 line-clamp-1",
							children: pat.formula
						})]
					}, idx))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs font-bold text-slate-700 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "目标句型公式" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-sm font-semibold text-slate-900",
					children: selectedPattern
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2",
						children: "第二步：输入你写的英文句子"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: studentInput,
						onChange: (e) => setStudentInput(e.target.value),
						rows: 3,
						placeholder: "例如: If it rains tomorrow, I will stay at home and listen to music.",
						className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-400 bg-white shadow-2xs"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-1.5 text-xs text-slate-500",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-slate-400",
							children: "灵感例句:"
						}), sampleStarters.map((starter, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStudentInput(starter),
							className: "text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer truncate max-w-xs",
							children: starter
						}, i))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStudentInput(""),
							className: "text-xs text-slate-400 hover:text-slate-600 cursor-pointer",
							children: "清空输入"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading || !studentInput.trim(),
							className: "flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 rounded-xl shadow-xs transition-colors cursor-pointer",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI 教练深度批改中..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "提交 AI 语法评审" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-3.5 h-3.5" })] })
						})]
					})
				]
			}),
			errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs mb-6",
				children: errorMessage
			}),
			feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 rounded-2xl bg-amber-50/40 border border-amber-200 transition-all space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-amber-200/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "w-5 h-5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold text-slate-900",
								children: "AI 语法评测报告"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 font-mono",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-slate-500",
								children: "语法得分:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xl font-bold text-amber-600 tabular-nums",
								children: [feedback.score, " 分"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg p-3 border border-emerald-200",
						children: ["👏 ", feedback.praise]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold text-slate-700 uppercase tracking-wider mb-1",
						children: "语法结构剖析"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-slate-700 leading-relaxed",
						children: feedback.grammarAnalysis
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-white rounded-xl border border-slate-200",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-slate-800",
									children: "地道母语者润色版本"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onSpeakText(feedback.betterAlternative),
									className: "text-[11px] text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "朗读发音" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-bold text-slate-900 italic",
								children: [
									"\"",
									feedback.betterAlternative,
									"\""
								]
							}),
							feedback.tips && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100",
								children: ["💡 实用小贴士: ", feedback.tips]
							})
						]
					})
				]
			})
		]
	});
};
/**
* Convert any time string format to seconds:
* - "00:01:23,456" -> 83.456
* - "00:01:23.456" -> 83.456
* - "01:23,456"    -> 83.456 (missing hour)
* - "01:23.45"     -> 83.45
* - "00:01:23"     -> 83.0 (no milliseconds)
* - "01:23"        -> 83.0
*/
function timeStringToSeconds(timeStr) {
	if (!timeStr) return 0;
	const match = timeStr.trim().match(/(?:(\d{1,2}):)?(\d{1,2}):(\d{2})(?:[.,](\d{1,4}))?/);
	if (!match) return 0;
	const hours = match[1] !== void 0 ? parseFloat(match[1]) || 0 : 0;
	const minutes = parseFloat(match[2]) || 0;
	const seconds = parseFloat(match[3]) || 0;
	const fraction = match[4] ? parseFloat("0." + match[4]) : 0;
	if (match[1] === void 0) return minutes * 60 + seconds + fraction;
	return hours * 3600 + minutes * 60 + seconds + fraction;
}
/**
* Detects whether a string contains Chinese characters
*/
function hasChinese(str) {
	return /[\u4e00-\u9fa5]/.test(str);
}
/**
* Separates bilingual lines (English on top, Chinese translation below or separated by / |)
*/
function extractBilingual(textLines) {
	if (textLines.length === 0) return { text: "" };
	if (textLines.length >= 2) {
		const chineseIdx = textLines.findIndex((l) => hasChinese(l));
		const englishIdx = textLines.findIndex((l) => !hasChinese(l) && /[a-zA-Z]/.test(l));
		if (chineseIdx !== -1 && englishIdx !== -1) return {
			text: textLines[englishIdx].trim(),
			translation: textLines[chineseIdx].trim()
		};
	}
	const combined = textLines.join(" ").trim();
	if (combined.includes(" / ") || combined.includes(" | ")) {
		const parts = combined.split(/\s*[/|]\s*/);
		if (parts.length >= 2) {
			const chPart = parts.find((p) => hasChinese(p));
			const enPart = parts.find((p) => !hasChinese(p) && /[a-zA-Z]/.test(p));
			if (chPart && enPart) return {
				text: enPart.trim(),
				translation: chPart.trim()
			};
		}
	}
	return { text: combined };
}
/**
* Universal SRT and WebVTT Parser
*/
function parseSrt(srtContent) {
	const lines = [];
	const rawLines = srtContent.replace(/^\uFEFF/, "").replace(/WEBVTT/gi, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
	let currentStart = -1;
	let currentEnd = -1;
	let currentTextLines = [];
	let counter = 1;
	const flushCue = () => {
		if (currentStart >= 0 && currentTextLines.length > 0) {
			const { text, translation } = extractBilingual(currentTextLines);
			const cleanText = text.replace(/<[^>]*>/g, "").replace(/\{[^}]*\}/g, "").trim();
			if (cleanText) lines.push({
				id: `srt-${counter++}`,
				startTime: Math.round(currentStart * 1e3) / 1e3,
				endTime: Math.round((currentEnd > currentStart ? currentEnd : currentStart + 4) * 1e3) / 1e3,
				text: cleanText,
				translation: translation ? translation.replace(/<[^>]*>/g, "").trim() : void 0
			});
		}
		currentStart = -1;
		currentEnd = -1;
		currentTextLines = [];
	};
	for (let i = 0; i < rawLines.length; i++) {
		const rawLine = rawLines[i].trim();
		if (rawLine.includes("-->") || rawLine.includes("->")) {
			flushCue();
			const separator = rawLine.includes("-->") ? "-->" : "->";
			const [startStr, endStr] = rawLine.split(separator).map((s) => s.trim());
			currentStart = timeStringToSeconds(startStr);
			currentEnd = timeStringToSeconds(endStr);
			continue;
		}
		if (currentStart >= 0) {
			if (/^\d+$/.test(rawLine)) {
				const nextLine = (rawLines[i + 1] || "").trim();
				if (nextLine.includes("-->") || nextLine.includes("->")) {
					flushCue();
					continue;
				}
			}
			if (rawLine.length > 0) currentTextLines.push(rawLine);
			else flushCue();
		}
	}
	flushCue();
	return sanitizeSubtitleTimeline(lines);
}
/**
* Universal LRC Parser
*/
function parseLrc(lrcContent) {
	const rawLines = lrcContent.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
	const timeRegex = /\[(\d{1,2}:\d{2}(?:[.:]\d{1,3})?)\]/g;
	const tempItems = [];
	for (const line of rawLines) {
		const matches = [...line.matchAll(timeRegex)];
		if (!matches.length) continue;
		const pureText = line.replace(timeRegex, "").trim();
		if (!pureText) continue;
		if (/^(ti|ar|al|by|offset|length):/i.test(pureText)) continue;
		for (const match of matches) {
			const timeSec = timeStringToSeconds(match[1]);
			tempItems.push({
				time: timeSec,
				text: pureText
			});
		}
	}
	tempItems.sort((a, b) => a.time - b.time);
	const lines = [];
	for (let i = 0; i < tempItems.length; i++) {
		const item = tempItems[i];
		const nextItem = tempItems[i + 1];
		const endTime = nextItem ? Math.min(nextItem.time, item.time + 6) : item.time + 4.5;
		const { text, translation } = extractBilingual([item.text]);
		lines.push({
			id: `lrc-${i + 1}`,
			startTime: Math.round(item.time * 1e3) / 1e3,
			endTime: Math.round(Math.max(endTime, item.time + 1) * 1e3) / 1e3,
			text,
			translation
		});
	}
	return sanitizeSubtitleTimeline(lines);
}
/**
* Ensures lines are sorted ascending by startTime, and no endTime <= startTime
*/
function sanitizeSubtitleTimeline(lines) {
	lines.sort((a, b) => a.startTime - b.startTime);
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const nextLine = lines[i + 1];
		if (line.endTime <= line.startTime) line.endTime = nextLine ? Math.min(nextLine.startTime, line.startTime + 5) : line.startTime + 4;
	}
	return lines;
}
/**
* Auto-detect and parse either SRT, VTT, LRC, or plain text lyrics
*/
function parseSubtitles(content, estimatedDuration = 180) {
	if (!content || !content.trim()) return [];
	if (content.includes("-->") || content.includes("->")) return parseSrt(content);
	if (/\[\d{1,2}:\d{2}/.test(content)) return parseLrc(content);
	const rawLines = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").map((l) => l.trim()).filter((l) => l.length > 0 && !/^\d+$/.test(l));
	if (!rawLines.length) return [];
	const interval = Math.max(3.5, estimatedDuration / (rawLines.length + 1));
	const lines = [];
	for (let i = 0; i < rawLines.length; i++) {
		const { text, translation } = extractBilingual([rawLines[i]]);
		const startTime = Math.round(i * interval * 10) / 10;
		const endTime = Math.round((i + 1) * interval * 10) / 10;
		lines.push({
			id: `plain-${i + 1}`,
			startTime,
			endTime,
			text,
			translation
		});
	}
	return sanitizeSubtitleTimeline(lines);
}
var COMMON_VERBS = [
	"find",
	"found",
	"sail",
	"sailed",
	"see",
	"saw",
	"seen",
	"be",
	"am",
	"is",
	"are",
	"was",
	"were",
	"been",
	"have",
	"has",
	"had",
	"go",
	"went",
	"gone",
	"do",
	"did",
	"done",
	"make",
	"made",
	"take",
	"took",
	"taken",
	"come",
	"came",
	"know",
	"knew",
	"known",
	"think",
	"thought",
	"get",
	"got",
	"gotten",
	"give",
	"gave",
	"given",
	"feel",
	"felt",
	"say",
	"said",
	"try",
	"tried",
	"need",
	"needed",
	"want",
	"wanted",
	"love",
	"loved",
	"listen",
	"listened",
	"wait",
	"waited",
	"sit",
	"sat",
	"sitting",
	"hurts",
	"hurt",
	"guide",
	"guided",
	"fix",
	"fixed"
];
function analyzeLineGrammarLocally(text) {
	const lower = text.toLowerCase();
	const words = text.split(/\s+/).filter(Boolean);
	let grammarPoint = "核心谓语动词与语序搭配";
	let patternTemplate = "Subject + Verb + Object/Complement";
	let explanation = "该句展现了地道英文原声的句式韵律与动词搭配。";
	let blankWord = words[Math.min(2, words.length - 1)] || "word";
	let hint = "根据语境和句式结构选择正确的词汇";
	let options = [
		blankWord,
		"is",
		"was",
		"to"
	];
	if (lower.includes("if ") || lower.startsWith("if")) {
		if (lower.includes(" were ") || lower.includes("i'd") || lower.includes("would")) {
			grammarPoint = "虚拟语气 (Subjunctive Mood / Unreal Condition)";
			patternTemplate = "If + 主语 + were/过去式..., 主语 + would/could + 动词原形";
			explanation = "经典虚拟语气句型：用来设想与事实相反或难以实现的愿望，主句通常搭配 would 或 could。";
			const wereIdx = words.findIndex((w) => w.toLowerCase() === "were");
			if (wereIdx !== -1) {
				blankWord = words[wereIdx];
				hint = "与现在事实相反的虚拟语气，be 动词统一使用 were";
				options = [
					"were",
					"was",
					"am",
					"are"
				];
			}
		} else {
			grammarPoint = "第一条件句 (First Conditional) · 主将从现";
			patternTemplate = "If + 主语 + 一般现在时..., 主语 + will + 动词原形";
			explanation = "条件状语从句经典法则：主句表达将来意愿（will），从句使用一般现在时表假设。";
			const ifVerbIdx = words.findIndex((w) => COMMON_VERBS.includes(w.toLowerCase()));
			if (ifVerbIdx !== -1) {
				blankWord = words[ifVerbIdx];
				hint = "条件状语从句中，主句用将来时，从句需用一般现在时";
				options = [
					blankWord,
					"will " + blankWord,
					"would " + blankWord,
					blankWord + "ing"
				];
			}
		}
	} else if (/\b(am|is|are|'m|'re|'s)\s+\w+ing\b/i.test(text)) {
		grammarPoint = "现在进行时 (Present Continuous: be + V-ing)";
		patternTemplate = "主语 + am/is/are + 动词-ing + 状语";
		explanation = "用于生动描绘此时此刻正在进行的动作或当下的生活状态。";
		const ingWord = words.find((w) => w.toLowerCase().endsWith("ing"));
		if (ingWord) {
			blankWord = ingWord.replace(/[^a-zA-Z]/g, "");
			hint = "注意现在分词的拼写与变形规则";
			const root = blankWord.replace(/ing$/, "");
			options = [
				blankWord,
				root,
				root + "ed",
				root + "s"
			];
		}
	} else if (/\b(have|has|'ve)\s+\w+(ed|en|ne)\b/i.test(text) || /\b(have|has|'ve)\s+(been|seen|known|done|found|gotten)\b/i.test(text)) {
		grammarPoint = "现在完成时 (Present Perfect: have/has + done)";
		patternTemplate = "主语 + have/has + 过去分词 (V-ed/done)";
		explanation = "强调过去发生的动作对现在造成的影响，或动作从过去一直持续到现在。";
		const perfWord = words.find((w) => [
			"have",
			"has",
			"'ve"
		].includes(w.toLowerCase()));
		if (perfWord) {
			blankWord = perfWord;
			hint = "现在完成时的核心助动词";
			options = [
				blankWord,
				"had",
				"was",
				"did"
			];
		}
	} else if (/\b(will|'ll)\b/i.test(text)) {
		grammarPoint = "一般将来时 (will + 动词原形) 表达承诺或决心";
		patternTemplate = "主语 + will ('ll) + 动词原形 (Base Form)";
		explanation = "will 表态度的坚定承诺或未来的必然趋势，后接动词原形。";
		blankWord = words.find((w) => [
			"will",
			"'ll",
			"i'll"
		].includes(w.toLowerCase())) || "will";
		hint = "将来时助动词，表达意愿与承诺";
		options = [
			blankWord,
			"would",
			"am",
			"was"
		];
	} else if (/\b(can|could|should|must|might|can't)\b/i.test(text)) {
		grammarPoint = "情态动词 + 动词原形";
		patternTemplate = "主语 + modal verb + 动词原形 (Base Form)";
		explanation = "情态动词后必须紧跟动词原形，用来表达能力、推测、义务或建议。";
		blankWord = words.find((w) => [
			"can",
			"could",
			"should",
			"must",
			"can't"
		].includes(w.toLowerCase())) || "can";
		hint = "情态动词原形，修饰后续动词";
		options = [
			blankWord,
			"is",
			"to",
			"will"
		];
	} else if (/\b(when|because|'cause|that|what|where|why|how)\b/i.test(text)) {
		grammarPoint = "状语从句与名词性从句复合连接";
		patternTemplate = "连接连词 (Conjunction) + 主谓完整从句";
		explanation = "复合句中利用连词使句子逻辑层层递进，表达时间、因果或充当宾语。";
		blankWord = words.find((w) => [
			"when",
			"because",
			"'cause",
			"that",
			"what",
			"how"
		].includes(w.toLowerCase())) || "when";
		hint = "引导从句的关键连接词";
		options = [
			blankWord,
			"which",
			"and",
			"but"
		];
	}
	const uniqueOpts = Array.from(new Set(options));
	while (uniqueOpts.length < 4) {
		const filler = [
			"to",
			"for",
			"at",
			"with",
			"in",
			"on",
			"do",
			"be"
		][uniqueOpts.length];
		if (!uniqueOpts.includes(filler)) uniqueOpts.push(filler);
	}
	const chunks = [];
	if (words.length <= 4) chunks.push({
		phrase: text,
		role: "歌词主干句",
		posTag: "clause"
	});
	else {
		const mid = Math.floor(words.length / 2);
		chunks.push({
			phrase: words.slice(0, mid).join(" "),
			role: "主干前部 (主谓结构/从句)",
			posTag: "subject"
		});
		chunks.push({
			phrase: words.slice(mid).join(" "),
			role: "主干后部 (宾语/状语搭配)",
			posTag: "predicate"
		});
	}
	const cleanBlank = blankWord.replace(/^[^\w']+|[^\w']+$/g, "");
	const sentenceWithBlank = text.replace(cleanBlank, "_____");
	return {
		grammarPoint,
		patternTemplate,
		explanation,
		chunks,
		cloze: {
			blankWord: cleanBlank,
			sentenceWithBlank,
			hint,
			options: uniqueOpts.slice(0, 4)
		}
	};
}
function buildLocalSongFromSrt(title, artist, audioUrl, parsedLines) {
	return parsedLines.map((line, idx) => {
		const analysis = analyzeLineGrammarLocally(line.text);
		return {
			id: line.id || `line-${idx + 1}`,
			startTime: line.startTime,
			endTime: line.endTime,
			text: line.text,
			translation: line.translation || "（跟随原唱音频沉浸听辨）",
			grammarPoint: analysis.grammarPoint,
			patternTemplate: analysis.patternTemplate,
			explanation: analysis.explanation,
			chunks: analysis.chunks,
			cloze: analysis.cloze
		};
	});
}
var SongImportModal = ({ isOpen, onClose, onSongImported }) => {
	const [tab, setTab] = (0, import_react.useState)("upload");
	const [title, setTitle] = (0, import_react.useState)("");
	const [artist, setArtist] = (0, import_react.useState)("");
	const [audioFile, setAudioFile] = (0, import_react.useState)(null);
	const [audioUrl, setAudioUrl] = (0, import_react.useState)("");
	const [audioBase64, setAudioBase64] = (0, import_react.useState)("");
	const [srtFile, setSrtFile] = (0, import_react.useState)(null);
	const [srtContent, setSrtContent] = (0, import_react.useState)("");
	const [parsedLines, setParsedLines] = (0, import_react.useState)([]);
	const [persistToDisk, setPersistToDisk] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [packageJsonText, setPackageJsonText] = (0, import_react.useState)("");
	const [promptTitle, setPromptTitle] = (0, import_react.useState)("");
	const [promptArtist, setPromptArtist] = (0, import_react.useState)("");
	const [promptLyrics, setPromptLyrics] = (0, import_react.useState)("");
	const [mp3Duration, setMp3Duration] = (0, import_react.useState)(0);
	const audioInputRef = (0, import_react.useRef)(null);
	const srtInputRef = (0, import_react.useRef)(null);
	const packageFileInputRef = (0, import_react.useRef)(null);
	if (!isOpen) return null;
	const formatSeconds = (secs) => {
		if (!Number.isFinite(secs) || secs <= 0) return "00:00";
		const m = Math.floor(secs / 60);
		const s = Math.floor(secs % 60);
		return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
	};
	const handleAudioFileChange = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			setAudioFile(file);
			const url = URL.createObjectURL(file);
			setAudioUrl(url);
			const testAudio = document.createElement("audio");
			testAudio.preload = "metadata";
			testAudio.src = url;
			testAudio.onloadedmetadata = () => {
				if (testAudio.duration && Number.isFinite(testAudio.duration) && testAudio.duration > 0) setMp3Duration(testAudio.duration);
			};
			const reader = new FileReader();
			reader.onload = (ev) => {
				setAudioBase64(ev.target?.result);
			};
			reader.readAsDataURL(file);
			if (!title) setTitle(file.name.replace(/\.[^/.]+$/, ""));
		}
	};
	const handleSrtFileChange = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			setSrtFile(file);
			const reader = new FileReader();
			reader.onload = (event) => {
				const text = event.target?.result || "";
				if (text.includes("\0")) {
					const altReader = new FileReader();
					altReader.onload = (altEv) => {
						const altText = altEv.target?.result || "";
						setSrtContent(altText);
						const lines = parseSubtitles(altText, mp3Duration || 180);
						setParsedLines(lines);
					};
					altReader.readAsText(file, "utf-16le");
					return;
				}
				setSrtContent(text);
				const lines = parseSubtitles(text, mp3Duration || 180);
				setParsedLines(lines);
			};
			reader.readAsText(file, "utf-8");
		}
	};
	const handleSrtTextChange = (text) => {
		setSrtContent(text);
		if (text.trim()) {
			const lines = parseSubtitles(text, mp3Duration || 180);
			setParsedLines(lines);
		} else setParsedLines([]);
	};
	const persistCourseToServerDisk = async (song) => {
		try {
			const data = await (await fetch("/api/save-song-course", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					song,
					audioBase64: audioBase64 || void 0,
					audioFileName: audioFile?.name
				})
			})).json();
			if (data.success && data.song) return data.song;
		} catch (e) {
			console.warn("Failed to save course to server disk, keeping local session:", e);
		}
		return song;
	};
	const handleInstantLocalImport = async () => {
		if (!parsedLines.length) {
			setError("请先上传或粘贴带有时间轴的 SRT / LRC 歌词字幕");
			return;
		}
		setLoading(true);
		setError("");
		const effectiveDuration = mp3Duration > 0 ? mp3Duration : parsedLines.length > 0 ? parsedLines[parsedLines.length - 1].endTime + 3 : 180;
		const localLines = buildLocalSongFromSrt(title.trim() || "用户导入歌曲", artist.trim() || "未知歌手", audioUrl, parsedLines);
		let finalSong = {
			id: `course-${Date.now()}`,
			title: title.trim() || "用户导入歌曲",
			artist: artist.trim() || "未知歌手",
			cefrLevel: "B1",
			genre: "User MP3 Audio",
			duration: effectiveDuration,
			grammarTheme: "原声 MP3 磨耳朵与句法剖析",
			coverImage: "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
			audioUrl,
			tempoBpm: 90,
			keySignature: "C Major",
			coreSummary: `已成功对齐您的本地 MP3 原声音频（总时长 ${formatSeconds(effectiveDuration)}）与全曲 ${parsedLines.length} 行 SRT 歌词时间戳，支持原声播放、单句循环与语法透视。`,
			keyTakeawayPatterns: [{
				name: "原声音频时间轴毫秒对齐",
				formula: "根据 SRT 歌词精确打点同步",
				exampleInSong: parsedLines[0]?.text || "",
				dailyExample: "在原声歌曲节奏中掌握真实连读与时态语感"
			}],
			lines: localLines
		};
		if (persistToDisk) finalSong = await persistCourseToServerDisk(finalSong);
		setLoading(false);
		onSongImported(finalSong);
		onClose();
	};
	const handleAiEnrichSubmit = async (e) => {
		e.preventDefault();
		if (!parsedLines.length) {
			setError("请上传或粘贴有效的 SRT / LRC 歌词字幕");
			return;
		}
		setLoading(true);
		setError("");
		const effectiveDuration = mp3Duration > 0 ? mp3Duration : parsedLines.length > 0 ? parsedLines[parsedLines.length - 1].endTime + 3 : 180;
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 25e3);
		let finalSong;
		try {
			const res = await fetch("/api/enrich-srt-grammar", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				signal: controller.signal,
				body: JSON.stringify({
					title: title.trim() || "用户导入歌曲",
					artist: artist.trim() || "原创 / 导入",
					lines: parsedLines
				})
			});
			clearTimeout(timeoutId);
			const songData = (await res.json()).song || {};
			finalSong = {
				id: `course-${Date.now()}`,
				title: title || songData.title || "自定义歌曲",
				artist: artist || songData.artist || "演唱者",
				cefrLevel: songData.cefrLevel || "B1",
				genre: "User MP3 Audio",
				duration: effectiveDuration,
				grammarTheme: songData.grammarTheme || "原声歌词语法精讲",
				coverImage: "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
				audioUrl,
				tempoBpm: 90,
				keySignature: "C Major",
				coreSummary: songData.coreSummary || `已成功绑定您的本地 MP3 原声音频与全曲共 ${parsedLines.length} 行字幕时间轴！`,
				keyTakeawayPatterns: songData.keyTakeawayPatterns || [],
				lines: songData.lines && songData.lines.length > 0 ? songData.lines.map((l, i) => ({
					id: l.id || `line-${i}`,
					startTime: l.startTime,
					endTime: l.endTime,
					text: l.text,
					translation: l.translation || "",
					grammarPoint: l.grammarPoint || "重点语法句",
					patternTemplate: l.patternTemplate,
					explanation: l.explanation || "",
					chunks: l.chunks || [{
						phrase: l.text,
						role: "歌词原句"
					}],
					cloze: l.cloze
				})) : buildLocalSongFromSrt(title, artist, audioUrl, parsedLines)
			};
		} catch (err) {
			clearTimeout(timeoutId);
			console.warn("AI enrichment fetch warning, falling back to local grammar engine:", err);
			finalSong = {
				id: `course-${Date.now()}`,
				title: title.trim() || "用户导入歌曲",
				artist: artist.trim() || "未知歌手",
				cefrLevel: "B1",
				genre: "User MP3 Audio",
				duration: effectiveDuration,
				grammarTheme: "原声 MP3 与字幕同步教学",
				coverImage: "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
				audioUrl,
				tempoBpm: 90,
				keySignature: "C Major",
				coreSummary: `已成功对齐您的本地 MP3 原声音频（总时长 ${formatSeconds(effectiveDuration)}）与全曲共 ${parsedLines.length} 行歌词时间戳，支持原声播放与单句循环。`,
				keyTakeawayPatterns: [{
					name: "原声音频时间轴毫秒对齐",
					formula: "根据 SRT 歌词精确打点同步",
					exampleInSong: parsedLines[0]?.text || "",
					dailyExample: "在原声歌曲节奏中掌握真实连读与时态语感"
				}],
				lines: buildLocalSongFromSrt(title, artist, audioUrl, parsedLines)
			};
		}
		if (persistToDisk) finalSong = await persistCourseToServerDisk(finalSong);
		setLoading(false);
		onSongImported(finalSong);
		onClose();
	};
	const handleImportCoursePackage = async (packageData) => {
		try {
			if (!packageData.title || !packageData.lines) throw new Error("课件包格式无效，缺少必要的歌词或标题数据");
			let song = {
				...packageData,
				id: packageData.id || `package-${Date.now()}`,
				isPermanentlySaved: true
			};
			if (persistToDisk) song = await persistCourseToServerDisk(song);
			onSongImported(song);
			onClose();
		} catch (e) {
			setError(e.message || "课件包导入失败");
		}
	};
	const handlePackageFileSelect = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (ev) => {
				try {
					const parsed = JSON.parse(ev.target?.result);
					handleImportCoursePackage(parsed);
				} catch (err) {
					setError("JSON 文件解析失败，请确保格式正确");
				}
			};
			reader.readAsText(file);
		}
	};
	const handleAiAutoSubmit = async (e) => {
		e.preventDefault();
		if (!promptTitle.trim() && !promptLyrics.trim()) {
			setError("请输入歌曲名称或粘贴歌词");
			return;
		}
		setLoading(true);
		setError("");
		try {
			const s = (await (await fetch("/api/analyze-song", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					title: promptTitle.trim(),
					artist: promptArtist.trim(),
					lyrics: promptLyrics.trim()
				})
			})).json()).song;
			if (s) {
				let generatedSong = {
					id: `course-${Date.now()}`,
					title: s.title || promptTitle || "Custom Song",
					artist: s.artist || promptArtist || "Artist",
					cefrLevel: s.cefrLevel || "B1",
					genre: s.genre || "Pop",
					grammarTheme: s.grammarTheme || "核心语法综合拆解",
					coverImage: "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
					tempoBpm: 95,
					keySignature: "C Major",
					coreSummary: s.coreSummary || "",
					keyTakeawayPatterns: s.keyTakeawayPatterns || [],
					lines: (s.lines || []).map((l, i) => ({
						id: `line-${i}`,
						startTime: i * 6,
						endTime: (i + 1) * 6,
						text: l.text,
						translation: l.translation,
						grammarPoint: l.grammarPoint,
						patternTemplate: l.patternTemplate,
						explanation: l.explanation,
						chunks: l.chunks || [],
						cloze: l.cloze
					}))
				};
				if (persistToDisk) generatedSong = await persistCourseToServerDisk(generatedSong);
				onSongImported(generatedSong);
				onClose();
			}
		} catch (err) {
			setError(err.message || "网络请求超时，请重试");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-slate-900",
						children: "导入并固化保存歌曲（可离线分发发布）"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-slate-500 mb-5",
					children: "导入的 MP3 音频与生成的语法课件将永久保存到软件本地文件。发布分发后，学生和教师无需连接 AI 即可 100% 离线复用。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab("upload"),
							className: `flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${tab === "upload" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileAudio, { className: "w-4 h-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MP3 音频 + SRT 字幕导入" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab("package"),
							className: `flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${tab === "package" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderUp, { className: "w-4 h-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "导入已有课件包 (.json)" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab("ai-prompt"),
							className: `flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${tab === "ai-prompt" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-indigo-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "搜歌名 AI 生成" })]
						})
					]
				}),
				tab === "upload" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleAiEnrichSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-slate-700 mb-1",
								children: "歌曲名称 (Song Title)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: title,
								onChange: (e) => setTitle(e.target.value),
								placeholder: "例如: Someone Like You",
								className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-slate-700 mb-1",
								children: "演唱者 (Artist)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: artist,
								onChange: (e) => setArtist(e.target.value),
								placeholder: "例如: Adele",
								className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl border border-slate-200 bg-slate-50/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileAudio, { className: "w-4 h-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-slate-800",
											children: "第一步：选择您的 MP3 歌曲音频文件"
										})]
									}), audioFile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-medium text-emerald-700 flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "原声就绪 (将永久存储)" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									ref: audioInputRef,
									accept: "audio/mp3,audio/*",
									onChange: handleAudioFileChange,
									className: "hidden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => audioInputRef.current?.click(),
										className: "px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0",
										children: audioFile ? "重新选择音频" : "选择本地 MP3 文件"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-slate-500 truncate flex-1",
										children: audioFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-slate-800 font-semibold truncate",
												children: audioFile.name
											}), mp3Duration > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-medium shrink-0",
												children: [
													"全曲时长: ",
													formatSeconds(mp3Duration),
													" (",
													Math.round(mp3Duration),
													"秒)"
												]
											})]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "请选择电脑上的 .mp3 文件 (将写入软件 public/audio 目录)" })
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl border border-slate-200 bg-slate-50/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between mb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-slate-800",
											children: "第二步：导入带时间轴的 SRT / LRC 字幕文件"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									ref: srtInputRef,
									accept: ".srt,.lrc,text/plain",
									onChange: handleSrtFileChange,
									className: "hidden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => srtInputRef.current?.click(),
										className: "px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors cursor-pointer shrink-0",
										children: srtFile ? "重新选择字幕" : "选择 .srt / .lrc 文件"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-slate-500 truncate flex-1",
										children: srtFile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-slate-700",
											children: srtFile.name
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "或者直接在下方文本框中粘贴 SRT 歌词文本" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: srtContent,
									onChange: (e) => handleSrtTextChange(e.target.value),
									rows: 4,
									placeholder: "1\n00:00:02,000 --> 00:00:06,500\nIf you ever find yourself stuck in the middle of the sea\n\n2\n00:00:07,000 --> 00:00:11,500\nI'll sail the world to find you...",
									className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono bg-white"
								}),
								parsedLines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-emerald-800 font-bold flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-emerald-600" }),
												"已识别全曲全部 ",
												parsedLines.length,
												" 行歌词时间轴"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[11px] font-medium text-emerald-700",
											children: [
												"时间跨度: ",
												formatSeconds(parsedLines[0]?.startTime),
												" ~ ",
												formatSeconds(parsedLines[parsedLines.length - 1]?.endTime)
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-h-32 overflow-y-auto space-y-1.5 text-[11px] font-mono text-slate-700 bg-white/80 p-2 rounded-lg border border-emerald-100",
										children: [parsedLines.slice(0, 10).map((l, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-2 border-b border-slate-50 pb-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-slate-400 shrink-0",
													children: [
														(idx + 1).toString().padStart(2, "0"),
														". [",
														formatSeconds(l.startTime),
														" - ",
														formatSeconds(l.endTime),
														"]"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate flex-1 font-sans text-slate-800",
													children: l.text
												}),
												l.translation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate text-slate-500 font-sans text-[10px] max-w-[140px]",
													children: l.translation
												})
											]
										}, idx)), parsedLines.length > 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-center text-[10px] text-slate-400 py-0.5",
											children: [
												"... 其余 ",
												parsedLines.length - 10,
												" 行歌词均已就绪 ..."
											]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								id: "persistCheckbox",
								checked: persistToDisk,
								onChange: (e) => setPersistToDisk(e.target.checked),
								className: "w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "persistCheckbox",
								className: "text-xs font-medium text-amber-950 cursor-pointer",
								children: [
									"固化保存到本地文件目录（写入 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-amber-800",
										children: "data/courses.json"
									}),
									" 及音频库，未来发布软件后所有人免 AI 离线即用）"
								]
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer w-full sm:w-auto text-left",
								children: "取消"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 w-full sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: loading || parsedLines.length === 0,
									onClick: handleInstantLocalImport,
									className: "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 rounded-xl transition-colors cursor-pointer border border-slate-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-3.5 h-3.5 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "极速固化保存 (0秒无需等待)" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading || parsedLines.length === 0,
									className: "flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 rounded-xl shadow-xs transition-colors cursor-pointer",
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "正在批注并存储中..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-200" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI 深度语法拆解并固化" })] })
								})]
							})]
						})
					]
				}),
				tab === "package" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl border border-slate-200 bg-slate-50/60 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderUp, { className: "w-10 h-10 text-emerald-600 mx-auto mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-bold text-slate-900 mb-1",
									children: "上传由其他教师或软件导出的离线课件包 (.json)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-500 mb-4 max-w-md mx-auto",
									children: "课件包内已包含完整的歌词时间轴、中英翻译、语法点拆解、句型公式及卡拉OK填空题，导入即用，完全不需要连接 AI。"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									ref: packageFileInputRef,
									accept: ".json,application/json",
									onChange: handlePackageFileSelect,
									className: "hidden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => packageFileInputRef.current?.click(),
									className: "px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors cursor-pointer",
									children: "选择电脑上的 .json 课程包文件"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold text-slate-700 mb-1",
							children: "或者直接粘贴课件 JSON 内容"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: packageJsonText,
							onChange: (e) => setPackageJsonText(e.target.value),
							rows: 5,
							placeholder: "粘贴包含 title, lines, grammarTheme 的 JSON 数据...",
							className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-amber-500"
						})] }),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer",
								children: "取消"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: !packageJsonText.trim(),
								onClick: () => {
									try {
										const parsed = JSON.parse(packageJsonText.trim());
										handleImportCoursePackage(parsed);
									} catch (e) {
										setError("JSON 文本格式不合法");
									}
								},
								className: "px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-xl shadow-xs transition-colors cursor-pointer",
								children: "导入并加载"
							})]
						})
					]
				}),
				tab === "ai-prompt" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleAiAutoSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-slate-700 mb-1",
								children: "歌曲名称 (Title) *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: promptTitle,
								onChange: (e) => setPromptTitle(e.target.value),
								placeholder: "例如: Yesterday",
								className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-slate-700 mb-1",
								children: "歌手 / 乐队 (Artist)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: promptArtist,
								onChange: (e) => setPromptArtist(e.target.value),
								placeholder: "例如: The Beatles",
								className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold text-slate-700 mb-1",
							children: "歌词文本 (选填，留空由 AI 自动搜索提取)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: promptLyrics,
							onChange: (e) => setPromptLyrics(e.target.value),
							rows: 4,
							placeholder: "可粘贴歌词文本...",
							className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								id: "persistAiCheckbox",
								checked: persistToDisk,
								onChange: (e) => setPersistToDisk(e.target.checked),
								className: "w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "persistAiCheckbox",
								className: "text-xs font-medium text-amber-950 cursor-pointer",
								children: "生成后固化保存到本地文件 (写入本地 courses.json，之后脱机免 AI 可用)"
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: error })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: onClose,
								className: "px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer",
								children: "取消"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg shadow-xs transition-colors cursor-pointer",
								children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI 课程智能构建并保存中..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "生成并固化到本地" })] })
							})]
						})
					]
				})
			]
		})
	});
};
var AudioPlayerBar = ({ currentSong, isPlaying, currentTime, duration, playbackRate, vocalGuide, loopLineIndex, activeLineIndex, onTogglePlay, onSeek, onChangeSpeed, onToggleVocalGuide, onToggleLoopLine, onPrevLine, onNextLine, onReset }) => {
	const formatTime = (secs) => {
		const mins = Math.floor(secs / 60);
		const remainder = Math.floor(secs % 60);
		return `${mins.toString().padStart(2, "0")}:${remainder.toString().padStart(2, "0")}`;
	};
	const progressPercent = duration > 0 ? currentTime / duration * 100 : 0;
	const currentLine = currentSong.lines[activeLineIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-3 shadow-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3.5 w-full md:w-1/4 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: currentSong.coverImage || "/src/assets/images/hero_lyric_grammar_1792579064655.jpg",
							alt: currentSong.title,
							referrerPolicy: "no-referrer",
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-bold text-slate-900 truncate",
								children: currentSong.title
							}), currentSong.audioUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-medium shrink-0",
								children: "原唱MP3"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-medium shrink-0",
								children: "和弦伴奏"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-slate-500 truncate flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentSong.artist }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-amber-600 font-medium truncate",
									children: currentLine?.grammarPoint || currentSong.grammarTheme
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 w-full md:w-2/4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onReset,
								title: "重新播放",
								className: "p-1.5 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onPrevLine,
								title: "上一句 (跳到上一重点语法句)",
								className: "p-1.5 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onTogglePlay,
								className: "w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-transform active:scale-95 shadow-md cursor-pointer",
								children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-5 h-5 fill-current" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-5 h-5 fill-current ml-0.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onNextLine,
								title: "下一句 (跳到下一重点语法句)",
								className: "p-1.5 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onToggleLoopLine,
								title: loopLineIndex !== null ? "单句循环中 (重点突破该句语法)" : "开启当前句单句循环",
								className: `p-1.5 rounded-md transition-colors cursor-pointer ${loopLineIndex !== null ? "bg-amber-100 text-amber-700" : "text-slate-500 hover:text-slate-800"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat1, { className: "w-4 h-4" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono text-slate-500 tabular-nums w-10 text-right",
								children: formatTime(currentTime)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								onClick: (e) => {
									const rect = e.currentTarget.getBoundingClientRect();
									onSeek((e.clientX - rect.left) / rect.width * duration);
								},
								className: "flex-1 h-2 bg-slate-200 rounded-full cursor-pointer relative overflow-hidden group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-amber-500 rounded-full transition-all duration-75 relative",
									style: { width: `${progressPercent}%` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-mono text-slate-500 tabular-nums w-10",
								children: formatTime(duration)
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3 w-full md:w-1/4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200",
						children: [
							.75,
							1,
							1.25
						].map((speed) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onChangeSpeed(speed),
							className: `px-2 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${playbackRate === speed ? "bg-white text-slate-900 shadow-xs font-semibold" : "text-slate-600 hover:text-slate-900"}`,
							children: speed === .75 ? "0.75x慢" : `${speed}x`
						}, speed))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onToggleVocalGuide,
						title: vocalGuide ? "人声跟唱领读：已开启" : "人声跟唱领读：已静音",
						className: `flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${vocalGuide ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-700"}`,
						children: [vocalGuide ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5 text-amber-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-3.5 h-3.5 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "人声伴读"
						})]
					})]
				})
			]
		})
	});
};
function App() {
	const [songs, setSongs] = (0, import_react.useState)(CURATED_SONGS);
	const [currentSong, setCurrentSong] = (0, import_react.useState)(CURATED_SONGS[0]);
	const [activeMode, setActiveMode] = (0, import_react.useState)("listen");
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [currentTime, setCurrentTime] = (0, import_react.useState)(0);
	const [duration, setDuration] = (0, import_react.useState)(30);
	const [playbackRate, setPlaybackRate] = (0, import_react.useState)(1);
	const [vocalGuide, setVocalGuide] = (0, import_react.useState)(true);
	const [loopLineIndex, setLoopLineIndex] = (0, import_react.useState)(null);
	const [selectedGrammarLineIdx, setSelectedGrammarLineIdx] = (0, import_react.useState)(0);
	const [builderPattern, setBuilderPattern] = (0, import_react.useState)(void 0);
	const [isImportModalOpen, setIsImportModalOpen] = (0, import_react.useState)(false);
	const [syncOffset, setSyncOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		async function loadSavedCourses() {
			try {
				const data = await (await fetch("/api/saved-courses")).json();
				if (data.success && Array.isArray(data.courses) && data.courses.length > 0) setSongs((prev) => {
					const existingIds = new Set(prev.map((s) => s.id));
					return [...data.courses.filter((c) => !existingIds.has(c.id)), ...prev];
				});
			} catch (err) {
				console.warn("Could not load saved courses from disk:", err);
			}
		}
		loadSavedCourses();
	}, []);
	const handleExportCoursePackage = () => {
		const jsonStr = JSON.stringify(currentSong, null, 2);
		const blob = new Blob([jsonStr], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `LyricGrammar_${currentSong.title.replace(/\s+/g, "_")}_CoursePackage.json`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};
	(0, import_react.useEffect)(() => {
		audioEngine.setSong(currentSong);
		const lastLine = currentSong.lines[currentSong.lines.length - 1];
		const initialDuration = currentSong.duration || (lastLine ? Math.max(lastLine.endTime + 2, 60) : 180);
		setDuration(initialDuration);
		setCurrentTime(0);
		setSyncOffset(0);
		setIsPlaying(false);
		setSelectedGrammarLineIdx(0);
	}, [currentSong]);
	(0, import_react.useEffect)(() => {
		audioEngine.onTimeUpdate((time, dur) => {
			setCurrentTime(time);
			if (dur && Number.isFinite(dur) && dur > 0) setDuration(dur);
		});
		audioEngine.onDurationChange((dur) => {
			if (dur && Number.isFinite(dur) && dur > 0) setDuration(dur);
		});
		audioEngine.onEnded(() => {
			setIsPlaying(false);
		});
	}, []);
	const calibratedTime = Math.max(0, currentTime + syncOffset);
	let activeLineIndex = 0;
	if (currentSong.lines && currentSong.lines.length > 0) {
		let candidate = 0;
		for (let i = 0; i < currentSong.lines.length; i++) if (calibratedTime >= currentSong.lines[i].startTime) candidate = i;
		else break;
		activeLineIndex = candidate;
	}
	const handleAdjustSyncOffset = (delta) => {
		setSyncOffset((prev) => Math.round((prev + delta) * 10) / 10);
	};
	const handleResetSyncOffset = () => {
		setSyncOffset(0);
	};
	const handleTogglePlay = () => {
		if (isPlaying) {
			audioEngine.pause();
			setIsPlaying(false);
		} else {
			audioEngine.play();
			setIsPlaying(true);
		}
	};
	const handleSeek = (seconds) => {
		audioEngine.seek(seconds);
		setCurrentTime(seconds);
	};
	const handleChangeSpeed = (speed) => {
		setPlaybackRate(speed);
		audioEngine.setPlaybackRate(speed);
	};
	const handleToggleVocalGuide = () => {
		const nextVal = !vocalGuide;
		setVocalGuide(nextVal);
		audioEngine.setVocalGuide(nextVal);
	};
	const handleToggleLoopLine = (index) => {
		const targetIdx = index !== void 0 ? index : activeLineIndex;
		if (loopLineIndex === targetIdx) {
			setLoopLineIndex(null);
			audioEngine.setLoopLine(null);
		} else {
			setLoopLineIndex(targetIdx);
			audioEngine.setLoopLine(targetIdx);
		}
	};
	const handlePrevLine = () => {
		const prevIdx = Math.max(0, activeLineIndex - 1);
		const targetLine = currentSong.lines[prevIdx];
		if (targetLine) handleSeek(Math.max(0, targetLine.startTime - syncOffset));
	};
	const handleNextLine = () => {
		const nextIdx = Math.min(currentSong.lines.length - 1, activeLineIndex + 1);
		const targetLine = currentSong.lines[nextIdx];
		if (targetLine) handleSeek(Math.max(0, targetLine.startTime - syncOffset));
	};
	const handleReset = () => {
		audioEngine.stop();
		setIsPlaying(false);
		setCurrentTime(0);
	};
	const handleSpeakLine = (text) => {
		audioEngine.speakLine(text);
	};
	const handleSwitchToGrammarLens = (lineIdx) => {
		setSelectedGrammarLineIdx(lineIdx);
		setActiveMode("grammar");
	};
	const handleStartSentenceBuilder = (pattern) => {
		setBuilderPattern(pattern);
		setActiveMode("builder");
	};
	const handleSongImported = (newSong) => {
		setSongs((prev) => [newSong, ...prev]);
		setCurrentSong(newSong);
		setActiveMode("listen");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 text-slate-900 pb-28 selection:bg-amber-100 selection:text-amber-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				activeMode,
				onSelectMode: setActiveMode,
				onOpenImport: () => setIsImportModalOpen(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "max-w-7xl mx-auto px-6 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PedagogyHero, {
						currentSong,
						onStartLearn: handleTogglePlay,
						onSelectMode: setActiveMode
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between flex-wrap gap-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-2xs overflow-x-auto max-w-full min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveMode("listen"),
									className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${activeMode === "listen" ? "bg-amber-500 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
									children: "01. 歌词沉浸赏析"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveMode("grammar"),
									className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${activeMode === "grammar" ? "bg-amber-500 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
									children: "02. 语法成分透镜"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveMode("karaoke"),
									className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${activeMode === "karaoke" ? "bg-amber-500 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
									children: "03. 卡拉OK填空挑战"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveMode("builder"),
									className: `px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${activeMode === "builder" ? "bg-amber-500 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"}`,
									children: "04. 举一反三·造句工坊"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-slate-500 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "正在学习:" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-slate-800",
										children: [
											"《",
											currentSong.title,
											"》"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-amber-700 font-medium",
										children: currentSong.grammarTheme
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleExportCoursePackage,
								title: "将本歌曲及其完整语法课件导出为单文件 .json 离线包，分发后完全免 AI 即开即用",
								className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderDown, { className: "w-3.5 h-3.5 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "导出离线课件包 (.json)" })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12",
						children: [
							activeMode === "listen" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LyricReader, {
								song: currentSong,
								activeLineIndex,
								loopLineIndex,
								isPlaying,
								currentTime,
								syncOffset,
								onSelectLine: (idx) => {
									const targetLine = currentSong.lines[idx];
									if (targetLine) {
										handleSeek(Math.max(0, targetLine.startTime - syncOffset));
										if (!isPlaying) handleTogglePlay();
									}
								},
								onSpeakLine: handleSpeakLine,
								onToggleLoopLine: handleToggleLoopLine,
								onSwitchToGrammarLens: handleSwitchToGrammarLens,
								onAdjustSyncOffset: handleAdjustSyncOffset,
								onResetSyncOffset: handleResetSyncOffset
							}),
							activeMode === "grammar" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrammarLens, {
								song: currentSong,
								selectedLineIndex: selectedGrammarLineIdx,
								onSelectLine: setSelectedGrammarLineIdx,
								onSpeakLine: handleSpeakLine,
								onStartSentenceBuilder: handleStartSentenceBuilder
							}),
							activeMode === "karaoke" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KaraokeChallenge, {
								song: currentSong,
								onSpeakLine: handleSpeakLine
							}),
							activeMode === "builder" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SentenceBuilder, {
								song: currentSong,
								initialPattern: builderPattern,
								onSpeakText: handleSpeakLine
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongSelector, {
						songs,
						selectedSongId: currentSong.id,
						onSelectSong: (s) => {
							setCurrentSong(s);
						},
						onOpenImportModal: () => setIsImportModalOpen(true)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SongImportModal, {
				isOpen: isImportModalOpen,
				onClose: () => setIsImportModalOpen(false),
				onSongImported: handleSongImported
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioPlayerBar, {
				currentSong,
				isPlaying,
				currentTime,
				duration,
				playbackRate,
				vocalGuide,
				loopLineIndex,
				activeLineIndex,
				onTogglePlay: handleTogglePlay,
				onSeek: handleSeek,
				onChangeSpeed: handleChangeSpeed,
				onToggleVocalGuide: handleToggleVocalGuide,
				onToggleLoopLine: () => handleToggleLoopLine(),
				onPrevLine: handlePrevLine,
				onNextLine: handleNextLine,
				onReset: handleReset
			})
		]
	});
}
var SplitComponent = App;
//#endregion
export { SplitComponent as component };
