import React, { useState, useEffect } from "react";


function Home() {


    function openInsta() {
        let insta = window.open("http://www.instagram.com")
        // myFunction()
        // updateTime()
        // console.log(timer)
        // if (timer == 0) {
        //     insta.close()
        // }
    }

    //console.log("30")
    let timer = 105;

    // function updateTime(){
    //     while (timer > 0) {
    //         timer --;
    //     }
    //     console.log(timer)
    // }

    function updateTime() {
        while (timer > 0){
        timer--
     }
        
      }
      updateTime()

    //   function runFunction(callback, interval, repeat){
    //       let repeated = 0;
    //       const intervalTask = setInterval(doTask, interval)
    //     function doTask(){
    //         if (repeated < repeat){
    //             callback()
    //             repeated +=1
    //         } else {
    //            clearInterval(intervalTask)
    //         }
    //     }
    //   }

    //   runFunction(updateTime, 3000, 5)

      //var min;
    //   window.onload = function() {
    //     setInterval(function() {
           
    //         min = 60;
    //     min--;
        
    //       console.log(min)
          
    //     }, 1000);
    
    //   }

    //   function secondsLeft() {
    //     let now = new Date().getSeconds()
    //   }
    //   function init() {
    //     timer = setInterval(secondsLeft(), 1000);
    //   }
   
    //   init()
        // setInterval(updateTime, 3000)
    
    
   

    return (
        <div>
            <h1> hello</h1>
            <p>Time: {timer}</p>
            <button
                onClick={openInsta}>Instagram</button>
            {/* <a href="http://www.instagram.com">
        <button href="http://www.instagram.com" > Instagram </button>
        </a> */}

            {/* <a href="https://www.instagram.com" target="_blank"><button>Instagram</button></a> */}

        </div>
    )

}


export default Home;