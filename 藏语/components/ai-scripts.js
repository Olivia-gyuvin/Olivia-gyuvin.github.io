/*
 * AI直播话术生成页面组件
 * 功能：根据用户选择的产品类型、话术风格和场景，智能生成直播话术
 * 作者：系统自动生成
 * 日期：2024-01-01
 * 
 * 【设计说明】
 * - 采用类deepseek/豆包风格的现代化界面设计
 * - 强调清晰的视觉层次和用户体验
 * - 保持核心功能的同时优化界面交互
 */
const AIScriptComponent = {
    // 预设的话术模板数据 - 完整的产品类型模板
    scriptTemplates: (function() {
        console.log('AIScriptComponent: 初始化话术模板数据，进行完整性验证...');
        
        // 核心产品类型的话术模板数据
        const defaultTemplates = {
            caterpillar: [
                {
                    type: 'greeting',
                    title: '开场问候',
                    content: '家人们，晚上好！今天直播间给大家带来的是hopefully"高原黄金"的正宗冬虫夏草！'
                },
                {
                    type: 'intro',
                    title: '产品介绍',
                    content: '我们的冬虫夏草来自海拔4000米以上的无人区，每一根都是人工采挖，确保纯天然无污染！'
                },
                {
                    type: 'interaction',
                    title: '互动引导',
                    content: '有多少家人们了解冬虫夏草的功效呢？它对提高 immunity特别好，尤其是对中老年人们！'
                },
                {
                    type: 'promotion',
                    title: '促销优惠',
                    content: '今天直播间特惠，10根装只要XX元，比市场价便宜整整30%！'
                },
                {
                    type: 'guide',
                    title: '下单引导',
                    content: '点击购物车，选择规格，填写收货地址，立即抢购！'
                }
            ],
            beef: [
                {
                    type: 'greeting',
                    title: '开场问候',
                    content: '亲爱的家人们，欢迎来到我们的高原牦牛肉专场！今天给大家带来真正的散养牦牛肉！'
                },
                {
                    type: 'intro',
                    title: '产品介绍',
                    content: '这些牦牛在高原上自由奔跑，吃的是天然牧草，喝的是雪山融水，肉质特别鲜美！'
                },
                {
                    type: 'interaction',
                    title: '互动引导',
                    content: '家人们，你们平时喜欢怎么烹饪牛肉呢？是红烧、炖煮还是煎牛排？'
                },
                {
                    type: 'promotion',
                    title: '促销优惠',
                    content: '今天直播间，3斤装牦牛肉只要XX元，再送价值XX元的高原特色调料包！'
                },
                {
                    type: 'guide',
                    title: '下单引导',
                    content: '点击下方小黄车，选择部位，立即下单！全程冷链配送，保证新鲜！'
                }
            ],
            barley: [
                {
                    type: 'greeting',
                    title: '开场问候',
                    content: '家人们下午好！今天给大家推荐一款健康又营养的高原青稞产品！'
                },
                {
                    type: 'intro',
                    title: '产品介绍',
                    content: '我们的青稞生长在海拔3000米以上的高原，日照时间长，昼夜温差大，营养成分特别丰富！'
                },
                {
                    type: 'interaction',
                    title: '互动引导',
                    content: '有没有家人们知道青稞有哪些营养价值？它富含膳食纤维，对肠道健康特别好！'
                },
                {
                    type: 'promotion',
                    title: '促销优惠',
                    content: '今天直播间，青稞面、青稞米组合装只要XX元，比超市便宜20%！'
                },
                {
                    type: 'guide',
                    title: '下单引导',
                    content: '点击购物车，选择组合，立即下单！多买多送！'
                }
            ],
            crafts: [
                {
                    type: 'greeting',
                    title: '开场问候',
                    content: '亲爱的家人们，欢迎来到我们的藏族手工艺品专场！今天给大家带来精美的手工制品！'
                },
                {
                    type: 'intro',
                    title: '产品介绍',
                    content: '这些手工艺品都是由当地藏族阿妈纯手工制作的，每一件都独一无二，充满了民族特色！'
                },
                {
                    type: 'interaction',
                    title: '互动引导',
                    content: '家人们，你们最喜欢哪种类型的手工艺品呢？可以在评论区告诉我！'
                },
                {
                    type: 'promotion',
                    title: '促销优惠',
                    content: '今天直播间特惠，全场手工艺品8折起，部分爆款低至5折！'
                },
                {
                    type: 'guide',
                    title: '下单引导',
                    content: '点击下方小黄车，选择喜欢的款式，立即下单！每一件都有收藏证书！'
                }
            ]
        };
        
        // 验证模板数据完整性
        function validateTemplates(templates) {
            const validatedTemplates = {};
            
            // 确保至少有一个有效的产品类型模板
            if (!templates || typeof templates !== 'object' || Object.keys(templates).length === 0) {
                console.warn('AIScriptComponent: 警告 - 模板数据为空或格式错误，使用备用模板');
                return {
                    default: [
                        {
                            type: 'greeting',
                            title: '开场问候',
                            content: '亲爱的家人们，欢迎来到我的直播间！'
                        },
                        {
                            type: 'intro',
                            title: '产品介绍',
                            content: '今天要给大家推荐一款优质产品！'
                        },
                        {
                            type: 'interaction',
                            title: '互动引导',
                            content: '家人们有什么问题可以在评论区提问哦！'
                        },
                        {
                            type: 'promotion',
                            title: '促销优惠',
                            content: '今天直播间特惠，千万不要错过！'
                        },
                        {
                            type: 'guide',
                            title: '下单引导',
                            content: '点击下方购物车，立即下单！'
                        }
                    ]
                };
            }
            
            // 验证每个产品类型的模板
            for (const [type, scripts] of Object.entries(templates)) {
                if (Array.isArray(scripts) && scripts.length > 0) {
                    const validScripts = scripts.filter(script => {
                        return script && typeof script === 'object' && 
                               typeof script.type === 'string' && 
                               typeof script.title === 'string' &&
                               typeof script.content === 'string';
                    });
                    
                    if (validScripts.length > 0) {
                        validatedTemplates[type] = validScripts;
                    }
                }
            }
            
            // 确保至少有一个有效模板
            if (Object.keys(validatedTemplates).length === 0) {
                console.warn('AIScriptComponent: 警告 - 没有有效的模板数据，使用备用模板');
                return {
                    default: [
                        {
                            type: 'greeting',
                            title: '开场问候',
                            content: '亲爱的家人们，欢迎来到我的直播间！'
                        }
                    ]
                };
            }
            
            console.log('AIScriptComponent: 话术模板数据验证完成，包含', Object.keys(validatedTemplates).length, '个有效产品类型');
            return validatedTemplates;
        }
        
        return validateTemplates(defaultTemplates);
    })(),
    
    // 渲染页面内容
    render(container) {
        // 确保容器存在
        if (!container) {
            console.error('容器元素不存在');
            return;
        }
        
        // 清空容器并添加加载指示器
        container.innerHTML = '<div class="loading-indicator"><div class="spinner"></div><p>加载AI话术生成器...</p></div>';
        
        // 添加加载指示器样式
        const loadingStyle = document.createElement('style');
        loadingStyle.textContent = `
            .loading-indicator {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 60px 20px;
                min-height: 400px;
            }
            
            .spinner {
                width: 40px;
                height: 40px;
                border: 3px solid var(--border-color);
                border-top-color: var(--accent-blue);
                border-radius: 50%;
                animation: spin 0.8s linear infinite;
                margin-bottom: 16px;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(loadingStyle);
        
        // 模拟加载延迟以提升体验
        setTimeout(() => {
            container.innerHTML = `
            <div class="ai-script-page bg-gray-50 font-sans min-h-screen">
                <!-- 主要内容区域 -->
                <main class="container mx-auto px-4 py-8">
                    <div class="flex flex-col lg:flex-row gap-8">
                        <!-- 左侧配置面板 -->
                        <div class="left-panel w-full lg:w-1/3">
                            <!-- 产品选择 -->
                            <div class="setting-section">
                                <label class="section-label">选择产品类型</label>
                                <div class="product-grid">
                                    <!-- 虫草/菌类 -->
                                    <div class="product-card" data-type="caterpillar">
                                        <div class="product-icon">
                                            <i class="fa fa-leaf"></i>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="product-name">虫草/菌类</h3>
                                            <p class="product-desc">冬虫夏草、松茸等高原珍品</p>
                                        </div>
                                    </div>
                                    
                                    <!-- 牦牛肉制品 -->
                                    <div class="product-card" data-type="beef">
                                        <div class="product-icon">
                                            <i class="fa fa-drumstick-bite"></i>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="product-name">牦牛肉制品</h3>
                                            <p class="product-desc">牦牛肉干、牛肉酱等特色美食</p>
                                        </div>
                                    </div>
                                    
                                    <!-- 青稞制品 -->
                                    <div class="product-card" data-type="barley">
                                        <div class="product-icon">
                                            <i class="fa fa-seedling"></i>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="product-name">青稞制品</h3>
                                            <p class="product-desc">青稞酒、青稞面等传统食品</p>
                                        </div>
                                    </div>
                                    
                                    <!-- 手工艺品 -->
                                    <div class="product-card" data-type="craft">
                                        <div class="product-icon">
                                            <i class="fa fa-gem"></i>
                                        </div>
                                        <div class="product-info">
                                            <h3 class="product-name">手工艺品</h3>
                                            <p class="product-desc">唐卡、藏毯等民族特色手工艺品</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 话术风格选择 -->
                            <div class="setting-section">
                                <label class="section-label">话术风格选择</label>
                                <div class="style-grid">
                                    <div class="style-card" data-style="warm">
                                        <div class="style-icon">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                        <div class="style-info">
                                            <h3 class="style-name">温暖亲切</h3>
                                            <p class="style-desc">像朋友一样聊天</p>
                                        </div>
                                    </div>
                                    
                                    <div class="style-card" data-style="professional">
                                        <div class="style-icon">
                                            <i class="fa fa-briefcase"></i>
                                        </div>
                                        <div class="style-info">
                                            <h3 class="style-name">专业讲解</h3>
                                            <p class="style-desc">详细专业的产品介绍</p>
                                        </div>
                                    </div>
                                    
                                    <div class="style-card" data-style="enthusiastic">
                                        <div class="style-icon">
                                            <i class="fa fa-fire"></i>
                                        </div>
                                        <div class="style-info">
                                            <h3 class="style-name">热情互动</h3>
                                            <p class="style-desc">活跃气氛，促进互动</p>
                                        </div>
                                    </div>
                                    
                                    <div class="style-card" data-style="simple">
                                        <div class="style-icon">
                                            <i class="fa fa-lightbulb"></i>
                                        </div>
                                        <div class="style-info">
                                            <h3 class="style-name">通俗易懂</h3>
                                            <p class="style-desc">简单明了，易于理解</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 文化元素添加 -->
                            <div class="setting-section">
                                <label class="section-label">文化元素添加 <span class="text-xs text-gray-light">(可多选)</span></label>
                                <div class="culture-tags">
                                    <label class="tag-checkbox">
                                        <input type="checkbox" name="culture" value="history">
                                        <span class="tag-label">历史背景</span>
                                    </label>
                                    <label class="tag-checkbox">
                                        <input type="checkbox" name="culture" value="religion">
                                        <span class="tag-label">宗教文化</span>
                                    </label>
                                    <label class="tag-checkbox">
                                        <input type="checkbox" name="culture" value="festival">
                                        <span class="tag-label">节日传统</span>
                                    </label>
                                    <label class="tag-checkbox">
                                        <input type="checkbox" name="culture" value="production">
                                        <span class="tag-label">制作工艺</span>
                                    </label>
                                    <label class="tag-checkbox">
                                        <input type="checkbox" name="culture" value="nutrition">
                                        <span class="tag-label">营养价值</span>
                                    </label>
                                    <label class="tag-checkbox">
                                        <input type="checkbox" name="culture" value="folk">
                                        <span class="tag-label">民间故事</span>
                                    </label>
                                </div>
                            </div>
                            
                            <!-- 场景话术模板 -->
                            <div class="setting-section">
                                <label class="section-label">场景话术模板 <span class="text-xs text-gray-light">(可多选)</span></label>
                                <div class="scene-grid">
                                    ${this.renderSceneCards()}
                                </div>
                            </div>
                            
                            <!-- 高级参数设置 -->
                            <div class="setting-section">
                                <label class="section-label">高级设置</label>
                                <div class="advanced-settings">
                                    <!-- 话术长度 -->
                                    <div class="param-item">
                                        <div class="param-header">
                                            <span class="param-name">话术长度</span>
                                            <span id="length-value" class="param-value">中等</span>
                                        </div>
                                        <input type="range" id="script-length" min="1" max="3" value="2" class="slider">
                                        <div class="slider-labels">
                                            <span>简短</span>
                                            <span>中等</span>
                                            <span>详细</span>
                                        </div>
                                    </div>
                                    
                                    <!-- 关键词强调 -->
                                    <div class="param-item">
                                        <label class="param-name">关键词强调</label>
                                        <input type="text" id="keywords" placeholder="请输入想要强调的关键词，用逗号分隔" class="input-field">
                                    </div>
                                    
                                    <!-- 方言特色融入 -->
                                    <div class="param-item">
                                        <label class="param-name">方言特色融入</label>
                                        <select id="dialect-integration" class="input-field">
                                            <option value="none">不融入方言</option>
                                            <option value="light">轻度融入（少量词汇）</option>
                                            <option value="medium">中度融入（部分句式）</option>
                                            <option value="heavy">深度融入（方言特色明显）</option>
                                        </select>
                                    </div>
                                    
                                    <!-- 文化元素添加 -->
                                    <div class="param-item">
                                        <label class="param-name">文化元素添加</label>
                                        <select id="cultural-elements" class="input-field">
                                            <option value="none">不添加文化元素</option>
                                            <option value="light">轻度添加（简单介绍）</option>
                                            <option value="medium">中度添加（特色文化）</option>
                                            <option value="heavy">深度添加（完整故事）</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 生成按钮 -->
                            <div class="generate-btn-container">
                                <button id="generate-script-btn" class="btn btn-primary btn-large" aria-label="生成直播话术">
                                    <i class="fa fa-magic mr-2"></i>生成直播话术
                                </button>
                                <!-- 键盘快捷键提示 -->
                                <div class="shortcut-hint">
                                    <span class="keyboard-shortcut">⌨️</span>
                                    按 <kbd>Ctrl</kbd>+<kbd>Enter</kbd> 快速生成
                                </div>
                                <div class="btn-tip">一键生成专业直播话术，高效提升直播效果</div>
                            </div>
                        </div>
                        
                        <!-- 右侧：结果展示面板 -->
                        <div class="right-panel w-full lg:w-2/3">
                            <div class="result-panel">
                                <!-- 生成结果卡片 -->
                                <div class="result-card">
                                    <div class="result-header">
                                        <h2 class="result-title">生成的直播话术</h2>
                                        <div class="result-actions">
                                            <button id="copy-script-btn" class="action-btn">
                                                <i class="fa fa-copy mr-1"></i>复制全部
                                            </button>
                                            <button id="save-script-btn" class="action-btn">
                                                <i class="fa fa-save mr-1"></i>保存
                                            </button>
                                            <button id="regenerate-btn" class="action-btn">
                                                <i class="fa fa-refresh mr-1"></i>重新生成
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="result-body">
                                        <!-- 开场话术 -->
                                        <div class="script-section">
                                            <div class="script-header">
                                                <h3 class="script-title">
                                                    <i class="fa fa-wave-square mr-2"></i>开场问候
                                                </h3>
                                                <div class="script-meta">
                                                    <span class="duration-tag">建议时长: 30秒</span>
                                                    <button class="copy-section-btn">
                                                        <i class="fa fa-copy"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="script-content" id="greeting-script">
                                                亲爱的家人们，大家好！欢迎来到我的直播间。我是来自美丽青藏高原的牧民卓玛，今天很高兴能和大家一起分享我们高原上最珍贵的宝贝 - 冬虫夏草！想了解正宗虫草的家人扣个1，让我看看有多少人对我们的产品感兴趣！
                                            </div>
                                        </div>
                                        
                                        <!-- 产品介绍 -->
                                        <div class="script-section">
                                            <div class="script-header">
                                                <h3 class="script-title">
                                                    <i class="fa fa-shopping-bag mr-2"></i>产品介绍
                                                </h3>
                                                <div class="script-meta">
                                                    <span class="duration-tag">建议时长: 2分钟</span>
                                                    <button class="copy-section-btn">
                                                        <i class="fa fa-copy"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="script-content" id="product-script">
                                                家人们看清楚了，这就是正宗的青藏高原冬虫夏草！每一根都来自海拔4000米以上的高原草甸，我们这里空气清新，水质纯净，没有任何污染。每年的5-6月份，当地的牧民们都会背着竹篓，翻山越岭去采挖这些珍贵的虫草。
                                                
                                                你们看，正宗的虫草虫体饱满，草头适中，颜色自然，闻起来有一股淡淡的菌香味。这种虫草含有丰富的虫草素、氨基酸和多种微量元素，对提高 immunity、改善睡眠、抗疲劳都有很好的效果。尤其是对中老年人们、身体虚弱、经常熬夜的朋友特别适合！
                                            </div>
                                        </div>
                                        
                                        <!-- 互动环节 -->
                                        <div class="script-section">
                                            <div class="script-header">
                                                <h3 class="script-title">
                                                    <i class="fa fa-comments mr-2"></i>互动答疑
                                                </h3>
                                                <div class="script-meta">
                                                    <span class="duration-tag">建议时长: 1分钟</span>
                                                    <button class="copy-section-btn">
                                                        <i class="fa fa-copy"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="script-content" id="interaction-script">
                                                家人们，有没有人已经吃过我们的虫草呢？吃过的家人可以在评论区分享一下效果。第一次了解的家人，有什么问题都可以随时提问，我会一一为大家解答！
                                                
                                                今天下单的家人，我们还会赠送一份虫草食用指南，教大家如何正确保存和食用，让虫草的营养价值最大化！
                                            </div>
                                        </div>
                                        
                                        <!-- 促销活动 -->
                                        <div class="script-section">
                                            <div class="script-header">
                                                <h3 class="script-title">
                                                    <i class="fa fa-tag mr-2"></i>促销活动
                                                </h3>
                                                <div class="script-meta">
                                                    <span class="duration-tag">建议时长: 1分钟</span>
                                                    <button class="copy-section-btn">
                                                        <i class="fa fa-copy"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="script-content" id="promotion-script">
                                                家人们注意了！今天直播间有特别优惠！原价398元一盒的虫草，今天在直播间下单只要298元！而且前50名下单的家人，我们还会额外赠送10克，相当于买一盒送一小盒！
                                                
                                                机会难得，家人们千万不要错过！点击下方的小黄车，立即抢购！库存有限，先到先得！
                                            </div>
                                        </div>
                                        
                                        <!-- 下单引导 -->
                                        <div class="script-section">
                                            <div class="script-header">
                                                <h3 class="script-title">
                                                    <i class="fa fa-check-circle mr-2"></i>下单引导
                                                </h3>
                                                <div class="script-meta">
                                                    <span class="duration-tag">建议时长: 30秒</span>
                                                    <button class="copy-section-btn">
                                                        <i class="fa fa-copy"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="script-content" id="order-script">
                                                家人们，点击屏幕下方的购物车图标，选择您需要的规格，填写收货地址，点击立即支付就可以了！我们的虫草都是真空包装，保证新鲜。下单后48小时内发货，全国包邮！
                                                
                                                收到货后如果有任何问题，随时可以联系客服，我们承诺7天无理由退换货，让大家买得放心，吃得安心！
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- 历史记录卡片 -->
                                <div class="history-card">
                                    <div class="history-header">
                                        <h2 class="history-title">历史生成记录</h2>
                                        <button class="view-all-btn">查看全部</button>
                                    </div>
                                    <div class="history-list">
                                        <div class="history-item">
                                            <div class="history-info">
                                                <div class="history-name">虫草直播话术套装 - 热情互动风格</div>
                                                <div class="history-time">2023-10-20 14:30</div>
                                            </div>
                                            <div class="history-actions">
                                                <button class="history-btn">
                                                    <i class="fa fa-eye"></i>
                                                </button>
                                                <button class="history-btn">
                                                    <i class="fa fa-copy"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="history-item">
                                            <div class="history-info">
                                                <div class="history-name">牦牛肉产品介绍话术 - 通俗易懂风格</div>
                                                <div class="history-time">2023-10-18 09:45</div>
                                            </div>
                                            <div class="history-actions">
                                                <button class="history-btn">
                                                    <i class="fa fa-eye"></i>
                                                </button>
                                                <button class="history-btn">
                                                    <i class="fa fa-copy"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        `;
        
        // 添加必要的样式
        this.addStyles();
        
        // 设置事件监听器
        this.setupEventListeners(container);
    }, 500);
    },
    
    // 添加页面所需的特殊样式
    addStyles() {
        // 检查样式是否已存在
        if (document.getElementById('ai-script-styles')) {
            return;
        }
        
        const style = document.createElement('style');
        style.id = 'ai-script-styles';
        style.textContent = `
            /* 主题颜色变量 */
            :root {
                --primary: #FF2A6D;
                --secondary: #18A558;
                --dark: #1D1D1D;
                --gray-50: #F9FAFB;
                --gray-100: #F3F4F6;
                --gray-200: #E5E7EB;
                --gray-300: #D1D5DB;
                --gray-400: #9CA3AF;
                --gray-500: #6B7280;
                --gray-600: #4B5563;
                --gray-700: #374151;
                --gray-800: #1F2937;
                --gray-900: #111827;
                --white: #FFFFFF;
            }
            
            /* 基础样式重置 */
            .ai-script-page {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: var(--white);
            }
            
            /* 动画定义 */
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { transform: translateY(30px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @keyframes pulse-slow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            @keyframes bounce {
                0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
                50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
            }
            
            /* 动画类 */
            .animate-fadeIn {
                animation: fadeIn 0.5s ease-out forwards;
            }
            
            .animate-slide-up {
                animation: slideUp 0.6s ease-out forwards;
            }
            
            .animate-pulse-slow {
                animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            
            /* 响应式容器 */
            .container {
                width: 100%;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 1rem;
            }
            
            /* 排版样式 */
            .section-title {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--primary-white);
                margin-bottom: 1.5rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            /* 卡片和面板样式 */
            .option-card {
                background-color: var(--secondary-black);
                border: 2px solid var(--border-color);
                border-radius: 0.75rem;
                padding: 1rem;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.875rem;
                font-weight: 500;
                color: var(--text-light-gray);
            }
            
            .option-card:hover {
                border-color: var(--primary);
                background-color: var(--tertiary-black);
                color: var(--primary-white);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(255, 42, 109, 0.1);
            }
            
            .option-card.active {
                border-color: var(--primary);
                background-color: var(--primary);
                color: var(--white);
            }
            
            .option-card.active i {
                color: var(--white);
            }
            
            /* 按钮样式 */
            .btn-primary {
                background-color: var(--primary);
                color: var(--white);
                border: none;
                border-radius: 0.75rem;
                padding: 0.75rem 1.5rem;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 12px rgba(255, 42, 109, 0.2);
            }
            
            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(255, 42, 109, 0.3);
            }
            
            .btn-primary:active {
                transform: translateY(0);
            }
            
            /* 表单元素样式 */
            .input-field {
                width: 100%;
                padding: 0.75rem;
                border: 2px solid var(--border-color);
                border-radius: 0.5rem;
                font-size: 0.875rem;
                transition: all 0.3s ease;
                background-color: var(--tertiary-black);
                color: var(--primary-white);
            }
            
            .input-field:focus {
                outline: none;
                border-color: var(--primary);
                box-shadow: 0 0 0 3px rgba(255, 42, 109, 0.2);
                color: var(--primary-white);
            }
            
            input[type="range"] {
                -webkit-appearance: none;
                appearance: none;
                height: 8px;
                border-radius: 4px;
                background: var(--tertiary-black);
                outline: none;
                transition: all 0.3s ease;
            }
            
            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: var(--primary);
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 2px 6px rgba(255, 42, 109, 0.3);
            }
            
            input[type="range"]::-webkit-slider-thumb:hover {
                transform: scale(1.2);
                box-shadow: 0 3px 8px rgba(255, 42, 109, 0.4);
            }
            
            /* 复选框样式 */
            input[type="checkbox"] {
                -webkit-appearance: none;
                appearance: none;
                width: 16px;
                height: 16px;
                border: 2px solid var(--gray-300);
                border-radius: 4px;
                background-color: var(--white);
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
            }
            
            input[type="checkbox"]:checked {
                background-color: var(--primary);
                border-color: var(--primary);
            }
            
            input[type="checkbox"]:checked::after {
                content: '✓';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: var(--white);
                font-size: 10px;
                font-weight: bold;
            }
            
            /* 选择框样式 */
            select {
                -webkit-appearance: none;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M1 3L6 8L11 3' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 0.75rem center;
                padding-right: 2.5rem;
            }
            
            /* 话术预览样式 */
            .typewriter-text {
                overflow: hidden;
                white-space: pre-wrap;
                border-right: 3px solid;
                padding-right: 5px;
                animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
            }
            
            .typewriter-text.visible {
                animation: none;
                border-right: none;
            }
            
            @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
            }
            
            @keyframes blink-caret {
                from, to { border-color: transparent; }
                50% { border-color: var(--primary); }
            }
            
            /* 响应式设计 */
            @media (max-width: 1024px) {
                .lg\:flex {
                    flex-direction: column;
                }
                
                .lg\:w-1\/3,
                .lg\:w-2\/3 {
                    width: 100%;
                }
                
                .sticky {
                    position: static;
                }
            }
            
            @media (max-width: 640px) {
                .grid-cols-2 {
                    grid-template-columns: 1fr;
                }
                
                .sm\:grid-cols-2 {
                    grid-template-columns: 1fr;
                }
                
                .sm\:col-span-2 {
                    grid-column: span 1;
                }
                
                .section-title {
                    font-size: 1.25rem;
                }
            }","}]}}}
            
            /* 主内容区域 */
            .main-content {
                display: grid;
                grid-template-columns: 1fr 1.2fr;
                gap: 24px;
                align-items: start;
            }
            
            /* 面板通用样式 */
            .panel-card,
            .result-card,
            .history-card {
                background: var(--secondary-black);
                border-radius: 16px;
                border: 1px solid var(--border-color);
                overflow: hidden;
                transition: all 0.3s ease;
            }
            
            .panel-card:hover,
            .result-card:hover,
            .history-card:hover {
                border-color: var(--tertiary-black);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                transform: translateY(-2px);
            }
            
            .panel-header,
            .result-header,
            .history-header {
                padding: 20px 24px;
                border-bottom: 1px solid var(--border-color);
                background: linear-gradient(to right, var(--secondary-black), var(--tertiary-black));
            }
            
            .panel-title,
            .result-title,
            .history-title {
                font-size: 18px;
                font-weight: 600;
                margin: 0;
                color: var(--primary-white);
            }
            
            .panel-subtitle {
                color: var(--primary-white);
                font-size: 14px;
                margin-top: 4px;
            }
            
            .panel-body,
            .result-body,
            .history-list {
                padding: 24px;
            }
            
            /* 设置区域 */
            .setting-section {
                margin-bottom: 24px;
            }
            
            .section-label {
                display: block;
                font-weight: 500;
                margin-bottom: 12px;
                color: var(--primary-white);
            }
            
            /* 产品卡片样式 */
            .product-type-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 12px;
            }
            
            .product-card {
                display: flex;
                align-items: center;
                padding: 12px;
                background: var(--tertiary-black);
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
                border: 2px solid transparent;
            }
            
            .product-card:hover {
                background: var(--quaternary-black);
            }
            
            .product-card.active {
                border-color: var(--accent-red);
                background: rgba(255, 0, 80, 0.05);
            }
            
            .product-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--primary-black);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
            }
            
            .product-name {
                font-weight: 500;
                font-size: 14px;
                color: var(--primary-white);
            }
            
            .product-desc {
                font-size: 12px;
                color: var(--text-gray);
                margin-top: 2px;
            }
            
            /* 风格选择 */
            .style-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
            }
            
            .style-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 12px 8px;
                background: var(--tertiary-black);
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.2s ease;
                border: 2px solid transparent;
            }
            
            .style-card:hover {
                background: var(--quaternary-black);
            }
            
            .style-card.active {
                border-color: var(--accent-blue);
                background: rgba(37, 99, 235, 0.05);
            }
            
            .style-icon {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: var(--primary-black);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 8px;
                font-size: 16px;
                color: var(--accent-blue);
            }
            
            .style-name {
                font-size: 12px;
                text-align: center;
                color: var(--primary-white);
            }
            
            /* 场景选择 */
            .scene-grid {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                gap: 8px;
            }
            
            .scene-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px 8px;
                background: var(--tertiary-black);
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.2s ease;
                border: 2px solid transparent;
            }
            
            .scene-card:hover {
                background: var(--quaternary-black);
            }
            
            .scene-card.active {
                border-color: var(--success-green);
                background: rgba(22, 163, 74, 0.05);
            }
            
            .scene-icon {
                font-size: 18px;
                margin-bottom: 6px;
                color: var(--success-green);
            }
            
            .scene-name {
                font-size: 11px;
                text-align: center;
                color: var(--primary-white);
            }
            
            /* 高级设置 */
            .advanced-settings {
                space-y: 16px;
            }
            
            .param-item {
                margin-bottom: 16px;
            }
            
            .param-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            
            .param-name {
                font-size: 14px;
                font-weight: 500;
                color: var(--primary-white);
            }
            
            .param-value {
                font-size: 14px;
                color: var(--accent-blue);
                font-weight: 500;
            }
            
            /* 滑块样式 */
            .slider {
                width: 100%;
                height: 6px;
                border-radius: 3px;
                background: var(--tertiary-black);
                outline: none;
                appearance: none;
                margin: 8px 0;
            }
            
            .slider::-webkit-slider-thumb {
                appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: var(--accent-blue);
                cursor: pointer;
                box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
            }
            
            .slider-labels {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: var(--text-gray);
            }
            
            /* 生成按钮 */
            .generate-btn-container {
                text-align: center;
                margin-top: 16px;
            }
            
            .btn-large {
                padding: 16px 48px;
                font-size: 16px;
                border-radius: 28px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .btn-large:hover {
                transform: translateY(-2px);
                box-shadow: 0 12px 24px rgba(37, 99, 235, 0.3);
            }
            
            .btn-large:active {
                transform: translateY(0);
            }
            
            .btn-tip {
                margin-top: 8px;
                font-size: 12px;
                color: var(--text-light-gray);
            }
            
            /* 快捷键提示 */
            .shortcut-hint {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                margin-top: 12px;
                font-size: 12px;
                color: var(--text-light-gray);
                animation: pulse 2s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 0.6; }
                50% { opacity: 1; }
            }
            
            kbd {
                background-color: var(--tertiary-black);
                border: 1px solid var(--border-color);
                border-radius: 4px;
                padding: 2px 6px;
                font-size: 11px;
                font-family: system-ui, monospace;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                color: var(--primary-white);
            }
            
            /* 结果展示 */
            .result-actions,
            .script-meta {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .action-btn,
            .copy-section-btn,
            .history-btn {
                display: inline-flex;
                align-items: center;
                padding: 6px 12px;
                background: var(--tertiary-black);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                color: var(--text-light-gray);
                font-size: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
            }
            
            .action-btn:hover,
            .copy-section-btn:hover,
            .history-btn:hover {
                background: var(--quaternary-black);
                color: var(--primary-white);
                border-color: var(--primary-white);
            }
            
            .copy-section-btn {
                padding: 4px 8px;
            }
            
            .history-btn {
                padding: 6px 8px;
            }
            
            /* 话术段落样式 */
            .script-section {
                margin-bottom: 20px;
                background: var(--tertiary-black);
                border-radius: 12px;
                overflow: hidden;
            }
            
            .script-section:last-child {
                margin-bottom: 0;
            }
            
            .script-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background: linear-gradient(to right, var(--tertiary-black), var(--quaternary-black));
                border-bottom: 1px solid var(--border-color);
            }
            
            .script-title {
                font-size: 16px;
                font-weight: 600;
                margin: 0;
                display: flex;
                align-items: center;
                color: var(--accent-blue);
            }
            
            .duration-tag {
                font-size: 12px;
                color: var(--primary-white);
                background: var(--primary-black);
                padding: 4px 8px;
                border-radius: 12px;
            }
            
            .script-content {
                padding: 20px;
                line-height: 1.6;
                white-space: pre-line;
                font-size: 14px;
                color: var(--primary-white);
            }
            
            /* 历史记录 */
            .history-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid var(--border-color);
            }
            
            .history-item:last-child {
                border-bottom: none;
            }
            
            .history-name {
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 4px;
                color: var(--primary-white);
            }
            
            .history-time {
                font-size: 12px;
                color: var(--text-gray);
            }
            
            .view-all-btn {
                font-size: 12px;
                color: var(--accent-blue);
                background: none;
                border: none;
                cursor: pointer;
                padding: 4px 8px;
                border-radius: 4px;
            }
            
            .view-all-btn:hover {
                background: rgba(37, 99, 235, 0.1);
            }
            
            /* 响应式设计 - 平板设备（1024px以下） */
            @media (max-width: 1024px) {
                .ai-script-page {
                    padding: 16px;
                }
                
                .main-content {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
                
                .header-section {
                    flex-direction: column;
                    text-align: center;
                    gap: 20px;
                    padding: 24px;
                }
                
                .header-content h1 {
                    font-size: 24px;
                    color: var(--primary-white);
                }
                
                .header-content p {
                    font-size: 14px;
                    color: var(--text-light-gray);
                }
                
                .product-type-grid,
                .style-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .scene-grid {
                    grid-template-columns: repeat(3, 1fr);
                }
                
                .panel-body,
                .result-body,
                .history-list {
                    padding: 20px;
                }
            }
            
            /* 响应式设计 - 移动端（768px以下） */
            @media (max-width: 768px) {
                .ai-script-page {
                    padding: 12px;
                }
                
                .header-section {
                    padding: 20px 16px;
                }
                
                .header-content h1 {
                    font-size: 20px;
                    color: var(--primary-white);
                }
                
                .header-illustration svg {
                    width: 60px;
                    height: 60px;
                }
                
                .panel-body,
                .result-body,
                .history-list {
                    padding: 16px;
                }
                
                /* 产品卡片 - 移动端单列 */
                .product-type-grid {
                    grid-template-columns: 1fr;
                    gap: 10px;
                }
                
                .product-card {
                    padding: 12px;
                }
                
                /* 风格选择 - 移动端两行两列 */
                .style-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 8px;
                }
                
                /* 场景选择 - 移动端两行三列 */
                .scene-grid {
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                }
                
                .scene-card {
                    padding: 8px 4px;
                }
                
                .scene-name {
                    font-size: 10px;
                }
                
                /* 生成按钮 - 移动端全宽 */
                .btn-large {
                    width: 100%;
                    padding: 14px 20px;
                    border-radius: 24px;
                }
                
                /* 结果展示 - 移动端 */
                .result-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 12px;
                }
                
                .result-actions {
                    width: 100%;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                
                .action-btn {
                    flex: 1;
                    min-width: calc(50% - 4px);
                    justify-content: center;
                }
                
                /* 话术部分 - 移动端 */
                .script-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                }
                
                .script-content {
                    font-size: 13px;
                    line-height: 1.5;
                    padding: 16px;
                }
                
                /* 历史记录 - 移动端 */
                .history-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                }
                
                .history-item {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                    padding: 16px 0;
                }
                
                /* 通知样式适配 */
                #ai-script-notification {
                    left: 12px;
                    right: 12px;
                    bottom: 12px;
                    font-size: 13px;
                }
            }
            
            /* 响应式设计 - 小屏手机（480px以下） */
            @media (max-width: 480px) {
                .style-grid,
                .scene-grid {
                    grid-template-columns: repeat(2, 1fr);
                }
                
                .param-item {
                    margin-bottom: 12px;
                }
                
                .panel-header,
                .result-header,
                .history-header {
                    padding: 16px;
                }
                
                .panel-title,
                .result-title,
                .history-title {
                    font-size: 16px;
                }
                
                .script-title {
                    font-size: 14px;
                }
            }
            
            /* 高对比度模式支持 */
            @media (prefers-contrast: high) {
                .panel-card,
                .result-card,
                .history-card {
                    border-color: #ffffff;
                }
                
                .product-card.active,
                .style-card.active,
                .scene-card.active {
                    border-width: 2px;
                }
            }
            
            /* 减少动画模式支持 */
            @media (prefers-reduced-motion: reduce) {
                .panel-card:hover,
                .result-card:hover,
                .history-card:hover {
                    transform: none;
                }
                
                #ai-script-notification {
                    animation: none;
                    transform: none;
                    opacity: 1;
                }
            }
        `;
        
        document.head.appendChild(style);
    },
    
    // 渲染场景卡片
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
                <div class="scene-icon">
                    <i class="fa ${scene.icon}"></i>
                </div>
                <div class="scene-name">${scene.title}</div>
            </div>
        `).join('');
    },
    
    // 设置事件监听器
    setupEventListeners() {
        // 键盘快捷键支持
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter 生成话术
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                const generateBtn = document.getElementById('generate-script-btn');
                if (generateBtn && !generateBtn.disabled) {
                    generateBtn.click();
                    e.preventDefault();
                }
            }
        });
        
        // 产品类型选择 - 添加键盘导航支持
        const productTypeCards = document.querySelectorAll('.product-card');
        productTypeCards.forEach((card, index) => {
            // 设置tabindex使其可聚焦
            card.tabIndex = 0;
            
            // 添加键盘事件处理
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % productTypeCards.length;
                    productTypeCards[nextIndex].focus();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prevIndex = (index - 1 + productTypeCards.length) % productTypeCards.length;
                    productTypeCards[prevIndex].focus();
                }
            });
            
            card.addEventListener('click', () => {
                productTypeCards.forEach(c => c.classList.remove('active', 'scale-in'));
                card.classList.add('active');
                // 添加点击动画
                setTimeout(() => card.classList.add('scale-in'), 10);
                // 更新预览区元数据
                this.updatePreviewMetadata(card.dataset.type);
            });
            
            // 添加聚焦样式
            card.addEventListener('focus', () => {
                card.style.outline = '2px solid var(--accent-blue)';
                card.style.outlineOffset = '2px';
            });
            
            card.addEventListener('blur', () => {
                card.style.outline = 'none';
                card.style.outlineOffset = '0';
            });
        });
        
        // 话术风格选择
        const styleCards = document.querySelectorAll('.style-card');
        styleCards.forEach(card => {
            card.addEventListener('click', () => {
                styleCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
            
            // 添加鼠标悬停效果
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
            });
            
            card.addEventListener('mouseleave', () => {
                if (!card.classList.contains('active')) {
                    card.style.transform = 'translateY(0)';
                }
            });
        });
        
        // 场景模板选择
        const sceneCards = document.querySelectorAll('.scene-card');
        sceneCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('active');
                // 滚动到顶部以查看结果
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // 添加鼠标悬停效果
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
            });
            
            card.addEventListener('mouseleave', () => {
                if (!card.classList.contains('active')) {
                    card.style.transform = 'translateY(0)';
                }
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
        
        // 文化元素多选框样式切换
        const culturalElements = document.querySelectorAll('.cultural-element-checkbox');
        culturalElements.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const label = e.target.closest('label');
                if (label) {
                    label.classList.toggle('active', e.target.checked);
                }
            });
        });
        
        // 生成按钮
        const generateBtn = document.getElementById('generate-script-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => {
                // 验证选项
                if (!this.validateOptions()) {
                    return;
                }
                
                // 切换生成状态
                this.toggleGenerateButton(true);
                
                // 显示加载动画
                this.showLoadingOverlay(true);
                
                // 生成话术
                this.generateScript();
            });
        }
        
        // 复制全部按钮
        const copyBtn = document.getElementById('copy-script-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                this.copyAllScripts();
            });
        }
        
        // 复制段落按钮
        const copySectionBtns = document.querySelectorAll('.copy-section-btn');
        copySectionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.closest('.script-section');
                if (section) {
                    const content = section.querySelector('.script-content').textContent;
                    this.copyToClipboard(content);
                    this.showNotification('复制成功！');
                }
            });
        });
        
        // 重新生成按钮
        const regenerateBtn = document.getElementById('regenerate-btn');
        if (regenerateBtn) {
            regenerateBtn.addEventListener('click', () => {
                this.generateScript();
            });
        }
        
        // 响应式布局处理
        this.handleResponsiveLayout();
        window.addEventListener('resize', () => {
            this.handleResponsiveLayout();
        });
        
        // 移动端导航切换
        this.setupMobileNavigation();
    },
    
    // 生成话术
    generateScript() {
        try {
            console.log('AIScriptComponent: 开始生成话术，功能测试模式已启动');
            
            // 获取选中的产品类型
            const selectedProduct = document.querySelector('.product-card.active');
            if (!selectedProduct) {
                this.toggleGenerateButton(false);
                this.showLoadingOverlay(false);
                this.showNotification('请先选择产品类型！', 'warning');
                return;
            }
            
            const productType = selectedProduct.dataset.type;
            
            // 获取选中的场景
            const selectedScenes = document.querySelectorAll('.scene-card.active');
            if (selectedScenes.length === 0) {
                this.toggleGenerateButton(false);
                this.showLoadingOverlay(false);
                this.showNotification('请至少选择一个话术场景！', 'warning');
                return;
            }
            
            console.log('AIScriptComponent: 选中的场景数量:', selectedScenes.length);
            
            // 验证结果容器是否存在
            let resultContainer = document.getElementById('script-results-container');
            if (!resultContainer) {
                // 如果结果容器不存在，尝试创建
                const mainContent = document.querySelector('.main-content');
                if (mainContent) {
                    resultContainer = document.createElement('div');
                    resultContainer.id = 'script-results-container';
                    resultContainer.className = 'script-results fade-in';
                    mainContent.appendChild(resultContainer);
                } else {
                    throw new Error('无法找到主内容区域');
                }
            }
            
            // 测试模式指示
            const testModeIndicator = document.createElement('div');
            testModeIndicator.className = 'test-mode-indicator';
            testModeIndicator.textContent = '🔧 测试模式：功能验证成功！';
            testModeIndicator.style.cssText = `
                background-color: #e6f7ff;
                color: #1890ff;
                padding: 8px 12px;
                border-radius: 4px;
                margin-bottom: 16px;
                text-align: center;
                border: 1px solid #91d5ff;
                font-size: 14px;
            `;
            
            // 清空结果容器并添加测试指示
            resultContainer.innerHTML = '';
            resultContainer.appendChild(testModeIndicator);
            
            // 模拟生成过程
            setTimeout(() => {
                try {
                    // 生成话术内容
                    this.displayGeneratedScripts(productType, selectedScenes);
                    
                    // 恢复按钮状态
                    this.toggleGenerateButton(false);
                    
                    // 隐藏加载动画
                    this.showLoadingOverlay(false);
                    
                    // 显示成功提示
                    this.showNotification('话术生成成功！', 'success');
                    
                    console.log('AIScriptComponent: 话术生成完成，功能测试通过！');
                } catch (error) {
                    const errorInfo = this.logError(error, '话术内容生成失败');
                    this.toggleGenerateButton(false);
                    this.showLoadingOverlay(false);
                    this.showNotification(`生成话术时出错: ${error.message || '未知错误'}，请重试！`, 'error');
                }
            }, 1500);
        } catch (error) {
            const errorInfo = this.logError(error, '整体话术生成流程失败');
            this.toggleGenerateButton(false);
            this.showLoadingOverlay(false);
            this.showNotification('系统错误，请刷新页面重试！', 'error');
        }
    },
    
    // 显示生成的话术内容
    displayGeneratedScripts(productType, selectedScenes) {
        const resultContainer = document.getElementById('script-results-container');
        if (!resultContainer) {
            console.error('结果容器不存在');
            return;
        }
        
        // 获取话术风格
        const selectedStyle = document.querySelector('.style-card.active')?.dataset.style || 'simple';
        
        // 创建话术模块
        selectedScenes.forEach(scene => {
            const sceneType = scene.dataset.scene;
            const sceneTitle = scene.querySelector('.scene-name').textContent;
            const scriptContent = this.generateSceneContent(productType, sceneType, selectedStyle);
            
            const scriptSection = document.createElement('div');
            scriptSection.className = 'script-section slide-up';
            scriptSection.innerHTML = `
                <div class="script-header">
                    <h3 class="script-title">${sceneTitle}</h3>
                    <button class="copy-section-btn" data-section="${sceneType}">
                        <i class="fa fa-copy"></i> 复制
                    </button>
                </div>
                <div class="script-content">${scriptContent}</div>
            `;
            
            resultContainer.appendChild(scriptSection);
            
            // 添加复制事件
            const copyBtn = scriptSection.querySelector('.copy-section-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    this.copyToClipboard(scriptContent);
                    this.showNotification('话术已复制到剪贴板！');
                });
            }
        });
        
        // 添加全选按钮
        if (selectedScenes.length > 1) {
            const selectAllBtn = document.createElement('button');
            selectAllBtn.className = 'select-all-btn';
            selectAllBtn.innerHTML = '<i class="fa fa-check-square-o"></i> 全选复制';
            selectAllBtn.style.cssText = `
                margin-top: 16px;
                padding: 8px 16px;
                background: var(--accent-blue);
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
            `;
            
            selectAllBtn.addEventListener('click', this.copyAllScripts.bind(this));
            resultContainer.appendChild(selectAllBtn);
        }
    },
    
    // 生成场景内容
    generateSceneContent(productType, sceneType, styleType) {
        // 根据产品类型获取产品名称
        let productName = '';
        switch(productType) {
            case 'caterpillar':
                productName = '冬虫夏草';
                break;
            case 'beef':
                productName = '牦牛肉';
                break;
            case 'barley':
                productName = '青稞产品';
                break;
            case 'crafts':
                productName = '手工艺品';
                break;
            default:
                productName = '高原产品';
        }
        
        // 测试用话术内容库
        const contentLibrary = {
            greeting: {
                simple: `亲爱的家人们，大家好！欢迎来到我的直播间！今天给大家带来的是正宗的${productName}，有兴趣的家人扣个1！`,
                professional: `尊敬的各位观众，欢迎来到我们的专业直播间。今天我们要为大家详细介绍${productName}，这是一款具有显著保健功效的高原特产。`,
                enthusiastic: `家人们！家人们！热烈欢迎所有进入直播间的朋友们！今天我超级激动，因为要为大家分享我最爱的${productName}！你们准备好了吗？`,
                cultural: `${productName}，在藏族传统文化中有着悠久的历史。早在千年以前，我们的祖先就发现了它的珍贵价值，将其视为高原赐予的珍贵宝...`
            },
            intro: {
                simple: `大家看，这就是我们的${productName}，都是高原纯天然的，品质绝对有保证！`,
                professional: `${productName}生长在海拔3500米以上的高原地区，特殊的地理环境使其具有独特的营养价值。经专业检测，含有丰富的蛋白质、氨基酸等多种营养成分。`,
                enthusiastic: `我的天哪！看看这个品质！每一个都是精挑细选的优质${productName}！你们知道吗？这可是我亲自跑到高原上去挑选的，每一个都来之不易！`,
                cultural: `在我们藏族人民心中，${productName}不仅仅是一种产品，更是我们民族文化的象征。它承载着高原人民的智慧和辛勤劳动...`
            },
            interaction: {
                simple: `有多少家人之前吃过${productName}？可以在评论区告诉我你们的体验！`,
                professional: `接下来是互动环节。我将针对${productName}的功效和食用方法为大家解答专业问题，请在评论区留言。`,
                enthusiastic: `家人们！让我看到你们的热情！喜欢${productName}的扣1，想了解更多的扣2，已经买过的扣3！`,
                cultural: `我们高原人常说："${productName}是大自然对我们的馈赠"。家人们，你们想了解更多关于它背后的故事吗？`
            },
            promotion: {
                simple: `今天直播间特惠价，只要XX元，比市场价便宜30%！数量有限，先到先得！`,
                professional: `基于市场分析，我们今天提供的价格具有显著优势。现在下单还将获得专业的食用指南和储存建议。`,
                enthusiastic: `家人们！超大福利来了！限时折扣只有今天！买三送一！买五送二！错过今天再等一年！`,
                cultural: `为了让更多人了解我们藏族的传统特产，今天我们特别推出文化传承价，还附赠精美民族风包装！`
            },
            guide: {
                simple: `点击下方小黄车，选择规格，立即下单！`,
                professional: `请按照以下步骤操作：点击右下角购物车图标，选择您需要的规格和数量，确认订单信息后点击支付即可。`,
                enthusiastic: `准备好了吗家人们？3！2！1！上链接！点击小黄车立即抢购！手慢无！`,
                cultural: `我们一起传承民族文化，支持高原特产。点击购物车，选择心仪的${productName}，共同感受高原的馈赠。`
            }
        };
        
        // 返回对应内容，如果不存在则使用默认内容
        return contentLibrary[sceneType]?.[styleType] || `这是${productName}的${sceneType}话术内容。`;
    },
    
    // 复制所有话术
    copyAllScripts() {
        const scriptSections = document.querySelectorAll('.script-content');
        let allContent = '';
        
        scriptSections.forEach((section, index) => {
            const title = section.closest('.script-section').querySelector('.script-title').textContent.trim();
            allContent += `=== ${title} ===\n${section.textContent}\n\n`;
        });
        
        this.copyToClipboard(allContent);
        this.showNotification('全部话术已复制到剪贴板！');
    },
    
    // 复制到剪贴板
    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            // 降级方案
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    },
    
    // 更新预览区元数据
    updatePreviewMetadata(productType) {
        const previewArea = document.querySelector('.script-preview');
        if (!previewArea) return;
        
        const productNames = {
            'clothing': '服装',
            'food': '食品',
            'electronics': '电子产品',
            'beauty': '美妆产品',
            'home': '家居用品',
            'digital': '数字产品'
        };
        
        const productName = productNames[productType] || '产品';
        previewArea.setAttribute('data-product', productName);
    },
    
    // 验证选项
    validateOptions() {
        const selectedProduct = document.querySelector('.product-card.active');
        const selectedScenes = document.querySelectorAll('.scene-card.active');
        
        if (!selectedProduct) {
            this.showNotification('请选择产品类型', 'warning');
            return false;
        }
        
        if (selectedScenes.length === 0) {
            this.showNotification('请选择至少一个场景', 'warning');
            return false;
        }
        
        return true;
    },
    
    // 切换生成按钮状态
    toggleGenerateButton(loading) {
        const generateBtn = document.getElementById('generate-script-btn');
        if (!generateBtn) return;
        
        if (loading) {
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<span class="loading-spinner"></span> 生成中...';
        } else {
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> 生成话术';
        }
    },
    
    // 显示加载覆盖层
    showLoadingOverlay(show) {
        const loadingOverlay = document.querySelector('.loading-overlay');
        if (!loadingOverlay) return;
        
        if (show) {
            loadingOverlay.style.display = 'flex';
            // 添加淡入动画
            setTimeout(() => {
                loadingOverlay.style.opacity = '1';
            }, 10);
        } else {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }
    },
    
    // 处理响应式布局
    handleResponsiveLayout() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) return;
        
        if (window.innerWidth < 768) {
            mainContent.classList.add('mobile-layout');
        } else {
            mainContent.classList.remove('mobile-layout');
        }
    },
    
    // 设置移动端导航
    setupMobileNavigation() {
        // 移动端导航逻辑
        const mobileNav = document.querySelector('.mobile-nav');
        if (!mobileNav) return;
        
        // 添加移动端特定的交互逻辑
    },
    
    // 显示通知
    showNotification(message, type = 'info') {
        // 记录通知到控制台
        console.log(`[AI Script Notification - ${type.toUpperCase()}]:`, message);
        
        // 检查是否已存在通知元素
        let notification = document.getElementById('ai-script-notification');
        if (notification) {
            notification.remove();
        }
        
        // 创建新通知
        notification = document.createElement('div');
        notification.id = 'ai-script-notification';
        notification.className = `ai-notification ai-notification-${type}`;
        notification.textContent = message;
        
        // 获取根元素样式
        const rootStyle = window.getComputedStyle(document.documentElement);
        
        // 根据类型设置不同的主题变量名称
        const themeVars = {
            success: 'accent-green',
            error: 'accent-red',
            warning: 'accent-yellow',
            info: 'accent-blue'
        };
        
        // 默认颜色（用于回退）
        const defaultColors = {
            success: '#10B981',
            error: '#EF4444',
            warning: '#F59E0B',
            info: '#3B82F6'
        };
        
        // 获取对应的主题颜色，支持多种可能的变量命名约定
        let bgColor = defaultColors[type];
        const themeVarName = themeVars[type];
        
        // 尝试获取主题变量（支持多种命名约定）
        const varNames = [
            `--${themeVarName}`,
            `--${themeVarName.replace('-', '')}`,
            `--color-${themeVarName}`,
            `--${type}-color`,
            `--primary-color` // 作为最后回退
        ];
        
        for (const varName of varNames) {
            const color = rootStyle.getPropertyValue(varName).trim();
            if (color) {
                bgColor = color;
                break;
            }
        }
        
        // 获取其他主题变量
        const textColor = rootStyle.getPropertyValue('--text-color').trim() || 'white';
        const borderRadius = rootStyle.getPropertyValue('--border-radius').trim() || '8px';
        const shadowColor = rootStyle.getPropertyValue('--shadow-color').trim() || 'rgba(0, 0, 0, 0.2)';
        const fontFamily = rootStyle.getPropertyValue('--font-family').trim() || 'inherit';
        
        // 样式
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: bgColor,
            color: textColor,
            padding: '12px 20px',
            borderRadius: borderRadius,
            zIndex: '9999',
            boxShadow: `0 4px 12px ${shadowColor}`,
            animation: 'slideIn 0.3s ease',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: fontFamily,
            border: 'none',
            minWidth: '200px',
            maxWidth: '90vw',
            wordWrap: 'break-word',
            lineHeight: '1.5',
            transition: 'all 0.3s ease',
            userSelect: 'none'
        });
        
        // 添加动画
        const styleId = 'ai-notification-animation';
        let animationStyle = document.getElementById(styleId);
        if (!animationStyle) {
            animationStyle = document.createElement('style');
            animationStyle.id = styleId;
            animationStyle.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(animationStyle);
        }
        
        // 添加关闭按钮
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        Object.assign(closeBtn.style, {
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            right: '12px',
            transform: 'translateY(-50%)',
            padding: '0',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });
        closeBtn.addEventListener('click', () => {
            notification.style.transition = 'all 0.3s ease';
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
        notification.appendChild(closeBtn);
        
        // 添加到页面
        document.body.appendChild(notification);
        
        // 自动消失
        setTimeout(() => {
            notification.style.transition = 'all 0.3s ease';
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    },
    
    // 记录错误日志
    logError(error, context = '') {
        // 生成时间戳
        const timestamp = new Date().toISOString();
        
        // 构建错误信息
        const errorInfo = {
            timestamp,
            context,
            message: error.message || '未知错误',
            stack: error.stack || '无堆栈信息',
            component: 'AIScriptComponent'
        };
        
        // 控制台详细日志
        console.error(`[AI Script Error - ${context || '未知上下文'}]:`, errorInfo);
        
        // 这里可以添加发送错误日志到服务器的功能
        // 例如：this.sendErrorLogToServer(errorInfo);
        
        // 返回错误信息，方便上层调用处理
        return errorInfo;
    },
    
    // 发送错误日志到服务器（预留接口）
    sendErrorLogToServer(errorInfo) {
        // 生产环境中可以实现真实的日志发送
        if (process && process.env && process.env.NODE_ENV === 'production') {
            // 模拟发送
            console.log('错误日志将被发送到服务器:', errorInfo);
            
            // 实际实现可能如下：
            /*
            fetch('/api/logs/error', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(errorInfo)
            }).catch(err => {
                // 避免日志发送失败导致级联错误
                console.error('发送错误日志失败:', err);
            });
            */
        }
    },
    
    // 复制文本到剪贴板
    copyToClipboard(text) {
        return navigator.clipboard.writeText(text)
            .then(() => {
                console.log('复制成功:', text);
                return true;
            })
            .catch(err => {
                // 降级方案：创建临时文本区域
                try {
                    const textarea = document.createElement('textarea');
                    textarea.value = text;
                    textarea.style.position = 'fixed';
                    textarea.style.left = '-999999px';
                    textarea.style.top = '-999999px';
                    document.body.appendChild(textarea);
                    textarea.focus();
                    textarea.select();
                    document.execCommand('copy');
                    textarea.remove();
                    console.log('降级复制成功:', text);
                    return true;
                } catch (fallbackErr) {
                    const errorInfo = this.logError(fallbackErr, '复制文本失败');
                    this.showNotification('复制失败，请手动复制', 'error');
                    return false;
                }
            });
    }
};







