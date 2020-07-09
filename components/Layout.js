import Link from 'next/link';

export default ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Hack For The People</a>
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-target">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-target">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/schedule">
                  <a className="nav-link">Schedule</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/faqs">
                  <a className="nav-link">FAQs</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" target="_blank">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <h1>Hack For The People</h1>
              <ul className="horizontal-links">
                <li>
                  <a href="#" target="_blank">
                    <img src="/img/icons/facebook.svg" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="/img/icons/instagram.svg" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="/img/icons/twitter.svg" />
                  </a>
                </li>
              </ul>
              <div className="email-input">
                <input className="form-control" type="text" placeholder="Type something here" />
                <button type="button" className="p-0">&rarr;</button>
              </div>
              <ul className="horizontal-links">
                <li>
                  <Link href="/docs/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/docs/code-of-conduct">
                    <a>Code of Conduct</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="image" style={{ height: "300px" }}></div>
          </div>
          <div>
            <small>&copy; 2020 Hack For The People.</small>
          </div>
        </div>
      </footer>
    </>
  )
}
