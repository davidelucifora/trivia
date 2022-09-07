import React from 'react'
import Question from './question'

function SecondScreen(props) {


    // Check answers when Button is clicked.
    function handleCheckAnswers(){

    }

    // List all questions and answers
    const listQuestions = props.allQuestions.map(question => {
        return <Question 
        key={question.id}
        question={question.question}
        correctAnswer={question.correctAnswer}
        incorrectAnswers={question.incorrectAnswers}
        />
    })

    return(
        <div>
            {listQuestions}
            <button id="check-answers-btn" onClick={handleCheckAnswers}>Check Answers</button>
        </div>
    )
}

export default SecondScreen