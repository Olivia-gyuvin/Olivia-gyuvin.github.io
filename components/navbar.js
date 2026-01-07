// 底部导航栏组件
const NavbarComponent = {
    render() {
        // 检查是否已存在导航栏
        const existingNavbar = document.querySelector('.navbar');
        if (existingNavbar) {
            existingNavbar.remove();
        }
        
        // 创建导航栏
        const navbar = document.createElement('div');
        navbar.className = 'navbar';
        navbar.innerHTML = `
            <div class="nav-item active" data-page="home">
                <i class="nav-icon fa fa-home"></i>
                <span class="nav-text">首页</span>
            </div>
            <div class="nav-item" data-page="forum">
                <i class="nav-icon fa fa-comments"></i>
                <span class="nav-text">论坛</span>
            </div>
            <div class="nav-item" data-page="live">
                <i class="nav-icon fa fa-video-camera"></i>
                <span class="nav-text">直播</span>
            </div>
            <div class="nav-item" data-page="ai-scripts">
                <i class="nav-icon fa fa-magic"></i>
                <span class="nav-text">AI话术</span>
            </div>
            <div class="nav-item" data-page="profile">
                <i class="nav-icon fa fa-user"></i>
                <span class="nav-text">我的</span>
            </div>
        `;
        
        // 添加到页面
        document.getElementById('app').appendChild(navbar);
        
        // 设置导航事件
        this.setupNavigation();
    },
    
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // 更新激活状态
                navItems.forEach(navItem => navItem.classList.remove('active'));
                item.classList.add('active');
                
                // 切换页面
                const page = item.dataset.page;
                const pageChangeEvent = new CustomEvent('pageChange', {
                    detail: { page }
                });
                document.dispatchEvent(pageChangeEvent);
            });
        });
    },
    
    // 更新导航栏激活状态
    updateActivePage(pageName) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.dataset.page === pageName) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
};