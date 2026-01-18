// 登录页面组件
const LoginComponent = {
    render(container) {
        container.innerHTML = `
            <div class="max-w-md mx-auto">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold mb-2">藏语直播助手</h1>
                    <p class="text-gray-light">欢迎回来，请登录</p>
                </div>
                
                <!-- 登录表单 -->
                <div class="card">
                    <div class="mb-4">
                        <label class="block text-sm mb-2">用户名</label>
                        <input type="text" id="login-username" class="input-field" placeholder="请输入用户名">
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-sm mb-2">密码</label>
                        <input type="password" id="login-password" class="input-field" placeholder="请输入密码">
                    </div>
                    
                    <button id="login-submit" class="btn btn-primary w-full mb-4">登录</button>
                    
                    <div class="flex justify-between text-sm">
                        <label class="flex items-center">
                            <input type="checkbox" class="mr-2">
                            <span class="text-gray-light">记住我</span>
                        </label>
                        <a href="#" class="text-accent-red">忘记密码？</a>
                    </div>
                </div>
                
                <!-- 社交登录 -->
                <div class="mt-8">
                    <div class="flex items-center justify-center mb-4">
                        <div class="flex-1 h-px bg-gray-medium"></div>
                        <span class="px-4 text-gray-light">其他登录方式</span>
                        <div class="flex-1 h-px bg-gray-medium"></div>
                    </div>
                    
                    <div class="flex justify-center space-x-8">
                        <button class="social-login-btn" data-platform="douyin">
                            <i class="fa fa-music text-2xl"></i>
                            <span class="block text-xs mt-1">抖音登录</span>
                        </button>
                        <button class="social-login-btn" data-platform="wechat">
                            <i class="fa fa-weixin text-2xl text-green-500"></i>
                            <span class="block text-xs mt-1">微信登录</span>
                        </button>
                        <button class="social-login-btn" data-platform="phone">
                            <i class="fa fa-mobile text-2xl"></i>
                            <span class="block text-xs mt-1">手机号登录</span>
                        </button>
                    </div>
                </div>
                
                <!-- 注册入口 -->
                <div class="mt-8 text-center">
                    <p class="text-gray-light">
                        还没有账号？ <span id="go-to-register" class="text-accent-red cursor-pointer">立即注册</span>
                    </p>
                </div>
            </div>
        `;
        
        this.setupEventListeners();
    },
    
    setupEventListeners() {
        // 登录提交
        document.getElementById('login-submit').addEventListener('click', () => {
            this.login();
        });
        
        // 社交登录
        const socialBtns = document.querySelectorAll('.social-login-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const platform = btn.dataset.platform;
                this.oauthLogin(platform);
            });
        });
        
        // 跳转到注册
        document.getElementById('go-to-register').addEventListener('click', () => {
            const pageChangeEvent = new CustomEvent('pageChange', {
                detail: { page: 'register' }
            });
            document.dispatchEvent(pageChangeEvent);
        });
    },
    
    async login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        
        if (!username || !password) {
            App.showToast('请输入用户名和密码', 'error');
            return;
        }
        
        try {
            const result = await ApiService.login({ username, password });
            
            if (result.success) {
                // 触发登录成功事件
                const userLoggedInEvent = new CustomEvent('userLoggedIn', {
                    detail: { user: result.user }
                });
                document.dispatchEvent(userLoggedInEvent);
                
                // 保存用户信息到本地存储
                DataStorage.set('user', result.user);
            } else {
                App.showToast(result.error || '登录失败，请重试', 'error');
            }
        } catch (error) {
            App.showToast('登录失败，请检查网络连接', 'error');
        }
    },
    
    oauthLogin(platform) {
        let platformName = '';
        switch(platform) {
            case 'douyin':
                platformName = '抖音';
                break;
            case 'wechat':
                platformName = '微信';
                break;
            case 'phone':
                platformName = '手机号';
                this.showPhoneLoginModal();
                return;
        }
        
        App.showToast(`正在跳转到${platformName}登录...`, 'info');
        
        // 模拟第三方登录
        setTimeout(() => {
            const userLoggedInEvent = new CustomEvent('userLoggedIn', {
                detail: {
                    user: {
                        id: Date.now(),
                        username: `${platformName}用户`,
                        type: 'personal',
                        oauthPlatform: platform
                    }
                }
            });
            document.dispatchEvent(userLoggedInEvent);
            
            // 保存用户信息到本地存储
            DataStorage.set('user', userLoggedInEvent.detail.user);
        }, 1500);
    },
    
    showPhoneLoginModal() {
        // 创建手机号登录模态框
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-secondary-black rounded-lg p-6 w-full max-w-sm">
                <div class="text-center mb-4">
                    <h3 class="text-xl font-semibold">手机号登录</h3>
                </div>
                
                <div class="mb-4">
                    <input type="tel" id="phone-number" class="input-field" placeholder="请输入手机号">
                </div>
                
                <div class="mb-6">
                    <div class="flex space-x-2">
                        <input type="text" id="sms-code" class="input-field flex-1" placeholder="请输入验证码">
                        <button id="send-code" class="btn btn-secondary whitespace-nowrap">获取验证码</button>
                    </div>
                </div>
                
                <button id="phone-login" class="btn btn-primary w-full">登录</button>
                
                <button id="close-modal" class="absolute top-4 right-4 text-gray-light">
                    <i class="fa fa-times text-xl"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 关闭模态框
        modal.querySelector('#close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        // 发送验证码
        modal.querySelector('#send-code').addEventListener('click', () => {
            const phone = modal.querySelector('#phone-number').value;
            if (!phone || phone.length !== 11) {
                App.showToast('请输入正确的手机号', 'error');
                return;
            }
            
            const btn = modal.querySelector('#send-code');
            btn.disabled = true;
            btn.textContent = '60s后重新获取';
            
            let countdown = 60;
            const timer = setInterval(() => {
                countdown--;
                btn.textContent = `${countdown}s后重新获取`;
                if (countdown <= 0) {
                    clearInterval(timer);
                    btn.disabled = false;
                    btn.textContent = '获取验证码';
                }
            }, 1000);
            
            App.showToast('验证码已发送', 'success');
        });
        
        // 手机号登录
        modal.querySelector('#phone-login').addEventListener('click', () => {
            const phone = modal.querySelector('#phone-number').value;
            const code = modal.querySelector('#sms-code').value;
            
            if (!phone || !code) {
                App.showToast('请输入手机号和验证码', 'error');
                return;
            }
            
            modal.remove();
            
            // 登录成功
            const userLoggedInEvent = new CustomEvent('userLoggedIn', {
                detail: {
                    user: {
                        id: Date.now(),
                        username: phone.slice(-4),
                        type: 'personal',
                        phone: phone
                    }
                }
            });
            document.dispatchEvent(userLoggedInEvent);
            
            // 保存用户信息到本地存储
            DataStorage.set('user', userLoggedInEvent.detail.user);
        });
    }
};