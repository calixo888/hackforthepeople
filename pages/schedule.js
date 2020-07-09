import Layout from "../components/Layout.js";
import Header from "../components/Header.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default () => {
  return (
    <Layout>
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
                  display: "flex",
                  justifyContent: "space-around",
                  listStyle: "none",
                  paddingTop: "12px",
                }}
              >
                <Tab style={{ cursor: "pointer" }}>Friday</Tab>
                <Tab style={{ cursor: "pointer" }}>Saturday</Tab>
                <Tab style={{ cursor: "pointer" }}>Sunday</Tab>
              </TabList>

              <TabPanel>
                <table id="friday">
                  <tr>
                    <th>friday</th>
                    <th>Test</th>
                    <th>Test</th>
                    <th>Test</th>
                  </tr>
                  <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                  </tr>
                </table>
              </TabPanel>
              <TabPanel>
                <table id="saturday">
                  <tr>
                    <th>saturday</th>
                    <th>Test</th>
                    <th>Test</th>
                    <th>Test</th>
                  </tr>
                  <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                  </tr>
                </table>
              </TabPanel>
              <TabPanel>
                <table id="sunday">
                  <tr>
                    <th>sunday</th>
                    <th>Test</th>
                    <th>Test</th>
                    <th>Test</th>
                  </tr>
                  <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
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
