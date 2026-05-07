/**
 * 本草万象 - 统一数据模块
 * 所有页面共享的药物、产地、文物等数据
 */

// ========== 药物数据 ==========
const HERB_DATA = [
  {
    id: 'renshen', name: '人参', nameTraditional: '人參', latin: 'Panax ginseng C. A. Mey.',
    category: '草部', confidence: 5, conclusionType: 'match', conclusionText: '形态一致 · 古今对应',
    wordCount: 1892, ancientNames: '人參、人薓',
    origin: '五加科植物人参的干燥根',
    songLocations: ['上党', '辽东'], modernLocations: ['吉林', '辽宁'],
    description: '味甘微寒，主补五脏，安精神，定魂魄，止惊悸，除邪气，明目，开心益智。久服，轻身延年。',
    images: [
      { id: 'ancient_main', type: 'ancient', title: '《本草图经》人参全图', source: '《本草图经》· 明刊本 · 卷三', caption: '绘有人参全株形态，根如人形，叶为掌状复叶', version: '明万历刊本' },
      { id: 'ancient_detail', type: 'ancient', title: '人参根形详图', source: '《本草纲目》· 清刊本', caption: '特写人参根部人形特征，标注"根如人形者神"', version: '清乾隆重刊本' },
      { id: 'ancient_herbal', type: 'ancient', title: '人参采收图', source: '《救荒本草》· 明永乐刊本', caption: '描绘野外采挖人参场景，可见茎叶与根部', version: '明永乐四年刊本' },
      { id: 'modern_photo', type: 'modern', title: '人参鲜品标本', source: '中国医学科学院药用植物研究所', caption: '东北长白山栽培人参鲜品，可见掌状复叶与伞形花序', version: '2024年摄制' },
      { id: 'modern_root', type: 'modern', title: '人参根部高清', source: '吉林人参研究院', caption: '人参主根与支根特写，可见明显的芦头与须根', version: '2023年摄制' }
    ],
    parts: {
      root: { name: '根部', similarity: 92, ancient: '根如人形者善，百徹如人形者最上', modern: '主根圆柱形，有分枝，形似人形', detail: '古图所绘人参根部呈人形，有头、身、四肢之分，与现代人参形态高度一致。《图经》载"根如人形者神"，与现代观察相符。' },
      leaf: { name: '叶片', similarity: 88, ancient: '叶如野葛而有毛', modern: '掌状复叶，小叶5枚', detail: '古图所示叶片为掌状复叶，小叶5枚，与人参加工品的叶形一致。《图经》描述"叶如野葛而有毛"，符合人参叶特征。' },
      flower: { name: '花朵', similarity: 85, ancient: '花小而黄，顶生', modern: '伞形花序，花小而黄', detail: '古图所绘花小而黄，顶生伞形花序，与人参考察记录相符。《图经》未详述花色，但图示与现代观察一致。' },
      stem: { name: '茎部', similarity: 90, ancient: '茎高三、四尺', modern: '茎直立，圆柱形，高30-60cm', detail: '古图所示茎直立，圆柱形，与人参茎形态相符。茎高30-60厘米，表面光滑，符合《图经》描述。' }
    },
    evidence: [
      { type: 'core', title: '文献依据', body: '《本草图经》卷三："人参生上党山谷及辽东，根如人形者神。"《名医别录》载其形态特征与今之东北人参相符。', source: '《本草图经》', reliability: '高' },
      { type: 'core', title: '分类学依据', body: '根据《中国植物志》记载，五加科人参属植物Panax ginseng主要分布于中国东北及朝鲜半岛，与宋代文献记载产地高度吻合。', source: '《中国植物志》', reliability: '高' },
      { type: 'aux', title: '考古出土实物', body: '河南洛阳北宋墓葬出土药物遗存中，经鉴定含有人参成分，形态特征与今之栽培人参相近。', source: '洛阳考古所', reliability: '中' },
      { type: 'aux', title: '现代产区调查', body: '项目组2024年实地考察吉林长白山人参种植基地，对野山参及园参形态进行详细记录与古图比对分析。', source: '实地调查', reliability: '高' }
    ],
    // 考证原文
    textEvidence: [
      { source: '《本草图经》卷三', text: '人参，味甘微寒，主补五脏，安精神，定魂魄，止惊悸，除邪气，明目，开心益智。久服，轻身延年。生上党山谷及辽东。' },
      { source: '《名医别录》', text: '人参生上党郡，在冀州西南，今魏国辽东及高丽亦有之。根如人形者善，百徹如人形者最上。' },
      { source: '《本草经集注》陶弘景', text: '上党郡在冀州西南，今魏国辽东及高丽亦有之。根状如人者善，百徹如人形者最上。' }
    ],
    // 关联典籍
    relatedClassics: [
      { title: '《神农本草经》', relation: '上品', desc: '列为上品，载"主补五脏，安精神"' },
      { title: '《本草纲目》', relation: '草部·人参', desc: '李时珍增补大量临床应用' },
      { title: '《名医别录》', relation: '上品', desc: '补充产地与品质鉴别' }
    ],
    // 方剂应用
    formulas: [
      { name: '四君子汤', composition: '人参、白术、茯苓、甘草', effect: '益气健脾', source: '《太平惠民和剂局方》' },
      { name: '生脉散', composition: '人参、麦冬、五味子', effect: '益气生津，敛阴止汗', source: '《医学启源》' },
      { name: '参附汤', composition: '人参、附子', effect: '回阳救逆，益气固脱', source: '《正体类要》' }
    ]
  },
  {
    id: 'huangqi', name: '黄芪', nameTraditional: '黃芪', latin: 'Astragalus mongholicus',
    category: '草部', confidence: 4, conclusionType: 'migrate', conclusionText: '产地变迁 · 山西→甘肃',
    wordCount: 1654, ancientNames: '黃芪、黃耆',
    origin: '豆科植物蒙古黄芪的干燥根',
    songLocations: ['山西', '陕西'], modernLocations: ['甘肃', '内蒙古'],
    description: '味甘微温，主痈疽久败疮，排脓止痛，大风癞疾，五痔鼠瘘，补虚，小儿百病。',
    images: [
      { id: 'ancient_main', type: 'ancient', title: '《本草图经》黄芪全图', source: '《本草图经》· 明刊本', caption: '绘有黄芪全株，根茎粗壮，叶片对生', version: '明万历刊本' },
      { id: 'modern_photo', type: 'modern', title: '黄芪药材标本', source: '中国中医科学院', caption: '蒙古黄芪干燥根切片，可见菊花心纹理', version: '2024年摄制' }
    ],
    parts: {
      root: { name: '根部', similarity: 85, ancient: '根长二三尺，皮黄肉白', modern: '圆柱形，表面淡棕黄色', detail: '古图所绘黄芪根部粗壮，根皮黄色，与今之黄芪特征相符。' },
      leaf: { name: '叶片', similarity: 80, ancient: '叶似槐叶而微尖', modern: '奇数羽状复叶', detail: '古图叶片为羽状复叶，与今之黄芪叶形基本一致。' }
    },
    evidence: [
      { type: 'core', title: '文献依据', body: '《本草图经》载黄芪产地为山西、陕西，与今之黄芪产区变迁历史相符。', source: '《本草图经》', reliability: '高' },
      { type: 'aux', title: '产区调查', body: '现代黄芪主产区已转移至甘肃、内蒙古，与宋时产地有变迁。', source: '实地调查', reliability: '高' }
    ],
    textEvidence: [{ source: '《本草图经》', text: '黄芪，味甘微温，主痈疽久败疮，排脓止痛。生蜀郡山谷及白水。' }],
    relatedClassics: [{ title: '《神农本草经》', relation: '上品', desc: '列为上品' }],
    formulas: [{ name: '补中益气汤', composition: '黄芪、人参、白术、甘草等', effect: '补中益气，升阳举陷', source: '《脾胃论》' }]
  },
  {
    id: 'danggui', name: '当归', nameTraditional: '當歸', latin: 'Angelica sinensis',
    category: '草部', confidence: 5, conclusionType: 'match', conclusionText: '形态一致 · 产地延续',
    wordCount: 2103, ancientNames: '當歸、乾歸',
    origin: '伞形科植物当归的干燥根',
    songLocations: ['甘肃岷县'], modernLocations: ['甘肃岷县'],
    description: '味甘辛温，主咳逆上气，温疟寒热，妇人漏下绝子，诸恶疮疡。',
    images: [
      { id: 'ancient_main', type: 'ancient', title: '《本草图经》当归全图', source: '《本草图经》· 明刊本', caption: '绘有当归全株，根黄黑色，肉白多脂', version: '明万历刊本' },
      { id: 'modern_photo', type: 'modern', title: '岷当归药材标本', source: '甘肃岷县当归研究所', caption: '甘肃岷县产当归全根，主根粗短，支根数条，香气浓郁', version: '2024年摄制' }
    ],
    parts: {
      root: { name: '根部', similarity: 95, ancient: '根黄黑色，肉白多脂', modern: '主根粗短，支根数条', detail: '古今产地一致，形态高度吻合，岷当归至今仍为道地药材。' }
    },
    evidence: [
      { type: 'core', title: '文献依据', body: '《本草图经》载当归主产甘肃岷县，与今之岷当归产地完全一致。', source: '《本草图经》', reliability: '高' }
    ],
    textEvidence: [{ source: '《本草图经》', text: '当归，味甘辛温，主咳逆上气。生陇西川谷。' }],
    relatedClassics: [{ title: '《神农本草经》', relation: '中品', desc: '列为中品' }],
    formulas: [{ name: '四物汤', composition: '当归、川芎、白芍、熟地', effect: '补血调经', source: '《太平惠民和剂局方》' }]
  },
  {
    id: 'danshen', name: '丹参', nameTraditional: '丹參', latin: 'Salvia miltiorrhiza',
    category: '草部', confidence: 3, conclusionType: 'migrate', conclusionText: '形态存疑 · 需进一步考证',
    wordCount: 892, ancientNames: '丹參、郄蟬草',
    origin: '唇形科植物丹参的干燥根及根茎',
    songLocations: ['陕西', '河南'], modernLocations: ['山东', '四川'],
    description: '味苦微寒，主心腹邪气，肠鸣幽幽如走水，寒热积聚，破癥除瘕。',
    images: [
      { id: 'ancient_main', type: 'ancient', title: '《本草图经》丹参图', source: '《本草图经》· 明刊本', caption: '绘有丹参全株，根赤色，叶对生', version: '明万历刊本' },
      { id: 'modern_photo', type: 'modern', title: '丹参鲜品标本', source: '山东省中医药研究院', caption: '丹参干燥根茎，根砖红色或红棕色', version: '2024年摄制' }
    ],
    parts: {
      root: { name: '根部', similarity: 70, ancient: '根赤色', modern: '根砖红色或红棕色', detail: '古图所示根色偏暗，与今之丹参砖红色有差异，存疑。' }
    },
    evidence: [
      { type: 'aux', title: '形态存疑', body: '古图所绘与今之丹参形态存在差异，需进一步考证是否为同名异物。', source: '项目研究', reliability: '中' }
    ],
    textEvidence: [{ source: '《本草图经》', text: '丹参，味苦微寒，主心腹邪气。生桐柏山川谷及太山。' }],
    relatedClassics: [{ title: '《神农本草经》', relation: '中品', desc: '列为中品' }],
    formulas: [{ name: '丹参饮', composition: '丹参、檀香、砂仁', effect: '活血化瘀，行气止痛', source: '《时方歌括》' }]
  },
  {
    id: 'baizhu', name: '白术', nameTraditional: '白術', latin: 'Atractylodes macrocephala',
    category: '草部', confidence: 4, conclusionType: 'match', conclusionText: '形态一致 · 古今对应',
    wordCount: 1245, ancientNames: '白術、山薊',
    origin: '菊科植物白术的干燥根茎',
    songLocations: ['浙江', '安徽'], modernLocations: ['浙江', '安徽'],
    description: '味苦甘温，主风寒湿痹，死肌痉疸，止汗除热消食。',
    images: [
      { id: 'ancient_main', type: 'ancient', title: '《本草图经》白术图', source: '《本草图经》· 明刊本', caption: '绘有白术全株，根茎肥厚', version: '明万历刊本' },
      { id: 'modern_photo', type: 'modern', title: '白术药材标本', source: '浙江中医药大学', caption: '白术干燥根茎，呈拳状肥厚', version: '2024年摄制' }
    ],
    parts: {
      root: { name: '根茎', similarity: 88, ancient: '根如指大，有须根', modern: '根茎肥厚，呈拳状', detail: '古图与今之白术根茎形态基本吻合。' }
    },
    evidence: [
      { type: 'core', title: '文献依据', body: '《本草图经》载白术产浙江、安徽，与今之产地一致。', source: '《本草图经》', reliability: '高' }
    ],
    textEvidence: [{ source: '《本草图经》', text: '白术，味苦甘温，主风寒湿痹。生郑山山谷及汉中。' }],
    relatedClassics: [{ title: '《神农本草经》', relation: '上品', desc: '列为上品，名"术"' }],
    formulas: [{ name: '四君子汤', composition: '人参、白术、茯苓、甘草', effect: '益气健脾', source: '《太平惠民和剂局方》' }]
  },
  {
    id: 'fuling', name: '茯苓', nameTraditional: '茯苓', latin: 'Poria cocos',
    category: '木部', confidence: 2, conclusionType: 'doubt', conclusionText: '仅文献记载 · 无实物佐证',
    wordCount: 567, ancientNames: '茯苓、伏靈',
    origin: '多孔菌科真菌茯苓的干燥菌核',
    songLocations: ['云南', '安徽'], modernLocations: ['云南', '湖北'],
    description: '味甘平，主胸胁逆气，忧恚惊邪恐悸，心下结痛，寒热烦满。',
    images: [
      { id: 'ancient_main', type: 'ancient', title: '《本草图经》茯苓图', source: '《本草图经》· 明刊本', caption: '绘有茯苓形态，大者如拳，皮黑肉白', version: '明万历刊本' },
      { id: 'modern_photo', type: 'modern', title: '茯苓菌核标本', source: '云南普洱茯苓研究所', caption: '茯苓干燥菌核，类球形或不规则块状', version: '2024年摄制' }
    ],
    parts: {
      root: { name: '菌核', similarity: 60, ancient: '大者如拳，皮黑肉白', modern: '菌核类球形或不规则块状', detail: '古图所绘形态与今之茯苓菌核差异较大，且无实物佐证。' }
    },
    evidence: [
      { type: 'aux', title: '文献记载', body: '仅有《图经》文字记载，缺乏考古出土实物佐证。', source: '文献研究', reliability: '低' }
    ],
    textEvidence: [{ source: '《本草图经》', text: '茯苓，味甘平，主胸胁逆气。生太山山谷及华山。' }],
    relatedClassics: [{ title: '《神农本草经》', relation: '上品', desc: '列为上品' }],
    formulas: [{ name: '五苓散', composition: '茯苓、猪苓、泽泻、白术、桂枝', effect: '利水渗湿，温阳化气', source: '《伤寒论》' }]
  }
];

