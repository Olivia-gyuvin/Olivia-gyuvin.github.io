// 注册页面组件
const RegisterComponent = {
    currentStep: 1,
    formData: {
        identity: 'personal',
        name: '',
        region: '',
        tibetanLevel: '',
        chineseLevel: '',
        languagePreference: [],
        needTranslation: [],
        liveType: [],
        username: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: ''
    },
    
    render(container) {
        container.innerHTML = `
            <div class="max-w-md mx-auto">
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold mb-2">注册账号</h1>
                    <p class="text-gray-light">加入藏语直播助手，开启您的直播之旅</p>
                </div>
                
                <!-- 步骤指示器 -->
                <div class="mb-8">
                    <div class="flex justify-between">
                        <div class="step-indicator ${this.currentStep >= 1 ? 'active' : ''}">1</div>
                        <div class="step-indicator ${this.currentStep >= 2 ? 'active' : ''}">2</div>
                        <div class="step-indicator ${this.currentStep >= 3 ? 'active' : ''}">3</div>
                    </div>
                </div>
                
                <!-- 注册表单 -->
                <div id="register-form">
                    ${this.renderCurrentStep()}
                </div>
                
                <!-- 其他登录方式 -->
                <div class="mt-8 text-center">
                    <p class="text-gray-light mb-4">其他登录方式</p>
                    <div class="flex justify-center space-x-8">
                        <button class="oauth-btn" data-platform="douyin">
                            <i class="fa fa-music text-2xl"></i>
                        </button>
                        <button class="oauth-btn" data-platform="wechat">
                            <i class="fa fa-weixin text-2xl text-green-500"></i>
                        </button>
                    </div>
                </div>
                
                <div class="mt-6 text-center">
                    <p class="text-gray-light">
                        已有账号？ <span id="go-to-login" class="text-accent-red cursor-pointer">立即登录</span>
                    </p>
                </div>
            </div>
        `;
        
        this.setupEventListeners();
    },
    
    renderCurrentStep() {
        switch(this.currentStep) {
            case 1:
                return this.renderStep1();
            case 2:
                return this.renderStep2();
            case 3:
                return this.renderStep3();
            default:
                return this.renderStep1();
        }
    },
    
    renderStep1() {
        return `
            <h2 class="text-xl font-semibold mb-4">基础信息</h2>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">选择身份</label>
                <div class="flex space-x-4">
                    <label class="flex items-center">
                        <input type="radio" name="identity" value="personal" ${this.formData.identity === 'personal' ? 'checked' : ''} class="mr-2">
                        <span>个人主播</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="identity" value="institution" ${this.formData.identity === 'institution' ? 'checked' : ''} class="mr-2">
                        <span>机构运营</span>
                    </label>
                </div>
            </div>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">姓名</label>
                <input type="text" id="name" value="${this.formData.name}" class="input-field" placeholder="请输入您的姓名">
            </div>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">地区</label>
                <select id="region" class="input-field">
                    <option value="">请选择您所在的地区</option>
                    <option value="tibet" ${this.formData.region === 'tibet' ? 'selected' : ''}>西藏自治区</option>
                    <option value="qinghai" ${this.formData.region === 'qinghai' ? 'selected' : ''}>青海省</option>
                    <option value="sichuan" ${this.formData.region === 'sichuan' ? 'selected' : ''}>四川省</option>
                    <option value="gansu" ${this.formData.region === 'gansu' ? 'selected' : ''}>甘肃省</option>
                    <option value="yunnan" ${this.formData.region === 'yunnan' ? 'selected' : ''}>云南省</option>
                    <option value="other" ${this.formData.region === 'other' ? 'selected' : ''}>其他地区</option>
                </select>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <label class="block text-sm mb-2">藏语水平</label>
                    <select id="tibetanLevel" class="input-field">
                        <option value="">请选择</option>
                        <option value="native" ${this.formData.tibetanLevel === 'native' ? 'selected' : ''}>母语水平</option>
                        <option value="fluent" ${this.formData.tibetanLevel === 'fluent' ? 'selected' : ''}>流利</option>
                        <option value="intermediate" ${this.formData.tibetanLevel === 'intermediate' ? 'selected' : ''}>中级</option>
                        <option value="basic" ${this.formData.tibetanLevel === 'basic' ? 'selected' : ''}>基础</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm mb-2">汉语水平</label>
                    <select id="chineseLevel" class="input-field">
                        <option value="">请选择</option>
                        <option value="native" ${this.formData.chineseLevel === 'native' ? 'selected' : ''}>母语水平</option>
                        <option value="fluent" ${this.formData.chineseLevel === 'fluent' ? 'selected' : ''}>流利</option>
                        <option value="intermediate" ${this.formData.chineseLevel === 'intermediate' ? 'selected' : ''}>中级</option>
                        <option value="basic" ${this.formData.chineseLevel === 'basic' ? 'selected' : ''}>基础</option>
                    </select>
                </div>
            </div>
            
            <button id="next-step-1" class="btn btn-primary w-full">下一步</button>
        `;
    },
    
    renderStep2() {
        return `
            <h2 class="text-xl font-semibold mb-4">直播偏好设置</h2>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">语言偏好</label>
                <div class="space-y-2">
                    <label class="flex items-center">
                        <input type="checkbox" name="languagePreference" value="amdo" ${this.formData.languagePreference.includes('amdo') ? 'checked' : ''} class="mr-2">
                        <span>安多方言</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="languagePreference" value="kham" ${this.formData.languagePreference.includes('kham') ? 'checked' : ''} class="mr-2">
                        <span>康巴方言</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="languagePreference" value="central" ${this.formData.languagePreference.includes('central') ? 'checked' : ''} class="mr-2">
                        <span>卫藏方言</span>
                    </label>
                </div>
            </div>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">翻译需求</label>
                <div class="space-y-2">
                    <label class="flex items-center">
                        <input type="checkbox" name="needTranslation" value="chineseToTibetan" ${this.formData.needTranslation.includes('chineseToTibetan') ? 'checked' : ''} class="mr-2">
                        <span>汉语转藏语标注</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="needTranslation" value="tibetanToChinese" ${this.formData.needTranslation.includes('tibetanToChinese') ? 'checked' : ''} class="mr-2">
                        <span>藏语转汉语标注</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="needTranslation" value="pronunciationGuide" ${this.formData.needTranslation.includes('pronunciationGuide') ? 'checked' : ''} class="mr-2">
                        <span>谐音发音指导</span>
                    </label>
                </div>
            </div>
            
            <div class="mb-6">
                <label class="block text-sm mb-2">直播类型</label>
                <div class="grid grid-cols-2 gap-2">
                    <label class="flex items-center">
                        <input type="checkbox" name="liveType" value="ecommerce" ${this.formData.liveType.includes('ecommerce') ? 'checked' : ''} class="mr-2">
                        <span>电商带货</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="liveType" value="culture" ${this.formData.liveType.includes('culture') ? 'checked' : ''} class="mr-2">
                        <span>文化传播</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="liveType" value="performance" ${this.formData.liveType.includes('performance') ? 'checked' : ''} class="mr-2">
                        <span>歌舞表演</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="liveType" value="food" ${this.formData.liveType.includes('food') ? 'checked' : ''} class="mr-2">
                        <span>美食制作</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="liveType" value="travel" ${this.formData.liveType.includes('travel') ? 'checked' : ''} class="mr-2">
                        <span>旅游分享</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" name="liveType" value="education" ${this.formData.liveType.includes('education') ? 'checked' : ''} class="mr-2">
                        <span>教育知识</span>
                    </label>
                </div>
            </div>
            
            <div class="flex space-x-4">
                <button id="prev-step-2" class="btn btn-outline flex-1">上一步</button>
                <button id="next-step-2" class="btn btn-primary flex-1">下一步</button>
            </div>
        `;
    },
    
    renderStep3() {
        return `
            <h2 class="text-xl font-semibold mb-4">账号信息</h2>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">用户名</label>
                <input type="text" id="username" value="${this.formData.username}" class="input-field" placeholder="请设置用户名">
            </div>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">密码</label>
                <input type="password" id="password" value="${this.formData.password}" class="input-field" placeholder="请设置密码（8-20位）">
            </div>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">确认密码</label>
                <input type="password" id="confirmPassword" value="${this.formData.confirmPassword}" class="input-field" placeholder="请再次输入密码">
            </div>
            
            <div class="mb-4">
                <label class="block text-sm mb-2">手机号</label>
                <input type="tel" id="phone" value="${this.formData.phone}" class="input-field" placeholder="请输入手机号（选填）">
            </div>
            
            <div class="mb-6">
                <label class="block text-sm mb-2">邮箱</label>
                <input type="email" id="email" value="${this.formData.email}" class="input-field" placeholder="请输入邮箱（选填）">
            </div>
            
            <div class="flex space-x-4">
                <button id="prev-step-3" class="btn btn-outline flex-1">上一步</button>
                <button id="register-submit" class="btn btn-primary flex-1">注册</button>
            </div>
        `;
    },
    
    setupEventListeners() {
        // 步骤1下一步
        const nextStep1 = document.getElementById('next-step-1');
        if (nextStep1) {
            nextStep1.addEventListener('click', () => {
                this.saveStep1Data();
                this.currentStep = 2;
                this.render(document.getElementById('register-form'));
            });
        }
        
        // 步骤2上一步
        const prevStep2 = document.getElementById('prev-step-2');
        if (prevStep2) {
            prevStep2.addEventListener('click', () => {
                this.currentStep = 1;
                this.render(document.getElementById('register-form'));
            });
        }
        
        // 步骤2下一步
        const nextStep2 = document.getElementById('next-step-2');
        if (nextStep2) {
            nextStep2.addEventListener('click', () => {
                this.saveStep2Data();
                this.currentStep = 3;
                this.render(document.getElementById('register-form'));
            });
        }
        
        // 步骤3上一步
        const prevStep3 = document.getElementById('prev-step-3');
        if (prevStep3) {
            prevStep3.addEventListener('click', () => {
                this.currentStep = 2;
                this.render(document.getElementById('register-form'));
            });
        }
        
        // 注册提交
        const registerSubmit = document.getElementById('register-submit');
        if (registerSubmit) {
            registerSubmit.addEventListener('click', () => {
                this.saveStep3Data();
                this.submitRegistration();
            });
        }
        
        // 社交登录
        const oauthBtns = document.querySelectorAll('.oauth-btn');
        oauthBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const platform = btn.dataset.platform;
                this.oauthLogin(platform);
            });
        });
        
        // 跳转到登录
        const goToLogin = document.getElementById('go-to-login');
        if (goToLogin) {
            goToLogin.addEventListener('click', () => {
                const pageChangeEvent = new CustomEvent('pageChange', {
                    detail: { page: 'login' }
                });
                document.dispatchEvent(pageChangeEvent);
            });
        }
    },
    
    saveStep1Data() {
        this.formData.identity = document.querySelector('input[name="identity"]:checked').value;
        this.formData.name = document.getElementById('name').value;
        this.formData.region = document.getElementById('region').value;
        this.formData.tibetanLevel = document.getElementById('tibetanLevel').value;
        this.formData.chineseLevel = document.getElementById('chineseLevel').value;
    },
    
    saveStep2Data() {
        this.formData.languagePreference = Array.from(document.querySelectorAll('input[name="languagePreference"]:checked')).map(el => el.value);
        this.formData.needTranslation = Array.from(document.querySelectorAll('input[name="needTranslation"]:checked')).map(el => el.value);
        this.formData.liveType = Array.from(document.querySelectorAll('input[name="liveType"]:checked')).map(el => el.value);
    },
    
    saveStep3Data() {
        this.formData.username = document.getElementById('username').value;
        this.formData.password = document.getElementById('password').value;
        this.formData.confirmPassword = document.getElementById('confirmPassword').value;
        this.formData.phone = document.getElementById('phone').value;
        this.formData.email = document.getElementById('email').value;
    },
    
    async submitRegistration() {
        // 简单验证
        if (!this.formData.username || !this.formData.password) {
            App.showToast('请填写完整的账号信息', 'error');
            return;
        }
        
        if (this.formData.password !== this.formData.confirmPassword) {
            App.showToast('两次输入的密码不一致', 'error');
            return;
        }
        
        try {
            // 调用API注册
            const result = await ApiService.register(this.formData);
            
            if (result.success) {
                App.showToast('注册成功！正在跳转到登录页面...', 'success');
                setTimeout(() => {
                    const pageChangeEvent = new CustomEvent('pageChange', {
                        detail: { page: 'login' }
                    });
                    document.dispatchEvent(pageChangeEvent);
                }, 1500);
            }
        } catch (error) {
            App.showToast('注册失败，请重试', 'error');
        }
    },
    
    oauthLogin(platform) {
        App.showToast(`正在跳转到${platform === 'douyin' ? '抖音' : '微信'}登录...`, 'info');
        // 模拟第三方登录
        setTimeout(() => {
            const userLoggedInEvent = new CustomEvent('userLoggedIn', {
                detail: {
                    user: {
                        id: Date.now(),
                        username: platform === 'douyin' ? '抖音用户' : '微信用户',
                        type: 'personal',
                        oauthPlatform: platform
                    }
                }
            });
            document.dispatchEvent(userLoggedInEvent);
        }, 1500);
    }
};