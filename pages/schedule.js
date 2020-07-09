import Layout from "../components/Layout.js";
import Head from 'next/head';
import Header from "../components/Header.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - Schedule</title>
        <meta name="description" content="The schedule for the inter-collegiate online hackathon Hack For The People" />
      </Head>

      <Header
        headerText="Virtual Schedule"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <section className="schedule">
        <div className="container">
          <div className="body">
            <Tabs>
              <TabList
                style={{
                  display: "grid",
                  "grid-template-columns": "repeat(auto-fill, minmax(300px, 1fr))",
                  listStyle: "none",
                  paddingLeft: "0",
                  marginBottom: "0"
                }}
              >
                <Tab style={{ cursor: "pointer", "padding": "15px", "text-align": "center", "border-top-left-radius": "3px", "border-top-right-radius": "3px" }}>Friday</Tab>
                <Tab style={{ cursor: "pointer", "padding": "15px", "text-align": "center", "border-top-left-radius": "3px", "border-top-right-radius": "3px" }}>Saturday</Tab>
                <Tab style={{ cursor: "pointer", "padding": "15px", "text-align": "center", "border-top-left-radius": "3px", "border-top-right-radius": "3px" }}>Sunday</Tab>
              </TabList>

              <TabPanel>
                <table id="friday">
                  <tr>
                    <th>Event</th>
                    <th>Time</th>
                    <th>Link</th>
                  </tr>
                  <tr>
                    <td>Hackathon starts!</td>
                    <td>6:00pm EST</td>
                    <td>None</td>
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
                    <td>Game night!</td>
                    <td>10:00pm EST</td>
                    <td>None</td>
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
                    <td>Hackathon ends</td>
                    <td>3:00pm EST</td>
                    <td>None</td>
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
