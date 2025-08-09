# 🤖 N8N Chat Embed - AI Chatbot Integration

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![@n8n/chat](https://img.shields.io/badge/@n8n/chat-0.50.0-FF6D6B?logo=n8n)](https://www.npmjs.com/package/@n8n/chat)

Modern web siteler için **tamamen özelleştirilebilir AI chatbot** entegrasyonu. N8N Chat widget'ı ile güçlendirilmiş, React ve Tailwind CSS ile geliştirilmiş kapsamlı bir demo uygulaması.

## ✨ Özellikler

### 🚀 **Temel Özellikler**

- **Kolay Entegrasyon** - Sadece birkaç satır kod ile entegre edin
- **Tamamen Özelleştirilebilir** - CSS ile tüm stilleri override edebilirsiniz
- **Çok Platform Desteği** - Web, mobil ve WhatsApp desteği
- **Gerçek Zamanlı AI** - N8N webhook entegrasyonu ile akıllı yanıtlar
- **Türkçe Dil Desteği** - Tam yerelleştirme ile Türkçe interface

### 🎨 **Tasarım Özellikleri**

- **Modern Gradient Tasarım** - Göz alıcı visual efektler
- **Dark/Light Mode** - Otomatik tema desteği
- **Responsive Design** - Tüm ekran boyutlarında mükemmel görünüm
- **Smooth Animations** - Akıcı geçişler ve animasyonlar
- **Custom CSS Override** - Chatbot stillerini tamamen özelleştirin

### 📱 **Kullanıcı Deneyimi**

- **Welcome Screen** - Karşılama ekranı ile profesyonel giriş
- **Typing Indicators** - Gerçekçi yazma göstergeleri
- **Message History** - Sohbet geçmişi saklanır
- **Mobile Optimized** - Mobil cihazlarda mükemmel deneyim

## 🛠️ Kurulum

### Ön Gereksinimler

- **Node.js** 18+
- **pnpm** (önerilen) veya npm/yarn

### Hızlı Başlangıç

```bash
# Projeyi klonlayın
git clone https://github.com/AydinTheFirst/n8n-embed.git
cd n8n-embed

# Bağımlılıkları yükleyin
pnpm install

# Geliştirme sunucusunu başlatın
pnpm dev
```

### 🌐 Environment Kurulumu

`.env` dosyası oluşturun:

```env
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id/chat
```

## 🎯 Kullanım

### Basit Entegrasyon

```tsx
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import "./chat-styles.css"; // Özel stilleriniz

// Chat widget'ını başlatın
createChat({
  mode: "window",
  showWelcomeScreen: true,
  defaultLanguage: "tr",
  initialMessages: [
    "Merhaba! Ben AI asistanınızım. 👋",
    "Size nasıl yardımcı olabilirim?",
  ],
  i18n: {
    tr: {
      title: "ChatAI Asistanı 🤖",
      subtitle: "AI destekli müşteri desteği",
      inputPlaceholder: "Mesajınızı buraya yazın...",
      welcomeTitle: "ChatAI'ya Hoş Geldiniz! 🚀",
    },
  },
  webhookUrl: process.env.VITE_N8N_WEBHOOK_URL,
});
```

### 🎨 CSS Özelleştirme

```css
/* Chat widget stillerini override edin */
.n8n-chat .n8n-chat-launcher {
  background: linear-gradient(135deg, #4f46e5, #6366f1) !important;
  border-radius: 50% !important;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3) !important;
}

/* Message stillerini özelleştirin */
.n8n-chat .n8n-chat-message-user {
  background: var(--chat--color-primary) !important;
  color: white !important;
}
```

## 📦 Proje Yapısı

```
n8n-embed/
├── public/                 # Statik dosyalar
├── src/
│   ├── components/         # React bileşenleri
│   │   └── ui/            # Shadcn/ui bileşenleri
│   ├── lib/               # Utility fonksiyonları
│   ├── App.tsx            # Ana uygulama
│   ├── chat-styles.css    # Chat widget özel stilleri
│   └── index.css          # Global stiller
├── package.json
└── README.md
```

## 🚀 Build ve Deploy

```bash
# Production build
pnpm build

# Build'i önizleme
pnpm preview

# Lint kontrolü
pnpm lint
```

Build edilen dosyalar `dist/` klasörüne çıkar ve herhangi bir statik dosya hosting servisine deploy edilebilir.

## 🎨 Teknolojiler

| Teknoloji        | Versiyon | Açıklama                 |
| ---------------- | -------- | ------------------------ |
| **React**        | 19.1.1   | Modern UI library        |
| **TypeScript**   | 5.6.3    | Type-safe JavaScript     |
| **Vite**         | 6.0.3    | Hızlı build tool         |
| **Tailwind CSS** | 4.1.11   | Utility-first CSS        |
| **@n8n/chat**    | 0.50.0   | Chat widget library      |
| **Lucide React** | 0.539.0  | Modern iconlar           |
| **Radix UI**     | Latest   | Accessible UI primitives |

## 🔧 N8N Webhook Kurulumu

1. **N8N Instance** oluşturun veya mevcut olanını kullanın
2. **Chat Webhook** workflow'u oluşturun:
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
3. **Webhook URL**'sini `.env` dosyasına ekleyin

## 📱 Demo

🌐 **Live Demo**: [https://n8n-embed-demo.vercel.app](https://github.com/AydinTheFirst/n8n-embed)

Demo'da şunları deneyebilirsiniz:

- ✅ Canlı chat widget (sağ alt köşe)
- ✅ Farklı mesaj türleri
- ✅ Mobile responsive tasarım
- ✅ Dark/Light mode geçişi
- ✅ Custom CSS override örnekleri

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**AydinTheFirst**

- 🌐 Website: [aydinthefirst.com](https://aydinthefirst.com)
- 📧 Email: aydin@aydinthefirst.com
- 🐙 GitHub: [@AydinTheFirst](https://github.com/AydinTheFirst)

## 🙏 Teşekkürler

- [N8N](https://n8n.io) - Güçlü automation platform
- [React](https://reactjs.org) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Vite](https://vitejs.dev) - Build tool

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

---

> 📞 **İletişim**: Sorularınız için [issue](https://github.com/AydinTheFirst/n8n-embed/issues) açabilir veya benimle direkt iletişime geçebilirsiniz.
