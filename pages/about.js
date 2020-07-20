import Layout from "../components/Layout.js";
import Header from "../components/Header.js";
import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - About</title>
        <meta
          name="description"
          content="Hack For The People is an intercollegiate hackathon designed to engage students in tackling some of the worlds largest problems."
        />
      </Head>

      <Header
        headerText="Meet the Team!"
        description="Meet the official team for Hack For The People!"
      />
      <section className="team">
        <div className="container">
          <div className="team-grid">
            <div className="member">
              <img src="/img/team/kevin.jpg" />
              <h5>Kevin Wang</h5>
              <p>Lead Director</p>
            </div>
            <div className="member">
              <img src="/img/team/default.jpg" />
              <h5>Naveena Dommaraju</h5>
              <p>Director of Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/maegan.jpeg" />
              <h5>Maegan Jong</h5>
              <p>Director of Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/default.jpg" />
              <h5>Stephanie Su</h5>
              <p>Director of Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/calix.jpeg" />
              <h5>Calix Huang</h5>
              <p>Director of Technology</p>
            </div>
          </div>

          <div className="team-grid coordinators">
            <div className="member">
              <img src="/img/team/kevini.jpg" />
              <h5>Kevin Yang</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/darren.jpg" />
              <h5>Darren Chang</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/Zeeshan.jpg" />
              <h5>Zeeshan Patel</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/default.jpg" />
              <h5>Akanksha Bhatia</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/yogya.jpg" />
              <h5>Yogya Kalra</h5>
              <p>Operations</p>
            </div>
            <div className="member">
              <img src="/img/team/default.jpg" />
              <h5>Bianca Chan</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/sophia.jpeg" />
              <h5>Sophia Risin</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/default.jpg" />
              <h5>Byeongjun Moon</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/saransh.jpg" />
              <h5>Saransh Maheshwari</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/default.jpg" />
              <h5>Brian Ross</h5>
              <p>Sponsorships</p>
            </div>
            <div className="member">
              <img src="/img/team/default.jpg" />
              <h5>David Wang</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/sara.png" />
              <h5>Sara Kohler</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/taylor.jpg" />
              <h5>Taylor Lee</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/mohit.jpg" />
              <h5>Mohit Patni</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/mohammed.jpg" />
              <h5>Mohammed Al-Asadi</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/trisha.jpg" />
              <h5>Trisha Agarwal</h5>
              <p>Outreach</p>
            </div>
            <div className="member">
              <img src="/img/team/michael.jpg" />
              <h5>Michael Wang</h5>
              <p>Technology</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
