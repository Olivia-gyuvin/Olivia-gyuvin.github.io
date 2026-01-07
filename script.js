/**
 * 藏语直播助手应用 - 主逻辑文件
 * 功能：应用核心框架、页面路由管理、用户状态管理、全局事件处理
 * 作者：系统自动生成
 * 日期：2023-09
 */

// ========== 应用核心模块 ==========

/**
 * App 对象 - 应用主控制器
 * 负责管理应用状态、页面路由和全局事件
 */
const App = {
    // 【状态管理】- 核心状态变量
    currentPage: 'register', // 当前页面名称
    user: null, // 当前登录用户信息
    
    /**
     * 应用初始化方法
     * 功能：设置事件监听和加载初始页面，包含错误处理
     */
    init() {
        try {
            console.log('应用开始初始化...');
            
            // 检查核心元素是否存在
            if (!document.getElementById('page-content')) {
                console.error('核心元素 #page-content 不存在');
                document.body.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">应用初始化失败</h3><p>页面结构不完整，请刷新页面重试。</p></div>';
                return;
            }
            
            this.setupEventListeners(); // 设置事件监听器
            
            // 安全地加载初始页面
            this.loadPage(this.currentPage); // 加载初始页面
            
            console.log('应用初始化完成');
        } catch (error) {
            console.error('应用初始化过程中出现错误:', error);
            const contentDiv = document.getElementById('page-content');
            if (contentDiv) {
                contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">应用加载失败</h3><p>应用初始化时出现错误，请刷新页面重试。</p><p class="text-sm text-gray-light mt-2">错误详情已记录到控制台</p></div>';
            }
        }
    },
    
    /**
     * 设置全局事件监听器
     * 功能：监听页面切换、用户登录和登出等核心事件
     */
    setupEventListeners() {
        // 【页面切换事件】- 监听自定义pageChange事件
        document.addEventListener('pageChange', (e) => {
            console.log(`页面切换请求：${e.detail.page}`);
            this.currentPage = e.detail.page;
            this.loadPage(this.currentPage);
        });
        
        // 【用户登录事件】- 监听自定义userLoggedIn事件
        document.addEventListener('userLoggedIn', (e) => {
            console.log(`用户登录成功：${e.detail.user.username}`);
            this.user = e.detail.user;
            this.loadPage('home'); // 登录成功后跳转到首页
        });
        
        // 【用户登出事件】- 监听自定义userLoggedOut事件
        document.addEventListener('userLoggedOut', () => {
            console.log('用户已登出');
            this.user = null;
            this.loadPage('login'); // 登出后跳转到登录页
        });
        
        // 【预留位置】- 可添加其他全局事件监听
        // document.addEventListener('networkStatusChange', this.handleNetworkChange.bind(this));
    },
    
    /**
     * 页面加载方法
     * 功能：根据页面名称动态渲染对应组件
     * @param {string} pageName - 页面名称
     */
    loadPage(pageName) {
        const contentDiv = document.getElementById('page-content');
        
        // 清空内容区域
        contentDiv.innerHTML = '';
        
        // 【页面路由】- 根据页面名称渲染不同组件
        switch(pageName) {
            case 'register':
                // 注册页面 - 无需登录即可访问
                try {
                    if (typeof RegisterComponent !== 'undefined') {
                        RegisterComponent.render(contentDiv);
                    } else {
                        console.error('RegisterComponent 未定义');
                        contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>注册组件未能正确加载，请刷新页面重试。</p></div>';
                    }
                } catch (error) {
                    console.error('渲染注册页面时出错:', error);
                    contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">页面加载失败</h3><p>加载注册页面时出现错误，请稍后再试。</p></div>';
                }
                break;
            case 'login':
                // 登录页面 - 无需登录即可访问
                try {
                    if (typeof LoginComponent !== 'undefined') {
                        LoginComponent.render(contentDiv);
                    } else {
                        console.error('LoginComponent 未定义');
                        contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>登录组件未能正确加载，请刷新页面重试。</p></div>';
                    }
                } catch (error) {
                    console.error('渲染登录页面时出错:', error);
                    contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">页面加载失败</h3><p>加载登录页面时出现错误，请稍后再试。</p></div>';
                }
                break;
            case 'home':
                // 首页 - 需要用户登录
                if (this.user) {
                    try {
                        if (typeof HomeComponent !== 'undefined') {
                            HomeComponent.render(contentDiv);
                        } else {
                            console.error('HomeComponent 未定义');
                            contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>首页组件未能正确加载，请刷新页面重试。</p></div>';
                        }
                        NavbarComponent.render();
                    } catch (error) {
                        console.error('渲染首页时出错:', error);
                        contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">页面加载失败</h3><p>加载首页时出现错误，请稍后再试。</p></div>';
                    }
                } else {
                    this.loadPage('login'); // 未登录则跳转到登录页
                }
                break;
            case 'forum':
                // 论坛页面 - 需要用户登录
                if (this.user) {
                    try {
                        if (typeof ForumComponent !== 'undefined') {
                            ForumComponent.render(contentDiv);
                        } else {
                            console.error('ForumComponent 未定义');
                            contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>论坛组件未能正确加载，请刷新页面重试。</p></div>';
                        }
                        NavbarComponent.render();
                    } catch (error) {
                        console.error('渲染论坛页面时出错:', error);
                        contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">页面加载失败</h3><p>加载论坛页面时出现错误，请稍后再试。</p></div>';
                    }
                } else {
                    this.loadPage('login');
                }
                break;
            case 'live':
                // 直播页面 - 需要用户登录
                if (this.user) {
                    try {
                        if (typeof LiveComponent !== 'undefined') {
                            LiveComponent.render(contentDiv);
                        } else {
                            console.error('LiveComponent 未定义');
                            contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>直播组件未能正确加载，请刷新页面重试。</p></div>';
                        }
                        NavbarComponent.render();
                    } catch (error) {
                        console.error('渲染直播页面时出错:', error);
                        contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">页面加载失败</h3><p>加载直播页面时出现错误，请稍后再试。</p></div>';
                    }
                } else {
                    this.loadPage('login');
                }
                break;
            case 'ai-scripts':
                // AI话术页面 - 需要用户登录
                if (this.user) {
                    try {
                        // 检查AIScriptComponent是否已加载
                        if (typeof AIScriptComponent !== 'undefined') {
                            AIScriptComponent.render(contentDiv);
                            NavbarComponent.render();
                            console.log('AI话术页面使用已加载的组件渲染成功');
                        } else {
                            // 动态加载ai-scripts.js文件
                            console.log('AIScriptComponent未定义，尝试动态加载ai-scripts.js');
                            const script = document.createElement('script');
                            script.src = './components/ai-scripts.js';
                            
                            script.onload = function() {
                                if (typeof AIScriptComponent !== 'undefined') {
                                    AIScriptComponent.render(contentDiv);
                                    NavbarComponent.render();
                                    console.log('AI话术页面渲染成功');
                                } else {
                                    console.error('AIScriptComponent 加载后仍未定义');
                                    contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>AI话术组件加载完成但初始化失败，请刷新页面重试。</p></div>'
                                }
                            };
                            
                            script.onerror = function() {
                                console.error('加载ai-scripts.js失败');
                                contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>加载AI话术组件失败，请检查网络连接或稍后再试。</p></div>';
                            };
                            
                            document.body.appendChild(script);
                        }
                    } catch (error) {
                        console.error('渲染AI话术页面时出错:', error);
                        contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">页面加载失败</h3><p>加载AI话术页面时出现错误，请稍后再试。</p></div>';
                    }
                } else {
                    this.loadPage('login');
                }
                break;
            case 'profile':
                // 个人中心 - 需要用户登录
                if (this.user) {
                    try {
                        if (typeof ProfileComponent !== 'undefined') {
                            ProfileComponent.render(contentDiv);
                        } else {
                            console.error('ProfileComponent 未定义');
                            contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">组件加载失败</h3><p>个人中心组件未能正确加载，请刷新页面重试。</p></div>';
                        }
                        NavbarComponent.render();
                    } catch (error) {
                        console.error('渲染个人中心页面时出错:', error);
                        contentDiv.innerHTML = '<div class="text-center p-8"><h3 class="text-xl mb-4">页面加载失败</h3><p>加载个人中心页面时出现错误，请稍后再试。</p></div>';
                    }
                } else {
                    this.loadPage('login');
                }
                break;

            // 【预留位置】- 可添加新页面路由
            // case 'new-feature':
            //     if (this.user) {
            //         NewFeatureComponent.render(contentDiv);
            //         NavbarComponent.render();
            //     } else {
            //         this.loadPage('login');
            //     }
            //     break;
            default:
                // 无效页面，默认加载首页或登录页
                console.warn(`未知页面：${pageName}，加载默认页面`);
                this.loadPage(this.user ? 'home' : 'login');
        }
        
        // 【页面过渡动画】- 添加页面切换动画效果
        contentDiv.classList.add('page-transition');
        setTimeout(() => {
            contentDiv.classList.remove('page-transition');
        }, 300); // 300ms后移除动画类
    },
    
    /**
     * 获取当前用户信息
     * @returns {Object|null} 当前用户对象或null
     */
    getCurrentUser() {
        return this.user;
    },
    
    /**
     * 显示提示信息 (Toast)
     * 功能：在页面顶部显示临时消息提示
     * @param {string} message - 提示消息内容
     * @param {string} type - 提示类型：'info'(默认)、'success'、'error'
     */
    showToast(message, type = 'info') {
        console.log(`显示提示：[${type}] ${message}`);
        
        // 创建提示元素
        const toast = document.createElement('div');
        
        // 设置样式和内容
        toast.className = `fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg z-50 transition-opacity duration-300 ${ 
            type === 'error' ? 'bg-red-500' : 
            type === 'success' ? 'bg-green-500' : 
            'bg-gray-800'
        }`;
        toast.textContent = message;
        
        // 添加到页面
        document.body.appendChild(toast);
        
        // 【提示自动消失】- 2秒后淡出并移除
        setTimeout(() => {
            toast.classList.add('opacity-0');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300); // 淡出动画持续300ms
        }, 2000); // 显示2000ms后开始淡出
    },
    
    // 【预留方法】- 可添加网络状态处理等扩展功能
    // handleNetworkChange(event) {
    //     const isOnline = event.detail.isOnline;
    //     this.showToast(isOnline ? '网络连接已恢复' : '网络连接已断开', isOnline ? 'success' : 'error');
    // }
};