// ========== 产地/地图数据 ==========
const MAP_DATA = {
  locations: [
    { id: 'shangdang', name: '上党', modern: '今山西省长治市', type: 'ancient', pos: [112.8, 36.2], svgPos: [360, 340], herbs: ['人参', '党参', '黄芪'], desc: '人参主产地',
      timeline: [
        { era: '宋代（960-1127）', text: '《本草图经》记载："人参生上党山谷及辽东"，上党为当时人参主产区。' },
        { era: '明清时期', text: '由于过度采挖，上党人参资源逐渐枯竭，产量大幅下降。' },
        { era: '现代', text: '人参主产区已转移至东北三省，吉林长白山成为最大产区。' }
      ]
    },
    { id: 'liaodong', name: '辽东', modern: '今辽宁省东南部', type: 'ancient', pos: [123.4, 41.8], svgPos: [680, 300], herbs: ['人参'], desc: '人参产区',
      timeline: [
        { era: '宋代', text: '辽东为人参重要产区，与上党齐名。' },
        { era: '现代', text: '辽宁仍为人参产区之一，但产量不如吉林。' }
      ]
    },
    { id: 'guanzhong', name: '关中', modern: '今陕西省中部', type: 'ancient', pos: [108.9, 34.3], svgPos: [320, 400], herbs: ['黄芪', '丹参'], desc: '黄芪产地',
      timeline: [
        { era: '宋代', text: '关中为黄芪传统产区。' },
        { era: '现代', text: '黄芪产区已转移至甘肃、内蒙古。' }
      ]
    },
    { id: 'jilin', name: '吉林', modern: '吉林省长白山', type: 'modern', pos: [126.5, 43.8], svgPos: [750, 200], herbs: ['人参'], desc: '人参最大产区',
      timeline: [
        { era: '现代', text: '吉林长白山为人参最大产区，产量占全国70%以上。' }
      ]
    },
    { id: 'gansu', name: '甘肃', modern: '甘肃省岷县', type: 'modern', pos: [104.1, 34.5], svgPos: [280, 450], herbs: ['黄芪', '当归'], desc: '黄芪/当归产区',
      timeline: [
        { era: '现代', text: '甘肃岷县为当归道地产区（岷归），黄芪主产于陇西。' }
      ]
    }
  ],
  routes: [
    { from: 'shangdang', to: 'jilin', herb: '人参', label: '上党→吉林' },
    { from: 'liaodong', to: 'jilin', herb: '人参', label: '辽东→吉林' },
    { from: 'guanzhong', to: 'gansu', herb: '黄芪', label: '关中→甘肃' }
  ]
};

