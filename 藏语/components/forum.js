// 论坛交流页面组件
const ForumComponent = {
    currentTab: 'all', // all, dialects, cases, help, teaching
    topics: [
        {
            id: 1,
            title: '分享一个提高藏语发音准确率的小技巧',
            author: '安多牧民',
            avatar: 'user1',
            time: '2小时前',
            category: 'dialects',
            dialect: '安多方言',
            views: 156,
            replies: 23,
            likes: 45,
            tags: ['发音技巧', '安多方言']
        },
        {
            id: 2,
            title: '我的虫草带货直播月入过万经验分享',
            author: '虫草姐姐',
            avatar: 'user2',
            time: '昨天 14:30',
            category: 'cases',
            product: '虫草',
            views: 892,
            replies: 125,
            likes: 328,
            tags: ['带货技巧', '虫草', '成功案例']
        },
        {
            id: 3,
            title: '直播时经常紧张忘词怎么办？求指教',
            author: '新手主播',
            avatar: 'user3',
            time: '3天前',
            category: 'help',
            problemType: '直播技巧',
            views: 245,
            replies: 56,
            likes: 18,
            tags: ['紧张', '忘词', '求助']
        },
        {
            id: 4,
            title: '【官方教程】如何使用谐音标注功能提高普通话表达',
            author: '官方助手',
            avatar: 'official',
            time: '1周前',
            category: 'teaching',
            type: '教程',
            views: 1245,
            replies: 89,
            likes: 512,
            tags: ['官方教程', '谐音标注', '普通话']
        },
        {
            id: 5,
            title: '康巴方言直播用语分享',
            author: '康巴汉子',
            avatar: 'user4',
            time: '1周前',
            category: 'dialects',
            dialect: '康巴方言',
            views: 342,
            replies: 45,
            likes: 89,
            tags: ['康巴方言', '直播用语']
        },
        {
            id: 6,
            title: '牦牛肉直播销售话术大全',
            author: '高原商家',
            avatar: 'user5',
            time: '2周前',
            category: 'cases',
            product: '牦牛肉',
            views: 567,
            replies: 98,
            likes: 213,
            tags: ['牦牛肉', '销售话术', '直播技巧']
        }
    ],
    
    render(container) {
        container.innerHTML = `
            <div class="space-y-6">
                <!-- 顶部搜索和发帖 -->
                <div class="flex space-x-4">
                    <div class="relative flex-1">
                        <input type="text" placeholder="搜索话题或内容..." class="input-field pl-10">
                        <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-light"></i>
                    </div>
                    <button id="create-topic-btn" class="btn btn-primary">
                        <i class="fa fa-plus mr-2"></i>发布话题
                    </button>
                </div>
                
                <!-- 论坛分类选项卡 -->
                <div class="card">
                    <div class="flex overflow-x-auto space-x-6 pb-2">
                        <div class="forum-tab ${this.currentTab === 'all' ? 'active' : ''}" data-tab="all">
                            <span>全部</span>
                        </div>
                        <div class="forum-tab ${this.currentTab === 'dialects' ? 'active' : ''}" data-tab="dialects">
                            <span>方言交流</span>
                        </div>
                        <div class="forum-tab ${this.currentTab === 'cases' ? 'active' : ''}" data-tab="cases">
                            <span>成功案例</span>
                        </div>
                        <div class="forum-tab ${this.currentTab === 'help' ? 'active' : ''}" data-tab="help">
                            <span>问题求助</span>
                        </div>
                        <div class="forum-tab ${this.currentTab === 'teaching' ? 'active' : ''}" data-tab="teaching">
                            <span>官方教学</span>
                        </div>
                    </div>
                </div>
                
                <!-- 热门话题区域 -->
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-bold">热门话题</h2>
                        <button class="text-accent-blue">查看更多</button>
                    </div>
                    
                    <div class="space-y-3">
                        ${this.renderHotTopics()}
                    </div>
                </div>
                
                <!-- 话题列表 -->
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-bold">${this.getCategoryTitle()}</h2>
                        <select class="input-field w-32">
                            <option value="latest">最新发布</option>
                            <option value="hottest">最热讨论</option>
                            <option value="mostLiked">最多点赞</option>
                        </select>
                    </div>
                    
                    <div class="space-y-4">
                        ${this.renderTopicList()}
                    </div>
                    
                    <!-- 分页 -->
                    <div class="mt-6 flex justify-center">
                        <div class="flex space-x-2">
                            <button class="btn btn-outline w-10 h-10 flex items-center justify-center">1</button>
                            <button class="btn btn-outline w-10 h-10 flex items-center justify-center">2</button>
                            <button class="btn btn-outline w-10 h-10 flex items-center justify-center">3</button>
                            <button class="btn btn-outline w-10 h-10 flex items-center justify-center">
                                <i class="fa fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- 侧边栏 -->
                <div class="flex flex-col space-y-6">
                    <!-- 方言小组 -->
                    <div class="card">
                        <h3 class="font-bold mb-4">方言交流小组</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-3">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">安多方言小组</p>
                                        <p class="text-xs text-gray-light">2,345 成员</p>
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm">加入</button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-3">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">康巴方言小组</p>
                                        <p class="text-xs text-gray-light">1,876 成员</p>
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm">加入</button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-3">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">卫藏方言小组</p>
                                        <p class="text-xs text-gray-light">3,124 成员</p>
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm">加入</button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 活跃用户 -->
                    <div class="card">
                        <h3 class="font-bold mb-4">活跃主播</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-3">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">虫草姐姐</p>
                                        <p class="text-xs text-gray-light">虫草直播专家</p>
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm">关注</button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-3">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">牦牛肉哥</p>
                                        <p class="text-xs text-gray-light">美食类主播</p>
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm">关注</button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="w-8 h-8 rounded-full bg-tertiary-black flex items-center justify-center mr-3">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <div>
                                        <p class="font-medium">青稞小王子</p>
                                        <p class="text-xs text-gray-light">农产品直播</p>
                                    </div>
                                </div>
                                <button class="btn btn-outline btn-sm">关注</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.setupEventListeners();
    },
    
    getCategoryTitle() {
        const titles = {
            all: '全部话题',
            dialects: '方言交流',
            cases: '成功案例',
            help: '问题求助',
            teaching: '官方教学'
        };
        return titles[this.currentTab] || '全部话题';
    },
    
    renderHotTopics() {
        return this.topics.slice(0, 3).map(topic => `
            <div class="flex items-center justify-between p-3 bg-tertiary-black rounded-lg">
                <div class="flex-1 min-w-0">
                    <p class="font-medium truncate">${topic.title}</p>
                    <p class="text-xs text-gray-light mt-1">${topic.author} · ${topic.time}</p>
                </div>
                <div class="flex items-center ml-4 space-x-4">
                    <span class="text-sm text-gray-light flex items-center">
                        <i class="fa fa-comment-o mr-1"></i>${topic.replies}
                    </span>
                    <span class="text-sm text-gray-light flex items-center">
                        <i class="fa fa-heart-o mr-1"></i>${topic.likes}
                    </span>
                </div>
            </div>
        `).join('');
    },
    
    renderTopicList() {
        const filteredTopics = this.currentTab === 'all' 
            ? this.topics 
            : this.topics.filter(t => t.category === this.currentTab);
        
        return filteredTopics.map(topic => `
            <div class="border-b border-tertiary-black pb-4 last:border-0 last:pb-0">
                <div class="flex items-start">
                    <div class="w-10 h-10 rounded-full bg-tertiary-black flex items-center justify-center mr-4 flex-shrink-0">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex flex-wrap gap-2 mb-1">
                            ${topic.tags.map(tag => `
                                <span class="text-xs px-2 py-1 bg-tertiary-black rounded-full">${tag}</span>
                            `).join('')}
                        </div>
                        <h3 class="font-bold text-lg mb-1 truncate">${topic.title}</h3>
                        <div class="flex items-center space-x-4 mb-2">
                            <span class="font-medium">${topic.author}</span>
                            <span class="text-xs text-gray-light">${topic.time}</span>
                            ${topic.dialect ? `<span class="text-xs px-2 py-0.5 bg-tertiary-black rounded">${topic.dialect}</span>` : ''}
                            ${topic.product ? `<span class="text-xs px-2 py-0.5 bg-tertiary-black rounded">${topic.product}</span>` : ''}
                        </div>
                        <div class="flex items-center text-gray-light text-sm">
                            <span class="flex items-center mr-4">
                                <i class="fa fa-eye mr-1"></i>${topic.views}
                            </span>
                            <span class="flex items-center mr-4">
                                <i class="fa fa-comment-o mr-1"></i>${topic.replies}
                            </span>
                            <span class="flex items-center">
                                <i class="fa fa-heart-o mr-1"></i>${topic.likes}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    setupEventListeners() {
        // 选项卡切换
        const forumTabs = document.querySelectorAll('.forum-tab');
        forumTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.dataset.tab;
                if (this.currentTab !== tabId) {
                    this.currentTab = tabId;
                    this.render(document.getElementById('page-content'));
                }
            });
        });
        
        // 创建话题按钮
        const createTopicBtn = document.getElementById('create-topic-btn');
        if (createTopicBtn) {
            createTopicBtn.addEventListener('click', () => {
                this.showCreateTopicModal();
            });
        }
        
        // 话题点击事件（模拟）
        const topicElements = document.querySelectorAll('.border-b');
        topicElements.forEach(topic => {
            topic.addEventListener('click', () => {
                App.showToast('话题详情页面功能待实现', 'info');
            });
        });
        
        // 关注按钮事件
        const followButtons = document.querySelectorAll('.btn-outline.btn-sm');
        followButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (btn.textContent.includes('加入') || btn.textContent.includes('关注')) {
                    btn.textContent = '已' + btn.textContent;
                    App.showToast('关注成功！', 'success');
                } else {
                    btn.textContent = btn.textContent.replace('已', '');
                    App.showToast('已取消关注', 'info');
                }
            });
        });
    },
    
    showCreateTopicModal() {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-primary-black border border-tertiary-black rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold">发布新话题</h3>
                        <button id="close-modal-btn" class="text-gray-light">
                            <i class="fa fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm mb-2">选择分类</label>
                            <select id="topic-category" class="input-field">
                                <option value="dialects">方言交流</option>
                                <option value="cases">成功案例</option>
                                <option value="help">问题求助</option>
                                <option value="teaching">官方教学</option>
                            </select>
                        </div>
                        
                        <div>
                            <label class="block text-sm mb-2">话题标题</label>
                            <input type="text" id="topic-title" class="input-field" placeholder="请输入话题标题...">
                        </div>
                        
                        <div>
                            <label class="block text-sm mb-2">话题内容</label>
                            <textarea id="topic-content" class="input-field h-40" placeholder="请详细描述您的话题内容..."></textarea>
                        </div>
                        
                        <div>
                            <label class="block text-sm mb-2">标签</label>
                            <input type="text" id="topic-tags" class="input-field" placeholder="请输入标签，用逗号分隔">
                        </div>
                        
                        <div class="flex items-center">
                            <input type="checkbox" id="anonymous-post" class="mr-2">
                            <label for="anonymous-post" class="text-sm">匿名发布</label>
                        </div>
                        
                        <div class="flex justify-end space-x-4 pt-4 border-t border-tertiary-black">
                            <button id="cancel-post-btn" class="btn btn-outline">取消</button>
                            <button id="submit-post-btn" class="btn btn-primary">发布话题</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 关闭按钮
        document.getElementById('close-modal-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // 取消按钮
        document.getElementById('cancel-post-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // 提交按钮
        document.getElementById('submit-post-btn').addEventListener('click', () => {
            const title = document.getElementById('topic-title').value.trim();
            const content = document.getElementById('topic-content').value.trim();
            
            if (!title || !content) {
                App.showToast('请填写标题和内容', 'error');
                return;
            }
            
            // 模拟提交
            App.showToast('话题发布成功！', 'success');
            document.body.removeChild(modal);
            
            // 这里可以添加新话题到列表并刷新页面
        });
    }
};