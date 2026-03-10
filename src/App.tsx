import { useState } from "react";
import "./App.css";
import profilFoto from "./assets/profil.jpeg";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import UIKit from "./pages/UIKit";

function App() {
  
  const [showUIKit, setShowUIKit] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const toggleDark = () => {
    
    document.documentElement.classList.toggle("dark");
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (formData.name.length < 2) {
      newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin.";
      valid = false;
    }
    if (formData.message.length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Mesajınız gönderildi!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50 rounded-br-lg"
      >
        Ana içeriğe atla
      </a>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      {/* ======== HEADER ======== */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Muhammet Çelebi — Kişisel Portföy
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {!showUIKit && (
                <>
                  <li>
                    <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Hakkımda
                    </a>
                  </li>
                  <li>
                    <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      Projeler
                    </a>
                  </li>
                  <li>
                    <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                      İletişim
                    </a>
                  </li>
                </>
              )}
              <li>
                <button
                  onClick={() => setShowUIKit((prev) => !prev)}
                  className="px-3 py-1 rounded-md font-medium transition-colors bg-blue-800 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  {showUIKit ? "← Portföy" : "UI Kit →"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ======== SAYFA İÇERİĞİ ======== */}
      {showUIKit ? (
        <UIKit />
      ) : (
        <main id="main-content">

          {/* ---- HAKKIMDA ---- */}
          <section id="hakkimda" className="py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              <figure className="shrink-0">
                <img
                  src={profilFoto}
                  alt="Muhammet Çelebi profil fotoğrafı"
                  className="w-40 h-40 rounded-full object-cover shadow-lg"
                />
                <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Muhammet Çelebi
                </figcaption>
              </figure>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                  Hakkımda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Yazılım mühendisliği öğrencisiyim. Web geliştirme ve erişilebilirlik
                  konularıyla ilgileniyorum.
                </p>
                <ul
                  className="flex flex-wrap gap-2 list-none p-0"
                  role="list"
                  aria-label="Beceri etiketleri"
                >
                  {["HTML5", "CSS3", "React"].map((skill) => (
                    <li
                      key={skill}
                      className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm dark:bg-blue-600"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ---- PROJELER ---- */}
          <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" title="QR Restoran Sistemi">
                  <p>QR kod ile sipariş ve ödeme sistemi.</p>
                  <ul className="flex flex-wrap gap-2 mt-3 list-none p-0">
                    {["JavaScript", "MongoDB"].map((t) => (
                      <li key={t} className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs">{t}</li>
                    ))}
                  </ul>
                </Card>
                <Card variant="elevated" title="SkinSafe Kozmetik Analiz">
                  <p>Kozmetik ürünleri ambalaj fotoğrafı ile analiz eden mobil uygulama.</p>
                  <ul className="flex flex-wrap gap-2 mt-3 list-none p-0">
                    {["React Native", "MongoDB", "Node.js"].map((t) => (
                      <li key={t} className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs">{t}</li>
                    ))}
                  </ul>
                </Card>
                <Card
                  variant="outlined"
                  title="Yeni Proje"
                  footer={<Button size="sm" variant="ghost">Detaylar →</Button>}
                >
                  <p>Yakında yeni bir proje eklenecek.</p>
                  <ul className="flex flex-wrap gap-2 mt-3 list-none p-0">
                    {["React", "TypeScript"].map((t) => (
                      <li key={t} className="bg-blue-800 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs">{t}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          {/* ---- İLETİŞİM ---- */}
          <section id="iletisim" className="py-16 px-4">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                İletişim
              </h2>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <fieldset className="border-0 p-0 m-0">
                  <legend className="sr-only">İletişim Formu</legend>
                  <div className="space-y-4">
                    <Input
                      id="name"
                      label="Ad Soyad"
                      type="text"
                      required
                      minLength={2}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      error={errors.name}
                      placeholder="Adınız ve soyadınız"
                    />
                    <Input
                      id="email"
                      label="E-posta"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      error={errors.email}
                      placeholder="ornek@mail.com"
                    />
                    <div className="space-y-1">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Mesaj
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        minLength={10}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 resize-none ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                        }`}
                        placeholder="Mesajınızı yazın..."
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="text-sm text-red-600 dark:text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <Button variant="primary" size="lg" type="submit" className="w-full">
                      Gönder
                    </Button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>

        </main>
      )}

      {/* ======== FOOTER ======== */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2025 Muhammet Çelebi. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