// ========== 文物数据 ==========
const ARTIFACT_DATA = [
  {
    id: 'painting1', name: '人参图', category: 'painting', type: '宋代药图',
    dynasty: '北宋', material: '绢本设色', location: '故宫博物院',
    relatedHerbs: ['人参'], region: '河南',
    desc: '《本草图经》原图，绘有人参全株形态，根如人形，叶为掌状复叶，花小而黄。',
    detail: '此图为《本草图经》人参条目配图，绘有人参全株形态。图中人参根部呈人形，有头、身、手足之分，符合《图经》"根如人形者神"的描述。画面采用工笔重彩技法，先用淡墨勾勒轮廓，再以矿物颜料层层渲染。叶片采用没骨画法，花蕊以金粉点缀，显示出宋代院体画的典型风格。画面右下角钤有"御览"朱文方印，表明此图曾入藏宋代内府。',
    meta: { period: '北宋政和年间（1111-1118）', size: '纵30.5cm，横25.8cm', material: '绢本设色', catalog: '故00012345' },
    totalImages: 3,
    annotations: [
      { part: 'root', title: '根部', content: '人参根部呈人形，是古人判断人参品质的重要依据。' },
      { part: 'leaf', title: '叶片', content: '掌状复叶，小叶5枚，叶缘有锯齿。' },
      { part: 'flower', title: '花朵', content: '伞形花序，花小而黄，顶生。' }
    ]
  },
  {
    id: 'painting2', name: '写生珍禽图卷（局部）', category: 'art', type: '辅证宋画',
    dynasty: '北宋', material: '绢本设色', location: '故宫博物院',
    relatedHerbs: [], region: '河南',
    desc: '宋徽宗赵佶所作，画中绘有多种珍禽与本草植物，可佐证宋代对植物的观察与描绘。',
    detail: '此卷为宋徽宗赵佶亲笔所绘，画中描绘了多种珍禽与本草植物，体现了宋代对自然界的精细观察。画中若干植物形态与《本草图经》所绘相近，可作为宋代植物绘图风格的旁证。',
    meta: { period: '北宋政和年间', size: '纵27.5cm，横525cm', material: '绢本设色', catalog: '故00067890' },
    totalImages: 5, annotations: []
  },
  {
    id: 'excavation1', name: '北宋墓葬出土药物', category: 'excavation', type: '出土药物',
    dynasty: '北宋', material: '药物遗存', location: '洛阳考古所',
    relatedHerbs: ['人参', '茯苓'], region: '河南',
    desc: '河南洛阳北宋墓葬出土药物遗存，经鉴定含有人参、茯苓等药材成分，为研究宋代用药提供实物证据。',
    detail: '河南洛阳北宋墓葬出土药物遗存，经现代科技检测，鉴定含有人参、茯苓等药材成分。出土药物保存状况良好，部分药材仍可辨识形态。此发现为研究宋代用药提供了珍贵的实物证据，也验证了《本草图经》中关于上党人参的记载。',
    meta: { period: '北宋元祐年间', size: '药包长约15cm', material: '药物遗存', catalog: '洛考2024001' },
    totalImages: 2, annotations: []
  },
  {
    id: 'utensil1', name: '越窑青瓷药瓶', category: 'utensil', type: '宋代药具',
    dynasty: '北宋', material: '青瓷', location: '浙江省博物馆',
    relatedHerbs: [], region: '浙江',
    desc: '越窑青瓷药瓶，瓶身刻有"药"字铭文，为宋代医家储药之用，形制小巧精致。',
    detail: '越窑青瓷药瓶，瓶身刻有"药"字铭文，为宋代医家储药之用。瓶高12cm，口径3cm，形制小巧精致，釉色温润如玉，是越窑青瓷精品。此类药瓶在宋代医家中较为常见，反映了宋代药物储藏的专业化。',
    meta: { period: '北宋', size: '高12cm，口径3cm', material: '越窑青瓷', catalog: '浙博09876' },
    totalImages: 4, annotations: []
  },
  {
    id: 'painting3', name: '黄芪图', category: 'painting', type: '宋代药图',
    dynasty: '北宋', material: '纸本墨笔', location: '国家图书馆',
    relatedHerbs: ['黄芪'], region: '陕西',
    desc: '《本草图经》黄芪原图，绘有根、茎、叶、花全株，根茎粗壮，叶片对生。',
    detail: '《本草图经》黄芪条目配图，绘有黄芪全株形态。根茎粗壮，皮色黄褐，叶为奇数羽状复叶，与今之黄芪形态基本一致。',
    meta: { period: '北宋', size: '纵28cm，横24cm', material: '纸本墨笔', catalog: '国图12345' },
    totalImages: 2, annotations: []
  },
  {
    id: 'art2', name: '果熟来禽图', category: 'art', type: '辅证宋画',
    dynasty: '南宋', material: '绢本设色', location: '故宫博物院',
    relatedHerbs: [], region: '浙江',
    desc: '南宋画家林椿所作，绘有林檎果实与小鸟，可佐证宋代对果类本草的记录。',
    detail: '南宋画家林椿所作，绘有林檎（苹果类）果实与小鸟。画中果实描绘精细，可佐证宋代对果类本草的观察记录。',
    meta: { period: '南宋', size: '纵26.9cm，横27cm', material: '绢本设色', catalog: '故00054321' },
    totalImages: 1, annotations: []
  },
  {
    id: 'utensil2', name: '铜制药碾', category: 'utensil', type: '宋代药具',
    dynasty: '北宋', material: '铜器', location: '上海博物馆',
    relatedHerbs: [], region: '河南',
    desc: '宋代医家研磨药材所用器具，由碾槽与碾轮组成，用于将药材研磨成粉。',
    detail: '宋代医家研磨药材所用器具，由碾槽与碾轮组成。铜制，长25cm，碾轮直径8cm。用于将干燥药材研磨成粉末，是宋代药房必备工具。',
    meta: { period: '北宋', size: '长25cm', material: '铜', catalog: '上博67890' },
    totalImages: 3, annotations: []
  },
  {
    id: 'excavation2', name: '南宋墓葬出土药包', category: 'excavation', type: '出土药物',
    dynasty: '南宋', material: '药物遗存', location: '杭州考古所',
    relatedHerbs: ['当归', '川芎'], region: '浙江',
    desc: '浙江杭州南宋墓葬出土药包，内有当归、川芎等药材，保存较为完好。',
    detail: '浙江杭州南宋墓葬出土药包，内有当归、川芎等药材，保存较为完好。药包以绢布包裹，外有墨书标签，标明药物名称与用量。此发现为了解南宋时期民间用药提供了实物依据。',
    meta: { period: '南宋绍兴年间', size: '药包约10×8cm', material: '绢布包裹药物', catalog: '杭考2024002' },
    totalImages: 2, annotations: []
  }
];

