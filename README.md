# Perplexity - AI Research Assistant MVP

A modern, full-stack web application that provides intelligent search results with cited sources, real-time synthesis, and a beautiful user interface.

## 🌟 Features

### Core Functionality
- **Intelligent Search** - Perform web searches with AI-powered result synthesis
- **Source Citations** - All answers include proper citations with source links
- **Search History** - Track and revisit previous searches
- **Answer Synthesis** - Structured, readable responses organized by topic
- **Real-time Updates** - Instant feedback during search operations

### User Experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Mode** - Automatic theme detection with manual override
- **Clean Interface** - Minimal, distraction-free design
- **Keyboard Navigation** - Full keyboard support for accessibility
- **Fast Performance** - Optimized for quick page loads

### Technical Features
- **TypeScript** - Full type safety throughout
- **Component Library** - Reusable, well-documented components
- **State Management** - Context API + custom hooks
- **Error Handling** - Comprehensive error boundaries and fallbacks
- **Testing** - Jest + React Testing Library test suite
- **Documentation** - Full API and component documentation

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment configuration
- **Axios** - HTTP requests

### Development
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

## 📦 Project Structure

```
perplexity/
├── client/                          # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBox.tsx
│   │   │   ├── ResultsContainer.tsx
│   │   │   ├── SourceCard.tsx
│   │   │   ├── SearchHistory.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── hooks/
│   │   │   ├── useSearch.ts
│   │   │   ├── useTheme.ts
│   │   │   └── useLocalStorage.ts
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── server/                          # Node.js backend
│   ├── src/
│   │   ├── routes/
│   │   │   └── search.ts
│   │   ├── controllers/
│   │   │   └── searchController.ts
│   │   ├── services/
│   │   │   └── searchService.ts
│   │   ├── middleware/
│   │   │   └── errorHandler.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── app.ts
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── server.ts
│
├── docs/                            # Documentation
│   ├── API.md
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   └── DEPLOYMENT.md
│
├── docker/
│   ├── Dockerfile.client
│   ├── Dockerfile.server
│   └── docker-compose.yml
│
├── .gitignore
├── .env.example
└── package.json                     # Root package.json for scripts

```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
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
# Create .env files
cp server/.env.example server/.env
```

4. **Start development servers**
```bash
# From root directory - starts both client and server
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Backend (runs on port 5000)
cd server && npm run dev

# Terminal 2 - Frontend (runs on port 5173)
cd client && npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

## 📚 Usage

1. **Enter a search query** in the search box
2. **View synthesized results** with organized information
3. **Access source citations** for fact verification
4. **Browse search history** to revisit previous queries
5. **Toggle theme** with the theme button (top-right)

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run linting
npm run lint

# Format code
npm run format
```

## 📖 Documentation

- **[API Documentation](./docs/API.md)** - Backend API endpoints and usage
- **[Setup Guide](./docs/SETUP.md)** - Detailed setup instructions
- **[Architecture](./docs/ARCHITECTURE.md)** - System design and data flow
- **[Deployment Guide](./docs/DEPLOYMENT.md)** - Production deployment steps

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

## 📝 API Endpoints

### Search Results
```
POST /api/search
Content-Type: application/json

{
  "query": "artificial intelligence trends 2025"
}

Response:
{
  "success": true,
  "data": {
    "query": "artificial intelligence trends 2025",
    "synthesis": "...",
    "sources": [...],
    "timestamp": "2025-12-07T04:04:00Z"
  }
}
```

## 🎨 Customization

### Colors & Branding
Edit `client/tailwind.config.js` to customize:
- Primary colors
- Font families
- Border radius
- Spacing scale

### API Configuration
Edit `server/.env` to configure:
- Port numbers
- Search API keys
- CORS settings
- Rate limiting

## 🔒 Security Features

- **CORS Protection** - Configured for safe cross-origin requests
- **Rate Limiting** - Prevents API abuse
- **Input Validation** - Sanitized queries
- **Error Boundaries** - Graceful error handling
- **Environment Variables** - Sensitive data not hardcoded

## 📊 Performance Optimizations

- **Code Splitting** - Dynamic imports for faster initial load
- **Image Optimization** - Lazy loading and responsive images
- **Caching Strategy** - Smart cache invalidation
- **Bundle Optimization** - Minified production builds
- **API Debouncing** - Reduced unnecessary requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support

For issues and questions:
- Open an [Issue](https://github.com/architect2825-stack/perplexity/issues)
- Check [Discussions](https://github.com/architect2825-stack/perplexity/discussions)
- Read the [Documentation](./docs)

## 🎯 Roadmap

### Phase 2
- [ ] User authentication and accounts
- [ ] Saved searches and collections
- [ ] Advanced filtering options
- [ ] Export results (PDF, JSON)
- [ ] API rate limits dashboard

### Phase 3
- [ ] AI-powered follow-up questions
- [ ] Batch search operations
- [ ] Custom search filters
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

## 👨‍💻 Author

**Architect Stack** - [GitHub Profile](https://github.com/architect2825-stack)

---

**Made with ❤️ and powered by innovation**
