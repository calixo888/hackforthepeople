import Layout from '../components/Layout.js';
import Header from '../components/Header.js';

export default () => {
  return (
    <Layout>
      <header>
        <div className="container">
          <div className="header-grid">
            <div>
              <h1>Hack For The People</h1>
              <h4 className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </h4>
              <div className="cta-buttons">
                <button className="btn w-100 btn-outline-light" type="button">Button 1</button>
                <button className="btn w-100 btn-light" type="button">Button 2</button>
              </div>
            </div>
            <div className="image" style={{ height: "300px" }}></div>
          </div>
        </div>
      </header>

      <Header headerText="About Hack For The People" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />

      <section className="tracks">
        <div className="container">
          <h1>Tracks</h1>
          <div className="track-grid">
            <div className="track">
              <img src="/img/illustrations/test.svg" />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track">
              <img src="/img/illustrations/test.svg" />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track">
              <img src="/img/illustrations/test.svg" />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track">
              <img src="/img/illustrations/test.svg" />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships">
        <div className="container">
          <h1>Partnerships</h1>
          <div className="partners-grid">
            <div className="partner p-5">
              <img src="/img/logos/hackplus.png" />
            </div>
            <div className="partner">
              <img src="/img/logos/cvt.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors">
        <div className="container">
          <h1>Sponsors</h1>
          <p>
            Interested in sponsoring us? Check out our <a href="#" target="_blank">sponsorship prospectus</a>!
          </p>
        </div>
      </section>
    </Layout>
  )
}
