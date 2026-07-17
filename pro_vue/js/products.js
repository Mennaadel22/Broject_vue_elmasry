const smartphones = [
    {
    id: 1,
    title: "هاتف ريدمي اقتصادي A3 / Redmi A3",
    price: 6200,
    description: "ذاكرة تخزين 128 جيجا مع رام 6 جيجا، بطارية ضخمة تدوم طويلاً وشاشة سلسة.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 2,
    title: "سامسونج جالاكسي A55 / Samsung Galaxy A55",
    price: 18500,
    description: "شاشة سريعة وممتازة من نوع Super AMOLED بتردد 120Hz مع كاميرا احترافية بدقة عالية.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 3,
    title: "ريلمي المميز C67 / Realme C67",
    price: 7900,
    description: "يدعم الشحن فائق السرعة بقدرة 67 واط، مع معالج قوي وتصميم نحيف وعصري.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 4,
    title: "آيفون 13 كسر زيرو / iPhone 13",
    price: 24500,
    description: "حالة ممتازة بنسبة 99%، بطارية أصلية، يدعم شبكات الجيل الخامس وتصوير سينمائي فائق الدقة.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 5,
    title: "أوبو رينو 11F / Oppo Reno 11F",
    price: 12900,
    description: "يتميز بكاميرا سيلفي احترافية وتصميم خلفي جذاب مقاوم لبصمات الأصابع.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 6,
    title: "إنفينيكس هوت 40 برو / Infinix Hot 40 Pro",
    price: 7400,
    description: "يقدم أداءً ممتازاً في الألعاب بفضل المعالج المخصص، مع شاشة كبيرة مريحة للعين.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 7,
    title: "آيفون 15 برو ماكس / iPhone 15 Pro Max",
    price: 52000,
    description: "هيكل متين من التيتانيوم، معالج A17 Pro الخارق، ونظام كاميرات احترافي بتقريب بصري x5.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 8,
    title: "سامسونج جالاكسي S24 أولترا / Samsung Galaxy S24 Ultra",
    price: 46000,
    description: "عملاق سامسونج المدعوم بالذكاء الاصطناعي الكامل، مع قلم S-Pen وشاشة مسطحة فائقة السطوع.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1610945415295-d9baf060e871?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 9,
    title: "شاومي 14 / Xiaomi 14",
    price: 31000,
    description: "كاميرات بالتعاون مع Leica العالمية، معالج رائد حجم مدمج ومريح لليد وشحن فائق السرعة.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 10,
    title: "ريلمي 12 برو بلس / Realme 12 Pro Plus",
    price: 16500,
    description: "تصميم فاخر بظهر من الجلد وشاشة منحنية وكاميرا بيريسكوب مخصصة للزوم الاحترافي.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 11,
    title: "بوكو X6 برو / Poco X6 Pro",
    price: 15200,
    description: "وحش الألعاب والسرعة في الفئة المتوسطة مع معالج قوي وشاشة بجودة 1.5K.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1533228891704-7fce9a28e02d?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 12,
    title: "سامسونج جالاكسي A35 / Samsung Galaxy A35",
    price: 13400,
    description: "تصميم زجاجي أنيق مع حماية ضد الماء وتجربة شاشة ممتازة تدعم الـ 120Hz.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 13,
    title: "أوبو A78 4G / Oppo A78",
    price: 8200,
    description: "شحن سريع بقدرة 67 واط وسماعات ستيريو مجسمة مع شاشة من نوع AMOLED.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1551817958-c5b5d1b76a6d?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 14,
    title: "هاتف فيفو V30 / Vivo V30",
    price: 19500,
    description: "إضاءة Aura Light الذكية للتصوير الاحترافي، تصميم نحيف جداً وكاميرات ممتازة.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 15,
    title: "ريدمي نوت 13 / Redmi Note 13",
    price: 9100,
    description: "الشاشة الأفضل بحواف صغيرة جداً وكاميرا رئيسية بدقة 108 ميجابكسل لأدق التفاصيل.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 16,
    title: "سامسونج جالاكسي ميني S23 / Samsung Galaxy S23",
    price: 29000,
    description: "الأداء الرائد في حجم صغير ملائم للاستخدام بيد واحدة مع معالج سناب دراجون القوي.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1678911820864-a24a56e41344?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 17,
    title: "آيفون 14 بلس / iPhone 14 Plus",
    price: 33000,
    description: "شاشة كبيرة بحجم 6.7 إنش مع أفضل بطارية في سلسلة الآيفون لتجربة تدوم يومين.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1ebe4cc2?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 18,
    title: "ريلمي نوت 50 / Realme Note 50",
    price: 4300,
    description: "الخيار الاقتصادي الأفضل لتصفح وسائل التواصل ومشاهدة الفيديوهات ببطارية ضخمة.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 19,
    title: "هاتف شرف 90 بلس / Honor 90",
    price: 17800,
    description: "شاشة خالية من الوميض لحماية العين وكاميرا خارقة بدقة 200 ميجابكسل.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 20,
    title: "سامسونج جالاكسي Z Flip 5 / Galaxy Z Flip 5",
    price: 38000,
    description: "الهاتف القابل للطي العصري مع شاشة خارجية كبيرة ومزايا تصوير فريدة بدون ستاند.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1692308734280-5fc9cf5ca292?q=80&w=400&auto=format&fit=crop",
    count :25
    }
];

