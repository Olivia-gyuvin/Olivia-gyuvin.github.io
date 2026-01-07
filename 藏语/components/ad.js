/**
 * 广告组件 - 久久公益节弹窗广告
 * 功能：展示久久公益节广告弹窗，支持显示/隐藏动画、关闭按钮、重新查看按钮和动态心形效果
 */
class AdComponent {
    constructor() {
        // 弹窗元素
        this.modalElement = null;
        // 心形效果定时器
        this.heartTimer = null;
    }

    /**
     * 显示广告弹窗
     */
    show() {
        // 如果弹窗已经存在，先移除
        if (this.modalElement && this.modalElement.parentNode) {
            this.hide();
        }
        
        // 创建弹窗容器
        this.modalElement = document.createElement('div');
        this.modalElement.className = 'ad-modal fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none';
        
        // 创建广告内容
        const adContent = `
        <!-- 广告弹窗主体 -->
        <div class="ad-modal-content max-w-md w-full mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/20 transform transition-transform scale-90 opacity-0">
            <!-- 关闭按钮 -->
            <button id="close-ad-modal-btn" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors z-10">
                <i class="fa fa-times"></i>
            </button>

            <!-- 广告图片区域 -->
            <div class="ad-image-container relative flex flex-col items-center py-8">
                <!-- 标题 -->
                <div class="absolute top-0 left-0 right-0 flex justify-center items-center space-x-4 py-2">
                    <div class="text-xs font-bold text-white/80">久久公益节</div>
                    <div class="text-xs text-white/80">腾讯智慧零售</div>
                </div>
                
                <!-- 主题文字 -->
                <div class="text-center mb-6">
                    <h2 class="text-3xl font-bold text-white mb-1">十年如一日</h2>
                    <h3 class="text-3xl font-bold text-white">久久做好事</h3>
                </div>
                
                <!-- 花朵角色和背景 -->
                <div class="relative w-64 h-64">
                    <!-- 背景圆形 -->
                    <div class="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 animate-pulse"></div>
                    <div class="absolute inset-4 rounded-full bg-gradient-to-br from-blue-400/30 to-pink-400/30 animate-pulse delay-300"></div>
                    
                    <!-- 花朵角色 -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="relative w-40 h-40">
                            <!-- 花朵头部 -->
                            <div class="absolute inset-0">
                                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full"></div>
                                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full"></div>
                                <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-red-500 rounded-full"></div>
                                <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-red-500 rounded-full"></div>
                                <div class="absolute top-6 left-6 w-16 h-16 bg-red-500 rounded-full"></div>
                                <div class="absolute top-6 right-6 w-16 h-16 bg-red-500 rounded-full"></div>
                                <div class="absolute bottom-6 left-6 w-16 h-16 bg-red-500 rounded-full"></div>
                                <div class="absolute bottom-6 right-6 w-16 h-16 bg-red-500 rounded-full"></div>
                            </div>
                            
                            <!-- 花朵白色脸 -->
                            <div class="absolute inset-1/4 bg-white rounded-full z-10 flex items-center justify-center">
                                <!-- 眼睛和嘴巴 -->
                                <div class="relative w-16 h-16">
                                    <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full"></div>
                                    <div class="absolute top-1/4 right-1/4 w-2 h-2 bg-black rounded-full"></div>
                                    <div class="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-yellow-500 rounded-full"></div>
                                </div>
                            </div>
                            
                            <!-- 花朵手臂 -->
                            <div class="absolute -right-8 top-1/4 w-12 h-4 bg-white rounded-full transform rotate-45 z-20"></div>
                            <div class="absolute -left-8 bottom-1/4 w-12 h-4 bg-white rounded-full transform -rotate-45 z-20"></div>
                            
                            <!-- 花朵腿部 -->
                            <div class="absolute left-1/4 -bottom-8 w-4 h-12 bg-white rounded-full transform rotate-15 z-20"></div>
                            <div class="absolute right-1/4 -bottom-8 w-4 h-12 bg-white rounded-full transform -rotate-15 z-20"></div>
                            
                            <!-- 黄色圆形装饰 -->
                            <div class="absolute -right-12 top-1/4 w-10 h-10 bg-yellow-400 rounded-full z-20 animate-bounce"></div>
                        </div>
                    </div>
                </div>
                
                <!-- 底部文字 -->
                <div class="text-center mb-8">
                    <p class="text-lg text-white font-medium">腾讯智慧零售携手零售品牌</p>
                    <p class="text-xl text-white font-bold mt-2">一块久久做好事</p>
                </div>
                
                <!-- 操作按钮 -->
                <div class="flex space-x-3">
                    <button id="close-ad-btn" class="flex-1 bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-medium transition-all transform hover:scale-105">
                        关闭
                    </button>
                    <button id="replay-ad-btn" class="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-medium transition-all transform hover:scale-105">
                        重新查看
                    </button>
                </div>
            </div>
        </div>
        `;
        
        // 设置内容
        this.modalElement.innerHTML = adContent;
        
        // 添加到页面
        document.body.appendChild(this.modalElement);
        
        // 设置body不滚动
        document.body.style.overflow = 'hidden';
        
        // 触发动画
        setTimeout(() => {
            // 淡入背景
            this.modalElement.classList.remove('opacity-0', 'pointer-events-none');
            this.modalElement.classList.add('transition-opacity', 'duration-300', 'opacity-100');
            
            // 缩放内容
            const content = this.modalElement.querySelector('.ad-modal-content');
            if (content) {
                content.classList.remove('scale-90', 'opacity-0');
                content.classList.add('transition-all', 'duration-300', 'scale-100', 'opacity-100');
            }
        }, 10);
        
        // 设置事件监听
        this.setupEventListeners();
        
        // 创建动态心形效果
        this.createHeartEffect();
    }