// ========== 数据存储模块 ==========

/**
 * DataStorage 对象 - 本地数据存储封装
 * 功能：统一管理localStorage操作，提供数据持久化功能
 */
const DataStorage = {
    /**
     * 存储数据
     * 功能：将数据序列化为JSON并存储到localStorage
     * @param {string} key - 存储键名
     * @param {*} value - 存储值（会被自动转换为JSON字符串）
     */
    set(key, value) {
        console.log(`存储数据：${key}`);
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(`存储数据失败：${error.message}`);
            return false;
        }
    },
    
    /**
     * 获取数据
     * 功能：从localStorage读取并反序列化JSON数据
     * @param {string} key - 存储键名
     * @returns {*} 反序列化后的数据，如果不存在则返回null
     */
    get(key) {
        console.log(`获取数据：${key}`);
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(`获取数据失败：${error.message}`);
            return null;
        }
    },
    
    /**
     * 移除指定数据
     * 功能：从localStorage删除指定键名的数据
     * @param {string} key - 要删除的键名
     */
    remove(key) {
        console.log(`移除数据：${key}`);
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error(`移除数据失败：${error.message}`);
            return false;
        }
    },
    
    /**
     * 清除所有数据
     * 功能：清空localStorage中的所有数据
     * 注意：此操作将清除所有应用数据，请谨慎使用
     */
    clear() {
        console.log('清除所有数据');
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error(`清除数据失败：${error.message}`);
            return false;
        }
    },
    
    // 【预留方法】- 可添加数据加密等扩展功能
    // setEncrypted(key, value) { /* 实现加密存储 */ }
    // getEncrypted(key) { /* 实现解密获取 */ }
};

