import "./App.css";
import profilFoto from "./assets/profil.jpeg";
function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Header */}
      <header>
        <h1>Muhammet Çelebi - Kişisel Portföy</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Main */}
      <main id="main-content">

        {/* Hakkımda */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
            src={profilFoto}
            alt="Muhammet Çelebi profil fotoğrafı"
            className="profil-foto"
          />
            <figcaption>Muhammet Çelebi</figcaption>
          </figure>

          <p>
            Yazılım mühendisliği öğrencisiyim. Web geliştirme ve erişilebilirlik konularıyla ilgileniyorum.
          </p>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
          </ul>
        </section>

        {/* Projeler */}
        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>QR Restoran Sistemi</h3>
            <p>QR kod ile sipariş ve ödeme sistemi.</p>
          </article>

          <article>
            <h3>SkinSafe Kozmetik Ürün Analiz Uygulaması</h3>
            <p>React Native ile geliştirililmiş, kozmetik ürünleri ve kişisel bakım ürünlerini ambalaj veya içerikler fotoğrafı ile analiz eden bir mobil uygulama.</p>
          </article>
        </section>

        {/* İletişim */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Muhammet Çelebi. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App