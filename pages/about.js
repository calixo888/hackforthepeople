import Layout from '../components/Layout.js';
import Header from '../components/Header.js';
import Head from 'next/head';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - About</title>
        <meta name="description" content="About Hack For The People, an inter-collegiate online hackathon powered by the Coronavirus Visualization Team!" />
      </Head>

      <Header headerText="About Hack For The People" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

      <section className="goals">
        <div className="container">
          <div className="goals-header">
            <h1>Goals</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="goals-grid mt-5">
            <div className="goal">
              <img src="/img/team/test.jpg" />
              <h3>Goal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="goal">
              <img src="/img/team/test.jpg" />
              <h3>Goal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="goal">
              <img src="/img/team/test.jpg" />
              <h3>Goal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="goal">
              <img src="/img/team/test.jpg" />
              <h3>Goal</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Header headerText="Meet the Team!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <section className="team">
        <div className="container">
          <div className="team-grid">
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Kevin Wang</h5>
              <p>Lead Director</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Naveena Dommaraju</h5>
              <p>Director of Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Maegan Jong</h5>
              <p>Director of Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Stephanie Su</h5>
              <p>Director of Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Calix Huang</h5>
              <p>Director of Technology</p>
            </div>
          </div>

          <div className="team-grid coordinators">
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Kevin Yang</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Darren Chang</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Zeeshan Patel</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Akanksha Bhatia</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Yogya Kalra</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Bianca Chan</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Sophia Risin</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Byeongjun Moon</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Saransh Maheshwari</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Brian Ross</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>David Wang</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Sara Kohler</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Taylor Lee</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Mohit Patni</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Mohammed Al-Asadi</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Trisha Agarwal</h5>
              <p>Technology</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
