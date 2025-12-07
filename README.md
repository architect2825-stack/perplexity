# Perplexity - AI Research Assistant

> A modern, full-stack web application for intelligent research and information synthesis with real-time search, source citations, and AI-powered insights.

## 🌟 Features

### Core Functionality
- **🔍 Intelligent Search** - Advanced search with real-time suggestions
- **📚 Source Citations** - Automatic source attribution and verification
- **🤖 AI Answer Synthesis** - Intelligent information aggregation and summarization
- **💾 Search History** - Track and revisit previous queries
- **🎨 Beautiful UI** - Responsive, modern design with dark/light mode
- **⚡ Real-time Updates** - Live search results and instant feedback

### Technical Features
- **TypeScript** - Type-safe codebase
- **React 18** - Modern component architecture
- **Tailwind CSS** - Utility-first styling
- **Express.js** - Robust backend API
- **Docker** - Container deployment ready
- **Testing** - Jest + React Testing Library
- **ESLint & Prettier** - Code quality standards

## 🏗️ Project Structure

```
perplexity/
├── client/                    # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── services/         # API client services
│   │   ├── context/          # React Context for state
│   │   ├── types/            # TypeScript type definitions
│   │   ├── utils/            # Utility functions
│   │   ├── styles/           # Global styles
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
│   ├── public/               # Static assets
│   ├── vite.config.ts        # Vite configuration
│   ├── tsconfig.json         # TypeScript config
│   ├── tailwind.config.js    # Tailwind config
│   ├── package.json
│   └── README.md
│
├── server/                   # Express.js backend
│   ├── src/
│   │   ├── routes/           # API route handlers
│   │   ├── controllers/      # Business logic
│   │   ├── middleware/       # Express middleware
│   │   ├── services/         # External service integrations
│   │   ├── types/            # TypeScript interfaces
│   │   ├── utils/            # Helper utilities
│   │   ├── config/           # Configuration files
│   │   └── index.ts          # Server entry point
│   ├── tests/                # Test files
│   ├── .env.example          # Environment variables template
│   ├── tsconfig.json         # TypeScript config
│   ├── package.json
│   └── README.md
│
├── docs/                     # Documentation
│   ├── API.md               # API documentation
│   ├── ARCHITECTURE.md      # Architecture overview
│   ├── DEPLOYMENT.md        # Deployment guide
│   └── CONTRIBUTING.md      # Contribution guidelines
│
├── docker/                   # Docker configurations
│   ├── Dockerfile           # Multi-stage build
│   └── docker-compose.yml   # Local development setup
│
├── .github/                  # GitHub specific files
│   ├── workflows/           # CI/CD pipelines
│   └── ISSUE_TEMPLATE/      # Issue templates
│
├── .gitignore
├── .env.example
├── package.json              # Root package.json
├── tsconfig.json             # Root TypeScript config
└── LICENSE
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/architect2825-stack/perplexity.git
cd perplexity
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..

# Install server dependencies
cd server && npm install && cd ..
```

3. **Configure environment variables**
```bash
# Server environment
cp server/.env.example server/.env

# Add your API keys and configuration
# SEARCH_API_KEY=your_key_here
# DATABASE_URL=your_database_url
```

4. **Start development servers**

```bash
# Terminal 1: Start backend
cd server
npm run dev

# Terminal 2: Start frontend
cd client
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:3000

### Using Docker

```bash
docker-compose up --build
```

## 📦 Available Scripts

### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run test     # Run tests
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

### Server
```bash
npm run dev      # Start development server with hot reload
npm run build    # Compile TypeScript
npm start        # Run production build
npm run test     # Run tests
npm run lint     # Run ESLint
```

## 🔌 API Endpoints

### Search
- `POST /api/search` - Perform a search query
- `GET /api/search/:id` - Get search result details
- `GET /api/search/history` - Get search history

### Sources
- `GET /api/sources/:id` - Get source information
- `POST /api/sources/verify` - Verify source credibility

### AI
- `POST /api/ai/synthesize` - Generate AI-powered summary
- `POST /api/ai/citations` - Generate citations for content

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## 📚 Documentation

- [API Documentation](./docs/API.md)
- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Contributing Guidelines](./docs/CONTRIBUTING.md)

## 🎨 UI Components

### Available Components
- SearchBar
- SearchResults
- ResultCard
- SourceCitation
- LoadingSpinner
- ErrorBoundary
- ThemeToggle
- NavigationBar

## 🔐 Security

- Environment variable protection
- Input validation and sanitization
- CORS configuration
- Rate limiting
- SQL injection prevention
- XSS protection

## 🚢 Deployment

### Heroku
```bash
heroku create your-app-name
git push heroku main
```

### Vercel (Frontend)
```bash
vercel --prod
```

### Docker
```bash
docker build -t perplexity .
docker run -p 3000:3000 -p 5173:5173 perplexity
```

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- API Response Time: < 500ms

## 🤝 Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📝 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

[architect2825-stack](https://github.com/architect2825-stack)

## 🙏 Acknowledgments

- Inspired by Perplexity AI
- Built with modern web technologies
- Community-driven development

---

**Made with ❤️ by the development community**