const smartwatches = [
    {
    id: 21,
    title: "ساعة سمارت Ultra T900 / T900 Ultra Smartwatch",
    price: 1250,
    description: "شاشة كاملة بدون حواف، تدعم إجراء واستقبال المكالمات عبر البلوتوث وتغيير الخلفيات.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 22,
    title: "شاومي مي باند 8 / Xiaomi Mi Band 8",
    price: 1890,
    description: "تتبع ذكي لنبضات القلب، عدد الخطوات، جودة النوم، والتمارين الرياضية المختلفة.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 23,
    title: "اورايمو واتش 4 بلس / Oraimo Watch 4 Plus",
    price: 1650,
    description: "مقاومة للماء والغبار بالكامل بمعيار IP68، مع بطارية ضخمة تدوم لأيام طويلة.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 24,
    title: "ساعة HK9 Ultra 2 / HK9 Ultra 2 Smartwatch",
    price: 2100,
    description: "شاشة AMOLED فائقة الوضوح والألوان، استايل كلاسيكي ورياضي فخم يناسب كل الأذواق.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 25,
    title: "ساعة آبل الجيل التاسع / Apple Watch Series 9",
    price: 21500,
    description: "الساعة الأكثر ذكاءً مع ميزة حركات اليد الجديدة وتتبع دقيق للمؤشرات الصحية.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 26,
    title: "سامسونج جالاكسي واتش 6 / Samsung Galaxy Watch 6",
    price: 13500,
    description: "شاشة دائرية كلاسيكية مع نظام WearOS يدعم جميع تطبيقات جوجل وتتبع النوم المتقدم.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 27,
    title: "ساعة هواوي واتش فيت 3 / Huawei Watch Fit 3",
    price: 6800,
    description: "تصميم مربع أنيق وخفيف الوزن للغاية مع بطارية ممتازة تدعم حتى 10 أيام استخدام.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 28,
    title: "ساعة كيسليك كولينغ K11 / Kieslect K11",
    price: 2400,
    description: "شاشة سمارت دائرية ممتازة تدعم دائماً وضع العمل (Always-on Display) ومظهر رسمي جذاب.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 29,
    title: "ساعة آبل الترا 2 / Apple Watch Ultra 2",
    price: 43000,
    description: "مصممة للرياضات العنيفة والغطس، بهيكل متين من التيتانيوم وعمر بطارية مضاعف.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?q=80&w=400&auto=format&fit=crop"
    },
    {
    id: 30,
    title: "ساعة ريلمي واتش 3 / Realme Watch 3",
    price: 1950,
    description: "إجراء مكالمات واضحة بفضل ميكروفون مزود بتقنية إلغاء الضوضاء بالذكاء الاصطناعي.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 31,
    title: "شاومي ريدمي واتش 4 / Redmi Watch 4",
    price: 4200,
    description: "إطار معدني متين وشاشة ضخمة من نوع AMOLED مع دعم كامل لتتبع نظام الـ GPS.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 32,
    title: "ساعة هايلو سولار لايت / Haylou Solar Lite",
    price: 990,
    description: "ساعة اقتصادية جداً تقدم أكثر من 100 وضع رياضي مختلف ومقاومة كاملة للمياه.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 33,
    title: "ساعة اميزفيت بيب 5 / Amazfit Bip 5",
    price: 3600,
    description: "شاشة عريضة جداً تتيح لك قراءة كافة الإشعارات والرسائل الطويلة الواردة للموبايل.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 34,
    title: "ساعة اميزفيت جي تي آر 4 / Amazfit GTR 4",
    price: 8900,
    description: "تصميم كلاسيكي دائري فاخر مع هوائي GPS ثنائي النطاق فائق الدقة للتتبع والخرائط.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 35,
    title: "ساعة هواوي جي تي 4 / Huawei Watch GT 4",
    price: 11200,
    description: "الأناقة تلتقي بالذكاء، تصميم هندسي مذهل وبطارية استثنائية تدوم حتى 14 يوماً.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 36,
    title: "ساعة سمارت X8 برو / X8 Pro Ultra",
    price: 750,
    description: "نسخة اقتصادية ممتازة بشكل ساعة آبل الترا، تدعم تشغيل الألعاب البسيطة وتغيير الأحزمة.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 37,
    title: "ساعة كيسليك ليدي L11 / Kieslect Lady L11",
    price: 2100,
    description: "ساعة سمارت مصممة خصيصاً للفتيات، بحجم رقيق وألوان مبهجة ومتابعة الدورة الشهرية.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 38,
    title: "ساعة هايلو RS4 بلس / Haylou RS4 Plus",
    price: 1990,
    description: "شاشة ريتنا فائقة الدقة والوضوح مع حزام مغناطيسي مريح جداً وعصري وسهل التعديل.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 39,
    title: "ساعة جوي رووم FT3 / Joyroom FT3 Pro",
    price: 1350,
    description: "تدعم الرد على الاتصالات وقياس نسبة الأكسجين في الدم مع واجهة استخدام عربية بالكامل.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 40,
    title: "ساعة اورايمو تمبو 2 / Oraimo Tempo 2S",
    price: 850,
    description: "سوار رياضي خفيف ومثالي للجري ومقاوم للعرق والماء مع شحن مباشر عبر الـ USB.",
    category: "smartwatches",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400&auto=format&fit=crop",
    count :25
    }
];

