import Link from "next/link";

export default ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img
                style={{ width: "200px" }}
                src="/img/logos/hftp-horizontal.svg"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbar-target"
          >
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
                <a className="nav-link" href="#" target="_blank">
                  Register
                </a>
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
              <h1>Get in touch!</h1>
              <ul className="horizontal-links">
                <li>
                  <a href="https://www.facebook.com/joinCVT" target="_blank">
                    <img src="/img/icons/facebook.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/joincvt/" target="_blank">
                    <img src="/img/icons/instagram.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/joincvt" target="_blank">
                    <img src="/img/icons/twitter.svg" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/calixo888/hackforthepeople"
                    target="_blank"
                  >
                    <img src="/img/icons/github.svg" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/covid-visualization-team/"
                    target="_blank"
                  >
                    <img src="/img/icons/linkedin2.svg" />
                  </a>
                </li>
              </ul>
              <div className="email-input">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type something here"
                />
                <button type="button" className="p-0">
                  &rarr;
                </button>
              </div>
              <ul className="horizontal-links">
                <li>
                  <Link href="/071303-Hackathon-LegalDocs-Privacy-Policy.pdf">
                    <a target="_blank"> Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/071303-Hackathon-LegalDocs-Code-of-Conduct.pdf">
                    <a target="_blank">Code of Conduct</a>
                  </Link>
                </li>
              </ul>
            </div>
            <img
              className="mobile-disappear"
              src="/img/illustrations/footer.svg"
            />
          </div>
          <div>
            <small>&copy; 2020 Hack For The People.</small>
          </div>
        </div>
      </footer>
    </>
  );
};
