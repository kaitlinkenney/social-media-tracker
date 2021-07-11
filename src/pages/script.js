import React, { useState, useEffect } from "react";
import "./script.css";
import { BiDownArrow } from 'react-icons/bi';
import { GiAlarmClock } from 'react-icons/gi';
import {SiInstagram, SiReddit, SiTiktok} from 'react-icons/si';
import {GrFacebook} from 'react-icons/gr';
import {FaTwitter} from 'react-icons/fa';
import Image from '../components/Image/image'
import logo from './nocomputers.jpg';



function Home() {
    const [timeGoal, setTimeGoal] = useState();
    const [currentTime, setCurrentTime] = useState()


    function openInsta() {
        let insta = window.open("http://www.instagram.com")
        // if (annoying == 0) {
        //     insta.close()
        // }
    }

    function openFb(){
        let fb = window.open('http://www.facebook.com')
    }

    function openTwitter (){
        let twitter = window.open('http://www.twitter.com')
    }

    function openReddit(){
        let reddit = window.open('http://www.reddit.com')
    }

    function openTikTok(){
        let tiktok = window.open("http://www.tiktok.com")
    }

    let startingMinutes = .05;
    let time = startingMinutes * 60;
    let hr = time / 60;

    const countdownEl = document.getElementById('countdown')
   let annoying
    let y = setInterval(myFunc, 1000);

    function myFunc() {
        let hours = Math.floor(hr / 60)
        let minutes = Math.floor(time / 60)
        let seconds = time % 60;
        annoying = hours + ":" + minutes + ":" + seconds
        // if (startingMinutes > 0) {
        time--
        // }
        // setCurrentTime(annoying)
        if (annoying == "0:0:0"){
            clearInterval(y)
        }
         console.log(annoying)
    }
// stop()
//     function stop (){
//         if (annoying=="0:0:0"){
//             clearInterval(y)
//              }
//     }



    //  myFunc()


    // console.log(timeGoal)


    return (
        <div>
            <style>{'body { background-color: black; }'}</style>
            <div className="row">
                <div className="col-sm-3">
                <img alt="comp" className="laptopimg" src={logo} />
                </div>
                <div className="col-lg-6">
                    <h1 className="ebgaramond"> Social Media Tracker </h1>
                    <label className="prompt" htmlFor="type" style={{color: "white"}}>How long will you spend on social media? </label>
                    <select id="type" className="form-control" value={timeGoal}
                        onChange={(event) =>
                            setTimeGoal(event.target.value)
                        }>
                        <option name="30" value='0'>Select</option>
                        <option name="30" value="0:30:0">30 minutes</option>
                        <option name="60" value="1:0:0">1 hour</option>
                        <option name="120" value="2:0:0">2 hours</option>
                    </select>



                    {/* <button
                        onClick={openInsta}>Instagram</button> */}
                           <a className="instagram link" onClick={openInsta}><SiInstagram style={{ height: 43, width: 35}} /></a>
                           <a className="fb link" onClick={openFb}><GrFacebook style={{ height: 43, width: 35}} /></a>
                           <a className="twitter link" onClick={openTwitter}><FaTwitter style={{ height: 43, width: 35}}/></a>
                           <a className="reddit link" onClick={openReddit}><SiReddit style={{ height: 43, width: 35}}/></a>
                           <a className="tiktok link" onClick={openTikTok}><SiTiktok style={{ height: 43, width: 35}}/></a>
                    
                </div>
                <div className="col-sm-3 clock mt-1">
                    <GiAlarmClock />
                    <div className="row">
                        <p className='timecaption'>Time:  {timeGoal? timeGoal : "0:0:0"}</p>
                        <p><button className="btn timerbtn btn-primary">Start timer</button></p>
                        </div>
                        <div className="row">
                        
                      
                    </div>
                </div>
            </div>


            {/* <a href="http://www.instagram.com">
        <button href="http://www.instagram.com" > Instagram </button>
        </a> */}

            {/* <a href="https://www.instagram.com" target="_blank"><button>Instagram</button></a> */}
            <p id="countdown" style={{color: "white"}}>just to see if working: {currentTime}</p>
        </div>
    )

}


export default Home;