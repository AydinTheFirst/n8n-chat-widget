import { useEffect, useState } from "react";
import "@n8n/chat/style.css";
import "./chat-styles.css";
import { createChat } from "@n8n/chat";
import {
  Star,
  Zap,
  Shield,
  MessageSquare,
  Smartphone,
  Code,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isYearly, setIsYearly] = useState(false);

  // Initialize chat widget
  useEffect(() => {
    createChat({
      mode: "window",
      showWelcomeScreen: true,
      defaultLanguage: "en",
      initialMessages: [
        "Merhaba! Ben ChatAI asistanınızım. 👋",
        "Size nasıl yardımcı olabilirim?",
        "Aşağıdaki konularda yardım edebilirim:",
        "• 🔧 Ürün özellikleri ve entegrasyon",
        "• 💰 Fiyatlandırma ve planlar",
        "• 🚀 Teknik destek",
        "• ❓ Genel sorularınız",
      ],
      i18n: {
        en: {
          title: "ChatAI Asistanı 🤖",
          subtitle: "AI destekli müşteri desteği",
          closeButtonTooltip: "Sohbeti kapat",
          footer: "ChatAI tarafından desteklenmektedir",
          inputPlaceholder: "Mesajınızı buraya yazın...",
          getStarted: "Yeni konuşma başlat",
          welcomeTitle: "ChatAI'ya Hoş Geldiniz! 🚀",
          welcomeMessage:
            "Merhaba! Size nasıl yardımcı olabilirim? Herhangi bir sorunuz varsa çekinmeden sorun!",
        },
      },
      metadata: {
        source: "website",
        page: "landing",
        version: "1.0",
      },
      loadPreviousSession: true,
      enableStreaming: false,
      webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL,
    });
  }, []);

  // Smooth scroll animation on component mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      text: "The @n8n/chat integration was seamless. Our customer support efficiency increased by 300%!",
    },
    {
      name: "Mike Chen",
      role: "Product Manager, StartupXYZ",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      text: "Best chatbot solution we've tried. The customization options are incredible and setup took minutes.",
    },
    {
      name: "Emily Davis",
      role: "Marketing Director, WebCo",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      text: "Our lead generation improved by 250% after implementing the AI chatbot. Highly recommended!",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      title: "Kolay Entegrasyon",
      description:
        "@n8n/chat ile AI chatbotunuzu dakikalar içinde gömün. Karmaşık kurulum gerektirmez, sadece birkaç satır kod!",
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      title: "Tamamen Özelleştirilebilir",
      description:
        "Chatbotun görünümünü, davranışını ve yanıtlarını markanıza göre özelleştirin. Tema, renkler ve dil desteği dahil.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Çok Platform Desteği",
      description:
        "Web, mobil ve WhatsApp'ta sorunsuz çalışır. Müşterilerinize nerede olurlarsa olsunlar ulaşın.",
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Güvenli & Hızlı",
      description:
        "Kurumsal düzeyde güvenlik ve yıldırım hızında yanıtlar. Verileriniz her zaman korumalı ve güvende.",
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: { monthly: 29, yearly: 290 },
      features: [
        "Up to 1,000 messages/month",
        "Basic customization",
        "Email support",
        "Web integration",
        "Analytics dashboard",
      ],
    },
    {
      name: "Pro",
      price: { monthly: 89, yearly: 890 },
      features: [
        "Up to 10,000 messages/month",
        "Advanced customization",
        "Priority support",
        "Multi-platform (Web + WhatsApp)",
        "Advanced analytics",
        "Custom branding",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: { monthly: 299, yearly: 2990 },
      features: [
        "Unlimited messages",
        "Full customization",
        "24/7 dedicated support",
        "All platforms",
        "Advanced analytics + Reports",
        "White-label solution",
        "API access",
      ],
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">ChatAI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#demo"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Demo
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4">
              <nav className="flex flex-col space-y-4 px-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#demo"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Demo
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Contact
                </a>
                <Button className="bg-indigo-600 hover:bg-indigo-700 w-full">
                  Start Free Trial
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 fade-in-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI Asistanınız,{" "}
                <span className="text-indigo-600">Her Yerde.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                @n8n/chat ile akıllı chatbotunuzu dakikalar içinde web sitenize
                entegre edin. Müşteri etkileşimini artırın ve güçlü AI
                çözümümüzle desteği otomatikleştirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4"
                >
                  Şimdi Deneyin
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4"
                >
                  Demo İzleyin
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-12">
                <p className="text-sm text-gray-500 mb-4">
                  500+ şirket tarafından güvenilir
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    200+ değerlendirmeden 4.9/5 puan
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Widget Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="bg-indigo-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold">ChatAI Asistanı</p>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-sm text-indigo-200">Çevrimiçi</p>
                          </div>
                        </div>
                      </div>
                      <button className="text-white/70 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 h-72 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {/* Welcome message */}
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-md p-3 max-w-xs shadow-sm border">
                          <p className="text-sm text-gray-800">
                            Merhaba! Ben ChatAI asistanınızım. Size nasıl
                            yardımcı olabilirim? 🤖
                          </p>
                          <p className="text-xs text-gray-500 mt-1">14:32</p>
                        </div>
                      </div>

                      {/* User message */}
                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-indigo-600 text-white rounded-2xl rounded-tr-md p-3 max-w-xs shadow-sm">
                          <p className="text-sm">
                            Fiyatlandırma hakkında bilgi alabilir miyim?
                          </p>
                          <p className="text-xs text-indigo-200 mt-1">14:33</p>
                        </div>
                      </div>

                      {/* Bot response */}
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-md p-3 max-w-xs shadow-sm border">
                          <p className="text-sm text-gray-800">
                            Tabii ki! 3 farklı planımız var: Basic (29$/ay), Pro
                            (89$/ay) ve Enterprise (299$/ay). Hangi plan size
                            uygun olabilir? 💡
                          </p>
                          <p className="text-xs text-gray-500 mt-1">14:33</p>
                        </div>
                      </div>

                      {/* Quick replies */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        <button className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs hover:bg-indigo-200 transition-colors">
                          Basic Plan
                        </button>
                        <button className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs hover:bg-indigo-200 transition-colors">
                          Pro Plan
                        </button>
                        <button className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs hover:bg-indigo-200 transition-colors">
                          Demo İste
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="p-4 border-t border-gray-100 bg-white">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                        <p className="text-sm text-gray-500">
                          Mesajınızı yazın...
                        </p>
                      </div>
                      <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 lg:py-24 bg-gray-50 fade-in-section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neden @n8n/chat AI Chatbotu?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En son AI teknolojisi ile geliştirilmiş ve modern işletmeler için
              tasarlanmış. Günler değil, dakikalar içinde başlayın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 lg:py-24 fade-in-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI Asistanımızı Deneyin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              @n8n/chat ile güçlendirilmiş AI chatbotumuzun gücünü deneyimleyin.
              Sohbet simgesine tıklayarak konuşmaya başlayın!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Live Demo Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <MessageSquare className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Canlı Chat Demo
                  </h3>
                  <p className="text-gray-600 mb-6">
                    @n8n/chat widget'ı bu sayfada aktif! Sağ alt köşedeki sohbet
                    simgesine tıklayarak AI asistanımızla konuşmaya başlayın.
                  </p>
                  <div className="inline-flex items-center space-x-2 text-indigo-600 font-medium mb-4">
                    <span>Chat widget'ı çalışıyor</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4 text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Özelleştirmeler:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Tamamen özelleştirilmiş CSS override</li>
                      <li>✓ Modern gradient tasarım</li>
                      <li>✓ Türkçe dil desteği</li>
                      <li>✓ Responsive mobil uyumluluk</li>
                      <li>✓ Smooth animasyonlar</li>
                      <li>✓ Dark mode desteği</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Integration Code */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Entegrasyon Kodu
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    <code>{`import { createChat } from '@n8n/chat';
import '@n8n/chat/style.css';

// Widget'ı oluştur
createChat({
  mode: 'window',
  showWelcomeScreen: true,
  i18n: {
    tr: {
      title: 'ChatAI Asistanı',
      inputPlaceholder: 'Mesajınızı yazın...',
      welcomeMessage: 'Size nasıl yardımcı olabilirim?'
    }
  },
  webhookUrl: 'YOUR_N8N_WEBHOOK_URL'
});

/* CSS ile stilleri override edin */
.n8n-chat .n8n-chat-launcher {
  background: linear-gradient(135deg, #4F46E5, #6366F1) !important;
  border-radius: 50% !important;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3) !important;
}`}</code>
                  </pre>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  CSS ile tüm widget stillerini override edin ve markanıza uygun
                  hale getirin!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-16 lg:py-24 bg-gray-50 fade-in-section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that's right for your business. Start with our
              free trial.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span
                className={`text-sm font-medium ${
                  !isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  isYearly ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Yearly
                <span className="ml-1 text-xs text-green-600 font-bold">
                  (-20%)
                </span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular ? "ring-2 ring-indigo-600 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                    <span className="text-lg text-gray-500 font-normal">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 font-medium">
                      Save ${plan.price.monthly * 12 - plan.price.yearly}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  {plan.name === "Enterprise"
                    ? "Contact Sales"
                    : "Start Free Trial"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 fade-in-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their
              business with our AI chatbot.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 relative">
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-indigo-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-indigo-600 fade-in-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-8">
            Join thousands of businesses using our AI chatbot to improve
            customer experience and boost sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-4"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-8 h-8 text-indigo-400" />
                <span className="text-xl font-bold">ChatAI</span>
              </div>
              <p className="text-gray-400 mb-4">
                The most advanced AI chatbot solution for modern businesses.
                Powered by @n8n/chat.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 ChatAI. All rights reserved. Powered by @n8n/chat
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
