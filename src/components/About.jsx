const About = () => {
  // 模拟简历下载，如果是真实文件可以把链接换成绝对或相对路径如 "/resume.pdf"
  const handleDownloadCV = () => {
    alert("CV download triggered! (Replace with your actual file path)");
    // window.open('/your-resume-path.pdf', '_blank');
  };

  return (
    <section id="about" className="py-20 px-4 bg-[#070b13] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          {/* 🌟 修复：用真正的 Tailwind 阴影和颜色，替代了可能未配置的 neon 类名 */}
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
         {/* Education Card */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mr-4 border border-cyan-400/20">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">Education</h3>
            </div>
            
            {/* 时间线容器 */}
            <div className="relative border-l-2 border-slate-800 pl-6 ml-2 space-y-8">
              
              {/* 节点 1：MAHSA */}
              <div className="relative">
                {/* 时间线上的发光小圆点 */}
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
                <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">2020 - 2022</span>
                <h4 className="text-base font-semibold text-white font-sans mt-2">
                  Bachelor of Information Technology (HONS)
                </h4>
                <p className="text-gray-400 text-sm mt-0.5 font-mono">MAHSA University</p>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Specialized in Software Engineering framework integration, multi-agent Web Ecosystems, and distributed cloud computing.
                </p>
              </div>

              {/* 节点 2：Linton 本科（转学/前置阶段） */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-slate-700"></div>
                <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">2019 - 2020</span>
                <h4 className="text-base font-semibold text-slate-200 font-sans mt-2">
                  BSc (Hons) in Software Engineering <span className="text-xs text-slate-500 font-normal">(Core Transfer)</span>
                </h4>
                <p className="text-gray-400 text-sm mt-0.5 font-mono">Linton University College</p>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Focused heavily on OOP principles, advanced data structures, algorithmic complexity, and foundational systems architecture.
                </p>
              </div>

              {/* 节点 3：Linton Foundation */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-slate-800"></div>
                <span className="text-[10px] font-mono bg-slate-800 text-slate-500 px-2 py-0.5 rounded">2018 - 2019</span>
                <h4 className="text-sm font-medium text-slate-400 font-sans mt-2">
                  Foundation in Information Technology
                </h4>
                <p className="text-slate-500 text-xs mt-0.5 font-mono">Linton University College</p>
              </div>

            </div>
          </div>
        </div>

          {/* Core Focus Card */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mr-4 border border-cyan-400/20">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-sans text-white">Core Focus</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-0.5 text-lg">▹</span>
                <div>
                  <strong className="text-white block font-sans text-sm">Distributed Web Ecosystems</strong>
                  <span className="text-xs text-gray-400 leading-normal">Orchestrating micro-frontends, asynchronous API gateways, and production-grade fullstack state machines.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-0.5 text-lg">▹</span>
                <div>
                  <strong className="text-white block font-sans text-sm">Generative AI Integration</strong>
                  <span className="text-xs text-gray-400 leading-normal">Designing advanced context pipelines, streaming dynamic LLM arrays, and structured data validation schemas.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-0.5 text-lg">▹</span>
                <div>
                  <strong className="text-white block font-sans text-sm">Interactive Game Engines</strong>
                  <span className="text-xs text-gray-400 leading-normal">Architecting event-driven C# subsystems, state frameworks, matrix vector mechanics, and decoupled databases.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Design Philosophy */}
        {/* 🌟 修复：添加了 flex 容器，使得图标和标题能够并排水平居中对齐 */}
        <div className="mt-12 bg-slate-900/20 backdrop-blur-md border border-slate-800/80 rounded-xl p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mr-4 border border-cyan-400/20">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-sans text-white">Design Philosophy</h3>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed italic font-sans pl-1 border-l-2 border-slate-800">
            "Engineering scalable logic for tomorrow with persistence; architecting intuitive digital experiences for the future."
          </p>
        </div>

        {/* Download CV Button */}
        {/* 🌟 修复：绑定了真正的 onClick 函数，并加上了手势鼠标指针以及微调动画 */}
        <div className="mt-12 text-center">
          <button 
            onClick={handleDownloadCV}
            className="px-8 py-3 bg-cyan-400/5 border border-cyan-400/30 text-cyan-400 rounded-lg font-mono text-xs tracking-wider uppercase font-medium hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center mx-auto active:scale-95 cursor-pointer"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download CV
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default About;
