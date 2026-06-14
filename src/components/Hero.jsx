import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const titles = [
    'Full-Stack Engineer',
    'AI Solutions Developer',
    'Game Systems Architect',
    'Interactive Heuristics Specialist',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        // 正在删除：逐字减少
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(40); // 删字速度快一些
      } else {
        // 正在输入：逐字增加
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90); // 正常打字速度
      }

      // 🌟 逻辑修复：用单一定时器控制节奏，彻底杜绝多重定时器打架
      if (!isDeleting && displayText === fullText) {
        // 刚打完字：让这一个词在原地稳稳停顿 2000ms
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        // 刚删完字：切换到下一个词，停顿 300ms 后再开始打
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer); // 每次状态更新都严格清理，确保绝对不会内存泄漏和抖动
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#070b13]">
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#070b13] to-zinc-950"></div>
      
      {/* 🌟 修复：使用标准的带有发光质感的 rgb 阴影，替代未定义的 neon 背景球 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-sans text-white mb-6 tracking-tight">
          Hello, my name is{' '}
          <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] block sm:inline mt-2 sm:mt-0 font-sans">
            LEE KAH HIN
          </span>
        </h1>
        
        {/* 打字机文本渲染区 */}
        <div className="text-xl sm:text-2xl md:text-4xl font-mono text-gray-300 mb-12 h-12 flex items-center justify-center gap-2">
          <span className="text-cyan-400 font-bold">&gt;</span> 
          <span className="tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-gray-400">
            {displayText}
          </span>
          {/* 光标闪烁效果优化 */}
          <span className="text-cyan-400 font-light animate-[pulse_0.8s_infinite] -ml-1">|</span>
        </div>

        {/* 导航跳转按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="w-48 sm:w-auto px-8 py-3 bg-cyan-400/5 border border-cyan-400/30 text-cyan-400 rounded-lg font-mono text-xs tracking-wider uppercase font-medium hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-48 sm:w-auto px-8 py-3 bg-slate-900/60 border border-slate-800 text-gray-400 rounded-lg font-mono text-xs tracking-wider uppercase font-medium hover:bg-slate-800 hover:border-slate-700 hover:text-gray-200 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator - 提示下滑 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 hover:opacity-100 transition-opacity">
        <svg
          className="w-5 h-5 text-cyan-400 shadow-sm"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