// ========== 典籍卷目数据 ==========
const VOLUME_DATA = [
  { level: 1, name: '卷首', icon: '📜', expanded: true, children: [] },
  { level: 1, name: '卷一', icon: '📜', expanded: true, read: true, children: [
    { level: 2, name: '玉石上品', icon: '🌿', herb: null },
    { level: 2, name: '玉石中品', icon: '🌿', herb: null }
  ]},
  { level: 1, name: '卷二', icon: '📜', expanded: false, read: true, children: [] },
  { level: 1, name: '卷三', icon: '📜', expanded: true, read: true, active: true, children: [
    { level: 2, name: '草部上品', icon: '🌿', active: true, children: [
      { level: 3, name: '人参', icon: '🌱', herb: 'renshen', highlight: true },
      { level: 3, name: '丹参', icon: '🌱', herb: 'danshen' },
      { level: 3, name: '黄芪', icon: '🌱', herb: 'huangqi' }
    ]}
  ]},
  { level: 1, name: '卷四', icon: '📜', expanded: false, read: false, children: [] },
  { level: 1, name: '卷五', icon: '📜', expanded: false, read: false, children: [] }
];

// ========== 工具函数 ==========
function showToast(message, type = 'info') {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;padding:12px 24px;border-radius:8px;font-size:14px;color:#fff;opacity:0;transition:opacity 0.3s;pointer-events:none;font-family:"Noto Sans SC",sans-serif;max-width:400px;';
    document.body.appendChild(toast);
  }
  const colors = { info: 'rgba(0,255,194,0.9)', success: 'rgba(0,200,150,0.9)', warning: 'rgba(230,216,173,0.9)', error: 'rgba(230,57,70,0.9)' };
  toast.style.background = colors[type] || colors.info;
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('已复制到剪贴板', 'success'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('已复制到剪贴板', 'success');
  }
}

function getHerbById(id) {
  return HERB_DATA.find(h => h.id === id);
}

function getHerbByName(name) {
  return HERB_DATA.find(h => h.name === name);
}

function getArtifactById(id) {
  return ARTIFACT_DATA.find(a => a.id === id);
}

function getLocationById(id) {
  return MAP_DATA.locations.find(l => l.id === id);
}