const audio = [
    {
    id: 41,
    title: "سماعة ايربودز برو / AirPods Pro",
    price: 950,
    description: "سماعة لاسلكية تدعم خاصية عزل الضوضاء الفعال (ANC)، مع صوت نقي وعميق.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 42,
    title: "سماعة اورايمو فري بودز 4 / Oraimo FreePods 4",
    price: 1750,
    description: "علبة شحن توفر بطارية جبارة تدوم حتى 40 ساعة من التشغيل المتواصل للأغاني والمكالمات.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 43,
    title: "سماعة رأس بلوتوث P47 / P47 Wireless Headphones",
    price: 320,
    description: "صوت بيز قوي ومريحة جداً للأذن بفضل الوسائد الإسفنجية، قابلة للطي لسهولة الحمل.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 44,
    title: "سماعة أنكر ساوند كور R50i / Soundcore R50i",
    price: 1400,
    description: "جودة اتصال ممتازة ومقاومة للماء، مع تطبيق خاص للتحكم في درجات البيز والصوت.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 45,
    title: "سماعة آبل ايربودز 3 / Apple AirPods 3",
    price: 8800,
    description: "الصوت الأصلي النقي من آبل مع ميزة تتبع الرأس لتوزيع الصوت بشكل ثلاثي الأبعاد.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 46,
    title: "سماعة بلوتوث QCY T13 / QCY T13 Earbuds",
    price: 890,
    description: "السماعة الاقتصادية الأشهر، بـ 4 ميكروفونات للمكالمات وشحن سريع جداً في 5 دقائق.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 47,
    title: "سماعة أنكر سبيس One / Anker Space One",
    price: 4900,
    description: "سماعة رأس (Over-Ear) بعزل ضوضاء خارق يقلل الأصوات بنسبة تصل إلى 98% وتصميم مريح.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 48,
    title: "سماعة شاومي ريدمي بودز 5 / Redmi Buds 5",
    price: 1450,
    description: "إلغاء ضوضاء عميق يصل إلى 46 ديسيبل مع خيارات تخصيص الصوت عبر تطبيق شاومي.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 49,
    title: "سماعة جي بي ال تيون 510 / JBL Tune 510BT",
    price: 2600,
    description: "تتميز بصوت JBL Pure Bass الشهير، وتوفر عمر بطارية يصل إلى 40 ساعة متواصلة.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 50,
    title: "سماعة ريلمي بودز T300 / Realme Buds T300",
    price: 1680,
    description: "تأثيرات صوتية محيطية بزاوية 360 درجة ومقاومة كاملة لرذاذ الماء والتعرق أثناء الرياضة.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 51,
    title: "سماعة أوبو إنكو بودز 2 / Oppo Enco Buds 2",
    price: 1100,
    description: "مضخم صوت ديناميكي كبير يعطي أداء قوي للبيز وإمكانية التحكم بالكاميرا بلمستين من السماعة.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 52,
    title: "سماعة آبل ايربودز ماكس / Apple AirPods Max",
    price: 34000,
    description: "قمة الفخامة وجودة الصوت من آبل مع هيكل من الألومنيوم وعزل ضوضاء لا يضاهى.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 53,
    title: "سماعة بلوتوث M10 الاقتصادية / M10 TWS",
    price: 250,
    description: "تأتي مع علبة شحن بشاشة رقمية تعمل كباور بانك طوارئ لشحن الهاتف في الأوقات الصعبة.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 54,
    title: "سماعة سامسونج جالاكسي بودز 2 / Galaxy Buds 2 Pro",
    price: 6400,
    description: "صوت استوديو عالي الدقة بمعدل 24 بت وتصميم مريح ومحكم داخل الأذن مخصص لهواتف سامسونج.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 55,
    title: "سماعة قيمنق سلكية سوني / Sony MDR-ZX110",
    price: 650,
    description: "سماعة رأس سلكية مريحة تعطي صوتاً نقياً بدون تأخير وهي ممتازة للجيمنج والدراسة.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 56,
    title: "سماعة جوي رووم JR-T03S / Joyroom Airpods",
    price: 950,
    description: "تطابق تام لشكل ايربودز آبل، تدعم الشحن اللاسلكي وتظهر على الهاتف بنفس واجهة الربط السريعة.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 57,
    title: "سماعة سوني اللاسلكية WH-CH520 / Sony",
    price: 2900,
    description: "عمر بطارية أسطوري يصل إلى 50 ساعة مع ميزة تحسين جودة الصوت الرقمي DSEE من سوني.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 58,
    title: "سماعة سلكية أصلية Type-C سامسونج / Samsung",
    price: 450,
    description: "سماعة أذن سلكية بمدخل تيب سي تمنحك صوتاً نقياً بالتعاون مع AKG وميكروفون ممتاز.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 59,
    title: "سماعة ايربودز لينوفو ThinkPlus / Lenovo LP40",
    price: 490,
    description: "حجم علبة صغير جداً وخفيف، بلوتوث متطور لمنع التقطيع وصوت ستيريو رائع.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 60,
    title: "سماعة رقبة مغناطيسية اورايمو / Oraimo Shark 4",
    price: 850,
    description: "سماعة بلوتوث حول الرقبة مخصصة للرياضيين والجري، ثابتة تماماً ومقاومة للتعرق.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?q=80&w=400&auto=format&fit=crop",
    count :25
    }
];

