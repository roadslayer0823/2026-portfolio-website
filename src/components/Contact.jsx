import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const myEmail = 'leekahhin08@gmail.com';

  // 🌟 修复：新增全栈标配的“一键复制邮箱”功能，彻底绝杀跳出率
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒后复原提示
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: 'https://github.com/roadslayer0823',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: 'https://www.linkedin.com/in/lee-kah-hin-1a7a92275/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-[#070b13]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 hover:border-slate-700/60 transition-all duration-300">
            <h3 className="text-xl font-bold font-sans text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              I'm always open to discussing new engineering projects, AI system integrations, creative core architectures, or opportunities to be part of your vision.
            </p>
            
            {/* Contact Details Grid */}
            <div className="space-y-4">
              
              {/* Email Detail Row (Click to Copy) */}
              <div 
                onClick={handleCopyEmail}
                className="flex items-center p-3 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group justify-between"
                title="Click to copy email address"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center mr-4 border border-cyan-400/10 group-hover:border-cyan-400/30 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500">Email Address</p>
                    <p className="text-sm text-gray-200 font-mono mt-0.5 group-hover:text-cyan-400 transition-colors">{myEmail}</p>
                  </div>
                </div>
                
                {/* 发光复制提示反馈标签 */}
                <div className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-gray-400 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all relative">
                  {copied ? (
                    <span className="text-emerald-400 font-medium animate-pulse">✓ Copied!</span>
                  ) : (
                    <span>Copy</span>
                  )}
                </div>
              </div>

              {/* Location Detail Row */}
              <div className="flex items-center p-3 rounded-xl border border-slate-800/60 bg-slate-950/40">
                <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center mr-4 border border-cyan-400/10">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-500">Location Base</p>
                  <p className="text-sm text-gray-200 mt-0.5">Malaysia</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Social Media Link Tray */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-gray-400">
              Find me on corporate & dev channels:
            </h4>
            
            <div className="flex gap-3">
              {/* 兜底邮件原生跳转图标按钮 */}
              <a
                href={`mailto:${myEmail}`}
                className="w-11 h-11 bg-slate-950 border border-slate-800 text-gray-400 rounded-xl flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 transform hover:-translate-y-0.5"
                title="Open native mail client"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* 循环渲染社交图标 */}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-950 border border-slate-800 text-gray-400 rounded-xl flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 transform hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
