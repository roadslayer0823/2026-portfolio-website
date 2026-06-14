// Project Assets Configuration
// Maps project IDs to their corresponding video and thumbnail assets

const projectAssets = {
  1: {
    // ETI Enterprise EdTech Ecosystem
    mediaTabs: [
      {
        name: 'Main Hub',
        video: '/video/eti-website-portal.mp4',
        thumbnail: '/thumbnail/eti-website-portal.png'
      },
      {
        name: 'English & Magic',
        video: '/video/eti-website-english-and-magic.mp4',
        thumbnail: '/thumbnail/eti-website-english-and-magic.png'
      },
      {
        name: 'CodeQuest',
        video: '/video/eti-website-codequest.mp4',
        thumbnail: '/thumbnail/eti-website-codequest.png'
      },
      {
        name: 'Education Assistant',
        video: '/video/eti-website-educational-assistant.mp4',
        thumbnail: '/thumbnail/eti-website-educational-assistant.png'
      },
      {
        name: 'AI Navigator',
        video: '/video/eti-website-ai-navigator.mp4',
        thumbnail: '/thumbnail/eti-website-ai-navigator.png'
      }
    ]
  },
  2: {
    // AI Storyboard & Script Generator
    video: '/video/ai-generator-website.mp4',
    thumbnail: '/thumbnail/ai-storyboard-generator.png'
  },
  3: {
    // Project ALF: Systems Framework Prototype
    video: null, // NDA restricted
    thumbnail: '/thumbnail/project-3.jpg'
  },
  4: {
    // SoulWave AI Voice Sandbox
    video: '/video/soulwave-demo.mp4',
    thumbnail: '/thumbnail/soulwave-demo.png'
  },
  5: {
    // Deterministic Trading Card Game Framework
    video: '/video/trading-card-game.mp4',
    thumbnail: '/thumbnail/trading-card-game.png'
  },
  6: {
    // AI-Driven Smart Travel Planner
    video: '/video/travel-planner-app.mp4',
    thumbnail: '/thumbnail/travel-planner-app.png'
  }
};

export default projectAssets;