const accessories = [
    {
    id: 61,
    title: "رأس شاحن سريع أنكر 20 واط / Anker 20W Charger",
    price: 350,
    description: "يدعم تكنولوجيا الشحن السريع PD الآمنة تماماً على صحة وعمر بطارية الموبايل.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 62,
    title: "وصلة شحن قماش ضد القطع Type-C / Type-C Cable",
    price: 120,
    description: "سلك مغطى بالقماش المقوى يتحمل الانحناء الشديد، ويدعم الشحن ونقل البيانات بسرعة.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 63,
    title: "باور بانك 20,000 مللي أمبير / 20k Power Bank",
    price: 890,
    description: "يشحن جهازك حتى 4 مرات متتالية، يحتوي على مخارج متعددة وشاشة رقمية لعرض النسبة.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 64,
    title: "رأس شاحن سامسونج الأصلي 25 واط / Samsung 25W",
    price: 750,
    description: "شاحن سامسونج السوبر سريع الأصلي الموصى به لسلسلة هواتف جالاكسي الحالية لضمان الأمان.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 65,
    title: "كابل شاحن آيفون سريع PD / Apple Lightning Cable",
    price: 250,
    description: "كابل شحن سريع معتمد من آيفون لنقل البيانات بكفاءة دون الإضرار بالبطارية.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 66,
    title: "باور بانك مغناطيسي ماج سيف / MagSafe Power Bank",
    price: 1400,
    description: "باور بانك صغير يلتصق بظهر الآيفون مباشرة بتقنية الماج سيف ويشحن لاسلكياً.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 67,
    title: "شاحن سيارة سريع ميتال / Dual USB Car Charger",
    price: 290,
    description: "يركب في ولاعة السيارة بمدخلين شحن سريع لشحن هاتفك وهاتف مرافقك أثناء القيادة.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 68,
    title: "ستاند ومسند موبايل للمكتب / Desktop Phone Stand",
    price: 95,
    description: "حامل معدني متين قابل لتعديل الزاوية والارتفاع لتصفح الهاتف مريح أثناء العمل أو المذاكرة.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 69,
    title: "شاحن لاسلكي 3 في 1 / 3-in-1 Wireless Station",
    price: 1250,
    description: "منصة شحن لاسلكية واحدة تجمع وتشحن هاتفك، ساعتك الذكية، وسماعتك اللاسلكية معاً.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 70,
    title: "حامل هاتف للسيارة مغناطيسي / Magnetic Car Mount",
    price: 180,
    description: "يثبت بقوة على فتحة تكييف السيارة لحمل الهاتف بأمان وتسهيل رؤية الخرائط الـ GPS.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 71,
    title: "رأس شاحن سريع لدنيو 65 واط / LDNIO 65W GaN",
    price: 1100,
    description: "شاحن جبار بتقنية GaN يحتوي على 4 منافذ لتتمكن من شحن اللابتوب والموبايل معاً.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 72,
    title: "مشترك كهرباء ذكي يو اس بي / Smart Power Strip",
    price: 480,
    description: "يحتوي على مخارج كهرباء عادية بالإضافة إلى 4 منافذ USB ذكية تتعرف على طاقة جهازك.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 73,
    title: "كابل شحن 3 في 1 قماش / 3-in-1 Charging Cable",
    price: 150,
    description: "سلك واحد يغنيك عن الكابلات، يتفرع إلى (تريب سي، آيفون، ومايكرو) لشحن كافة أنواع الأجهزة.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 74,
    title: "مُحول وموزع تيب سي / Type-C OTG Adapter",
    price: 75,
    description: "قطعة صغيرة تتيح لك توصيل فلاش ميموري أو ماوس أو كيبورد بالهاتف مباشرة وبسرعة.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 75,
    title: "باور بانك اقتصادي 10,000 مللي أمبير / 10k Power Bank",
    price: 490,
    description: "حجم مدمج خفيف الوزن للغاية يسهل وضعه في الجيب، ممتاز للمشاوير اليومية السريعة.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 76,
    title: "جراب حماية شفاف ضد الصدمات / Shockproof Clear Case",
    price: 120,
    description: "حماية ممتازة مع حواف معززة بالسيليكون لامتصاص الصدمات دون إخفاء مظهر ولون الهاتف.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 77,
    title: "شاحن لاسلكي سريع للمكتب / Qi Wireless Charger Pad",
    price: 390,
    description: "قاعدة شحن دائرية رفيعة تضع عليها الموبايل ليبدأ الشحن فوراً بدون عناء الأسلاك.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 78,
    title: "منظم ومجمع أسلاك الشواحن / Cable Organizer Ties",
    price: 40,
    description: "مجموعة من الأربطة المرنة لتنظيم كابلات الشحن على المكتب ومنع تشابكها بشكل مزعج.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 79,
    title: "جراب ذراع رياضي للموبايل / Sports Running Armband",
    price: 140,
    description: "جراب يربط على الذراع لحمل الهاتف بأمان وتوصيل السماعة أثناء ممارسة الجري والتمارين.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1541667595797-e3cdb27e894c?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 80,
    title: "مجموعة تنظيف الموبايل والسماعات / Phone Cleaning Kit",
    price: 85,
    description: "أدوات مخصصة لتنظيف فتحات الشحن وسماعات الأذن من الأتربة بأمان دون التسبب بأي ضرر.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=400&auto=format&fit=crop",
    count :25
    }
];

