import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import projectAssets from '../assets/projectAssets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeEtiTab, setActiveEtiTab] = useState(0); 
  const videoRefs = useRef({});
  const bgVideoRefs = useRef({});
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'ETI Enterprise EdTech Ecosystem (Eti Edu)',
      subtitle: 'Lead Full-Stack Architect',
      category: 'Full-Stack Ecosystem',
      isEcosystem: true, 
      description: 'A production-grade, micro-frontend educational technology portal orchestrating 4 independent data-centric subsystems under a unified runtime entryway. Powered by a dual-engine Node.js/Express backend resolving localized GenAI streams and tokenized sessions.',
      techStack: ['React & TS', 'Node.js', 'Express', 'DeepSeek API', 'JWT Auth', 'Stream I/O'],
      githubUrl: 'https://github.com/roadslayer0823/Eti-Website',
      mediaTabs: [
        {
          name: 'Main Hub',
          title: '// System Architecture Nodes',
          nodes: [
            'Micro-Frontend Orchestration: Bridges standalone React applications and static Vanilla JS nodes under a unified production entryway.',
            'Dual-Engine Backend: Separates secure tokenized sessions from heavy asynchronous generative streams on the server cluster.'
          ]
        },
        {
          name: 'English & Magic',
          title: '// Word-Based RPG Engine (React)',
          nodes: [
            'Dynamic Choice Engine: Engineered a state-driven narrative tree where user choices directly recalculate real-time player vitals (Strength, Power, Hunger).',
            'Gamified Vocabulary Pipeline: Integrated vocabulary assessment nodes seamlessly into core RPG mechanics to optimize language acquisition loops.'
          ]
        },
        {
          name: 'CodeQuest',
          title: '// Interactive Coding Sandbox (HTML/CSS/JS)',
          nodes: [
            'MCQ Knowledge Engine: Developed a high-performance, lightweight quiz evaluation layer via native Vanilla JS state tracking.',
            'Server-Bound Copilot: Integrated a real-time AI assistant channeling server-side DeepSeek endpoints to assist users dynamically.'
          ]
        },
        {
          name: 'Education Assistant',
          title: '// Material Generation Portal (React)',
          nodes: [
            'Prompt Synthesis Layer: Created an intuitive dashboard for educators to generate structured, curriculum-compliant study materials via context injection.',
            'Controlled Schema Generation: Enforced rigid prompt schemas ensuring system data writes pass baseline downstream parsing tests.'
          ]
        },
        {
          name: 'AI Navigator',
          title: '// Intelligent Assessment Node (HTML/CSS/JS)',
          nodes: [
            'Decoupled Chat Infrastructure: Engineered a lightweight UI connection layer to bridge client-side inputs with backend DeepSeek chat pipelines.',
            'Adaptive MCQ Workflows: Rendered reactive quiz modules that evaluate core knowledge markers with zero external library overhead.'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'AI Storyboard & Script Generator',
      subtitle: 'AI Integration Engineer',
      category: 'AI Engineering',
      description: 'An intelligence-driven content creation tool built with LLM API orchestration, advanced context engineering, custom character injection schemas, and reactive multi-turn AI chat interfaces.',
      keyAchievements: [
        'Context Engineering: Designed structured prompt injection schemas ensuring contextual memory across multi-turn narrative generations.',
        'JSON Schema Validation: Enforced predictable JSON outputs from generative endpoints to feed downstream asset pipelines without crashing.'
      ],
      techStack: ['OpenAI API', 'Prompt Engineering', 'JSON Schema', 'HTML5/CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/roadslayer0823/AI-Storyboard-Generator',
    },
    {
      id: 3,
      title: 'Project ALF: Systems Framework Prototype',
      subtitle: 'Core Systems Developer',
      category: 'Advanced UI/UX & Game Architecture',
      ndaCompliance: true,
      ndaNotice: '⚠️ NDA COMPLIANCE: Proprietary IP protected. Terminology abstracted.',
      description: 'An enterprise-standard gameplay systems framework architecture prototype. Implements decoupled event-driven UI layers, O(1) spatial state machines, vector gesture parsing, and memory-efficient circular data structures built with high-performance engineering patterns.',
      keyAchievements: [
        'Spatial State Architecture: Implemented O(1) state transitions (DistanceType) for real-time spatial relationship tracking.',
        'Reactive View Layers: Engineered event-driven UI binding using C# delegates and Actions to achieve loose coupling.',
        'Vector Gesture Parsing: Developed custom vector-based gesture recognition with non-rectangular polygon hit testing.',
        'Circular Buffer Animations: Built wheel-based UI mechanics utilizing modular arithmetic to prevent queue buildup and race conditions.',
        'Shader Optimization: Executed direct shader material manipulation (material.SetFloat) to bypass overhead for critical visual rendering.'
      ],
      techStack: ['Unity', 'C# 8.0+', 'State Machines', 'Observer Pattern', 'Vector Math', 'LeanTween'],
      githubUrl: 'https://github.com/roadslayer0823/Project-ALF-Game-Prototype',
    },
    {
      id: 4,
      title: 'SoulWave AI Voice Sandbox',
      subtitle: 'Interactive Systems & AI Engineer',
      category: 'AI Engineering',
      isMobile: true,
      description: 'A Unity-based core application architected to orchestrate GenAI Text-to-Speech (TTS) and advanced Voice Cloning capabilities via the ElevenLabs REST API. Features multi-source input data pipelines and real-time audio visualization rendering.',
      keyAchievements: [
        'AI API Orchestration: Constructed robust backend pipelines for seamless asynchronous TTS generation and high-fidelity Voice Cloning.',
        'Advanced Document Parsing: Implemented multi-source input pipelines utilizing the PdfPig library with a 5000-character safety boundary.',
        'Digital Signal Processing (DSP): Incorporated RhythmVisualizatorPro to handle frame-by-frame spectrum analysis for visual rendering.',
        'Audio Pipeline Optimization: Engineered automated native voice isolation and acoustic filtering subsystems to clean microphone uploads.'
      ],
      techStack: ['Unity', 'C# 8.0+', 'ElevenLabs API', 'PdfPig', 'DSP Spectrum', 'FFmpeg'],
      githubUrl: 'https://github.com/roadslayer0823/SoulWave-Demo',
    },
    {
      id: 5,
      title: 'Deterministic Trading Card Game Framework',
      subtitle: 'Gameplay Systems Developer',
      category: 'Advanced UI/UX & Game Architecture',
      description: 'A WebGL-compatible turn-based Trading Card Game framework built with an event-driven architecture, decoupled scriptable object databases, and dynamic elements reaction matrices. Features persistent cross-platform deck serialization.',
      keyAchievements: [
        'Event-Driven Engine: Engineered turn-based combat systems utilizing custom handlers to resolve complex drag-and-drop targeting states.',
        'Trigger-Based Effects: Designed a decoupled EffectFactory and TargetSelector pipeline that maps complex runtime multiplier combinations.',
        'Cross-Platform Serialization: Implemented JSON deck serialization via Newtonsoft.Json paired with standard browser IndexedDB persistence.'
      ],
      techStack: ['Unity', 'C# OOP', 'ScriptableObjects', 'Addressables Async', 'Newtonsoft.Json', 'WebGL Architecture'],
      githubUrl: 'https://github.com/roadslayer0823/Trading-Card-Game',
    },
    {
      id: 6,
      title: 'AI-Driven Smart Travel Planner',
      subtitle: 'Mobile Systems & API Engineer',
      category: 'Mobile Systems',
      isMobile: true,
      description: 'A high-performance Flutter mobile application engineered to modernize personal itinerary planning. Implements a decoupled Provider reactive pipeline to orchestrate multi-modal geospatial routing matrices and dynamic vector expense aggregations.',
      keyAchievements: [
        'Decoupled State Pipeline: Utilized Provider architecture to isolate heavy business logic, executing fine-grained Consumer re-rendering.',
        'Geospatial Routing Matrix: Engineered a real-time responsive mapping layer via Google Places, introducing gesture-driven node eviction.',
        'Financial Vector Engine: Bound expense states directly to an active fl_chart vector donut rendering engine for live updates.'
      ],
      techStack: ['Flutter', 'Dart', 'Provider', 'Google Places API', 'fl_chart', 'Asynchronous IO'],
      githubUrl: 'https://github.com/roadslayer0823/travel-planner-app',
    }
  ];

  const handleMouseEnter = (projectId, explicitVideoUrl) => {
    setHoveredProject(projectId);
    if (!explicitVideoUrl) return;

    const targetVideo = videoRefs.current[projectId];
    if (targetVideo) {
      if (targetVideo.src !== window.location.origin + explicitVideoUrl) {
        targetVideo.load();
      }
      targetVideo.play().catch(err => console.log('Main video sync skipped:', err));
    }

    const bgVideo = bgVideoRefs.current[projectId];
    if (bgVideo) {
      if (bgVideo.src !== window.location.origin + explicitVideoUrl) {
        bgVideo.load();
      }
      bgVideo.play().catch(err => console.log('Background video sync skipped:', err));
    }
  };

  const getMediaDetails = (project) => {
    const assets = projectAssets[project.id];
    if (!assets) return { thumbnail: '', videoUrl: null };
    
    if (project.isEcosystem) {
      return {
        thumbnail: assets.mediaTabs?.[activeEtiTab]?.thumbnail || '',
        videoUrl: assets.mediaTabs?.[activeEtiTab]?.video || null
      };
    }
    return {
      thumbnail: assets.thumbnail || '',
      videoUrl: assets.video || null
    };
  };

  return (
    <section id="projects" className="py-20 px-4 bg-[#070b13] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="px-2 md:px-4 relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            loopPreventsSlide={true}
            observer={true}
            observeParents={true}
            resizeObserver={true}
            noSwiping={true}
            noSwipingClass="swiper-no-swiping"
            touchStartPreventDefault={false}
            onInit={(swiper) => {
              swiperRef.current = swiper;
              setTimeout(() => {
                if (swiper && !swiper.destroyed) {
                  swiper.update();
                }
              }, 100);
            }}
            slidesPerView={1}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: -10,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: false, el: '.swiper-custom-pagination' }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 1.8, spaceBetween: 30 },
              1024: { slidesPerView: 2.5, spaceBetween: 40 },
              1400: { slidesPerView: 3, spaceBetween: 40 },
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              const activeProject = projects[realIndex];
              
              setActiveEtiTab(0);
              
              const currentMedia = getMediaDetails(activeProject);
              handleMouseEnter(activeProject.id, currentMedia.videoUrl);
            }}
            className="!pb-16 !px-4"
          >
            {projects.map((project, index) => {
              const currentMedia = getMediaDetails(project);
              
              return (
                <SwiperSlide key={`project-slide-${project.id}-${index}`} className="py-4">
                  <div 
                    className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full hover:border-cyan-400 transition-all duration-500 group project-card-glow"
                  >
                    {/* 1. TOP MEDIA BOX */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#0a0f1d] border-b border-slate-800/50">
                      {project.isMobile ? (
                        <>
                          <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 z-10 ${
                            hoveredProject === project.id && currentMedia.videoUrl ? 'opacity-0' : 'opacity-100'
                          }`}>
                            <img
                              src={currentMedia.thumbnail}
                              alt=""
                              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-125 pointer-events-none"
                            />
                            <img
                              src={currentMedia.thumbnail}
                              alt={`${project.title} responsive viewport`}
                              className="absolute inset-0 max-w-[32%] h-full object-contain mx-auto relative z-10"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          </div>

                          {currentMedia.videoUrl && (
                            <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                              hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                            }`}>
                              <video
                                ref={(el) => bgVideoRefs.current[project.id] = el}
                                src={currentMedia.videoUrl}
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-125"
                              />
                              <video
                                ref={(el) => videoRefs.current[project.id] = el}
                                src={currentMedia.videoUrl}
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 max-w-[32%] h-full object-contain mx-auto relative z-10"
                              />
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <img
                            src={currentMedia.thumbnail}
                            alt={`${project.title} viewport`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
                              hoveredProject === project.id && currentMedia.videoUrl ? 'opacity-0' : 'opacity-100'
                            }`}
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          
                          {currentMedia.videoUrl ? (
                            <video
                              ref={(el) => videoRefs.current[project.id] = el}
                              src={currentMedia.videoUrl}
                              muted
                              loop
                              playsInline
                              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                              }`}
                            />
                          ) : project.ndaCompliance ? (
                            <div 
                              className={`absolute inset-0 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-opacity duration-500 z-20 ${
                                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              <svg className="w-6 h-6 text-amber-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold">
                                Secure Framework
                              </span>
                              <span className="text-[9px] font-mono text-slate-400 text-center px-4 leading-normal">
                                Media playback restricted under non-disclosure agreement.
                              </span>
                            </div>
                          ) : null}
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none z-20" />
                    </div>

                    {/* 2. TAB MATRIX GRID */}
                    {project.isEcosystem && (
                      <div className="p-3 bg-slate-950/80 border-b border-slate-800/40 grid grid-cols-2 gap-2 relative z-30">
                        {project.mediaTabs.map((tab, idx) => {
                          const isMainHub = idx === 0;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setActiveEtiTab(idx);
                                if (swiperRef.current) {
                                  setTimeout(() => {
                                    swiperRef.current.update();
                                  }, 20);
                                }
                              }}
                              className={`swiper-no-swiping py-2 px-3 text-[11px] font-mono font-medium rounded-md border tracking-wide text-center transition-all duration-300 ${
                                isMainHub ? 'col-span-2' : 'col-span-1'
                              } ${
                                activeEtiTab === idx 
                                  ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/50 font-bold shadow-[0_0_12px_rgba(34,211,238,0.15)]' 
                                  : 'bg-slate-900/30 text-slate-400 border-slate-800/60 hover:text-slate-200 hover:bg-slate-900/80 hover:border-slate-700'
                              }`}
                            >
                              {tab.name}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* 3. CARD CONTENT DETAILS */}
                    <div className="flex-1 flex flex-col p-6 justify-between">
                      <div className="flex flex-col h-full justify-between flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-cyan-400 font-mono text-[11px] uppercase tracking-widest mt-1.5 mb-3">
                            {project.subtitle}
                          </p>

                          {project.ndaCompliance && (
                            <div className="mb-3 px-2.5 py-1.5 bg-amber-500/5 border border-amber-500/20 rounded-lg text-[10px] font-mono text-amber-400 leading-tight">
                              {project.ndaNotice}
                            </div>
                          )}

                          <p className="text-gray-400 text-xs leading-relaxed font-normal">
                            {project.description}
                          </p>
                        </div>

                        {/* 4. MICRO-SCROLL HOUSING */}
                        <div className="relative max-h-[310px] h-auto flex-grow border-t border-slate-800/40 pt-3 mt-auto overflow-hidden w-full">
                          <div 
                            className="max-h-[300px] h-auto overflow-y-auto pr-1 pb-4 space-y-4 custom-hide-scrollbar relative z-20"
                            onTouchStart={(e) => e.stopPropagation()}
                            onWheel={(e) => e.stopPropagation()} 
                          >
                            {project.isEcosystem ? (
                              <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 font-mono text-cyan-400/80">
                                  {project.mediaTabs[activeEtiTab].title}
                                </h4>
                                <ul className="space-y-2.5">
                                  {project.mediaTabs[activeEtiTab].nodes.map((nodeText, index) => (
                                    <li key={index} className="text-[11px] text-slate-300 flex items-start leading-relaxed">
                                      <span className="text-cyan-400 mr-2 mt-0.5 opacity-70">▪</span>
                                      <span>{nodeText}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <>
                                {project.submodules && (
                                  <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 font-mono">
                                      // System Architecture Nodes
                                    </h4>
                                    <ul className="space-y-2">
                                      {project.submodules.map((module, index) => (
                                        <li key={index} className="text-xs text-slate-300 flex items-start">
                                          <span className="text-cyan-400 mr-2 opacity-80">▹</span>
                                          <span className="font-sans leading-normal">{module}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {project.keyAchievements && (
                                  <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 font-mono">
                                      // Technical Implementations
                                    </h4>
                                    <ul className="space-y-2.5">
                                      {project.keyAchievements.map((achievement, index) => (
                                        <li key={index} className="text-[11px] text-slate-400 flex items-start leading-relaxed">
                                          <span className="text-cyan-400 mr-2 mt-0.5 opacity-70">▪</span>
                                          <span>{achievement}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-10"></div>
                        </div>
                      </div>

                      {/* 5. ANCHORED BOTTOM ACTIONS PANEL */}
                      <div className="pt-4 mt-4 border-t border-slate-800/60 relative z-10">
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1.5">
                            {project.techStack.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 bg-slate-950/60 border border-slate-800/80 rounded text-[10px] font-mono text-gray-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full text-center px-4 py-2 bg-slate-950 border border-slate-800 text-slate-400 rounded-lg text-xs font-mono font-medium hover:bg-slate-800 hover:border-slate-700 hover:text-gray-200 transition-all duration-300 relative z-20 pointer-events-auto"
                          >
                            Source Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Pagination Indicators Container */}
          <div className="swiper-custom-pagination flex justify-center gap-2 mt-4"></div>
        </div>
      </div>

      <style>{`
        .swiper-wrapper {
          display: flex !important;
          align-items: stretch !important;
        }
        .swiper-slide > div {
          width: 100%;
          height: 100% !important;
        }
        
        .custom-hide-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .custom-hide-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        
        .swiper-slide {
          height: auto !important;
          display: flex !important;
          flex-direction: column !important;
          opacity: 0.35;
          transform: scale(0.92);
          transition: all 0.5s ease;
          pointer-events: !important;
        }
        .swiper-slide-active,
        .swiper-slide-duplicate-active {
          opacity: 1 !important;
          transform: scale(1) !important;
          pointer-events: auto !important; /* Enable the main wrapper */
        }
        .swiper-slide-active a,
        .swiper-slide-active button,
        .swiper-slide-duplicate-active a,
        .swiper-slide-duplicate-active button {
          pointer-events: auto !important;
          cursor: pointer !important;
        }
        .swiper-slide-active .project-card-glow {
          border-color: rgba(34, 211, 238, 0.25);
          box-shadow: 0 20px 40px -15px rgba(7, 11, 19, 0.8), 0 10px 30px -10px rgba(34, 211, 238, 0.1);
        }
        
        .swiper-button-next, .swiper-button-prev {
          color: rgba(34, 211, 238, 0.5) !important;
          transform: scale(0.45);
          transition: color 0.3s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: rgba(34, 211, 238, 1) !important;
        }
        .swiper-pagination-bullet-active {
          background: #22d3ee !important;
          width: 16px !important;
          border-radius: 4px !important;
        }
        .swiper-pagination-bullet {
          background: #334155;
          transition: all 0.3s ease;
          pointer-events: none !important;
          cursor: default !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;