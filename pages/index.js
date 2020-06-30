import Layout from '../components/Layout.js';

export default () => {
  return (
    <Layout>
      <header>
        <div className="container">
          <div className="header-grid">
            <div>
              <h1>Hack For The People</h1>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </h4>
              <div className="cta-buttons">
                <button type="button">Button 1</button>
                <button type="button">Button 2</button>
              </div>
            </div>
            <div className="image" style={{ height: "300px" }}></div>
          </div>
        </div>
      </header>

      <section className="about">
        <div className="container">
          <h1>About</h1>
        </div>
      </section>

      <section className="tracks">
        <div className="container">
          <h1>Tracks</h1>
        </div>
      </section>

      <section className="partnerships">
        <div className="container">
          <h1>Partnerships</h1>
        </div>
      </section>

      <section className="sponsors">
        <div className="container">
          <h1>Sponsors</h1>
        </div>
      </section>
    </Layout>
  )
}
