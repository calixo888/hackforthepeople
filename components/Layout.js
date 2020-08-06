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
                <a
                  className="nav-link"
                  href="https://hackforthepeople.devpost.com/"
                  target="_blank"
                >
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
                  <a href="https://www.instagram.com/hack_for_the_people/" target="_blank">
                    <img src="/img/icons/instagram.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/joincvt" target="_blank">
                    <img src="/img/icons/twitter.svg" />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@hackforthepeople?_d=secCgsIARCbDRgBIAIoARI%2BCjy0BuWCD3gXX3v3nmKQ3nIRKaHud7VFpNYzD6wr9ALQ843oY9eL%2FeK0xyBrLqMP1Y6Rs2hImaI172dj0wcaAA%3D%3D&language=en&sec_uid=MS4wLjABAAAA3fsNI7KF9bc0rQSz3lJa_VAedrnYy5a47JWierIg48bGn7WvvXQEPcWFJAHn_xsi&share_author_id=6855715899383628805&tt_from=copy&u_code=ddj60eabei4858&user_id=6855715899383628805&utm_campaign=client_share&utm_medium=ios&utm_source=copy&source=h5_m" target="_blank">
                    <img src="/img/icons/tiktok.svg" />
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
                    href="https://www.linkedin.com/company/hack-for-the-people/"
                    target="_blank"
                  >
                    <img src="/img/icons/linkedin2.svg" />
                  </a>
                </li>
              </ul>

              <ul className="horizontal-links" style={{ paddingTop: "15px" }}>
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
