import Layout from '../../components/Layout.js';
import Header from '../../components/Header.js';
import Head from 'next/head';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - Code of Conduct</title>
      </Head>

      <Header headerText="Code of Conduct" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

      <div className="container">
        <h1>Code of Conduct</h1>
      </div>
    </Layout>
  )
}
