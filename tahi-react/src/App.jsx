import logo from './assets/logo.png'
import placeholder from './assets/placeholder.jpeg'

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-group">
          <a href="#">
            <img src={logo} alt="Tahi Logo" className="logo-img" />
          </a>
          <span className="tagline">The Artisanal House of Indulgence</span>
        </div>

        <nav>
          <a href="#products">Menu</a>
          <a href="#story">Our Story</a>
          <a href="#order">Order</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* DISCLAIMER */}
      <div className="disclaimer-bar">
        <marquee scrollAmount="6">
          100% Vegetarian • Customizable on Order • Handmade in Small Batches • Preservative Free
        </marquee>
      </div>

      {/* HERO */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* STORY */}
      <section id="story">
        <h2 className="section-title">Our Story</h2>
        <p className="story-text">
          Baking has been my passion since childhood, I've always been everyone's
          3:00 am baker. After training at the School of European Pastry, Mumbai,
          and receiving the Best Student Award, I began creating artisanal delights
          inspired by my children Tanisha and Hitansh.
          <br /><br />
          At TAHI, we craft premium handmade treats using refined techniques,
          honest ingredients, and a passion for detail.
        </p>
      </section>

      {/* PRODUCTS */}
      <section id="products">
        <h2 className="section-title">Our Menu</h2>

        <h3 className="sub-title">Entremets & Cakes</h3>
        <div className="product-scroll">
          <div className="grid">
            <img src={placeholder} />
            <h3>Raspberry Velvet Entremet</h3>
            <p>Silky vanilla mousse with raspberry confit and almond sponge.</p>
          </div>

          <div className="grid">
            <img src={placeholder} />
            <h3>Dark Truffle Cake</h3>
            <p>Rich 70% chocolate ganache layered with soft sponge.</p>
          </div>
        </div>

        <h3 className="sub-title spaced">Cookies & Bars</h3>
        <div className="product-scroll">
          <div className="grid">
            <img src={placeholder} />
            <h3>Brown Butter Chocolate Chunk</h3>
            <p>Soft-baked cookie with nutty brown butter and couverture chocolate.</p>
          </div>

          <div className="grid">
            <img src={placeholder} />
            <h3>Hazelnut Praline Bar</h3>
            <p>Crispy wafer, hazelnut praline and creamy chocolate.</p>
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order">
        <h2 className="section-title">Order Now</h2>
        <p className="center-text">
          Ordering is currently done through WhatsApp and Instagram.
        </p>

        <div className="order-buttons">
          <a href="https://wa.me/9819811885" target="_blank">Order with WhatsApp</a>
          <a href="https://instagram.com/tahi.india" target="_blank">Order with Instagram</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Tahi · All Rights Reserved</p>
        <a href="https://instagram.com/tahi.india" className="insta-btn">
          <i className='bx bxl-instagram'></i>
        </a>
      </footer>
    </>
  )
}

export default App
