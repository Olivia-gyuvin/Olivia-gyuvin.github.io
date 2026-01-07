/*
 * AI定制话术生成页面组件
 * 功能：根据用户选择的产品类型、话术风格和场景，智能生成直播话术
 * 作者：系统自动生成
 * 日期：2023-10-25
 * 
 * 【图片插入位置提示】
 * 1. 在页面顶部标题区域可插入AI话术生成的示意图
 * 2. 在产品类型选择区域可为每个产品类型添加对应的产品图片
 * 3. 在历史记录区域可添加用户使用场景图片
 */
const AIScriptComponent = {
    // ================ 数据定义部分 ================
    // 预设的话术模板数据
    // 说明：存储不同产品类型的基础话术模板，用于话术生成
    scriptTemplates: {
        pasture: [
            {
                type: 'greeting',
                title: '开场问候',
                content: '亲爱的家人们，大家好！欢迎来到我的直播间。我是来自美丽青藏高原的{name}，今天很高兴能和大家一起分享我们高原特色产品！'
            },
            {
                type: 'product',
                title: '产品介绍',
                content: '家人们看过来，今天给大家带来的是{productName}。这是我们高原地区特有的产品，生长在海拔{altitude}米以上的纯净环境中，没有任何污染，品质绝对有保证！'
            }
        ],
        caterpillar: [
            {
                type: 'greeting',
                title: '开场问候',
                content: '亲爱的家人们，欢迎来到直播间！今天我要为大家介绍我们高原上最珍贵的宝贝 - {productName}，想了解的家人扣个1！'
            },
            {
                type: 'product',
                title: '产品介绍',
                content: '家人们看清楚了，这就是正宗的{productName}，每一根都来自海拔4000米以上的高原草甸，自然生长，手工采挖，营养价值特别高，尤其是对身体虚弱、经常疲劳的朋友特别好！'
            }
        ]
    },
    
    // ================ 核心功能方法 ================
    // 渲染页面内容
    // 参数：container - 页面容器元素
    // 功能：生成AI话术页面的完整HTML结构并插入容器
    render(container) {
        container.innerHTML = `
            <div class="space-y-6">
                <!-- 页面标题 -->
                <!-- 预留图片插入位置：可在此处添加AI话术生成功能的示意图 -->
                <div class="text-center">
                    <h2 class="text-2xl font-bold">AI定制话术生成</h2>
                    <p class="text-gray-light mt-2">根据您的需求，智能生成专业直播话术</p>
                </div>
                
                <!-- 生成参数设置 -->
                <div class="card">
                    <h3 class="text-xl font-bold mb-6">生成参数设置</h3>
                    
                    <div class="space-y-6">
                        <!-- 产品类型选择 -->
                    <!-- 预留图片位置：可在此处为每个产品类型添加对应的产品图片 -->
                        <div>
                            <label class="block text-sm mb-3">产品类型选择</label>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div class="product-type-card active" data-type="caterpillar">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-leaf text-xl text-accent-green"></i>
                                        </div>
                                        <span class="font-medium">虫草类</span>
                                    </div>
                                </div>
                                <div class="product-type-card" data-type="beef">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-cutlery text-xl text-accent-red"></i>
                                        </div>
                                        <span class="font-medium">牦牛肉类</span>
                                    </div>
                                </div>
                                <div class="product-type-card" data-type="barley">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-wheat-awn text-xl text-accent-yellow"></i>
                                        </div>
                                        <span class="font-medium">青稞制品</span>
                                    </div>
                                </div>
                                <div class="product-type-card" data-type="crafts">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-paint-brush text-xl text-accent-blue"></i>
                                        </div>
                                        <span class="font-medium">手工艺品</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 话术风格设置 -->
                        <div>
                            <label class="block text-sm mb-3">话术风格设置</label>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div class="style-card active" data-style="simple">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-bullhorn text-xl text-accent-red"></i>
                                        </div>
                                        <span class="font-medium">通俗易懂</span>
                                    </div>
                                </div>
                                <div class="style-card" data-style="professional">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-book text-xl text-accent-blue"></i>
                                        </div>
                                        <span class="font-medium">专业详细</span>
                                    </div>
                                </div>
                                <div class="style-card" data-style="enthusiastic">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-heart text-xl text-accent-red"></i>
                                        </div>
                                        <span class="font-medium">热情互动</span>
                                    </div>
                                </div>
                                <div class="style-card" data-style="cultural">
                                    <div class="flex flex-col items-center p-4 bg-tertiary-black rounded-lg cursor-pointer">
                                        <div class="w-12 h-12 rounded-full bg-primary-black flex items-center justify-center mb-3">
                                            <i class="fa fa-history text-xl text-accent-yellow"></i>
                                        </div>
                                        <span class="font-medium">文化故事</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 场景话术模板 -->
                        <div>
                            <label class="block text-sm mb-3">场景话术模板（可多选）</label>
                            <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
                                ${this.renderSceneCards()}
                            </div>
                        </div>
                        
                        <!-- 个性化调整 -->
                        <div>
                            <label class="block text-sm mb-3">个性化调整</label>
                            <div class="space-y-4">
                                <!-- 话术长度 -->
                                <div>
                                    <div class="flex justify-between items-center mb-2">
                                        <span>话术长度</span>
                                        <span id="length-value">中等</span>
                                    </div>
                                    <input type="range" id="script-length" min="1" max="3" value="2" class="w-full h-2 bg-tertiary-black rounded-lg appearance-none cursor-pointer">
                                    <div class="flex justify-between text-xs text-gray-light">
                                        <span>简短</span>
                                        <span>中等</span>
                                        <span>详细</span>
                                    </div>
                                </div>
                                
                                <!-- 关键词强调 -->
                                <div>
                                    <label class="block text-sm mb-2">关键词强调</label>
                                    <input type="text" id="keywords" class="input-field" placeholder="请输入想要强调的关键词，用逗号分隔">
                                </div>
                                
                                <!-- 方言特色融入 -->
                                <div>
                                    <label class="block text-sm mb-2">方言特色融入</label>
                                    <select id="dialect-integration" class="input-field">
                                        <option value="none">不融入方言</option>
                                        <option value="light">轻度融入（少量词汇）</option>
                                        <option value="medium">中度融入（部分句式）</option>
                                        <option value="heavy">深度融入（方言特色明显）</option>
                                    </select>
                                </div>
                                
                                <!-- 文化元素添加 -->
                                <div>
                                    <label class="block text-sm mb-2">文化元素添加</label>
                                    <select id="cultural-elements" class="input-field">
                                        <option value="none">不添加文化元素</option>
                                        <option value="light">轻度添加（简单介绍）</option>
                                        <option value="medium">中度添加（特色文化）</option>
                                        <option value="heavy">深度添加（完整故事）</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 生成按钮 -->
                <div class="text-center">
                    <button id="generate-script-btn" class="btn btn-primary text-lg py-6 px-8">
                        <i class="fa fa-magic mr-2"></i>生成定制话术
                    </button>
                </div>
                
                <!-- 生成结果展示 -->
                <div id="script-result-container" class="card">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold">生成的话术结果</h3>
                        <div class="flex space-x-2">
                            <button id="save-script-btn" class="btn btn-outline">
                                <i class="fa fa-save mr-1"></i>保存
                            </button>
                            <button id="copy-script-btn" class="btn btn-outline">
                                <i class="fa fa-copy mr-1"></i>复制
                            </button>
                            <button id="regenerate-btn" class="btn btn-outline">
                                <i class="fa fa-refresh mr-1"></i>重新生成
                            </button>
                        </div>
                    </div>
                    
                    <div class="space-y-6">
                        <!-- 开场话术 -->
                        <div class="p-4 bg-tertiary-black rounded-lg">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-bold">开场问候</h4>
                                <span class="px-2 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded">建议时长: 30秒</span>
                            </div>
                            <p id="greeting-script" class="whitespace-pre-line">亲爱的家人们，大家好！欢迎来到我的直播间。我是来自美丽青藏高原的牧民卓玛，今天很高兴能和大家一起分享我们高原上最珍贵的宝贝 - 冬虫夏草！想了解正宗虫草的家人扣个1，让我看看有多少人对我们的产品感兴趣！</p>
                        </div>
                        
                        <!-- 产品介绍 -->
                        <div class="p-4 bg-tertiary-black rounded-lg">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-bold">产品介绍</h4>
                                <span class="px-2 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded">建议时长: 2分钟</span>
                            </div>
                            <p id="product-script" class="whitespace-pre-line">家人们看清楚了，这就是正宗的青藏高原冬虫夏草！每一根都来自海拔4000米以上的高原草甸，我们这里空气清新，水质纯净，没有任何污染。每年的5-6月份，当地的牧民们都会背着竹篓，翻山越岭去采挖这些珍贵的虫草。

你们看，正宗的虫草虫体饱满，草头适中，颜色自然，闻起来有一股淡淡的菌香味。这种虫草含有丰富的虫草素、氨基酸和多种微量元素，对提高免疫力、改善睡眠、抗疲劳都有很好的效果。尤其是对中老年人、身体虚弱、经常熬夜的朋友特别适合！</p>
                        </div>
                        
                        <!-- 互动环节 -->
                        <div class="p-4 bg-tertiary-black rounded-lg">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-bold">互动环节</h4>
                                <span class="px-2 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded">建议时长: 1分钟</span>
                            </div>
                            <p id="interaction-script" class="whitespace-pre-line">家人们，有没有人已经吃过我们的虫草呢？吃过的家人可以在评论区分享一下效果。第一次了解的家人，有什么问题都可以随时提问，我会一一为大家解答！

今天下单的家人，我们还会赠送一份虫草食用指南，教大家如何正确保存和食用，让虫草的营养价值最大化！</p>
                        </div>
                        
                        <!-- 促销活动 -->
                        <div class="p-4 bg-tertiary-black rounded-lg">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-bold">促销活动</h4>
                                <span class="px-2 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded">建议时长: 1分钟</span>
                            </div>
                            <p id="promotion-script" class="whitespace-pre-line">家人们注意了！今天直播间有特别优惠！原价398元一盒的虫草，今天在直播间下单只要298元！而且前50名下单的家人，我们还会额外赠送10克，相当于买一盒送一小盒！

机会难得，家人们千万不要错过！点击下方的小黄车，立即抢购！库存有限，先到先得！</p>
                        </div>
                        
                        <!-- 下单引导 -->
                        <div class="p-4 bg-tertiary-black rounded-lg">
                            <div class="flex justify-between items-center mb-3">
                                <h4 class="font-bold">下单引导</h4>
                                <span class="px-2 py-1 bg-accent-blue bg-opacity-20 text-accent-blue text-xs rounded">建议时长: 30秒</span>
                            </div>
                            <p id="order-script" class="whitespace-pre-line">家人们，点击屏幕下方的购物车图标，选择您需要的规格，填写收货地址，点击立即支付就可以了！我们的虫草都是真空包装，保证新鲜。下单后48小时内发货，全国包邮！

收到货后如果有任何问题，随时可以联系客服，我们承诺7天无理由退换货，让大家买得放心，吃得安心！</p>
                        </div>
                    </div>
                </div>
                
                <!-- 历史生成记录 -->
                    <!-- 预留图片位置：可在此处添加历史记录功能的示意图或用户使用场景 -->
                <div class="card">
                    <h3 class="text-xl font-bold mb-6">历史生成记录</h3>
                    
                    <div class="space-y-4">
                        <div class="flex items-center justify-between p-4 bg-tertiary-black rounded-lg">
                            <div class="flex-1 min-w-0">
                                <p class="font-medium truncate">虫草直播话术套装 - 热情互动风格</p>
                                <p class="text-xs text-gray-light mt-1">2023-10-20 14:30 · 共5个话术片段</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <button class="btn btn-outline btn-sm">
                                    <i class="fa fa-eye mr-1"></i>查看
                                </button>
                                <button class="btn btn-outline btn-sm">
                                    <i class="fa fa-copy mr-1"></i>复制
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between p-4 bg-tertiary-black rounded-lg">
                            <div class="flex-1 min-w-0">
                                <p class="font-medium truncate">牦牛肉产品介绍话术 - 通俗易懂风格</p>
                                <p class="text-xs text-gray-light mt-1">2023-10-18 09:45 · 共3个话术片段</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <button class="btn btn-outline btn-sm">
                                    <i class="fa fa-eye mr-1"></i>查看
                                </button>
                                <button class="btn btn-outline btn-sm">
                                    <i class="fa fa-copy mr-1"></i>复制
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupEventListeners();
    },
    
    // 渲染场景卡片
    // 返回值：包含所有场景卡片HTML的字符串
    // 功能：根据预定义的场景配置生成选择卡片
    renderSceneCards() {
        const scenes = [
            { type: 'greeting', icon: 'fa-wave-square', title: '开场问候' },
            { type: 'product', icon: 'fa-shopping-bag', title: '产品介绍' },
            { type: 'interaction', icon: 'fa-comments', title: '互动答疑' },
            { type: 'promotion', icon: 'fa-tag', title: '促销活动' },
            { type: 'order', icon: 'fa-check-circle', title: '下单引导' }
        ];
        
        return scenes.map(scene => `
            <div class="scene-card active" data-scene="${scene.type}">
                <div class="flex flex-col items-center p-3 bg-tertiary-black rounded-lg cursor-pointer">
                    <i class="fa ${scene.icon} text-xl mb-2"></i>
                    <span class="text-sm">${scene.title}</span>
                </div>
            </div>
        `).join('');
    },
    
    // 设置事件监听器
    // 功能：为页面上所有交互元素绑定事件处理函数
    // 包含：产品选择、风格选择、场景选择、参数调整、按钮点击等事件
    setupEventListeners() {
        // 产品类型选择
        const productTypeCards = document.querySelectorAll('.product-type-card');
        productTypeCards.forEach(card => {
            card.addEventListener('click', () => {
                productTypeCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
        
        // 话术风格选择
        const styleCards = document.querySelectorAll('.style-card');
        styleCards.forEach(card => {
            card.addEventListener('click', () => {
                styleCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
        
        // 场景模板选择
        const sceneCards = document.querySelectorAll('.scene-card');
        sceneCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('active');
            });
        });
        
        // 话术长度滑块
        const lengthSlider = document.getElementById('script-length');
        const lengthValue = document.getElementById('length-value');
        if (lengthSlider && lengthValue) {
            lengthSlider.addEventListener('input', () => {
                const values = ['简短', '中等', '详细'];
                lengthValue.textContent = values[lengthSlider.value - 1];
            });
        }
        
        // 生成按钮
        const generateBtn = document.getElementById('generate-script-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                this.generateScript();
            });
        }
        
        // 复制按钮
        const copyBtn = document.getElementById('copy-script-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.copyAllScripts();
            });
        }
        
        // 保存按钮
        const saveBtn = document.getElementById('save-script-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                App.showToast('话术已保存到历史记录', 'success');
            });
        }
        
        // 重新生成按钮
        const regenerateBtn = document.getElementById('regenerate-btn');
        if (regenerateBtn) {
            regenerateBtn.addEventListener('click', () => {
                this.generateScript();
            });
        }
    },
    
    // 生成话术
    // 功能：根据用户选择的参数调用相应的话术生成函数并更新结果
    // 步骤：1. 获取用户选择参数 2. 生成对应产品的话术 3. 更新页面显示 4. 显示成功提示
    generateScript() {
        // 显示加载动画
        const generateBtn = document.getElementById('generate-script-btn');
        const originalText = generateBtn.innerHTML;
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i>生成中...';
        
        // 模拟AI生成过程
        setTimeout(() => {
            // 获取用户选择的参数
            const selectedProduct = document.querySelector('.product-type-card.active').dataset.type;
            const selectedStyle = document.querySelector('.style-card.active').dataset.style;
            const selectedScenes = Array.from(document.querySelectorAll('.scene-card.active')).map(card => card.dataset.scene);
            const scriptLength = document.getElementById('script-length').value;
            const keywords = document.getElementById('keywords').value;
            
            // 根据选择的产品类型生成相应的话术
            let greeting = '';
            let product = '';
            
            switch(selectedProduct) {
                case 'caterpillar':
                    greeting = this.generateCaterpillarGreeting(selectedStyle);
                    product = this.generateCaterpillarProduct(selectedStyle, keywords);
                    break;
                case 'beef':
                    greeting = this.generateBeefGreeting(selectedStyle);
                    product = this.generateBeefProduct(selectedStyle, keywords);
                    break;
                case 'barley':
                    greeting = this.generateBarleyGreeting(selectedStyle);
                    product = this.generateBarleyProduct(selectedStyle, keywords);
                    break;
                case 'crafts':
                    greeting = this.generateCraftsGreeting(selectedStyle);
                    product = this.generateCraftsProduct(selectedStyle, keywords);
                    break;
            }
            
            // 更新生成结果
            if (selectedScenes.includes('greeting')) {
                document.getElementById('greeting-script').textContent = greeting;
            }
            if (selectedScenes.includes('product')) {
                document.getElementById('product-script').textContent = product;
            }
            
            // 恢复按钮状态
            generateBtn.disabled = false;
            generateBtn.innerHTML = originalText;
            
            // 显示成功提示
            App.showToast('话术生成成功！', 'success');
        }, 2000);
    },
    
    // ================ 产品话术生成方法 ================
    // 虫草产品话术生成函数
    // 参数：style - 话术风格类型（simple/professional/enthusiastic/cultural）
    // 返回值：根据风格生成的开场问候话术文本
    generateCaterpillarGreeting(style) {
        const greetings = {
            simple: '家人们好！今天我要给大家介绍我们高原上最珍贵的宝贝 - 冬虫夏草！',
            professional: '尊敬的各位顾客，欢迎来到我们的直播间。今天我们将为大家详细介绍来自青藏高原的珍贵中药材 - 冬虫夏草，这是一种具有极高药用价值的滋补佳品。',
            enthusiastic: '亲爱的家人们，大家好！欢迎来到我的直播间！我是来自青藏高原的卓玛，今天我太激动了，要为大家带来我们高原上真正的宝贝，你们猜猜是什么？没错，就是珍贵的冬虫夏草！',
            cultural: '各位朋友，欢迎来到直播间。在我们藏族的传统文化中，有一种被称为"神草"的珍贵药材，它生长在雪山脚下，是大自然赐予我们的礼物，这就是今天要为大家介绍的冬虫夏草。'
        };
        return greetings[style] || greetings.simple;
    },
    
    // 虫草产品介绍生成函数
    // 参数：style - 话术风格类型
    //       keywords - 用户指定的关键词（逗号分隔）
    // 返回值：根据风格和关键词生成的产品介绍文本，关键词会被加粗突出显示
    generateCaterpillarProduct(style, keywords) {
        const products = {
            simple: '家人们看，这就是正宗的冬虫夏草，每一根都来自海拔4000米以上的高原。我们的虫草都是天然生长，人工采挖的，品质特别好。吃了对身体特别有好处，尤其是免疫力低、容易疲劳的人。',
            professional: '这是正宗的青藏高原冬虫夏草，科学检测表明，它含有虫草素、虫草酸、腺苷等多种活性成分，具有增强免疫力、改善睡眠、抗疲劳等功效。每一根虫草都经过严格筛选，保证品质优良。',
            enthusiastic: '家人们快看！这就是我们青藏高原的宝贝 - 冬虫夏草！看看这颜色，看看这饱满度，太棒了！每一根都来自海拔4000米以上的纯净高原，没有任何污染。吃了之后，你会感觉精力充沛，睡眠质量提高，身体越来越棒！',
            cultural: '在我们藏族民间，冬虫夏草有着悠久的使用历史。老人们常说，"冬天是虫，夏天是草，一年只长一寸高"。它生长在人迹罕至的高原草甸上，需要牧民们翻山越岭去采挖。正是因为这份珍贵，它在我们的文化中有着特殊的地位。'
        };
        
        let product = products[style] || products.simple;
        
        // 添加关键词强调
        if (keywords) {
            const keywordList = keywords.split(',').map(k => k.trim());
            keywordList.forEach(keyword => {
                if (keyword) {
                    product = product.replace(new RegExp(keyword, 'gi'), `<strong>${keyword}</strong>`);
                }
            });
        }
        
        return product;
    },
    
    // 牦牛肉产品话术生成函数
    // 参数：style - 话术风格类型
    // 返回值：根据风格生成的开场问候话术文本
    generateBeefGreeting(style) {
        const greetings = {
            simple: '家人们好！今天给大家带来的是我们高原特产 - 正宗牦牛肉！',
            professional: '尊敬的各位顾客，欢迎来到我们的直播间。今天我们将为大家介绍来自青藏高原的特色美食 - 牦牛肉，这是一种营养价值极高的肉类食品。',
            enthusiastic: '亲爱的家人们，大家好！今天我太开心了，要为大家带来我们高原上最美味的食物 - 牦牛肉！想不想尝尝正宗高原牦牛肉的味道？',
            cultural: '各位朋友，欢迎来到直播间。在我们藏族的饮食文化中，牦牛肉有着重要的地位，它不仅是我们日常生活中的主要肉食，也是招待贵客的美食。'
        };
        return greetings[style] || greetings.simple;
    },
    
    // 牦牛肉产品介绍生成函数
    // 参数：style - 话术风格类型
    //       keywords - 用户指定的关键词（逗号分隔）
    // 返回值：根据风格和关键词生成的产品介绍文本，关键词会被加粗突出显示
    generateBeefProduct(style, keywords) {
        const products = {
            simple: '家人们看，这就是正宗的牦牛肉。我们的牦牛都是在高原上自然放养的，吃的是天然牧草，喝的是雪山融水，肉质特别好，味道特别香。',
            professional: '这是来自青藏高原的优质牦牛肉，科学研究表明，牦牛肉富含蛋白质、铁、锌等多种营养成分，脂肪含量低，是一种健康的肉类选择。',
            enthusiastic: '家人们快看！这牦牛肉的颜色多好，红里透粉，纹理清晰！我们的牦牛在海拔3000米以上的高原上自由奔跑，吃的是纯天然的牧草，肉质紧实，口感极佳，无论是炒菜还是炖煮都非常美味！',
            cultural: '在我们藏族的传统生活中，牦牛是我们最亲密的伙伴。它不仅为我们提供奶、毛，还提供了美味的肉食。我们有一句谚语："没有牦牛，就没有藏族的生活"。'
        };
        
        let product = products[style] || products.simple;
        
        // 添加关键词强调
        if (keywords) {
            const keywordList = keywords.split(',').map(k => k.trim());
            keywordList.forEach(keyword => {
                if (keyword) {
                    product = product.replace(new RegExp(keyword, 'gi'), `<strong>${keyword}</strong>`);
                }
            });
        }
        
        return product;
    },
    
    // 青稞制品话术生成函数
    // 参数：style - 话术风格类型
    // 返回值：根据风格生成的开场问候话术文本
    generateBarleyGreeting(style) {
        const greetings = {
            simple: '家人们好！今天给大家带来的是我们高原特产 - 青稞制品！',
            professional: '尊敬的各位顾客，欢迎来到我们的直播间。今天我们将为大家介绍来自青藏高原的传统食品 - 青稞制品，这是一种具有悠久历史的健康食品。',
            enthusiastic: '亲爱的家人们，大家好！今天我要为大家介绍我们高原上的宝贝 - 青稞制品！想不想尝尝我们藏族人民世世代代食用的传统美食？',
            cultural: '各位朋友，欢迎来到直播间。在我们藏族的饮食文化中，青稞有着不可替代的地位，它被称为"高原明珠"，是我们的主要粮食作物。'
        };
        return greetings[style] || greetings.simple;
    },
    
    // 青稞制品介绍生成函数
    // 参数：style - 话术风格类型
    //       keywords - 用户指定的关键词（逗号分隔）
    // 返回值：根据风格和关键词生成的产品介绍文本，关键词会被加粗突出显示
    generateBarleyProduct(style, keywords) {
        const products = {
            simple: '家人们看，这就是我们的青稞制品。青稞是高原上特有的作物，营养价值特别高，吃了对身体特别好，尤其是对血糖高的人有好处。',
            professional: '这是来自青藏高原的优质青稞制品，科学研究表明，青稞富含β-葡聚糖、膳食纤维等成分，有助于调节血糖、降低胆固醇，是一种理想的健康食品。',
            enthusiastic: '家人们快看！这些青稞制品多漂亮！我们的青稞生长在海拔3000米以上的高原，日照时间长，昼夜温差大，所以营养特别丰富。吃起来口感独特，香甜可口，是真正的健康食品！',
            cultural: '在我们藏族的传统文化中，青稞有着神圣的地位。每年的丰收季节，我们都会举行盛大的庆祝活动，感谢大自然赐予我们的丰收。青稞不仅是我们的食物，更是我们文化的象征。'
        };
        
        let product = products[style] || products.simple;
        
        // 添加关键词强调
        if (keywords) {
            const keywordList = keywords.split(',').map(k => k.trim());
            keywordList.forEach(keyword => {
                if (keyword) {
                    product = product.replace(new RegExp(keyword, 'gi'), `<strong>${keyword}</strong>`);
                }
            });
        }
        
        return product;
    },
    
    // 手工艺品话术生成函数
    // 参数：style - 话术风格类型
    // 返回值：根据风格生成的开场问候话术文本
    generateCraftsGreeting(style) {
        const greetings = {
            simple: '家人们好！今天给大家带来的是我们藏族传统手工艺品！',
            professional: '尊敬的各位顾客，欢迎来到我们的直播间。今天我们将为大家介绍具有浓厚藏族文化特色的传统手工艺品，这些都是我们藏族人民智慧的结晶。',
            enthusiastic: '亲爱的家人们，大家好！今天我太高兴了，要为大家展示我们藏族最精美的传统手工艺品！每一件都是独一无二的艺术品！',
            cultural: '各位朋友，欢迎来到直播间。在我们藏族的传统文化中，手工艺有着悠久的历史，每一件作品都蕴含着我们对生活的热爱和对美的追求。'
        };
        return greetings[style] || greetings.simple;
    },
    
    // 手工艺品介绍生成函数
    // 参数：style - 话术风格类型
    //       keywords - 用户指定的关键词（逗号分隔）
    // 返回值：根据风格和关键词生成的产品介绍文本，关键词会被加粗突出显示
    generateCraftsProduct(style, keywords) {
        const products = {
            simple: '家人们看，这些都是我们藏族传统手工艺品。每一件都是手工制作的，做工特别精细，图案特别漂亮，很有收藏价值。',
            professional: '这些是正宗的藏族传统手工艺品，每一件作品都经过工匠们的精心打造，从选材到制作完成，往往需要数天甚至数月的时间，体现了我们藏族人民精湛的工艺水平。',
            enthusiastic: '家人们快看！这些手工艺品多精美啊！每一针每一线都凝聚着我们藏族工匠的心血和智慧。看看这个图案，象征着吉祥如意；再看看这个色彩搭配，多么鲜艳夺目！',
            cultural: '在我们藏族的传统文化中，手工艺品不仅是生活用品，更是文化传承的载体。每一件作品都有其特定的寓意，比如祥云图案象征着吉祥，莲花图案象征着纯洁，这些都是我们藏族文化的重要组成部分。'
        };
        
        let product = products[style] || products.simple;
        
        // 添加关键词强调
        if (keywords) {
            const keywordList = keywords.split(',').map(k => k.trim());
            keywordList.forEach(keyword => {
                if (keyword) {
                    product = product.replace(new RegExp(keyword, 'gi'), `<strong>${keyword}</strong>`);
                }
            });
        }
        
        return product;
    },
    
    // 复制所有话术到剪贴板
    // 功能：收集页面上所有生成的话术，合并后复制到剪贴板
    // 交互：复制成功/失败时显示提示信息
    // 注意：使用了navigator.clipboard API，需要用户授权
    copyAllScripts() {
        // 收集所有话术内容
        const scripts = [];
        const scriptElements = document.querySelectorAll('#script-result-container p[id$="-script"]');
        
        scriptElements.forEach(element => {
            const title = element.previousElementSibling.querySelector('h4').textContent;
            const content = element.textContent;
            scripts.push(`${title}:\n${content}\n`);
        });
        
        // 合并所有话术
        const allScripts = scripts.join('\n');
        
        // 复制到剪贴板
        navigator.clipboard.writeText(allScripts).then(() => {
            App.showToast('话术已复制到剪贴板！', 'success');
        }).catch(() => {
            App.showToast('复制失败，请手动复制', 'error');
        });
    }
};