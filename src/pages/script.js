import React, { useState, useEffect } from "react";
import "./script.css";
import { BiDownArrow } from 'react-icons/bi';
import { GiAlarmClock } from 'react-icons/gi';
import { SiInstagram, SiReddit, SiTiktok } from 'react-icons/si';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import Image from '../components/Image/image'
import logo from './nocomputers.jpg';




function Home() {
    const [timeGoal, setTimeGoal] = useState();
    const [currentTime, setCurrentTime] = React.useState("0:0:0")
    const [timer, setTimer] = React.useState("");
    const [timerOn, setTimerOn] = React.useState(false);
    const [timeUp, setTimeUp] = React.useState(false)


    var myWindow;
function openInsta() {
    myWindow = window.open("https://www.instagram.com", "_blank", "width=500, height=600");
    
    // myWindow.alert("hi?")
    // myWindow = function(){
    //     alert("time to go outside bro")
    // }
 //   window.alert("time to go outside bro")
  }



  React.useEffect(() => {
  if (timeUp == true){
     let newWindow = window.open("https://media.giphy.com/media/l2SpTIJLadonAqWkM/giphy.gif", "_blank", "width=1500, height=600")
  }
 
 }, )
  



// let insta = "http://www.instagram.com"

// function openInsta() {
//     window.open(insta)

// }
   
    // function openInsta(){
    //     let inst= window.open('http://www.instagram.com')
    // }
    function openFb() {
        myWindow = window.open("https://www.facebook.com", "_blank", "width=500, height=600");
    }

    function openTwitter() {
        myWindow = window.open("https://www.twitter.com", "_blank", "width=500, height=600");
    }

    function openReddit() {
        myWindow = window.open("https://www.reddit.com", "_blank", "width=500, height=600");
    }

    function openTikTok() {
        myWindow = window.open("https://www.tiktok.com", "_blank", "width=500, height=600");
    }


    let startingMinutes = timeGoal;
    console.log(timeGoal)
    let time = startingMinutes * 60;
    let hr = time / 60;

    React.useEffect(() => {
        let interval = null;

        if (timerOn) {

            interval = setInterval(() => {
                let hours;
                let minutes = Math.floor(time / 60)
                if (minutes == 60) {
                    hours = 1
                    minutes = 0

                } else if (minutes <= 30) {
                    hours = 0;

                } else if (minutes > 30 && minutes < 60) {
                    hours = 0;
                    minutes = 59;
                } else if (minutes == 120) {
                    hours = 2;
                    minutes = 0

                } else if (minutes > 60 && minutes < 120) {
                    hours = 1;
                    minutes = 59;
                } 
                let seconds = time % 60;
                setTimer((prevTime) => hours + ":" + minutes + ":" + seconds)
                time--;
            }, 1000);
           
        } 
        else if (!timerOn) {
            clearInterval(interval);
          }
      
          return () => clearInterval(interval);

   
    }, [timerOn]);

    React.useEffect(() => {
        if (timer == "0:0:0"){
            setTimerOn(false)
            setTimeUp(true)
            
        }
    })

    console.log(timeUp)


    return (
        <div>
            <style>{'body { background-color: black; }'}</style>
            <div className="row">
                <div className="col-sm-3">
                    <img alt="comp" className="laptopimg" src={logo} />
                </div>
                <div className="col-lg-6">
                    <h1 className="ebgaramond"> Social Media Tracker </h1>
                    <label className="prompt" htmlFor="type" style={{ color: "white" }}>How long will you spend on social media? </label>
                    <select id="type" className="form-control" value={timeGoal}
                        onChange={(event) =>
                            setTimeGoal(event.target.value)
                        }>
                        <option name="30" value='0'>Select</option>
                        <option name="30" value='.05'>few secs</option>
                        <option name="30" value="30">30 minutes</option>
                        <option name="60" value="60">1 hour</option>
                        <option name="120" value="120">2 hours</option>
                    </select>



                    {/* <button
                        onClick={openInsta}>Instagram</button> */}
                    <a className="instagram link" onClick={openInsta} ><SiInstagram style={{ height: 43, width: 35 }} /></a>
                    <a className="fb link" onClick={openFb}><GrFacebook style={{ height: 43, width: 35 }} /></a>
                    <a className="twitter link" onClick={openTwitter}><FaTwitter style={{ height: 43, width: 35 }} /></a>
                    <a className="reddit link" onClick={openReddit}><SiReddit style={{ height: 43, width: 35 }} /></a>
                    <a className="tiktok link" onClick={openTikTok}><SiTiktok style={{ height: 43, width: 35 }} /></a>

                </div>
                <div className="col-sm-3 clock mt-1">
                    <GiAlarmClock />
                    <div className="row">
                        <p className='timecaption'>Time:  {timer ? timer : "0:0:0"}</p>
                        <p><button className="btn timerbtn btn-primary"
                            onClick={
                                () => setTimerOn(true)}
                        >Start timer</button></p>
                    </div>
                    <div className="row">
                    {/* <button 
                  
                    onClick={closeWin}>"Close the new window"</button> */}

                    </div>
                </div>
            </div>
        </div>
    )

}


export default Home;