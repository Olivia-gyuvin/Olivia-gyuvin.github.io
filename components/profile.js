// 个人主页和用户管理功能组件
const ProfileComponent = {
    // 模拟用户数据
    userData: {
        name: '卓玛拉姆',
        avatar: '👩‍🌾',
        level: '进阶主播',
        experience: 850,
        dialect: '康巴方言',
        joinDate: '2023-08-15',
        totalLives: 45,
        totalSales: 32800,
        followers: 1256,
        liveHours: 132,
        scriptUsage: {
            greeting: 86,
            product: 75,
            interaction: 62,
            promotion: 48,
            order: 90
        },
        pronunciationProgress: [65, 68, 72, 75, 79, 82, 85],
        liveEffect: [
            { date: '10/15', orders: 12, sales: 3800, interactions: 256 },
            { date: '10/16', orders: 15, sales: 4200, interactions: 320 },
            { date: '10/17', orders: 8, sales: 2500, interactions: 180 },
            { date: '10/18', orders: 16, sales: 5100, interactions: 380 },
            { date: '10/19', orders: 20, sales: 6200, interactions: 450 },
            { date: '10/20', orders: 14, sales: 4500, interactions: 290 },
            { date: '10/21', orders: 18, sales: 5800, interactions: 410 }
        ],
        collections: {
            scripts: [
                { id: 1, title: '虫草产品介绍话术', tags: ['虫草', '产品介绍'], used: 15 },
                { id: 2, title: '牦牛肉促销话术', tags: ['牦牛肉', '促销'], used: 8 },
                { id: 3, title: '青稞产品文化故事', tags: ['青稞', '文化'], used: 12 }
            ],
            backgrounds: [
                { id: 1, name: '草原牧场', type: '预设', used: 25 },
                { id: 2, name: '雪山湖泊', type: '预设', used: 18 },
                { id: 3, name: '我的牧场', type: '自定义', used: 32 }
            ]
        },
        settings: {
            notifications: {
                liveReminder: true,
                followerAlert: true,
                commentReply: true,
                promotionInfo: false
            },
            language: {
                dialect: '康巴方言',
                chineseLevel: '中级',
                pronunciationGuide: true
            },
            privacy: {
                showActivity: true,
                allowFollow: true,
                shareData: false
            }
        }
    },
    
    render(container) {
        container.innerHTML = `
            <div class="space-y-6">
                <!-- 用户基本信息卡片 -->
                <div class="card bg-gradient-to-r from-secondary-black to-primary-black">
                    <div class="flex flex-col md:flex-row items-center p-6">
                        <!-- 头像区域 -->
                        <div class="relative mb-4 md:mb-0 md:mr-6">
                            <div class="w-24 h-24 rounded-full bg-tertiary-black flex items-center justify-center text-4xl overflow-hidden">
                                ${this.userData.avatar}
                            </div>
                            <div class="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary-red flex items-center justify-center">
                                <i class="fa fa-camera text-white"></i>
                            </div>
                        </div>
                        
                        <!-- 用户信息区域 -->
                        <div class="flex-1 text-center md:text-left">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 class="text-2xl font-bold">${this.userData.name}</h2>
                                    <div class="flex items-center mt-1 text-gray-light">
                                        <span class="px-2 py-0.5 bg-tertiary-black rounded text-xs">${this.userData.level}</span>
                                        <span class="mx-2">•</span>
                                        <span>${this.userData.dialect}</span>
                                        <span class="mx-2">•</span>
                                        <span>加入时间: ${this.userData.joinDate}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-3 md:mt-0">
                                    <button id="edit-profile-btn" class="btn btn-outline">
                                        <i class="fa fa-edit mr-2"></i>编辑资料
                                    </button>
                                    <button id="upgrade-to-pro-btn" class="btn bg-primary-red text-white">
                                        <i class="fa fa-rocket mr-2"></i>升级Pro+
                                    </button>
                                </div>
                            </div>
                            
                            <!-- 版本升级提示 -->
                            <div class="mt-4 p-3 bg-accent-blue bg-opacity-10 rounded-lg border border-accent-blue border-opacity-20">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <i class="fa fa-star text-accent-blue mr-2"></i>
                                        <span class="text-sm">升级至Pro+版本，解锁更多高级功能</span>
                                    </div>
                                    <button id="compare-versions-btn" class="text-xs text-accent-blue hover:underline">
                                        查看对比 <i class="fa fa-angle-right ml-1"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- 经验值进度条 -->
                            <div class="mt-4">
                                <div class="flex justify-between text-sm mb-1">
                                    <span>主播等级进度</span>
                                    <span>${this.userData.experience}/1000 经验值</span>
                                </div>
                                <div class="w-full bg-tertiary-black rounded-full h-2.5">
                                    <div class="bg-primary-red h-2.5 rounded-full" style="width: ${this.userData.experience/10}%"></div>
                                </div>
                                <div class="text-xs text-gray-light mt-1">距离升级还需 ${1000-this.userData.experience} 经验值</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 数据统计 -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border-t border-gray-dark">
                        <div class="text-center">
                            <div class="text-2xl font-bold">${this.userData.totalLives}</div>
                            <div class="text-xs text-gray-light">总直播场次</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold">${this.userData.liveHours}</div>
                            <div class="text-xs text-gray-light">累计直播时长(小时)</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold">¥${this.userData.totalSales.toLocaleString()}</div>
                            <div class="text-xs text-gray-light">累计销售额</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold">${this.userData.followers}</div>
                            <div class="text-xs text-gray-light">粉丝数量</div>
                        </div>
                    </div>
                </div>
                
                <!-- 选项卡导航 -->
                <div class="tab-navigation bg-secondary-black rounded-lg overflow-hidden">
                    <div class="flex flex-wrap">
                        <button class="tab-button active" data-tab="progress">学习进度</button>
                        <button class="tab-button" data-tab="materials">素材库</button>
                        <button class="tab-button" data-tab="settings">设置</button>
                    </div>
                </div>
                
                <!-- 内容区域 -->
                <div class="tab-content">
                    <!-- 学习进度 -->
                    <div id="progress-tab" class="tab-pane active space-y-6">
                        <!-- 发音改进曲线 -->
                        <div class="card">
                            <h3 class="text-xl font-bold mb-6">发音改进曲线</h3>
                            <div class="h-64">
                                <canvas id="pronunciation-chart"></canvas>
                            </div>
                            <div class="mt-4 grid grid-cols-3 gap-4">
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="text-2xl font-bold text-accent-green">85%</div>
                                    <div class="text-sm mt-1">当前发音准确率</div>
                                </div>
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="text-2xl font-bold text-accent-blue">+20%</div>
                                    <div class="text-sm mt-1">较上月提升</div>
                                </div>
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="text-2xl font-bold text-accent-yellow">92%</div>
                                    <div class="text-sm mt-1">目标准确率</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 话术使用统计 -->
                        <div class="card">
                            <h3 class="text-xl font-bold mb-6">话术使用统计</h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span>开场问候</span>
                                        <span class="text-accent-green font-bold">86%</span>
                                    </div>
                                    <div class="w-full bg-primary-black rounded-full h-2">
                                        <div class="bg-accent-green h-2 rounded-full" style="width: 86%"></div>
                                    </div>
                                </div>
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span>产品介绍</span>
                                        <span class="text-accent-yellow font-bold">75%</span>
                                    </div>
                                    <div class="w-full bg-primary-black rounded-full h-2">
                                        <div class="bg-accent-yellow h-2 rounded-full" style="width: 75%"></div>
                                    </div>
                                </div>
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span>互动答疑</span>
                                        <span class="text-accent-yellow font-bold">62%</span>
                                    </div>
                                    <div class="w-full bg-primary-black rounded-full h-2">
                                        <div class="bg-accent-yellow h-2 rounded-full" style="width: 62%"></div>
                                    </div>
                                </div>
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span>促销活动</span>
                                        <span class="text-accent-red font-bold">48%</span>
                                    </div>
                                    <div class="w-full bg-primary-black rounded-full h-2">
                                        <div class="bg-accent-red h-2 rounded-full" style="width: 48%"></div>
                                    </div>
                                </div>
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span>下单引导</span>
                                        <span class="text-accent-green font-bold">90%</span>
                                    </div>
                                    <div class="w-full bg-primary-black rounded-full h-2">
                                        <div class="bg-accent-green h-2 rounded-full" style="width: 90%"></div>
                                    </div>
                                </div>
                                <div class="p-4 bg-tertiary-black rounded-lg">
                                    <div class="flex justify-between items-center mb-2">
                                        <span>平均综合</span>
                                        <span class="text-accent-blue font-bold">72%</span>
                                    </div>
                                    <div class="w-full bg-primary-black rounded-full h-2">
                                        <div class="bg-accent-blue h-2 rounded-full" style="width: 72%"></div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-outline w-full">
                                <i class="fa fa-chart-line mr-2"></i>查看详细报告
                            </button>
                        </div>
                        
                        <!-- 直播效果分析 -->
                        <div class="card">
                            <h3 class="text-xl font-bold mb-6">直播效果分析</h3>
                            <div class="h-64">
                                <canvas id="live-effect-chart"></canvas>
                            </div>
                            <div class="mt-6">
                                <h4 class="font-bold mb-3">优化建议</h4>
                                <ul class="space-y-2">
                                    <li class="flex items-start">
                                        <i class="fa fa-lightbulb text-accent-yellow mt-1 mr-2"></i>
                                        <span>促销话术使用频率较低，建议增加促销环节训练</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fa fa-lightbulb text-accent-yellow mt-1 mr-2"></i>
                                        <span>互动答疑环节表现有待提高，可多学习成功案例</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i class="fa fa-lightbulb text-accent-green mt-1 mr-2"></i>
                                        <span>开场问候和下单引导表现优秀，可作为个人特色</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 素材库 -->
                    <div id="materials-tab" class="tab-pane space-y-6">
                        <!-- 收藏的话术 -->
                        <div class="card">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-bold">收藏的话术</h3>
                                <button class="btn btn-outline">
                                    <i class="fa fa-plus mr-2"></i>添加话术
                                </button>
                            </div>
                            <div class="space-y-4">
                                ${this.userData.collections.scripts.map(script => `
                                    <div class="p-4 bg-tertiary-black rounded-lg flex justify-between items-center">
                                        <div class="flex-1 min-w-0">
                                            <h4 class="font-bold truncate">${script.title}</h4>
                                            <div class="flex items-center mt-1">
                                                ${script.tags.map(tag => `
                                                    <span class="px-2 py-0.5 bg-primary-black rounded text-xs mr-2">${tag}</span>
                                                `).join('')}
                                                <span class="text-xs text-gray-light ml-2">使用 ${script.used} 次</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center space-x-3">
                                            <button class="text-gray-light hover:text-white">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button class="text-gray-light hover:text-white">
                                                <i class="fa fa-copy"></i>
                                            </button>
                                            <button class="text-gray-light hover:text-accent-red">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="mt-4 text-center">
                                <button class="text-accent-blue text-sm">查看全部收藏话术</button>
                            </div>
                        </div>
                        
                        <!-- 常用背景 -->
                        <div class="card">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-bold">常用背景</h3>
                                <button class="btn btn-outline">
                                    <i class="fa fa-upload mr-2"></i>上传背景
                                </button>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                ${this.userData.collections.backgrounds.map((background, index) => `
                                    <div class="relative group">
                                        <div class="aspect-video rounded-lg overflow-hidden">
                                            ${index === 0 ? `
                                            <img src="https://picsum.photos/id/1002/800/450" alt="草原牧场" class="w-full h-full object-cover">
                                            ` : index === 1 ? `
                                            <img src="https://picsum.photos/id/15/800/450" alt="雪山湖泊" class="w-full h-full object-cover">
                                            ` : `
                                            <img src="https://picsum.photos/id/1005/800/450" alt="草原牛群" class="w-full h-full object-cover">
                                            `}
                                        </div>
                                        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div class="flex space-x-3">
                                                <button class="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center hover:bg-opacity-50 transition-colors">
                                                    <i class="fa fa-edit"></i>
                                                </button>
                                                <button class="w-10 h-10 rounded-full bg-white bg-opacity-30 flex items-center justify-center hover:bg-opacity-50 transition-colors">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="mt-2">
                                            <h4 class="font-medium">${background.name}</h4>
                                            <div class="flex justify-between items-center mt-1">
                                                <span class="px-2 py-0.5 bg-primary-black rounded text-xs">${background.type}</span>
                                                <span class="text-xs text-gray-light">使用 ${background.used} 次</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="mt-4 text-center">
                                <button class="text-accent-blue text-sm">浏览背景库</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 设置 -->
                    <div id="settings-tab" class="tab-pane space-y-6">
                        <!-- 账号信息 -->
                        <div class="card">
                            <h3 class="text-xl font-bold mb-6">账号信息</h3>
                            <div class="space-y-4">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                    <label class="text-gray-light">用户名</label>
                                    <div class="md:col-span-2 font-medium">${this.userData.name}</div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                    <label class="text-gray-light">注册手机号</label>
                                    <div class="md:col-span-2 font-medium">138****6789</div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                    <label class="text-gray-light">账号类型</label>
                                    <div class="md:col-span-2 font-medium">个人主播账号</div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                    <label class="text-gray-light">会员状态</label>
                                    <div class="md:col-span-2">
                                        <span class="px-3 py-1 bg-accent-blue bg-opacity-20 text-accent-blue rounded">免费版</span>
                                        <button class="ml-3 text-sm text-accent-blue">升级专业版</button>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                                    <label class="text-gray-light">绑定抖音账号</label>
                                    <div class="md:col-span-2">
                                        <span class="font-medium">已绑定</span>
                                        <button class="ml-3 text-sm text-gray-light">解绑</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 通知设置 -->
                        <div class="card">
                            <h3 class="text-xl font-bold mb-6">通知设置</h3>
                            <div class="space-y-4">
                                ${Object.entries(this.userData.settings.notifications).map(([key, value]) => `
                                    <div class="flex justify-between items-center">
                                        <div>
                                            <div>${this.getNotificationLabel(key)}</div>
                                            <div class="text-xs text-gray-light mt-1">${this.getNotificationDescription(key)}</div>
                                        </div>
                                        <label class="toggle-switch">
                                            <input type="checkbox" ${value ? 'checked' : ''} data-setting="${key}">
                                            <span class="slider"></span>
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- 语言设置 -->
                        <div class="card">
                            <h3 class="text-xl font-bold mb-6">语言设置</h3>
                            <div class="space-y-6">
                                <div>
                                    <label class="block text-sm mb-3">方言偏好</label>
                                    <select class="input-field">
                                        <option value="kangba" ${this.userData.settings.language.dialect === '康巴方言' ? 'selected' : ''}>康巴方言</option>
                                        <option value="amdo" ${this.userData.settings.language.dialect === '安多方言' ? 'selected' : ''}>安多方言</option>
                                        <option value="weizang" ${this.userData.settings.language.dialect === '卫藏方言' ? 'selected' : ''}>卫藏方言</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm mb-3">汉语水平</label>
                                    <select class="input-field">
                                        <option value="beginner" ${this.userData.settings.language.chineseLevel === '初级' ? 'selected' : ''}>初级</option>
                                        <option value="intermediate" ${this.userData.settings.language.chineseLevel === '中级' ? 'selected' : ''}>中级</option>
                                        <option value="advanced" ${this.userData.settings.language.chineseLevel === '高级' ? 'selected' : ''}>高级</option>
                                    </select>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <div>启用发音指导</div>
                                        <div class="text-xs text-gray-light mt-1">直播时提供实时发音反馈</div>
                                    </div>
                                    <label class="toggle-switch">
                                        <input type="checkbox" ${this.userData.settings.language.pronunciationGuide ? 'checked' : ''}>
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 隐私设置 -->
                        <div class="card">
                            <h3 class="text-xl font-bold mb-6">隐私设置</h3>
                            <div class="space-y-4">
                                ${Object.entries(this.userData.settings.privacy).map(([key, value]) => `
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div>${this.getPrivacyLabel(key)}</div>
                                            <div class="text-xs text-gray-light mt-1">${this.getPrivacyDescription(key)}</div>
                                        </div>
                                        <label class="toggle-switch">
                                            <input type="checkbox" ${value ? 'checked' : ''}>
                                            <span class="slider"></span>
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- 其他设置 -->
                        <div class="card">
                            <div class="space-y-4">
                                <button class="w-full text-left p-4 bg-tertiary-black rounded-lg hover:bg-opacity-80 transition-colors">
                                    <div class="flex justify-between items-center">
                                        <span class="font-medium">数据备份与恢复</span>
                                        <i class="fa fa-chevron-right text-gray-light"></i>
                                    </div>
                                </button>
                                <button class="w-full text-left p-4 bg-tertiary-black rounded-lg hover:bg-opacity-80 transition-colors">
                                    <div class="flex justify-between items-center">
                                        <span class="font-medium">帮助与反馈</span>
                                        <i class="fa fa-chevron-right text-gray-light"></i>
                                    </div>
                                </button>
                                <button class="w-full text-left p-4 bg-tertiary-black rounded-lg hover:bg-opacity-80 transition-colors">
                                    <div class="flex justify-between items-center">
                                        <span class="font-medium">关于我们</span>
                                        <i class="fa fa-chevron-right text-gray-light"></i>
                                    </div>
                                </button>
                                <button class="w-full text-left p-4 bg-tertiary-black rounded-lg hover:bg-opacity-80 transition-colors">
                                    <div class="flex justify-between items-center">
                                        <span class="font-medium">退出登录</span>
                                        <i class="fa fa-sign-out text-gray-light"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupEventListeners();
        this.renderCharts();
    },
    
    getNotificationLabel(key) {
        const labels = {
            liveReminder: '直播提醒',
            followerAlert: '新粉丝提醒',
            commentReply: '评论回复通知',
            promotionInfo: '促销信息推送'
        };
        return labels[key] || key;
    },
    
    getNotificationDescription(key) {
        const descriptions = {
            liveReminder: '定时提醒您开始直播',
            followerAlert: '当有新粉丝关注时通知您',
            commentReply: '有人回复您的评论时通知',
            promotionInfo: '接收平台最新促销活动信息'
        };
        return descriptions[key] || '';
    },
    
    getPrivacyLabel(key) {
        const labels = {
            showActivity: '展示直播活动',
            allowFollow: '允许他人关注',
            shareData: '分享使用数据以改进服务'
        };
        return labels[key] || key;
    },
    
    getPrivacyDescription(key) {
        const descriptions = {
            showActivity: '其他用户可以看到您的直播记录',
            allowFollow: '允许其他用户关注您的账号',
            shareData: '帮助我们改进产品体验（匿名）'
        };
        return descriptions[key] || '';
    },
    
    setupEventListeners() {
        // 编辑资料按钮
        document.getElementById('edit-profile-btn').addEventListener('click', () => {
            App.showToast('编辑资料功能开发中', 'info');
        });
        
        // 升级Pro+按钮
        if (document.getElementById('upgrade-to-pro-btn')) {
            document.getElementById('upgrade-to-pro-btn').addEventListener('click', () => {
                this.showVersionComparisonModal();
            });
        }
        
        // 查看版本对比按钮
        if (document.getElementById('compare-versions-btn')) {
            document.getElementById('compare-versions-btn').addEventListener('click', () => {
                this.showVersionComparisonModal();
            });
        }
        
        // 选项卡切换
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanes = document.querySelectorAll('.tab-pane');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // 更新按钮状态
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // 更新内容显示
                tabPanes.forEach(pane => pane.classList.remove('active'));
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
        
        // 通知设置开关
        const notificationSwitches = document.querySelectorAll('.toggle-switch input[data-setting]');
        notificationSwitches.forEach(switchEl => {
            switchEl.addEventListener('change', () => {
                App.showToast('设置已保存', 'success');
            });
        });
        
        // 退出登录按钮
        const logoutButton = document.querySelector('button:has(.fa-sign-out)');
        logoutButton.addEventListener('click', () => {
            if (confirm('确定要退出登录吗？')) {
                App.logout();
            }
        });
        
        // 其他设置项点击事件
        const settingItems = document.querySelectorAll('.card button:not(.btn)');
        settingItems.forEach(item => {
            if (!item.contains(logoutButton)) {
                item.addEventListener('click', () => {
                    App.showToast('功能开发中', 'info');
                });
            }
        });
        
        // Pro+版本升级弹窗
        this.setupProModal();
    },
    
    setupProModal() {
        // 创建Pro弹窗实例
        this.proModal = new ProModal();
        
        // 为"升级专业版"按钮添加事件监听
        const upgradeButtons = document.querySelectorAll('.text-accent-blue');
        upgradeButtons.forEach(button => {
            if (button.textContent.trim().includes('升级专业版')) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.proModal.show();
                });
            }
        });
        
        // 当用户访问个人主页时，有一定概率显示Pro+优势弹窗（模拟用户体验）
        if (Math.random() < 0.3) { // 30%的概率显示弹窗
            setTimeout(() => {
                this.proModal.show();
            }, 1500);
        }
    },
    
    // 显示版本对比弹窗
    showVersionComparisonModal() {
        // 创建版本对比弹窗内容
        const modalContent = `
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
                <div class="bg-secondary-black rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-in-up">
                    <!-- 弹窗头部 -->
                    <div class="p-4 border-b border-gray-dark flex justify-between items-center">
                        <h3 class="text-xl font-bold">Pro+ vs 免费版</h3>
                        <button id="close-modal-btn" class="text-gray-light hover:text-white">
                            <i class="fa fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <!-- 版本对比内容 -->
                    <div class="p-6">
                        <!-- 图表对比 -->
                        <div class="aspect-[16/9] bg-tertiary-black rounded-lg mb-6 flex items-center justify-center">
                            <!-- 这里用HTML结构模拟版本对比图 -->
                            <div class="w-full h-full p-4 flex flex-col">
                                <!-- 标题行 -->
                                <div class="grid grid-cols-3 gap-2 mb-4">
                                    <div class="text-center font-bold">功能特点</div>
                                    <div class="text-center font-bold text-gray-light">免费版</div>
                                    <div class="text-center font-bold text-primary-red">Pro+版本</div>
                                </div>
                                
                                <!-- 功能对比行 -->
                                ${[{
                                    feature: '高级话术模板',
                                    free: '✅ 基础模板',
                                    pro: '✅ 50+专业模板'
                                }, {
                                    feature: '自定义背景上传',
                                    free: '❌ 仅预设',
                                    pro: '✅ 无限上传'
                                }, {
                                    feature: '发音训练指导',
                                    free: '✅ 基础版',
                                    pro: '✅ AI实时纠正'
                                }, {
                                    feature: '直播数据分析',
                                    free: '❌ 无',
                                    pro: '✅ 详细报告'
                                }, {
                                    feature: '多语言支持',
                                    free: '✅ 2种方言',
                                    pro: '✅ 全部方言'
                                }, {
                                    feature: '优先客服支持',
                                    free: '❌ 无',
                                    pro: '✅ 24小时'
                                }].map(item => `
                                    <div class="grid grid-cols-3 gap-2 py-2 border-b border-gray-dark">
                                        <div class="text-sm">${item.feature}</div>
                                        <div class="text-sm text-center">${item.free}</div>
                                        <div class="text-sm text-center">${item.pro}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- 价格信息 -->
                        <div class="bg-tertiary-black rounded-lg p-4 mb-6">
                            <div class="flex flex-col md:flex-row items-center justify-between">
                                <div>
                                    <h4 class="text-lg font-bold text-primary-red">Pro+ 会员</h4>
                                    <p class="text-xs text-gray-light mt-1">解锁全部高级功能，提升直播效果</p>
                                </div>
                                <div class="mt-4 md:mt-0 text-center md:text-right">
                                    <div class="text-3xl font-bold">¥29.99</div>
                                    <div class="text-xs text-gray-light">每月</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 操作按钮 -->
                        <div class="flex space-x-3">
                            <button id="upgrade-now-btn" class="flex-1 bg-primary-red text-white py-3 rounded-lg font-medium">
                                立即升级 Pro+
                            </button>
                            <button id="later-btn" class="flex-1 border border-gray-dark py-3 rounded-lg font-medium">
                                稍后再说
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 创建并添加弹窗到文档
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalContent;
        document.body.appendChild(modalContainer);
        
        // 设置弹窗事件监听
        const modal = modalContainer.querySelector('.fixed');
        
        // 关闭弹窗函数
        const closeModal = () => {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modalContainer);
            }, 300);
        };
        
        // 关闭按钮事件
        document.getElementById('close-modal-btn').addEventListener('click', closeModal);
        
        // 稍后再说按钮
        document.getElementById('later-btn').addEventListener('click', closeModal);
        
        // 立即升级按钮
        document.getElementById('upgrade-now-btn').addEventListener('click', () => {
            App.showToast('升级成功！', 'success');
            closeModal();
        });
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    },
    
    renderCharts() {
        // 发音改进曲线
        const pronunciationCtx = document.getElementById('pronunciation-chart').getContext('2d');
        const pronunciationChart = new Chart(pronunciationCtx, {
            type: 'line',
            data: {
                labels: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周'],
                datasets: [{
                    label: '发音准确率',
                    data: this.userData.pronunciationProgress,
                    borderColor: '#16A34A',
                    backgroundColor: 'rgba(22, 163, 74, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        
        // 直播效果分析
        const liveEffectCtx = document.getElementById('live-effect-chart').getContext('2d');
        const liveEffectChart = new Chart(liveEffectCtx, {
            type: 'bar',
            data: {
                labels: this.userData.liveEffect.map(item => item.date),
                datasets: [
                    {
                        label: '订单数',
                        data: this.userData.liveEffect.map(item => item.orders),
                        backgroundColor: '#16A34A'
                    },
                    {
                        label: '销售额(百元)',
                        data: this.userData.liveEffect.map(item => Math.round(item.sales / 100)),
                        backgroundColor: '#2563EB'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
};