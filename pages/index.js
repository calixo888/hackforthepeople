import Layout from '../components/Layout.js';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header.js';
import React,{ useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export default () => {
  var subtitle;
  const [modalOneIsOpen,setIsOpenOne] = React.useState(false);
  const [modalTwoIsOpen,setIsOpenTwo] = React.useState(false);
  const [modalThreeIsOpen,setIsOpenThree] = React.useState(false);
  const [modalFourIsOpen,setIsOpenFour] = React.useState(false);
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
    subtitle.style.color = '#f00';
    document.body.style.transition = "all 500ms ease-in-out";
  }

  function closeModalOne(){
    setIsOpenOne(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalTwo(){
    setIsOpenTwo(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalThree(){
    setIsOpenThree(false);
    document.body.style.backgroundColor = "initial";
  }
  function closeModalFour(){
    setIsOpenFour(false);
    document.body.style.backgroundColor = "initial";
  }

  return (
    <Layout>
      <Head>
        <title>Hack For The People</title>
        <meta name="description" content="Check out Hack For The People, an inter-collegiate online hackathon powered by the Coronavirus Visualization Team!" />
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
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalOne} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px",marginLeft:"-5px"}}>&times;</button>
         </div>
         <div style={{padding: "50px"}}>
           <h1 ref={_subtitle => (subtitle = _subtitle)}>Track</h1>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalTwo} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px",marginLeft:"-5px"}}>&times;</button>
         </div>
         <div style={{padding: "50px"}}>
           <h1 ref={_subtitle => (subtitle = _subtitle)}>Track</h1>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalThree} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px",marginLeft:"-5px"}}>&times;</button>
         </div>
         <div style={{padding: "50px"}}>
           <h1 ref={_subtitle => (subtitle = _subtitle)}>Track</h1>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalFour} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px",marginLeft:"-5px"}}>&times;</button>
         </div>
         <div style={{padding: "50px"}}>
           <h1 ref={_subtitle => (subtitle = _subtitle)}>Track</h1>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
        </div>
        </ReactModal>


      <header>
        <div className="container">
          <div className="header-grid">
            <div>
              <h1>Hack For The People</h1>
              <h4 className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </h4>
              <div className="cta-buttons">

                <button className="btn w-100 btn-outline-light" type="button">
                  <Link href="/about">
                    <a className="nav-link">Learn More</a>
                  </Link>
                </button>
                <button className="btn w-100 btn-light" type="button">
                  <a className="btn w-100 btn-light" style={{ "align-items": "center" }} href="#" target="_blank">Register</a>
                </button>

              </div>
            </div>
            <div className="image" style={{ height: "300px" }}></div>
          </div>
        </div>
      </header>

      <Header headerText="About Hack For The People" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />

      <section className="tracks">
        <div className="container">
          <h1>Tracks</h1>
          <div className="track-grid">
            <div className="track"onClick={openModalOne} style={{cursor:"pointer"}}>
              <img src="/img/illustrations/test.svg" />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track" onClick={openModalTwo} style={{cursor:"pointer"}}>
              <img src="/img/illustrations/test.svg"   />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track" onClick={openModalThree} style={{cursor:"pointer"}}>
              <img src="/img/illustrations/test.svg"   />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track"  onClick={openModalFour} style={{cursor:"pointer"}}>
              <img src="/img/illustrations/test.svg" />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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
            Interested in sponsoring us? Check out our <a href="#" target="_blank">sponsorship prospectus</a>!
          </p>
        </div>
      </section>
    </Layout>
  )
}
