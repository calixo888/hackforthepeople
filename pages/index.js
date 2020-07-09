import Layout from '../components/Layout.js';
import React,{ useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from "styled-components"



const trackContent = {

  one : {
    title:"1",
    description: "one",
    resources:"1\n2\n3\n"


  },

  two : {
    title:"2",
    description: "two",
    resources:"1\n2\n3\n"
  },

  three : {
    title:"3",
    description: "three",
    resources:"1\n2\n3\n"
  },

  four: {
    title:"4",
    description: "four",
    resources:"1\n2\n3\n"

  }

}
 

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
  }
 
  function closeModalOne(){
    setIsOpenOne(false);
  }
  function closeModalTwo(){
    setIsOpenTwo(false);
  }
  function closeModalThree(){
    setIsOpenThree(false);
  }
  function closeModalFour(){
    setIsOpenFour(false);
  }

  return (
    <Layout>
        <ReactModal
          isOpen={modalOneIsOpen}
          onAfterOpen={afterOpenModal}
          
          onRequestClose={closeModalOne}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
          
        >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalOne} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px"}}>X</button>
         </div>
         <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         <h1 ref={_subtitle => (subtitle = _subtitle)}>{trackContent.one.title}</h1>
         <h2>{trackContent.one.description}</h2>
          <h3>{trackContent.one.resources}</h3>
          </div>
        </ReactModal>

        <ReactModal
          isOpen={modalTwoIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModalTwo}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
          
        >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalTwo} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px"}}>X</button>
         </div>
         <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         <h1 ref={_subtitle => (subtitle = _subtitle)}>{trackContent.two.title}</h1>
         <h2>{trackContent.two.description}</h2>
          <h3>{trackContent.two.resources}</h3>
          </div>
        </ReactModal>


        <ReactModal
          isOpen={modalThreeIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModalThree}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
          
        >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalThree} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px"}}>X</button>
         </div>
         <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         <h1 ref={_subtitle => (subtitle = _subtitle)}>{trackContent.three.title}</h1>
         <h2>{trackContent.three.description}</h2>
          <h3>{trackContent.three.resources}</h3>
          </div>
        </ReactModal>


       
        <ReactModal
          isOpen={modalFourIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModalFour}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
          
        >
        <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
          <button onClick={closeModalOne} style={{border:"none",background:"none",fontSize:"30px",fontWeight:200,color:"grey",marginTop:"-5px"}}>X</button>
         </div>
         <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         <h1 ref={_subtitle => (subtitle = _subtitle)}>{trackContent.four.title}</h1>
         <h2>{trackContent.four.description}</h2>
          <h3>{trackContent.four.resources}</h3>
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
                <button className="btn w-100 btn-outline-light" type="button">Button 1</button>
                <button className="btn w-100 btn-light" type="button">Button 2</button>
              </div>
            </div>
            <div className="image" style={{ height: "300px" }}></div>
          </div>
        </div>
      </header>

      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="image" style={{ height: "300px" }}></div>
            <div>
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tracks">
        <div className="container">
          <h1>Tracks</h1>
          <div className="track-grid">
            <div className="track">
              <img src="/img/illustrations/test.svg" onClick={openModalOne} style={{cursor:"pointer"}}/>
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track">
              <img src="/img/illustrations/test.svg"  onClick={openModalTwo} style={{cursor:"pointer"}} />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track">
              <img src="/img/illustrations/test.svg"  onClick={openModalThree} style={{cursor:"pointer"}} />
              <h3>Track</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
            <div className="track">
              <img src="/img/illustrations/test.svg"  onClick={openModalFour} style={{cursor:"pointer"}}/>
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
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
            <div className="partner">
              <h1>Partner</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsors">
        <div className="container">
        <h1>Sponsors</h1>
          <div className="sponsors-grid">
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
            <div className="sponsor">
              <h1>Sponsor</h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
