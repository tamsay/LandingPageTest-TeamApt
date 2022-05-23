import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import calendarIcon from "./assets/icons/calendar-icon.svg"
import lightIcon from "./assets/icons/light.svg"
import caretIcon from "./assets/icons/caret-right.svg"
import instructionsIcon from "./assets/icons/instructions-icon.svg"
import coinPotImg from "./assets/images/coin pot.png"
import topStars from "./assets/images/top-stars.png"
import starsMobileView from "./assets/images/stars.png"
import leftCoin from "./assets/images/coin left.png"
import rightCoin from "./assets/images/coin right.png"
import sunBeam from "./assets/images/sun-beam.png"



function App() {

  return (
    <div className="App">

<div className="landingPageContainer flexCol">
      <div className="nav flexRow-space-between">
        <div className="logoDiv">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="dateSection flexRow">
          <div className="iconDiv">
            <img src={calendarIcon} className="calendarIcon" alt="calendarIcon" />
          </div>
          <div className="date flexCol">
            <p>Day 1</p>
            <small>of 5</small>
          </div>
        </div>
      </div>

      <div className="body flexCol">

        <div className="heading flexCol">
            <h1 className="title showMobile"><span>Unlock to </span><span>Power your dreams!</span></h1>
            <h1 className="title hideMobile"><span>Unlock to <br /> </span><span>Power your dreams!</span></h1>

            <p>Stand a chance to win <strong>N3,000,000</strong> everyday for the next 5 days </p>
        </div>

        <div className="instructionsDiv flexCol">
          <p className="title flexRow"><img src={instructionsIcon} alt="" /> How To Play</p>

          <ol>
            <li>Guess the right combination of numbers</li>
            <li>Win <strong>N3,000,000</strong> instantly</li>
          </ol>

          <p>Sounds unbelievable? Well, guess right & see for yourself!</p>

          <div className="hint flexRow">
            <span><img src={lightIcon} alt="light" /></span>
            <span>Think well before you guess. You have only <strong>2</strong> attempts per day and even after you wi, you can come back the next day to try for another jackpot!</span>
          </div>
        </div>

        <button className="flexRow">
          Play The Game
          <img src={caretIcon} alt="caret" />
        </button>
        </div>

        <div className="footer flexCol">

        <img className="leftCoin floating-image" src={leftCoin} alt="leftCoin" />
        <img className="mainImage" src={coinPotImg} alt="main image" />
        <img className="rightCoin floating-image" src={rightCoin} alt="rightCoin" />
        <img className="sunRays" src={sunBeam} alt="logo" />
        </div>
        </div>
    </div>
  )
}

export default App
