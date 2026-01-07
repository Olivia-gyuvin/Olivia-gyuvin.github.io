// Pro+版本优势弹窗组件
class ProModal {
    constructor() {
        this.modalElement = null;
    }

    show() {
        // 如果弹窗不存在，则创建
        if (!this.modalElement) {
            this.createModal();
        }
        
        // 显示弹窗并添加动画
        document.body.appendChild(this.modalElement);
        document.body.style.overflow = 'hidden'; // 阻止背景滚动
        
        // 添加淡入和缩放动画
        setTimeout(() => {
            this.modalElement.querySelector('.modal-overlay').classList.add('animate-fade-in');
            this.modalElement.querySelector('.modal-content').classList.add('animate-scale-in');
        }, 10);

        // 设置事件监听
        this.setupEventListeners();
    }

    hide() {
        if (!this.modalElement) return;

        // 添加淡出和缩放动画
        this.modalElement.querySelector('.modal-overlay').classList.remove('animate-fade-in');
        this.modalElement.querySelector('.modal-overlay').classList.add('animate-fade-out');
        this.modalElement.querySelector('.modal-content').classList.remove('animate-scale-in');
        this.modalElement.querySelector('.modal-content').classList.add('animate-scale-out');

        // 动画结束后移除弹窗
        setTimeout(() => {
            if (this.modalElement && this.modalElement.parentNode === document.body) {
                document.body.removeChild(this.modalElement);
                this.modalElement = null;
                document.body.style.overflow = ''; // 恢复背景滚动
            }
        }, 300);
    }

