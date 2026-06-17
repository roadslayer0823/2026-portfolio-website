// Project Assets Configuration
// Maps project IDs to their corresponding video and thumbnail assets
const baseUrl = import.meta.env.BASE_URL;

const projectAssets = {
  1: {
    // ETI Enterprise EdTech Ecosystem
    mediaTabs: [
      {
        name: 'Main Hub',
        video: `${baseUrl}video/eti-website-portal.mp4`, // 👈 去掉路径最前面的斜杠，改用拼接
        thumbnail: `${baseUrl}thumbnail/eti-website-portal.png`
      },
      {
        name: 'English & Magic',
        video: `${baseUrl}video/eti-website-english-and-magic.mp4`,
        thumbnail: `${baseUrl}thumbnail/eti-website-english-and-magic.png`
      },
      {
        name: 'CodeQuest',
        video: `${baseUrl}video/eti-website-codequest.mp4`,
        thumbnail: `${baseUrl}thumbnail/eti-website-codequest.png`
      },
      {
        name: 'Education Assistant',
        video: `${baseUrl}video/eti-website-educational-assistant.mp4`,
        thumbnail: `${baseUrl}thumbnail/eti-website-educational-assistant.png`
      },
      {
        name: 'AI Navigator',
        video: `${baseUrl}video/eti-website-ai-navigator.mp4`,
        thumbnail: `${baseUrl}thumbnail/eti-website-ai-navigator.png`
      }
    ]
  },
  2: {
    // AI Storyboard & Script Generator
    video: `${baseUrl}video/ai-generator-website.mp4`,
    thumbnail: `${baseUrl}thumbnail/ai-storyboard-generator.png`
  },
  3: {
    // Project ALF: Systems Framework Prototype
    video: null, // NDA restricted
    thumbnail: `${baseUrl}thumbnail/project3.png`
  },
  4: {
    // SoulWave AI Voice Sandbox
    video: `${baseUrl}video/soulwave-demo.mp4`,
    thumbnail: `${baseUrl}thumbnail/soulwave-demo.png`
  },
  5: {
    // Deterministic Trading Card Game Framework
    video: `${baseUrl}video/trading-card-game.mp4`,
    thumbnail: `${baseUrl}thumbnail/trading-card-game.png`
  },
  6: {
    // AI-Driven Smart Travel Planner
    video: `${baseUrl}video/travel-planner-app.mp4`,
    thumbnail: `${baseUrl}thumbnail/travel-planner-app.png`
  }
};

export default projectAssets;
