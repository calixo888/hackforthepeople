import Layout from '../components/Layout.js';
import Header from '../components/Header.js';

export default () => {
  return (
    <Layout>
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
          <h2 className="text-center">Directors</h2>
          <div className="team-grid">
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
          </div>

          <h2 className="text-center mt-4">Coordinators</h2>
          <div className="team-grid">
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
            <div className="member">
              <img src="/img/team/test.jpg" />
              <h5>Name</h5>
              <p>Position</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
