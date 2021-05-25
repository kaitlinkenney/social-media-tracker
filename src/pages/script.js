import React, { useState, useEffect } from "react";


function Home(){


    function openInsta(){
            window.open("http://www.instagram.com")
    }
return (
    <div>
        <h1> hello</h1>
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