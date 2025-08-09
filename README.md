# 🤖 N8N Chat Embed - AI Chatbot Integration

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![@n8n/chat](https://img.shields.io/badge/@n8n/chat-0.50.0-FF6D6B?logo=n8n)](https://www.npmjs.com/package/@n8n/chat)

A **fully customizable AI chatbot integration** for modern websites. Powered by the N8N Chat widget, built with React and Tailwind CSS as a comprehensive demo application.

## ✨ Features

### 🚀 **Core Features**

- **Easy Integration** - Embed with just a few lines of code
- **Fully Customizable** - Override all styles with CSS
- **Multi-Platform Support** - Works on web, mobile, and WhatsApp
- **Real-time AI** - Smart responses via N8N webhook integration
- **Multi-language Support** - Complete localization with i18n

### 🎨 **Design Features**

- **Modern Gradient Design** - Eye-catching visual effects
- **Dark/Light Mode** - Automatic theme support
- **Responsive Design** - Perfect display on all screen sizes
- **Smooth Animations** - Fluid transitions and animations
- **Custom CSS Override** - Completely customize chatbot styles

### 📱 **User Experience**

- **Welcome Screen** - Professional greeting with welcome screen
- **Typing Indicators** - Realistic typing indicators
- **Message History** - Chat history is preserved
- **Mobile Optimized** - Perfect experience on mobile devices

## 🛠️ Installation

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm/yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/AydinTheFirst/n8n-chat-widget.git
cd n8n-chat-widget

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### 🌐 Environment Setup

Create a `.env` file:

```env
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id/chat
```

## 🎯 Usage

### Simple Integration

```tsx
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import "./chat-styles.css"; // Your custom styles

// Initialize chat widget
createChat({
  mode: "window",
  showWelcomeScreen: true,
  defaultLanguage: "en",
  initialMessages: [
    "Hello! I'm your AI assistant. 👋",
    "How can I help you today?",
  ],
  i18n: {
    en: {
      title: "ChatAI Assistant 🤖",
      subtitle: "AI-powered customer support",
      inputPlaceholder: "Type your message here...",
      welcomeTitle: "Welcome to ChatAI! 🚀",
    },
  },
  webhookUrl: process.env.VITE_N8N_WEBHOOK_URL,
});
```

### 🎨 CSS Customization

```css
/* Override chat widget styles */
.n8n-chat .n8n-chat-launcher {
  background: linear-gradient(135deg, #4f46e5, #6366f1) !important;
  border-radius: 50% !important;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3) !important;
}

/* Customize message styles */
.n8n-chat .n8n-chat-message-user {
  background: var(--chat--color-primary) !important;
  color: white !important;
}
```

## 📦 Project Structure

```
n8n-embed/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   └── ui/            # Shadcn/ui components
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Main application
│   ├── chat-styles.css    # Chat widget custom styles
│   └── index.css          # Global styles
├── package.json
└── README.md
```

## 🚀 Build and Deploy

```bash
# Production build
pnpm build

# Preview build
pnpm preview

# Lint check
pnpm lint
```

Built files output to `dist/` folder and can be deployed to any static file hosting service.

## 🎨 Technologies

| Technology       | Version | Description              |
| ---------------- | ------- | ------------------------ |
| **React**        | 19.1.1  | Modern UI library        |
| **TypeScript**   | 5.6.3   | Type-safe JavaScript     |
| **Vite**         | 6.0.3   | Fast build tool          |
| **Tailwind CSS** | 4.1.11  | Utility-first CSS        |
| **@n8n/chat**    | 0.50.0  | Chat widget library      |
| **Lucide React** | 0.539.0 | Modern icons             |
| **Radix UI**     | Latest  | Accessible UI primitives |

## 🔧 N8N Webhook Setup

1. **Create or use existing N8N instance**
2. **Create Chat Webhook workflow**:
   ```json
   {
     "trigger": "webhook",
     "method": "POST",
     "path": "/chat",
     "response": {
       "message": "AI response here"
     }
   }
   ```
3. **Add webhook URL to `.env` file**

## 📱 Demo

Try these features in the demo:

- ✅ Live chat widget (bottom right corner)
- ✅ Different message types
- ✅ Mobile responsive design
- ✅ Dark/Light mode switching
- ✅ Custom CSS override examples

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**AydinTheFirst**

- 🌐 Website: [aydinthefirst.com](https://aydinthefirst.com)
- 📧 Email: hello@aydinthefirst.com
- 🐙 GitHub: [@AydinTheFirst](https://github.com/AydinTheFirst)

## 🙏 Acknowledgments

- [N8N](https://n8n.io) - Powerful automation platform
- [React](https://reactjs.org) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Vite](https://vitejs.dev) - Build tool

---

**⭐ If you like this project, please give it a star!**

---

> 📞 **Contact**: Feel free to open an [issue](https://github.com/AydinTheFirst/n8n-chat-widget/issues) for questions or contact me directly.
