import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // 🌟 修复：当用户意外拉大浏览器窗口时，自动关闭手机端菜单，防止布局卡死
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // 🌟 修复手机端点击链接时的丝滑下滚动函数
  const handleMobileClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // 给状态关闭留出一点点渲染空隙，再去平滑滚动，彻底绝杀页面抽搐
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070b13]/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="text-2xl font-black font-sans tracking-wider text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:text-white transition-all duration-300"
            >
              LKH
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 font-mono text-xs tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 px-4 py-2 rounded-lg transition-all duration-300 relative group"
                >
                  {link.name}
                  {/* 悬浮时的小胶囊下划线动画 */}
                  <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_8px_#22d3ee]"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-cyan-400 p-2 rounded-lg transition-colors duration-300 focus:outline-none relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {/* 🌟 修复：纯 CSS 打造的纯正汉堡包缩放旋转动画，告别突兀切换 */}
              <div className="flex flex-col justify-between w-5 h-4 transition-transform duration-300">
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-[3px] -translate-y-[1px]' : ''}`}></span>
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                <span className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-[3px] translate-y-[1px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {/* 🌟 修复：加入显隐过渡动画基础，配合平滑移动端跳转 */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-[#070b13]/95 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300 transform origin-top ${
          isMobileMenuOpen 
            ? 'opacity-100 scale-y-100 pointer-events-auto' 
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-2 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleMobileClick(e, link.href)}
              className="text-gray-400 hover:text-cyan-400 block px-4 py-3 rounded-xl hover:bg-cyan-500/5 transition-all duration-200"
            >
              <span className="text-cyan-500/50 mr-2">&gt;</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
