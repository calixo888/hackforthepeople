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
    subtitle.style.color = "#f00";
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
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Track</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Track</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Track</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
          <h1 ref={(_subtitle) => (subtitle = _subtitle)}>Track</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </ReactModal>

      <header>
        <div className="container">
          <div className="header-grid">
            <div>
              <h1>Hack For The People</h1>
              <h4 className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h4>
              <div className="cta-buttons">
                <Link href="/about">
                  <a className="btn w-100 btn-outline-light">Learn More</a>
                </Link>
                <a
                  className="btn w-100 btn-light"
                  style={{ "align-items": "center" }}
                  href="#"
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      />

      <section className="tracks">
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
                src="/img/tracks/culture.svg"
                style={{ height: "167px" }}
              />
              <h3>Sociocultural</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
              <h3>Political</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships">
        <div className="container">
          <h1>Partnerships</h1>
          <div className="partners-grid">
            <div className="partner p-5">
              <img src="/img/logos/partners/hackplus.png" />
            </div>
            <div className="partner">
              <img src="/img/logos/partners/cvt.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors">
        <div className="container">
          <h1>Sponsors</h1>
          <p>
            Interested in sponsoring us? Check out our{" "}
            <a href="#" target="_blank">
              sponsorship prospectus
            </a>
            !
          </p>
        </div>
      </section>

      <section className="prizes">
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
      </section>
    </Layout>
  );
};
