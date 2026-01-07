// 首页组件
const HomeComponent = {
    render(container) {
        container.innerHTML = `
            <div class="space-y-6">
                <!-- 顶部欢迎信息 -->
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <h1 class="text-2xl font-bold">你好，${App.user?.username || '主播'}</h1>
                        <p class="text-gray-light">今天是直播的好日子！</p>
                    </div>
                    <div class="flex space-x-2">
                        <button class="btn btn-outline" id="settings-btn">
                            <i class="fa fa-cog mr-2"></i>设置
                        </button>
                    </div>
                </div>
                
                <!-- 快捷功能卡片 -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="card quick-action" data-action="start-live">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center mr-4">
                                <i class="fa fa-video-camera text-xl"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold">开启直播</h3>
                                <p class="text-xs text-gray-light">开始你的直播之旅</p>
                            </div>
                        </div>
                    </div>
                    <div class="card quick-action" data-action="ai-scripts">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mr-4">
                                <i class="fa fa-magic text-xl"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold">AI话术</h3>
                                <p class="text-xs text-gray-light">智能生成直播话术</p>
                            </div>
                        </div>
                    </div>
                    <!-- 公益广告入口 -->
                    <div class="card quick-action" data-action="view-ad" id="ad-entry">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                                <i class="fa fa-heart text-xl"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-pink-500">久久公益节</h3>
                                <p class="text-xs text-gray-light">腾讯智慧零售公益活动</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 直播状态面板 -->
                <div class="card">
                    <h2 class="text-xl font-semibold mb-4">实时数据</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-tertiary-black rounded-full flex items-center justify-center mr-3">
                                <i class="fa fa-eye text-accent-blue"></i>
                            </div>
                            <div>
                                <p class="text-xs text-gray-light">在线观众</p>
                                <p class="text-2xl font-bold" id="viewer-count">--</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-tertiary-black rounded-full flex items-center justify-center mr-3">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fe2c55'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9v7h2v5h10v-5h2v-7c0-3.87-3.13-7-7-7zm0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/%3E%3C/svg%3E" width="20" height="20">
                            </div>
                            <div>
                                <p class="text-xs text-gray-light">订单数（牦牛）</p>
                                <p class="text-2xl font-bold" id="order-count">--</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-tertiary-black rounded-full flex items-center justify-center mr-3">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300c851'%3E%3Cpath d='M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E" width="20" height="20">
                            </div>
                            <div>
                                <p class="text-xs text-gray-light">销售额（青稞穗）</p>
                                <p class="text-2xl font-bold" id="sales-amount">--</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="w-10 h-10 bg-tertiary-black rounded-full flex items-center justify-center mr-3">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffab00'%3E%3Cpath d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z'/%3E%3C/svg%3E" width="20" height="20">
                            </div>
                            <div>
                                <p class="text-xs text-gray-light">互动次数（酥油茶壶）</p>
                                <p class="text-2xl font-bold" id="interaction-count">--</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- AI智能提醒 -->
                <div class="card">
                    <h2 class="text-xl font-semibold mb-4">AI智能提醒</h2>
                    <div class="space-y-3">
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-tertiary-black rounded-full flex items-center justify-center mr-3 mt-1">
                                <i class="fa fa-clock-o text-accent-blue"></i>
                            </div>
                            <div>
                                <p class="font-medium">热门时段推荐</p>
                                <p class="text-sm text-gray-light">根据数据分析，今晚8-10点是你的最佳直播时段</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-tertiary-black rounded-full flex items-center justify-center mr-3 mt-1">
                                <i class="fa fa-comments text-accent-red"></i>
                            </div>
                            <div>
                                <p class="font-medium">话术优化建议</p>
                                <p class="text-sm text-gray-light">你的产品介绍话术可以更突出高原特色</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 今日直播数据图表 -->
                <div class="card">
                    <h2 class="text-xl font-semibold mb-4">今日数据趋势</h2>
                    <div class="h-64">
                        <canvas id="data-chart"></canvas>
                    </div>
                </div>
                
                <!-- 推荐话术 -->
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-semibold">推荐话术</h2>
                        <a href="#" class="text-accent-red text-sm">查看更多</a>
                    </div>
                    <div class="space-y-3">
                        <div class="p-3 bg-tertiary-black rounded-lg话术-item">
                            <p class="text-sm">「亲爱的家人们，欢迎来到我的直播间！今天给大家带来的是正宗的高原虫草，来自海拔4000米的纯净牧场...」</p>
                            <div class="flex justify-between items-center mt-2">
                                <span class="tag">开场问候</span>
                                <button class="text-accent-blue text-sm">
                                    <i class="fa fa-copy mr-1"></i>复制
                                </button>
                            </div>
                        </div>
                        <div class="p-3 bg-tertiary-black rounded-lg话术-item">
                            <p class="text-sm">「这款牦牛肉都是自然放养的，吃的是天然牧草，喝的是雪山融水，肉质鲜嫩，营养价值极高...」</p>
                            <div class="flex justify-between items-center mt-2">
                                <span class="tag">产品介绍</span>
                                <button class="text-accent-blue text-sm">
                                    <i class="fa fa-copy mr-1"></i>复制
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupEventListeners();
        this.loadLiveData();
        this.renderChart();
    },
    
    setupEventListeners() {
        // 快捷功能点击事件
        document.querySelectorAll('.quick-action').forEach(item => {
            item.addEventListener('click', () => {
                const action = item.dataset.action;
                switch(action) {
                    case 'start-live':
                        const liveEvent = new CustomEvent('pageChange', {
                            detail: { page: 'live' }
                        });
                        document.dispatchEvent(liveEvent);
                        break;
                    case 'ai-scripts':
                        const scriptsEvent = new CustomEvent('pageChange', {
                            detail: { page: 'ai-scripts' }
                        });
                        document.dispatchEvent(scriptsEvent);
                        break;
                    case 'view-ad':
                        // 检查用户是否登录
                        if (typeof isUserLoggedIn === 'function' && !isUserLoggedIn()) {
                            alert('请先登录查看广告');
                            return;
                        }
                        
                        // 打开广告弹窗
                        if (window.AdComponent) {
                            const adComponent = new window.AdComponent();
                            adComponent.show();
                        } else {
                            // 如果AdComponent还没加载，先加载再显示
                            import('./ad.js').then(() => {
                                const adComponent = new window.AdComponent();
                                adComponent.show();
                            });
                        }
                        break;
                }
            });
        });
        
        // 设置按钮点击事件
        document.getElementById('settings-btn').addEventListener('click', () => {
            this.showSettingsModal();
        });
        
        // 复制话术按钮
        document.querySelectorAll('.话术-item button').forEach(btn => {
            btn.addEventListener('click', () => {
                const text = btn.closest('.话术-item').querySelector('p').textContent;
                navigator.clipboard.writeText(text).then(() => {
                    App.showToast('话术已复制到剪贴板', 'success');
                });
            });
        });
    },
    
    async loadLiveData() {
        try {
            const data = await ApiService.getLiveData();
            
            // 更新数据显示
            document.getElementById('viewer-count').textContent = data.viewers;
            document.getElementById('order-count').textContent = data.orders;
            document.getElementById('sales-amount').textContent = `¥${data.sales}`;
            document.getElementById('interaction-count').textContent = data.interactions;
        } catch (error) {
            // 模拟数据
            document.getElementById('viewer-count').textContent = '128';
            document.getElementById('order-count').textContent = '24';
            document.getElementById('sales-amount').textContent = '¥356';
            document.getElementById('interaction-count').textContent = '156';
        }
    },
    
    renderChart() {
        const ctx = document.getElementById('data-chart').getContext('2d');
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                datasets: [
                    {
                        label: '观众数',
                        data: [45, 67, 89, 76, 92, 128, 156],
                        borderColor: '#00a8ff',
                        backgroundColor: 'rgba(0, 168, 255, 0.1)',
                        tension: 0.4
                    },
                    {
                        label: '销售额',
                        data: [120, 150, 180, 250, 280, 320, 356],
                        borderColor: '#00c851',
                        backgroundColor: 'rgba(0, 200, 81, 0.1)',
                        tension: 0.4
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
    },
    
    showSettingsModal() {
        // 创建设置模态框
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-secondary-black rounded-lg p-6 w-full max-w-md">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-semibold">设置</h3>
                    <button id="close-settings" class="text-gray-light">
                        <i class="fa fa-times text-xl"></i>
                    </button>
                </div>
                
                <div class="space-y-4">
                    <div class="p-3 bg-tertiary-black rounded-lg flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fa fa-microphone text-xl mr-3"></i>
                            <span>麦克风测试</span>
                        </div>
                        <button class="btn btn-outline">测试</button>
                    </div>
                    
                    <div class="p-3 bg-tertiary-black rounded-lg flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fa fa-video-camera text-xl mr-3"></i>
                            <span>摄像头测试</span>
                        </div>
                        <button class="btn btn-outline">测试</button>
                    </div>
                    
                    <div class="p-3 bg-tertiary-black rounded-lg flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fa fa-language text-xl mr-3"></i>
                            <span>语言偏好</span>
                        </div>
                        <span class="text-gray-light">${this.getLanguagePreferenceText()}</span>
                    </div>
                    
                    <div class="p-3 bg-tertiary-black rounded-lg flex items-center justify-between">
                        <div class="flex items-center">
                            <i class="fa fa-bell text-xl mr-3"></i>
                            <span>通知设置</span>
                        </div>
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider"></span>
                        </label>
                    </div>
                    
                    <button class="btn btn-outline w-full" id="logout-btn">
                        <i class="fa fa-sign-out mr-2"></i>退出登录
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 关闭按钮
        modal.querySelector('#close-settings').addEventListener('click', () => {
            modal.remove();
        });
        
        // 退出登录
        modal.querySelector('#logout-btn').addEventListener('click', () => {
            DataStorage.remove('user');
            const userLoggedOutEvent = new CustomEvent('userLoggedOut');
            document.dispatchEvent(userLoggedOutEvent);
            modal.remove();
        });
    },
    
    getLanguagePreferenceText() {
        const preferences = App.user?.languagePreference || [];
        if (preferences.length === 0) return '未设置';
        
        const map = {
            'amdo': '安多方言',
            'kham': '康巴方言',
            'central': '卫藏方言'
        };
        
        return preferences.map(p => map[p] || p).join(', ');
    }
};