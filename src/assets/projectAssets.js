// Project Assets Configuration
// Maps project IDs to their corresponding video and thumbnail assets

const projectAssets = {
  1: {
    // ETI Enterprise EdTech Ecosystem
    mediaTabs: [
      {
        name: 'Main Hub',
        video: '/src/assets/video/eti-website-portal.mp4',
        thumbnail: '/src/assets/thumbnail/eti-website-portal.png'
      },
      {
        name: 'English & Magic',
        video: '/src/assets/video/eti-website-english-and-magic.mp4',
        thumbnail: 'src/assets/thumbnail/eti-website-english-and-magic.png'
      },
      {
        name: 'CodeQuest',
        video: '/src/assets/video/eti-website-codequest.mp4',
        thumbnail: 'src/assets/thumbnail/eti-website-codequest.png'
      },
      {
        name: 'Education Assistant',
        video: '/src/assets/video/eti-website-educational-assistant.mp4',
        thumbnail: 'src/assets/thumbnail/eti-website-educational-assistant.png'
      },
      {
        name: 'AI Navigator',
        video: '/src/assets/video/eti-website-ai-navigator.mp4',
        thumbnail: 'src/assets/thumbnail/eti-website-ai-navigator.png'
      }
    ]
  },
  2: {
    // AI Storyboard & Script Generator
    video: '/src/assets/video/ai-generator-website.mp4',
    thumbnail: 'src/assets/thumbnail/ai-storyboard-generator.png'
  },
  3: {
    // Project ALF: Systems Framework Prototype
    video: null, // NDA restricted
    thumbnail: '/src/assets/thumbnail/project-3.jpg'
  },
  4: {
    // SoulWave AI Voice Sandbox
    video: '/src/assets/video/soulwave-demo.mp4',
    thumbnail: 'src/assets/thumbnail/soulwave-demo.png'
  },
  5: {
    // Deterministic Trading Card Game Framework
    video: '/src/assets/video/trading-card-game.mp4',
    thumbnail: 'src/assets/thumbnail/trading-card-game.png'
  },
  6: {
    // AI-Driven Smart Travel Planner
    video: '/src/assets/video/travel-planner-app.mp4',
    thumbnail: 'src/assets/thumbnail/travel-planner-app.png'
  }
};

export default projectAssets;
