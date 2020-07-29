import Layout from "../components/Layout.js";
import Head from "next/head";
import Header from "../components/Header.js";
import Accordion from "../components/Accordion.js";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Hack For The People - FAQs</title>
        <meta
          name="description"
          content="Here's a few frequently asked questions that we get quite often!"
        />
      </Head>

      <Header
        headerText="Frequently Asked Questions"
        description="Here are a few questions that we get pretty frequently that we decided to answer beforehand!"
      />

      <section className="faqs">
        <div className="container">
          <Accordion
            title="What is Hack for the People?"
            content="Hack For The People is an intercollegiate hackathon initiative designed to engage students in tackling some of the world’s largest problems like social/economic/political/environmental issues, which will be mentored by experts."
          />
          <Accordion
            title="Where will this be hosted?
            "
            content="This hackathon is entirely online, ensuring that you can participate from anywhere in the world as long as you have access to a computer with internet access."
          />
          <Accordion
            title="When will this take place?"
            content="August 21st-23rd."
          />
          <Accordion
            title="Who can participate?"
            content="Anyone in highschool and up can participate! There are no restrictions on experience or location."
          />
          <Accordion
            title="Are there prizes?"
            content="Yes, of course! Please check back closer to the date of the event for our finalized list of prizes."
          />
          <Accordion
            title="What’s the cost?"
            content="Nothing! Absolutely no fees and no hidden charges. 
            "
          />
          <Accordion
            title="How will this work?"
            content="The Coronavirus Visualization Community’s Intercollegiate Discord server will be used as a platform to host the hackathon event. Further details will be provided closer to the event, make sure to check back later!
            "
          />
        </div>
      </section>
    </Layout>
  );
};