    createModal() {
        // 创建弹窗容器
        this.modalElement = document.createElement('div');
        this.modalElement.className = 'modal-container';
        this.modalElement.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content pro-modal">
                <div class="modal-header">
                    <h2 class="text-2xl font-bold text-white">升级Pro+ 版本</h2>
                    <button class="close-button" aria-label="关闭">
                        <i class="fa fa-times text-2xl"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Pro+版本优势 -->
                    <div class="pro-advantages space-y-6">
                        <div class="advantage-item flex items-start p-4 bg-tertiary-black rounded-lg">
                            <div class="advantage-icon bg-accent-blue text-white p-3 rounded-full mr-4">
                                <i class="fa fa-magic text-xl"></i>
                            </div>
                            <div class="advantage-content">
                                <h3 class="text-xl font-bold text-white mb-1">AI智能话术定制</h3>
                                <p class="text-gray-light">基于您的产品特点和目标受众，生成专属销售话术，转化率提升30%以上。</p>
                            </div>
                        </div>
                        
                        <div class="advantage-item flex items-start p-4 bg-tertiary-black rounded-lg">
                            <div class="advantage-icon bg-accent-green text-white p-3 rounded-full mr-4">
                                <i class="fa fa-line-chart text-xl"></i>
                            </div>
                            <div class="advantage-content">
                                <h3 class="text-xl font-bold text-white mb-1">实时数据分析</h3>
                                <p class="text-gray-light">直播过程中的实时数据反馈和分析，帮助您随时调整直播策略。</p>
                            </div>
                        </div>
                        
                        <div class="advantage-item flex items-start p-4 bg-tertiary-black rounded-lg">
                            <div class="advantage-icon bg-accent-purple text-white p-3 rounded-full mr-4">
                                <i class="fa fa-users text-xl"></i>
                            </div>
                            <div class="advantage-content">
                                <h3 class="text-xl font-bold text-white mb-1">粉丝管理系统</h3>
                                <p class="text-gray-light">精细化的粉丝分组和管理功能，提升粉丝活跃度和忠诚度。</p>
                            </div>
                        </div>
                        
                        <div class="advantage-item flex items-start p-4 bg-tertiary-black rounded-lg">
                            <div class="advantage-icon bg-accent-red text-white p-3 rounded-full mr-4">
                                <i class="fa fa-video-camera text-xl"></i>
                            </div>
                            <div class="advantage-content">
                                <h3 class="text-xl font-bold text-white mb-1">高清直播特效</h3>
                                <p class="text-gray-light">10+种专业直播背景和特效，提升直播间品质和观众体验。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline mr-3" id="pro-modal-cancel">
                        稍后再说
                    </button>
                    <button class="btn btn-primary" id="pro-modal-upgrade">
                        立即升级
                    </button>
                </div>
            </div>
        `;

        // 添加CSS样式
        this.addStyles();
    }

    setupEventListeners() {
        if (!this.modalElement) return;

        // 关闭按钮事件
        this.modalElement.querySelector('.close-button').addEventListener('click', () => this.hide());
        this.modalElement.querySelector('#pro-modal-cancel').addEventListener('click', () => this.hide());

        // 背景点击事件
        this.modalElement.querySelector('.modal-overlay').addEventListener('click', () => this.hide());

        // 升级按钮事件
        this.modalElement.querySelector('#pro-modal-upgrade').addEventListener('click', () => {
            alert('即将跳转到支付页面，完成Pro+版本升级！');
            this.hide();
        });

        // ESC键关闭
        document.addEventListener('keydown', this.handleEscKey.bind(this));
    }

    handleEscKey(e) {
        if (e.key === 'Escape') {
            this.hide();
        }
    }

    addStyles() {
        // 检查是否已经添加了样式
        if (document.getElementById('pro-modal-styles')) {
            return;
        }

        // 创建样式元素
        const styleElement = document.createElement('style');
        styleElement.id = 'pro-modal-styles';
        styleElement.textContent = `
            /* 弹窗基础样式 */
            .modal-container {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.7);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal-content {
                position: relative;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                background-color: #1A1A1A;
                border-radius: 12px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                transform: scale(0.95);
                transition: transform 0.3s ease;
            }
            
            /* Pro弹窗特定样式 */
            .pro-modal {
                background: linear-gradient(145deg, #1A1A1A, #252525);
                border: 2px solid #333;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #333;
            }
            
            .close-button {
                background: none;
                border: none;
                color: #888;
                cursor: pointer;
                transition: color 0.2s;
            }
            
            .close-button:hover {
                color: white;
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .modal-footer {
                display: flex;
                justify-content: flex-end;
                padding: 20px;
                border-top: 1px solid #333;
            }
            
            /* Pro优势样式 */
            .pro-advantages {
                margin-top: 10px;
            }
            
            .advantage-item {
                position: relative;
                transition: transform 0.2s, box-shadow 0.2s;
            }
            
            .advantage-item:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            .advantage-icon {
                font-size: 24px;
                flex-shrink: 0;
            }
            
            /* 动画效果 */
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            
            @keyframes scaleIn {
                from { transform: scale(0.95); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            
            @keyframes scaleOut {
                from { transform: scale(1); opacity: 1; }
                to { transform: scale(0.95); opacity: 0; }
            }
            
            .animate-fade-in {
                animation: fadeIn 0.3s forwards;
            }
            
            .animate-fade-out {
                animation: fadeOut 0.3s forwards;
            }
            
            .animate-scale-in {
                animation: scaleIn 0.3s forwards;
            }
            
            .animate-scale-out {
                animation: scaleOut 0.3s forwards;
            }
            
            /* 按钮样式 */
            .btn {
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }
            
            .btn-primary {
                background: linear-gradient(45deg, #FF4D4F, #FF7875);
                border: none;
                color: white;
            }
            
            .btn-primary:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(255, 77, 79, 0.3);
            }
            
            .btn-outline {
                background: transparent;
                border: 1px solid #666;
                color: #888;
            }
            
            .btn-outline:hover {
                border-color: #888;
                color: white;
            }
        `;

        // 添加到document.head
        document.head.appendChild(styleElement);
    }
}

// 导出ProModal类
window.ProModal = ProModal;