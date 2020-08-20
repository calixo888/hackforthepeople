import Layout from "../components/Layout.js";
import Head from "next/head";
import Header from "../components/Header.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactModal from "react-modal";
import Iframe from "react-iframe";

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

                  <Iframe
        url="https://airtable.com/embed/shrnufXqYwG9oBb9a?backgroundColor=pink&layout=card&viewControls=on"
        width="100%"
        height="533"
        frameBorder="0"
        className="airtable-embed"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      />
             
                </table>
              </TabPanel>
              <TabPanel>
                <table id="saturday">
                <Iframe
        url="https://airtable.com/embed/shrctLRr0kv9xlQUX?backgroundColor=pink&layout=card&viewControls=on"
        width="100%"
        height="533"
        frameBorder="0"
        className="airtable-embed"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      />
                </table>
              </TabPanel>
              <TabPanel>
                <table id="sunday">
                <Iframe
        url="https://airtable.com/embed/shriTHrYC6Zy4XufI?backgroundColor=pink&layout=card&viewControls=on"
        width="100%"
        height="533"
        frameBorder="0"
        className="airtable-embed"
        style={{ background: "transparent", border: "1px solid #ccc" }}
      />
                </table>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
                
    </Layout>
  );
};
