// 直播功能页面组件
const LiveComponent = {
    isLive: false,
    render(container) {
        container.innerHTML = `
            <div class="space-y-6">
                <!-- 直播状态控制 -->
                <div class="card">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-bold">直播助手</h2>
                            <p class="text-gray-light">${this.isLive ? '直播进行中...' : '准备开始直播'}</p>
                        </div>
                        <button id="live-control-btn" class="btn ${this.isLive ? 'btn-outline' : 'btn-primary'}">
                            ${this.isLive ? '结束直播' : '开始直播'}
                        </button>
                    </div>
                </div>
                
                <!-- 直播预览区域 -->
                <div class="card">
                    <div class="relative">
                        <div id="live-preview" class="aspect-video bg-tertiary-black rounded-lg flex items-center justify-center">
                            ${!this.isLive ? `
                                <div class="text-center">
                                    <i class="fa fa-video-camera text-4xl text-gray-light mb-4"></i>
                                    <p class="text-gray-light">直播预览</p>
                                </div>
                            ` : `
                                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <p class="text-xl">直播进行中</p>
                                </div>
                            `}
                        </div>
                        
                        <!-- 直播数据浮层 -->
                        ${this.isLive && `
                            <div class="absolute top-4 left-4 flex flex-col space-y-2">
                                <div class="bg-black bg-opacity-70 px-3 py-1 rounded-full text-sm flex items-center">
                                    <i class="fa fa-eye mr-2"></i>
                                    <span>128 观众</span>
                                </div>
                                <div class="bg-black bg-opacity-70 px-3 py-1 rounded-full text-sm flex items-center">
                                    <i class="fa fa-heart mr-2 text-accent-red"></i>
                                    <span>56 点赞</span>
                                </div>
                            </div>
                        `}
                    </div>
                </div>
                
                <!-- 核心功能选项卡 -->
                <div class="card">
                    <div class="border-b border-tertiary-black">
                        <div class="flex space-x-6">
                            <div class="live-tab active" data-tab="translation">
                                <span>谐音标注</span>
                            </div>
                            <div class="live-tab" data-tab="background">
                                <span>虚拟背景</span>
                            </div>
                            <div class="live-tab" data-tab="pronunciation">
                                <span>发音反馈</span>
                            </div>
                            <div class="live-tab" data-tab="data">
                                <span>直播数据</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 选项卡内容 -->
                    <div id="live-tabs-content">
                        ${this.renderTranslationTab()}
                    </div>
                </div>
                
                <!-- 实时弹幕和互动 -->
                ${this.isLive && `
                    <div class="card">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="font-semibold">实时互动</h3>
                            <button class="text-gray-light">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                        <div id="interaction-area" class="space-y-2 max-h-40 overflow-y-auto">
                            <div class="flex items-start">
                                <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-2 flex-shrink-0">
                                    <i class="fa fa-user"></i>
                                </div>
                                <div>
                                    <div class="flex items-center">
                                        <span class="font-medium mr-2">高原观众</span>
                                        <span class="text-xs text-gray-light">刚刚</span>
                                    </div>
                                    <p class="text-sm">这个产品真的很好用！</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-2 flex-shrink-0">
                                    <i class="fa fa-user"></i>
                                </div>
                                <div>
                                    <div class="flex items-center">
                                        <span class="font-medium mr-2">藏族姑娘</span>
                                        <span class="text-xs text-gray-light">刚刚</span>
                                    </div>
                                    <p class="text-sm">请问这个虫草怎么食用？</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-4 flex space-x-2">
                            <input type="text" id="reply-input" class="input-field flex-1" placeholder="回复观众...">
                            <button id="send-reply" class="btn btn-primary">发送</button>
                        </div>
                    </div>
                `}
            </div>
        `;
        
        this.setupEventListeners();
    },
    
    renderTranslationTab() {
        return `
            <div class="p-4" id="translation-tab">
                <div class="mb-4">
                    <h3 class="font-semibold mb-2">藏语-汉语谐音标注</h3>
                    <div class="space-y-2">
                        <div class="flex space-x-2">
                            <select id="dialect-select" class="input-field flex-1">
                                <option value="amdo">安多方言</option>
                                <option value="kham">康巴方言</option>
                                <option value="central">卫藏方言</option>
                            </select>
                            <select id="translation-direction" class="input-field flex-1">
                                <option value="tibetanToChinese">藏语→汉语</option>
                                <option value="chineseToTibetan">汉语→藏语</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm mb-2">输入文字</label>
                        <textarea id="source-text" class="input-field h-32" placeholder="请输入要翻译的文字..."></textarea>
                    </div>
                    
                    <button id="translate-btn" class="btn btn-primary w-full">开始转换</button>
                    
                    <div class="border-t border-tertiary-black pt-4">
                        <h3 class="font-semibold mb-2">转换结果</h3>
                        <div id="translation-result" class="min-h-32 bg-tertiary-black p-4 rounded-lg">
                            <div class="mb-4">
                                <p class="text-sm text-gray-light mb-1">原句</p>
                                <p id="original-text" class="text-base">-</p>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm text-gray-light mb-1">谐音句</p>
                                <p id="phonetic-text" class="text-base">-</p>
                            </div>
                            <div class="mb-4">
                                <p class="text-sm text-gray-light mb-1">拼音标注</p>
                                <p id="pinyin-text" class="text-base">-</p>
                            </div>
                            <div>
                                <p class="text-sm text-gray-light mb-1">释义</p>
                                <p id="definition-text" class="text-base">-</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderBackgroundTab() {
        return `
            <div class="p-4" id="background-tab">
                <h3 class="font-semibold mb-4">虚拟背景选择</h3>
                
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="bg-tertiary-black rounded-lg overflow-hidden background-item cursor-pointer" data-bg="pasture">
                        <div class="aspect-video bg-gray-medium"></div>
                        <div class="p-2 text-center text-sm">天然牧场</div>
                    </div>
                    <div class="bg-tertiary-black rounded-lg overflow-hidden background-item cursor-pointer" data-bg="mountains">
                        <div class="aspect-video bg-gray-medium"></div>
                        <div class="p-2 text-center text-sm">雪山背景</div>
                    </div>
                    <div class="bg-tertiary-black rounded-lg overflow-hidden background-item cursor-pointer" data-bg="farm">
                        <div class="aspect-video bg-gray-medium"></div>
                        <div class="p-2 text-center text-sm">青稞田</div>
                    </div>
                    <div class="bg-tertiary-black rounded-lg overflow-hidden background-item cursor-pointer" data-bg="house">
                        <div class="aspect-video bg-gray-medium"></div>
                        <div class="p-2 text-center text-sm">藏式民居</div>
                    </div>
                </div>
                
                <div class="border-t border-tertiary-black pt-4">
                    <h3 class="font-semibold mb-2">自定义背景</h3>
                    <label class="btn btn-outline w-full flex items-center justify-center">
                        <i class="fa fa-upload mr-2"></i>
                        上传背景图片
                        <input type="file" class="hidden" accept="image/*">
                    </label>
                    <p class="text-xs text-gray-light mt-2 text-center">支持JPG、PNG格式，建议分辨率1920x1080</p>
                </div>
            </div>
        `;
    },
    
    renderPronunciationTab() {
        return `
            <div class="p-4" id="pronunciation-tab">
                <h3 class="font-semibold mb-4">发音反馈训练</h3>
                
                <div class="mb-6">
                    <label class="block text-sm mb-2">发音示例文本</label>
                    <select id="pronunciation-text" class="input-field">
                        <option value="">请选择示例文本</option>
                        <option value="大家好，欢迎来到我的直播间！">大家好，欢迎来到我的直播间！</option>
                        <option value="这是正宗的高原虫草，品质非常好。">这是正宗的高原虫草，品质非常好。</option>
                        <option value="感谢家人们的支持和关注！">感谢家人们的支持和关注！</option>
                    </select>
                </div>
                
                <div class="text-center mb-6">
                    <button id="start-pronunciation" class="btn btn-primary inline-flex items-center">
                        <i class="fa fa-microphone mr-2"></i>
                        开始录音
                    </button>
                </div>
                
                <div id="pronunciation-feedback" class="bg-tertiary-black p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="font-medium">发音评价</h4>
                        <span id="pronunciation-score" class="text-accent-blue">85分</span>
                    </div>
                    
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full bg-success-green mr-2"></div>
                            <span>整体发音清晰度：标准</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full bg-warning-yellow mr-2"></div>
                            <span>语调自然度：良好</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 rounded-full bg-error-red mr-2"></div>
                            <span>个别字词发音：需要改进</span>
                        </div>
                    </div>
                    
                    <div class="mt-4">
                        <p class="text-sm text-gray-light mb-2">改进建议</p>
                        <p class="text-sm">注意"高原"这个词的发音，"高"字的音调可以再提高一些。</p>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderDataTab() {
        return `
            <div class="p-4" id="data-tab">
                <h3 class="font-semibold mb-4">直播数据可视化</h3>
                
                <div class="grid grid-cols-3 gap-4 mb-6">
                    <div class="text-center">
                        <div class="bg-tertiary-black rounded-lg p-4">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fe2c55'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9v7h2v5h10v-5h2v-7c0-3.87-3.13-7-7-7zm0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E" width="32" height="32" class="mx-auto mb-2">
                            <p class="text-2xl font-bold">24</p>
                            <p class="text-xs text-gray-light">订单数（牦牛）</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="bg-tertiary-black rounded-lg p-4">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300c851'%3E%3Cpath d='M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E" width="32" height="32" class="mx-auto mb-2">
                            <p class="text-2xl font-bold">356</p>
                            <p class="text-xs text-gray-light">销售额（青稞穗）</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="bg-tertiary-black rounded-lg p-4">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffab00'%3E%3Cpath d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'/%3E%3C/svg%3E" width="32" height="32" class="mx-auto mb-2">
                            <p class="text-2xl font-bold">156</p>
                            <p class="text-xs text-gray-light">互动次数（酥油茶壶）</p>
                        </div>
                    </div>
                </div>
                
                <div class="h-64">
                    <canvas id="live-data-chart"></canvas>
                </div>
            </div>
        `;
    },
    
    setupEventListeners() {
        // 直播控制按钮
        const liveControlBtn = document.getElementById('live-control-btn');
        if (liveControlBtn) {
            liveControlBtn.addEventListener('click', () => {
                this.isLive = !this.isLive;
                this.render(document.getElementById('page-content'));
            });
        }
        
        // 选项卡切换
        const liveTabs = document.querySelectorAll('.live-tab');
        liveTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 移除所有激活状态
                liveTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // 切换内容
                const tabId = tab.dataset.tab;
                const contentDiv = document.getElementById('live-tabs-content');
                
                switch(tabId) {
                    case 'translation':
                        contentDiv.innerHTML = this.renderTranslationTab();
                        this.setupTranslationEventListeners();
                        break;
                    case 'background':
                        contentDiv.innerHTML = this.renderBackgroundTab();
                        this.setupBackgroundEventListeners();
                        break;
                    case 'pronunciation':
                        contentDiv.innerHTML = this.renderPronunciationTab();
                        this.setupPronunciationEventListeners();
                        break;
                    case 'data':
                        contentDiv.innerHTML = this.renderDataTab();
                        this.renderLiveDataChart();
                        break;
                }
            });
        });
        
        // 初始化默认选项卡的事件监听
        this.setupTranslationEventListeners();
        
        // 互动回复
        const sendReplyBtn = document.getElementById('send-reply');
        if (sendReplyBtn) {
            sendReplyBtn.addEventListener('click', () => {
                const replyInput = document.getElementById('reply-input');
                const replyText = replyInput.value.trim();
                if (replyText) {
                    this.addReply(replyText);
                    replyInput.value = '';
                }
            });
        }
    },
    
    setupTranslationEventListeners() {
        const translateBtn = document.getElementById('translate-btn');
        if (translateBtn) {
            translateBtn.addEventListener('click', () => {
                const sourceText = document.getElementById('source-text').value.trim();
                if (sourceText) {
                    this.performTranslation(sourceText);
                } else {
                    App.showToast('请输入要翻译的文字', 'error');
                }
            });
        }
    },
    
    setupBackgroundEventListeners() {
        const backgroundItems = document.querySelectorAll('.background-item');
        backgroundItems.forEach(item => {
            item.addEventListener('click', () => {
                const bgType = item.dataset.bg;
                this.changeBackground(bgType);
                
                // 更新选中状态
                backgroundItems.forEach(i => i.classList.remove('border-2', 'border-accent-red'));
                item.classList.add('border-2', 'border-accent-red');
            });
        });
    },
    
    setupPronunciationEventListeners() {
        const startPronunciationBtn = document.getElementById('start-pronunciation');
        if (startPronunciationBtn) {
            startPronunciationBtn.addEventListener('click', () => {
                const textSelect = document.getElementById('pronunciation-text');
                if (!textSelect.value) {
                    App.showToast('请选择发音示例文本', 'error');
                    return;
                }
                
                App.showToast('开始录音...请朗读选中的文本', 'info');
                
                // 模拟录音过程
                setTimeout(() => {
                    App.showToast('录音完成，正在分析发音...', 'info');
                    setTimeout(() => {
                        App.showToast('发音分析完成！', 'success');
                    }, 1500);
                }, 3000);
            });
        }
    },
    
    performTranslation(text) {
        // 模拟翻译过程
        App.showToast('正在进行语音转换...', 'info');
        
        setTimeout(() => {
            // 模拟翻译结果
            const dialect = document.getElementById('dialect-select').value;
            const direction = document.getElementById('translation-direction').value;
            
            let result = {};
            
            if (direction === 'tibetanToChinese') {
                result = {
                    original: text,
                    phonetic: '这是一段谐音转换的句子',
                    pinyin: 'zhè shì yī duàn xié yīn zhuǎn huàn de jù zi',
                    definition: '这是对藏语句子的汉语翻译和解释'
                };
            } else {
                result = {
                    original: text,
                    phonetic: 'འདི་ནི་བོད་སྐད་ཀྱི་བརྗོད་ཡིག་ཡིན།',
                    pinyin: 'odi ni bod skad kyi bjayig yin',
                    definition: 'This is a Tibetan translation of the Chinese sentence'
                };
            }
            
            // 更新结果显示
            document.getElementById('original-text').textContent = result.original;
            document.getElementById('phonetic-text').textContent = result.phonetic;
            document.getElementById('pinyin-text').textContent = result.pinyin;
            document.getElementById('definition-text').textContent = result.definition;
            
            App.showToast('转换完成！', 'success');
        }, 1500);
    },
    
    changeBackground(bgType) {
        const preview = document.getElementById('live-preview');
        const bgMap = {
            pasture: '天然牧场背景',
            mountains: '雪山背景',
            farm: '青稞田背景',
            house: '藏式民居背景'
        };
        
        // 模拟背景切换效果
        preview.style.opacity = '0';
        setTimeout(() => {
            preview.innerHTML = `
                <div class="text-center">
                    <i class="fa fa-image text-4xl text-gray-light mb-4"></i>
                    <p class="text-gray-light">${bgMap[bgType]}</p>
                </div>
            `;
            preview.style.opacity = '1';
        }, 300);
        
        App.showToast(`已切换到${bgMap[bgType]}`, 'success');
    },
    
    renderLiveDataChart() {
        const ctx = document.getElementById('live-data-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
                    datasets: [
                        {
                            label: '订单数',
                            data: [5, 8, 12, 15, 20, 24],
                            backgroundColor: '#fe2c55'
                        },
                        {
                            label: '销售额',
                            data: [120, 180, 220, 280, 320, 356],
                            backgroundColor: '#00c851'
                        },
                        {
                            label: '互动数',
                            data: [45, 67, 89, 112, 135, 156],
                            backgroundColor: '#ffab00'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: '#333'
                            },
                            ticks: {
                                color: '#888'
                            }
                        },
                        x: {
                            grid: {
                                color: '#333'
                            },
                            ticks: {
                                color: '#888'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#fff'
                            }
                        }
                    }
                }
            });
        }
    },
    
    addReply(replyText) {
        const interactionArea = document.getElementById('interaction-area');
        if (interactionArea) {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'flex items-start bg-tertiary-black p-3 rounded-lg';
            replyDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-accent-red flex items-center justify-center mr-2 flex-shrink-0">
                    <i class="fa fa-user"></i>
                </div>
                <div>
                    <div class="flex items-center">
                        <span class="font-medium mr-2">我</span>
                        <span class="text-xs text-gray-light">刚刚</span>
                    </div>
                    <p class="text-sm">${replyText}</p>
                </div>
            `;
            
            interactionArea.appendChild(replyDiv);
            interactionArea.scrollTop = interactionArea.scrollHeight;
        }
    }
};