import React from 'react'


function FirstScreen(props) {

    return(
        <div className="card first-screen">
            <h1>Trivia!</h1>
            <p>Ready to challenge yourself?</p>
            
                <h3>Number of Questions:</h3>
            <div id="radio-wrapper">
                <label htmlFor="select-5-questions"> 

                    <input type="radio" 
                    id="select-5-questions" 
                    name="numberOfQuestions" 
                    value='5'
                    onChange={props.handleNoOfQuestions}
                    checked={props.noOfQuestions === '5'}>
                    </input>5
                    
                    </label>
                <label htmlFor="select-10-questions"> 
                    
                    <input type="radio" 
                    id="select-10-questions" 
                    name="numberOfQuestions" 
                    value='10'
                    onChange={props.handleNoOfQuestions} 
                    checked={props.noOfQuestions === '10'}>
                        </input>10
                    </label>
            </div>

            <button className="main-btn start-btn"
            onClick={props.handleStartGame}>Start</button>
        </div>
    )


}

export default FirstScreen