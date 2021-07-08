import React, { useState, useEffect } from "react";
import "./script.css";
import { BiDownArrow } from 'react-icons/bi';

function Home() {
    const [timeGoal, setTimeGoal] = useState();


    function openInsta() {
        let insta = window.open("http://www.instagram.com")
        // myFunction()
        // updateTime()
        // console.log(startingMinutes)
        // if (startingMinutes == 0) {
        //     insta.close()
        // }
    }

    let startingMinutes = 10;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById('countdown')
let annoying = "10:00"
    setInterval(myFunc, 1000);

    function myFunc() {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60;
        annoying = minutes + ":" + seconds
            // if (startingMinutes > 0) {
                time--
          // }
        console.log(annoying)  
    }

   

//  myFunc()


    console.log(timeGoal)


    return (
        <div>
            <h1> hello</h1>
            <div className="col">
                <label htmlFor="type">How long will you spend on social media? </label>
                <select id="type" className="form-control" value={timeGoal}
                    onChange={(event) =>
                        setTimeGoal(event.target.value)
                    }>
                    <option name="30" value='0'>Select</option>
                    <option name="30" value='30'>30 minutes</option>
                    <option name="60" value='60' >1 hour</option>
                    <option name="120" value='120'>2 hours</option>
                </select>
            </div>
            <p>Time: {timeGoal}</p>
            <button
                onClick={openInsta}>Instagram</button>
            {/* <a href="http://www.instagram.com">
        <button href="http://www.instagram.com" > Instagram </button>
        </a> */}

            {/* <a href="https://www.instagram.com" target="_blank"><button>Instagram</button></a> */}
            <p id="countdown">just to see if working: {annoying}</p>
        </div>
    )

}


export default Home;