const gadgets = [
    {
    id: 81,
    title: "رينج لايت احترافي 26 سم / Professional Ring Light",
    price: 450,
    description: "يأتي مع ستاند طويل قابل للتعديل حتى 2 متر و3 درجات إضاءة مختلفة لصناع المحتوى.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1626244465551-7f3083cfc5c5?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 82,
    title: "مايك لاسلكي للموبايل K9 / K9 Wireless Microphone",
    price: 350,
    description: "يحتوي على قطعتين لتسجيل الصوت بوضوح تام، مثالي لتصوير الفلوجات وعزل ضوضاء الشارع.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 83,
    title: "حامل ستاند ثلاثي مرن مع ريموت / Octopus Tripod",
    price: 280,
    description: "ترايبود مرن يمكن تثبيته في أي مكان للتصوير الثابت، ومعه ريموت بلوتوث للتحكم عن بعد.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 84,
    title: "مانع اهتزاز للموبايل جيمبال / Smartphone Gimbal Stabilizer",
    price: 3800,
    description: "مثبت حركة ومحاور ذكي لتصوير فيديوهات سينمائية احترافية وناعمة تماماً أثناء المشي أو الجري.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1626244465551-7f3083cfc5c5?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 85,
    title: "مايك بويا سلكي للمقابلات / Boya BY-M1 Microphone",
    price: 490,
    description: "المايك السلكي الأشهر بطول كابل 6 أمتار يعطي صوتاً دافئاً واحترافياً ومناسباً للكل.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 86,
    title: "عصا سيلفي مدمجة مع ترايبود / Selfie Stick Tripod",
    price: 240,
    description: "تتحول بسهولة من عصا سيلفي طويلة إلى ستاند أرضي متين لالتقاط الصور الجماعية عن بعد.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 87,
    title: "إضاءة ليد ملونة للتصوير / RGB LED Video Light",
    price: 650,
    description: "إضاءة جيب محمولة بـ 360 لوناً مختلفاً، تحكم كامل في السطوع، وممتازة كإضاءة خلفية للفيديوهات.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1626244465551-7f3083cfc5c5?q=80&w=400&auto=format&fit=crop",
    count :25
    },
    {
    id: 88,
    title: "عدسات تصوير للموبايل 3 في 1 / 3-in-1 Phone Lens Kit",
    price: 190,
    description: "مجموعة عدسات تشمل الماكرو للتفاصيل الدقيقة، والزاوية الواسعة، وعدسة عين السمكة الفنية.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 89,
    title: "عدسة تقريب زووم x18 للموبايل / 18x Telephoto Lens",
    price: 850,
    description: "تلسكوب ومكبر ممتاز لتصوير الأماكن البعيدة والقمر بوضوح عالي مع مشبك تثبيت ذكي.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 90,
    title: "خلفية تصوير خضراء كروما / Green Screen Chroma Key",
    price: 400,
    description: "قماش كروما احترافي لعزل الخلفية وتغييرها في برامج المونتاج بسهولة، مقاس 2×3 متر.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1626244465551-7f3083cfc5c5?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 91,
    title: "مايك لا سلكي احترافي سارامونيك / Saramonic Blink500",
    price: 4800,
    description: "نظام مايكروفون لاسلكي مزدوج للمحترفين، جودة صوت نقية جداً ومدى إرسال يصل لـ 50 متراً.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 92,
    title: "رينج لايت صغير للمكتب وسيلفي / Mini Selfie Ring Light",
    price: 150,
    description: "إضاءة دائرية صغيرة تثبت مباشرة على الموبايل أو اللابتوب لتحسين مظهرك في مكالمات الفيديو والزووم.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1626244465551-7f3083cfc5c5?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 93,
    title: "صندوق تصوير المنتجات الصغير / Portable Photo Studio Box",
    price: 550,
    description: "استوديو مصغر ومدمج مع إضاءة ليد مدمجة لتصوير المنتجات الصغيرة باحترافية وبدون ظلال.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 94,
    title: "ريموت بلوتوث للتحكم بالكاميرا / Bluetooth Shutter Remote",
    price: 65,
    description: "قطعة صغيرة وعملية لالتقاط الصور وبدء تسجيل الفيديو عن بعد متوافقة مع الأندرويد والآيفون.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 95,
    title: "ترايبود تصوير ثقيل وعالي 3110 / Professional Tripod 3110",
    price: 320,
    description: "حامل ثلاثي الأرجل خفيف الوزن من الألومنيوم مع رأس متحرك ومستوى ماء لضبط زاوية التصوير.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count :25
    
    },
    {
    id: 96,
    title: "عاكس إضاءة تصوير 5 في 1 / 5-in-1 Photography Reflector",
    price: 380,
    description: "قرص عاكس بمقاس 60 سم بـ 5 ألوان (ذهبي، فضي، أبيض، أسود، شفاف) لتوجيه ونعومة الإضاءة.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1626244465551-7f3083cfc5c5?q=80&w=400&auto=format&fit=crop",
    count:23
    },
    {
    id: 97,
    title: "حامل هاتف مرن طويل للمكتب / Flexible Lazy Bracket Holder",
    price: 130,
    description: "ذراع معدني مرن وقوي يثبت على حافة المكتب لتصوير الفيديوهات العلوية (Overhead) بسهولة.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count:23
    },
    {
    id: 98,
    title: "مشتت وموزع إضاءة سوفت بوكس / Universal Softbox Diffuser",
    price: 1100,
    description: "يمنحك إضاءة سينمائية ناعمة جداً ويقلل حدة الظلال القاسية في تصوير المقابلات والفلوجات.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1626244465551-7f3083cfc5c5?q=80&w=400&auto=format&fit=crop",
    count:23
    },
    {
    id: 99,
    title: "مايك بندقية للتصوير الخارجي / Boya BY-MM1 Shotgun Mic",
    price: 680,
    description: "مايك مدمج يركب فوق الموبايل أو الكاميرا مباشرة، ممتاز لالتقاط الصوت من الأمام وعزل المحيط.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=400&auto=format&fit=crop",
    count:23
    },
    {
    id: 100,
    title: "حقيبة معدات تصوير مضادة للماء / Waterproof Camera Bag",
    price: 1450,
    description: "حقيبة ظهر مبطنة ومقسمة من الداخل لحماية الكاميرا، المايكات، الستندات، والعدسات من الصدمات والأمطار.",
    category: "gadgets",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400&auto=format&fit=crop",
    count:23
    }
];