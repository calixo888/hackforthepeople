import Layout from "../../components/Layout.js";
import Header from "../../components/Header.js";
import Head from "next/head";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - Privacy Policy</title>
      </Head>

      <Header
        headerText="Privacy Policy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <div className="container">
        <a
          href="/071303-Hackathon-LegalDocs-Privacy-Policy.pdf"
          target="_blank"
        >
          <h1>Privacy Policy</h1>
        </a>
      </div>
    </Layout>
  );
};
