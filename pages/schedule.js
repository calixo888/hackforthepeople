import Layout from "../components/Layout.js";
import Head from "next/head";
import Header from "../components/Header.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactModal from "react-modal";

export default (props) => {
  var subtitle;

  const [modalOneIsOpen, setIsOpenOne] = React.useState(false);
  const [displayedDesc, setDisplayedDesc] = React.useState("");

  function openModalOne(Desc) {
    console.log(Desc);
    setIsOpenOne(true);
    setDisplayedDesc(Desc);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#388CF7";
    document.body.style.transition = "all 500ms ease-in-out";
  }

  function closeModalOne() {
    setIsOpenOne(false);
    document.body.style.backgroundColor = "initial";
  }

  return (
    <Layout>
      <ReactModal
        isOpen={modalOneIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalOne}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={closeModalOne}
            style={{
              border: "none",
              background: "none",
              fontSize: "30px",
              fontWeight: 200,
              color: "grey",
              marginTop: "-5px",
              marginLeft: "-5px",
            }}
          >
            &times;
          </button>
        </div>
        <div style={{ padding: "50px" }}>
          <img
            src="/img/tracks/environmental.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Environmental</h1>
          <p>
            <strong>
              Focus on the intersection between technology and sustainability.
            </strong>
            {props.modaldesc}
          </p>
        </div>
      </ReactModal>

      <Head>
        <title>Hack For The People - Schedule</title>
        <meta
          name="description"
          content="The schedule for the inter-collegiate online hackathon Hack For The People"
        />
      </Head>

      <Header
        headerText="Virtual Schedule"
        description="We will release the official schedule for Hack For The People as the hackathon date approaches!"
      />

      <section className="schedule">
        <div className="container">
          <div className="body">
            <Tabs>
              <TabList
                style={{
                  display: "grid",
                  "grid-template-columns":
                    "repeat(auto-fill, minmax(300px, 1fr))",
                  listStyle: "none",
                  paddingLeft: "0",
                  marginBottom: "0",
                }}
              >
                <Tab
                  style={{
                    cursor: "pointer",
                    padding: "15px",
                    "text-align": "center",
                    "border-top-left-radius": "3px",
                    "border-top-right-radius": "3px",
                  }}
                >
                  Friday
                </Tab>
                <Tab
                  style={{
                    cursor: "pointer",
                    padding: "15px",
                    "text-align": "center",
                    "border-top-left-radius": "3px",
                    "border-top-right-radius": "3px",
                  }}
                >
                  Saturday
                </Tab>
                <Tab
                  style={{
                    cursor: "pointer",
                    padding: "15px",
                    "text-align": "center",
                    "border-top-left-radius": "3px",
                    "border-top-right-radius": "3px",
                  }}
                >
                  Sunday
                </Tab>
              </TabList>

              <TabPanel>
                <table id="friday">
                  <tr>
                    <th>Event</th>
                    <th>Time</th>
                    <th>Link</th>
                  </tr>
                  <tr>
                    <td>Opening Ceremonies</td>
                    <td>10:00 AM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>The IO Foundation</td>
                    <td>2:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>Boston Hacks</td>
                    <td>5:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>Google Tech Talk</td>
                    <td>7:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>Basic of Web-Dev (React)</td>
                    <td>8:00 PM</td>
                    <td>TBD</td>
                  </tr>
                </table>
              </TabPanel>
              <TabPanel>
                <table id="saturday">
                  <tr>
                    <th>Event</th>
                    <th>Time</th>
                    <th>Link</th>
                  </tr>
                  <tr>
                    <td>Math Panel</td>
                    <td>2:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>echoAR Workshop</td>
                    <td>4:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>CVT Panel</td>
                    <td>6:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>
                      Coffee, Chatbots, and AI: A Talk with Hobson Lane, CTO Of
                      Tangible AI
                    </td>
                    <td>8:00 PM</td>
                    <td>TBD</td>
                  </tr>
                </table>
              </TabPanel>
              <TabPanel>
                <table id="sunday">
                  <tr>
                    <th>Event</th>
                    <th>Time</th>
                    <th>Link</th>
                  </tr>
                  <tr>
                    <td>Hack Ends (Submissions end)</td>
                    <td>1:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>Closing Ceremonies</td>
                    <td>4:00 PM</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>Team Celebrate!</td>
                    <td>6:00 PM</td>
                    <td>TBD</td>
                  </tr>
                </table>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};
