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
                <Link href="/resources">
                  <a className="nav-link">Resources</a>
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
                <Link href="/register">
                  <a className="nav-link">Register</a>
                </Link>
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
              <h1>Footer</h1>
              <ul className="horizontal-links">
                <li><a href="#" target="_blank">Facebook</a></li>
                <li><a href="#" target="_blank">Instagram</a></li>
                <li><a href="#" target="_blank">Twitter</a></li>
              </ul>
              <div className="email-input">
                <input className="form-control" type="text" placeholder="Type something here" />
                <button type="button">&rarr;</button>
              </div>
              <ul className="horizontal-links">
                <li><a href="#" target="_blank">Item 1</a></li>
                <li><a href="#" target="_blank">Item 2</a></li>
                <li><a href="#" target="_blank">Item 3</a></li>
                <li><a href="#" target="_blank">Item 4</a></li>
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