    /**
     * 隐藏广告弹窗
     */
    hide() {
        if (this.modalElement) {
            // 停止心形效果
            if (this.heartTimer) {
                clearInterval(this.heartTimer);
                this.heartTimer = null;
            }
            
            // 淡出动画
            const content = this.modalElement.querySelector('.ad-modal-content');
            if (content) {
                content.classList.remove('scale-100', 'opacity-100');
                content.classList.add('scale-90', 'opacity-0');
            }
            
            this.modalElement.classList.remove('opacity-100');
            this.modalElement.classList.add('opacity-0');
            
            // 动画结束后移除元素
            setTimeout(() => {
                if (this.modalElement && this.modalElement.parentNode) {
                    document.body.removeChild(this.modalElement);
                }
                this.modalElement = null;
                // 恢复body滚动
                document.body.style.overflow = '';
            }, 300);
        }
    }

    /**
     * 设置事件监听
     */
    setupEventListeners() {
        if (!this.modalElement) return;
        
        // 关闭按钮事件
        const closeModalBtn = this.modalElement.querySelector('#close-ad-modal-btn');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => this.hide());
        }
        
        // 底部关闭按钮事件
        const closeBtn = this.modalElement.querySelector('#close-ad-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hide());
        }
        
        // 重新查看按钮事件
        const replayBtn = this.modalElement.querySelector('#replay-ad-btn');
        if (replayBtn) {
            replayBtn.addEventListener('click', () => {
                // 重新显示（隐藏后再显示）
                this.hide();
                setTimeout(() => this.show(), 350);
            });
        }
        
        // 点击背景关闭
        this.modalElement.addEventListener('click', (e) => {
            if (e.target === this.modalElement) {
                this.hide();
            }
        });
        
        // ESC键关闭
        document.addEventListener('keydown', this.handleEscKey.bind(this));
    }
    
    /**
     * 处理ESC键事件
     */
    handleEscKey(e) {
        if (e.key === 'Escape' && this.modalElement) {
            this.hide();
            // 移除事件监听
            document.removeEventListener('keydown', this.handleEscKey.bind(this));
        }
    }

    /**
     * 创建动态心形效果
     */
    createHeartEffect() {
        // 停止之前的定时器
        if (this.heartTimer) {
            clearInterval(this.heartTimer);
        }
        
        // 启动新的定时器，每1.5秒创建一个心形
        this.heartTimer = setInterval(() => {
            this.createHeart();
        }, 1500);
    }

    /**
     * 创建单个心形元素
     */
    createHeart() {
        if (!this.modalElement) return;
        
        // 创建心形元素
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // 设置随机位置（在花朵周围）
        const container = this.modalElement.querySelector('.ad-image-container');
        if (container) {
            const rect = container.getBoundingClientRect();
            const modalRect = this.modalElement.getBoundingClientRect();
            
            // 计算相对位置
            const x = rect.left - modalRect.left + Math.random() * rect.width;
            const y = rect.top - modalRect.top + rect.height / 2;
            
            heart.style.left = `${x}px`;
            heart.style.top = `${y}px`;
            heart.style.opacity = '0';
            heart.style.animation = `heart-float ${3 + Math.random() * 2}s ease-in-out forwards`;
            
            // 添加到模态框中
            this.modalElement.appendChild(heart);
            
            // 移除完成的动画元素
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 5000);
        }
    }
}

// 添加CSS样式
const style = document.createElement('style');
style.textContent = `
.ad-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.ad-modal-content {
    position: relative;
    width: 100%;
    max-width: 28rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 1.5rem;
    padding: 1.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.ad-image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
}

/* 动画定义 */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-15px) rotate(5deg);
    }
    100% {
        transform: translateY(0) rotate(0deg);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0.9);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes scaleOut {
    from {
        transform: scale(1);
        opacity: 1;
    }
    to {
        transform: scale(0.9);
        opacity: 0;
    }
}

/* 心形动画 */
.heart {
    position: absolute;
    width: 20px;
    height: 18px;
    background-color: #ff4d6d;
    transform: rotate(45deg);
    z-index: 10;
}

.heart:before,
.heart:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 18px;
    background-color: #ff4d6d;
    border-radius: 50%;
}

.heart:before {
    top: -10px;
    left: 0;
}

.heart:after {
    top: 0;
    left: -10px;
}

@keyframes heart-float {
    0% {
        transform: rotate(45deg) translateY(0) scale(0);
        opacity: 1;
    }
    10% {
        transform: rotate(45deg) translateY(-10px) scale(1);
        opacity: 1;
    }
    90% {
        transform: rotate(45deg) translateY(-100px) scale(1);
        opacity: 1;
    }
    100% {
        transform: rotate(45deg) translateY(-120px) scale(0.8);
        opacity: 0;
    }
}

/* 按钮悬停效果 */
#close-ad-btn:hover,
#replay-ad-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
`;
document.head.appendChild(style);

// 导出AdComponent类
if (typeof window !== 'undefined') {
    window.AdComponent = AdComponent;
}