// ========== API服务模块 ==========

/**
 * ApiService 对象 - 模拟后端API服务
 * 功能：提供异步数据接口，模拟网络请求
 * 注意：当前为模拟实现，实际项目中需要替换为真实API调用
 */
const ApiService = {
    /**
     * 模拟网络延迟
     * 功能：模拟真实网络请求的延迟时间
     * @param {number} ms - 延迟毫秒数
     * @returns {Promise} 延迟完成后的Promise
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    /**
     * 用户注册接口
     * 功能：注册新用户账号
     * @param {Object} userData - 用户注册信息
     * @returns {Promise<Object>} 注册结果
     */
    async register(userData) {
        console.log('执行用户注册请求...');
        await this.delay(1000); // 模拟1秒网络延迟
        
        try {
            // 模拟注册逻辑
            console.log('注册成功，用户数据：', userData);
            
            // 返回成功结果
            return {
                success: true,
                user: {
                    id: Date.now(), // 使用时间戳作为临时用户ID
                    ...userData // 扩展用户提供的数据
                }
            };
        } catch (error) {
            console.error('注册失败：', error);
            return { success: false, error: error.message };
        }
    },
    
    /**
     * 用户登录接口
     * 功能：验证用户凭据并返回用户信息
     * @param {Object} credentials - 用户登录凭据
     * @returns {Promise<Object>} 登录结果
     */
    async login(credentials) {
        console.log('执行用户登录请求...');
        await this.delay(1000); // 模拟1秒网络延迟
        
        try {
            // 模拟登录验证
            if (credentials.username && credentials.password) {
                console.log('登录成功，用户：', credentials.username);
                
                // 返回成功结果和用户信息
                return {
                    success: true,
                    user: {
                        id: 1,
                        username: credentials.username,
                        type: 'personal', // 用户类型：个人
                        languagePreference: 'amdo', // 语言偏好：安多藏语
                        liveType: 'ecommerce' // 直播类型：电商
                    }
                };
            } else {
                // 登录失败
                return { success: false, error: '用户名或密码错误' };
            }
        } catch (error) {
            console.error('登录失败：', error);
            return { success: false, error: '登录时发生错误' };
        }
    },
    
    /**
     * 获取直播数据接口
     * 功能：获取直播统计数据
     * @returns {Promise<Object>} 直播数据
     */
    async getLiveData() {
        console.log('获取直播数据...');
        await this.delay(500); // 模拟500ms网络延迟
        
        // 返回模拟的直播数据
        return {
            viewers: 128, // 观看人数
            sales: 356, // 销售额
            orders: 24, // 订单数
            interactions: 156 // 互动次数
        };
    },
    
    /**
     * 获取论坛帖子接口
     * 功能：获取论坛文章列表
     * @returns {Promise<Array>} 论坛帖子数组
     */
    async getForumPosts() {
        console.log('获取论坛帖子...');
        await this.delay(500); // 模拟500ms网络延迟
        
        // 返回模拟的论坛帖子数据
        return [
            {
                id: 1,
                title: '如何提高直播时的普通话发音？',
                author: '藏族小卓玛',
                date: '今天 10:23',
                content: '大家好，我刚开始直播，普通话说得不太好，有什么好的练习方法吗？',
                replies: 12
            },
            {
                id: 2,
                title: '分享我的虫草销售话术',
                author: '高原虫草王',
                date: '昨天 15:47',
                content: '我整理了一套关于虫草的销售话术，效果很好，分享给大家...',
                replies: 28
            },
            {
                id: 3,
                title: '直播背景选择技巧',
                author: '雪山牧民',
                date: '3天前',
                content: '选择合适的背景对直播效果影响很大，我的经验是...',
                replies: 8
            }
        ];
    },
    
    // 【预留接口】- 可添加更多API方法
    // async getProducts() { /* 获取产品列表 */ },
    // async updateUserProfile(userData) { /* 更新用户信息 */ }
};

// ========== 应用初始化 ==========

/**
 * 应用入口点
 * 功能：当DOM加载完成后初始化应用
 */
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM加载完成，准备初始化应用...');
    App.init(); // 调用App对象的init方法初始化应用
});

// 【预留位置】- 可添加全局错误处理
// window.onerror = (message, source, lineno, colno, error) => {
//     console.error('全局错误:', message);
//     App.showToast('应用发生错误，请刷新页面重试', 'error');
//     return true;
// };