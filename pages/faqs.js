import Layout from '../components/Layout.js';
import Head from 'next/head';
import Header from '../components/Header.js';
import Accordion from '../components/Accordion.js';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - FAQs</title>
        <meta name="description" content="Here's a few frequently asked questions that we get quite often!" />
      </Head>

      <Header headerText="Frequently Asked Questions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

      <section className="faqs">
        <div className="container">
          <Accordion title="Question" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Accordion title="Question" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Accordion title="Question" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Accordion title="Question" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Accordion title="Question" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Accordion title="Question" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>
      </section>
    </Layout>
  )
}
