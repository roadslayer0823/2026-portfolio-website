const Footer = () => {
  const currentYear = new Date().getFullYear();

  // 🌟 新增：丝滑回滚到顶部的交互函数
  const scrollToTop = (e) => {
    e.preventDefault();
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    // 🌟 修复：将背景色换成与 Contact 一致的深色，并精细化边框
    <footer className="py-10 px-6 bg-[#070b13] border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* 左侧/中间：版权声明 */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-xs tracking-wide font-sans">
            © {currentYear} <span className="text-gray-400 font-medium">LEE KAH HIN</span>. All rights reserved.
          </p>
          {/* 🌟 修复：使用标准的带有发光质感的透明度类名 */}
          <p className="text-cyan-500/50 text-[11px] font-mono mt-1.5 tracking-wider">
            Built with React, Tailwind CSS & High-Performance Architecture.
          </p>
        </div>

        {/* 右侧：丝滑回到顶部按钮（UX闭环） */}
        <div className="flex items-center">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800/60 bg-slate-950/40 text-gray-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 text-xs font-mono"
            aria-label="Back to top"
          >
            <span>Top</span>
            <svg 
              className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-300 text-current" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
