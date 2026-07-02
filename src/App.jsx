import './App.css'

function App() {
  const links = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1CwFNCUVDo/?mibextid=wwXIfr',
      icon: 'fa-brands fa-facebook-f',
      color: '#1877F2',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bagify_o?utm_source=qr',
      icon: 'fa-brands fa-instagram',
      gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    },
  ]

  return (
    <div className="page-wrapper">
      {/* Animated background elements */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-glow bg-glow-3"></div>

      <main className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <div className="logo-ring">
            <img
              src="/logo.jpeg"
              alt="Bagify Logo"
              className="logo-img"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="brand-name">Bagify</h1>
        <p className="brand-subtitle">Follow us and stay connected</p>

        {/* Divider */}
        <div className="divider">
          <span className="divider-diamond"></span>
        </div>

        {/* Social Links */}
        <div className="links-container">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="link-icon-wrapper">
                <i className={link.icon}></i>
              </div>
              <span className="link-name">{link.name}</span>
              <i className="fa-solid fa-arrow-up-right-from-square link-arrow"></i>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Bagify. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
