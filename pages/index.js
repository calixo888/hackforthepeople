import Layout from "../components/Layout.js";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header.js";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Swiper from "react-id-swiper";

export default () => {
  var subtitle;

  const [modalOneIsOpen, setIsOpenOne] = React.useState(false);
  const [modalTwoIsOpen, setIsOpenTwo] = React.useState(false);
  const [modalThreeIsOpen, setIsOpenThree] = React.useState(false);
  const [modalFourIsOpen, setIsOpenFour] = React.useState(false);
  function openModalOne() {
    setIsOpenOne(true);
  }
  function openModalTwo() {
    setIsOpenTwo(true);
  }
  function openModalThree() {
    setIsOpenThree(true);
  }
  function openModalFour() {
    setIsOpenFour(true);
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
  function closeModalTwo() {
    setIsOpenTwo(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalThree() {
    setIsOpenThree(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalFour() {
    setIsOpenFour(false);
    document.body.style.backgroundColor = "initial";
  }

  const params = {
    slidesPerView: 5,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 50,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    loop: true,
    paginationClickable: true,
    direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Layout>
      <Head>
        <title>Hack For The People</title>
        <meta
          name="description"
          content="Check out Hack For The People, an inter-collegiate online hackathon powered by the Coronavirus Visualization Team!"
        />
      </Head>
      <ReactModal
        isOpen={modalOneIsOpen}
        onAfterOpen={afterOpenModal}
        closeTimeoutMS={500}
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
            src="/img/tracks/social.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />

          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Sociocultural</h1>
          <p>
            <strong>
              Help develop solutions aiming to bridge societal gaps regarding
              social and cultural issues.
            </strong>{" "}
            Such solutions range from developing a mobile application that
            easily allows users to look up police officer’s badge number and
            precinct, to a web application that calculates the likelihood of
            incarceration.
          </p>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalTwoIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalTwo}
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
            onClick={closeModalTwo}
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
            src="/img/tracks/economic.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Economic</h1>
          <p>
            <strong>
              Tackle both current and potential emerging issues related to our
              economy.{" "}
            </strong>
            Projects under this track should be centered to provide solutions to
            economic challenges that society is currently facing. Solutions that
            will better business, solve policy issues, and even household
            innovations that can alleviate the stress of COVID-19 are welcomed.
          </p>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalThreeIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalThree}
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
            onClick={closeModalThree}
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
            src="/img/tracks/political.svg"
            style={{ height: "30vh", paddingBottom: "2vh" }}
          />
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Political</h1>
          <p>
            <strong>
              {" "}
              Promote and empower civic engagement with a focus on current
              issues in policy.
            </strong>{" "}
            These projects include any sort of technology that enhances the
            addressing of public concerns, protecting public values, or
            optimizes the process for citizens to make a difference and get
            their voices and opinions heard.
          </p>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={modalFourIsOpen}
        closeTimeoutMS={500}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModalFour}
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
            onClick={closeModalFour}
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
            Projects under the Environmental track should aim to provide a
            platform to help our world. Whether through curbing climate change
            or delivering a sustainable and affordable alternative to current
            technologies, anything is possible!
          </p>
        </div>
      </ReactModal>

      <header>
        <div className="container">
          <div className="header-grid">
            <div>
              <h1>Hack For The People</h1>
              <h4 className="py-3">
                A hackathon for the people, by the people. With countless
                possibilities and issues to tackle, the sky's the limit.
              </h4>
              <div className="cta-buttons">
                <Link href="#tracks-section">
                  <a className="btn w-100 btn-outline-light">Learn More</a>
                </Link>
                <a
                  className="btn w-100 btn-light"
                  style={{ "align-items": "center" }}
                  href="https://hackforthepeople.devpost.com/"
                  target="_blank"
                >
                  Register
                </a>
              </div>
            </div>
            <img src="/img/illustrations/header.svg" />
          </div>
        </div>
      </header>

      <Header
        headerText="About Hack For The People"
        description="Hack For The People is an intercollegiate hackathon designed to engage students in tackling some of the world's largest problems. The event will take place from August 21st - 23rd. "
      />

      <section id="tracks-section" className="tracks">
        <div className="container">
          <h1>Tracks</h1>
          <div className="track-grid">
            <div
              className="track"
              onClick={openModalOne}
              style={{ cursor: "pointer" }}
            >
              <img
                className="mb-3 full-image"
                src="/img/tracks/social.svg"
                style={{ height: "55%" }}
              />
              <h3>Sociocultural</h3>
              <p>
                Help develop solutions aiming to bridge societal gaps regarding
                social and cultural issues. Such solutions range from developing
                a mobile application that easily allows users to look up police
                officer’s badge number and precinct, to a web application that
                calculates the likelihood of incarceration.
              </p>
            </div>
            <div
              className="track"
              onClick={openModalTwo}
              style={{ cursor: "pointer" }}
            >
              <img className="mb-3 half-image" src="/img/tracks/economic.svg" />
              <h3>Economic</h3>
              <p>
                Projects under this track should be centered to provide
                solutions to current economic challenges. Solutions that will
                better business, solve policy issues, and even household
                innovations that can alleviate the stress of COVID-19 are
                welcomed.
              </p>
            </div>
            <div
              className="track"
              onClick={openModalThree}
              style={{ cursor: "pointer" }}
            >
              <img
                className="mb-3 half-image"
                src="/img/tracks/political.svg"
              />
              <h3 style={{ margin: "-10px" }}>Political</h3>
              <p style={{ marginTop: "20px" }}>
                Promote and empower civic engagement with a focus on current
                issues in policy. These projects include any sort of technology
                that enhances the addressing of public concerns, protecting
                public values, or optimizes the process for citizens to make a
                difference and get their voices and opinions heard.
              </p>
            </div>
            <div
              className="track"
              onClick={openModalFour}
              style={{ cursor: "pointer" }}
            >
              <img
                className="mb-3 half-image"
                src="/img/tracks/environmental.svg"
              />
              <h3>Environmental</h3>
              <p>
                Focus on the intersection between technology and sustainability.
                Projects under the Environmental track should aim to provide a
                platform to help our world. Whether through curbing climate
                change or delivering a sustainable and affordable alternative to
                current technologies, anything is possible!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships">
        <div className="container">
          <h1>Partners</h1>
          <div className="partners-grid">
            <div className="partner p-5">
              <a href="https://hackplus.io/" target="_blank">
                <img src="/img/logos/partners/hackplus.png" />
              </a>
            </div>
            <div className="partner">
              <a href="https://www.understandcovid.org/" target="_blank">
                <img src="/img/logos/partners/cvt.png" />
              </a>
            </div>
            <div className="partner p-5">
              <a href="https://scholar.harvard.edu/panel" target="_blank">
                <img src="/img/logos/partners/panel-to-the-people.png" />
              </a>
            </div>
            <div className="partner">
              <a href="https://www.ted.com/tedx/events/24786" target="_blank">
                <img src="/img/logos/partners/tedxharvard.png" />
              </a>
            </div>
            <div className="partner">
              <a href="https://discord.com/" target="_blank">
                <img src="/img/logos/partners/discord.svg" />
              </a>
            </div>
            <div className="partner p-2">
              <a href="https://cloud.google.com/" target="_blank">
                <img src="/img/logos/partners/gcloud2.png" />
              </a>
            </div>
            <div className="partner p-5">
              <a href="https://bostonhacks.io/" target="_blank">
                <img src="/img/logos/partners/bostonhacks.png" />
              </a>
            </div>
            <div className="partner io p-5 large-partner">
              <a href="https://www.theiofoundation.org/" target="_blank">
                <img src="/img/logos/partners/io.png" />
              </a>
            </div>
            <div className="partner flik large-partner">
              <a href="https://www.weareflik.com/" target="_blank">
                <img src="/img/logos/partners/flik.jpg" />
              </a>
            </div>

            <div className="partner flik p-5">
              <a href="https://www.builtbygirls.com/" target="_blank">
                <img src="/img/logos/partners/bbg.png" />
              </a>
            </div>

            <div className="partner flik p-5">
              <a href="https://ngcproject.org/the-connectory" target="_blank">
                <img src="/img/logos/partners/ngc.png" />
              </a>
            </div>
            <div className="partner flik p-5">
              <a href="https://www.ncwit.org/" target="_blank">
                <img src="/img/logos/partners/ncwit.jpg" />
              </a>
            </div>

            <div className="partner flik p-1">
              <a href="https://hackasolution.org/" target="_blank">
                <img src="/img/logos/partners/hack-a-solution-logo.png" />
              </a>
            </div>
            <div className="partner flik p-1">
              <a href="https://girlsofsteelrobotics.com/" target="_blank">
                <img src="/img/logos/partners/gos.png" />
              </a>
            </div>

            <div className="partner flik p-1">
              <a href="https://techtogether.io/" target="_blank">
                <img src="/img/logos/partners/lockup_techtogether_color.png" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors">
        <div className="container">
          <h1>Sponsors</h1>

          <div className="sponsors-grid">
            <div className="sponsor p-4">
              <a href="https://www.voiceflow.com/" target="_blank">
                <img src="/img/logos/partners/voiceflow.png" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a href="https://www.wolframalpha.com/" target="_blank">
                <img src="/img/logos/partners/wolfram.png" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a href="https://www.bugsee.com/" target="_blank">
                <img src="/img/logos/partners/bugsee.png" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a
                href="https://bubble.io/?utm_source=hackathon&utm_medium=sponsor&utm_campaign=HackforthePeople"
                target="_blank"
              >
                <img src="/img/logos/partners/bubble.png" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a href="https://balsamiq.com/" target="_blank">
                <img src="/img/logos/partners/balsamiq.png" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a href="https://www.stickergiant.com/" target="_blank">
                <img src="/img/logos/partners/stickergiant.png" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a
                href="https://www.hyperxgaming.com/unitedstates/us"
                target="_blank"
              >
                <img src="/img/logos/partners/hyper.jpg" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a href="https://clickup.com/" target="_blank">
                <img src="/img/logos/partners/clickup.svg" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a href="https://www.interviewcake.com/" target="_blank">
                <img src="/img/logos/partners/cake.jpg" />
              </a>
            </div>
            <div className="sponsor p-5">
              <a href="https://www.echoar.xyz/" target="_blank">
                <img src="/img/logos/partners/echoar.png" />
              </a>
            </div>
            <div className="sponsor p-4 ">
              <a href="https://givemycertificate.com/" target="_blank">
                <img src="/img/logos/partners/gmc_logo.png" />
              </a>
            </div>
            <div className="sponsor p-4 ">
              <a href="https://www.riffanalytics.ai/" target="_blank">
                <img src="/img/logos/partners/riff.png" />
              </a>
            </div>
            <div className="sponsor p-4 ">
              <a href="https://www.tastytrade.com/tt/" target="_blank">
                <img src="/img/logos/partners/tasty.png" />
              </a>
            </div>
          </div>
          <p>
            Interested in sponsoring us? Check out our{" "}
            <a
              href="/071304-Hackathon-Sponsorship-Prospectus-Document.pdf"
              target="_blank"
            >
              sponsorship prospectus
            </a>
            !
          </p>
        </div>
      </section>

      {/*<section className="prizes">
        <div className="container">
          <h1>Prizes</h1>
          <Swiper {...params}>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 1</h3>
              <p>lorem</p>
            </div>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 2</h3>
              <p>lorem</p>
            </div>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 3</h3>
              <p>lorem</p>
            </div>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 4</h3>
              <p>lorem</p>
            </div>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 5</h3>
              <p>lorem</p>
            </div>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 6</h3>
              <p>lorem</p>
            </div>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 7</h3>
              <p>lorem</p>
            </div>
            <div className="card-swiper prize">
              <img className="img-swipe" src="/img/team/default.jpg" />
              <h3>Slide 8</h3>
              <p>lorem</p>
            </div>
          </Swiper>
        </div>
          </section>*/}
    </Layout>
  );
};
