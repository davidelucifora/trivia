import React from 'react'
import { useState } from 'react'
import helpers from './../helpers'

function SecondScreen(props) {

    const [isGameStarted, setIsGameStarted] = useState(props.isGameStarted)

    /* Reorganise Questions */

    const [allQuestions, setAllQuestions] = useState(
        props.allQuestions.map(question => {
            return {
                id:question.id,
                text:question.question,
                answers: helpers.shuffleArray([
                   ...question.incorrectAnswers.map(answer => {
                        return {
                            id:helpers.uid(),
                            text:answer,
                            isCorrect:false,
                            isSelected:false,
                            questionID:question.id
                        }
                    })
                ,
                {
                    id:helpers.uid(),
                    text:question.correctAnswer,
                    isCorrect:true,
                    isSelected:false,
                    questionID:question.id
                }
                ])
            }
         
        }))
        
/* Reusable Answer component */
    function Answer(props) {


        return (
            <button
            onClick={props.handleSelected}
            className={`answer-btn ${props.style} ${props.isSelected && 'selected'}`}>{props.text}</button>
        )

    }
    
        /* Reusable question component */

    function Question(props) {



        /** List all answer buttons */
        const listAllAnswers = props.answers.map(answer => {
            return (
                <Answer 
                key={answer.id}
                text={answer.text}
                isCorrect={answer.isCorrect}
                isSelected={answer.isSelected}
                style={answer.style}
                handleSelected={() => handleSelected(answer.id, answer.questionID)}/>
                )
            })
            
            /** Handles when answer is selected */
            function handleSelected(id, questionID){

                setAllQuestions((prevQuestions) => 

                prevQuestions.map(question => {
                    if (question.id === questionID){
                        return {
                            ...question,
                            answers:question.answers.map(answer => {
                                return {
                                    ...answer,
                                    isSelected : answer.id === id ? !answer.isSelected : false
                                }
                            })
                        }
                    }
                    else return {...question}
                }
            )
                )}

            /** Render Question Component */
        return (
        <div className="questionDiv">
            <h2>{props.text}</h2>
            <div className="answer-wrapper">
                {listAllAnswers}
            </div>
        </div>)


    }


    /** List all Questions  */

    const listAllQuestions = allQuestions.map(question => {
        return (
            <Question 
            key={question.id}
            text={question.text}
            answers={question.answers}

            />
        )
    })

function handleCheckAnswers() {

    setIsGameStarted(!isGameStarted)

    setAllQuestions((prevQuestions) => 
    prevQuestions.map(question => {
        return {
            ...question,
            answers: question.answers.map(answer => {
                if (answer.isCorrect) {
                    return {
                    ...answer,
                    style:'isCorrect'
                }
            } 
                else {
                    if (answer.isSelected){ 
                    return {
                    ...answer,
                    isSelected:false,
                    style:'isWrong'}
                }
            else return {...answer}}
        })
        }
    })
    )



}

function CheckGameBtn(props) {
    return (
        <button id="checkBtn" className="answer-btn" onClick={props.handleCheckAnswers}>{props.text}</button>
    )
}
function PlayAgainBtn(props) {
    return (
        <button id="playAgain" className="answer-btn" onClick={() => {window.location.reload()}}>Play Again</button>
    )
}

        /* Render the Second Screen*/
return (
    <div id="second-screen">
            {listAllQuestions} 
            <CheckGameBtn 
            text={'Check Answers'}
            handleCheckAnswers={handleCheckAnswers} />
            {!isGameStarted && <PlayAgainBtn />}
        </div>
    )
    
}

export default SecondScreen