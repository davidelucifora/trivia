import React from 'react'
import {useState, useEffect} from 'react'


function FirstScreen(props) {

    

    return(
        <div className="card first-screen">
            <h1>Trivia!</h1>
            <p>Ready to challenge yourself?</p>
            <button className="main-btn start-btn"
            onClick={props.handleStartGame}>Start</button>
        </div>
    )


}

export default FirstScreen