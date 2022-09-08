import React from 'react'
import { useState } from 'react'
import helpers from './../helpers'

function SecondScreen(props) {

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
            className={`answer-btn ${props.isSelected && 'selected'} 
            ${props.isWinner && 'winner'} ${props.isLoser && 'loser'}`}>{props.text}</button>
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
                isWinner={answer.isWinner}
                isLoser={answer.isLoser}
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
    setAllQuestions((prevQuestions) => 
    prevQuestions.map(question => {
        return {
            ...question,
            answers: question.answers.map(answer => {
                if (answer.isSelected) {
                    if (answer.isCorrect) return {
                        ...answer,
                        isWinner:true}
                    else return {
                        ...answer, 
                        isLoser:true}
                }
                else return {
                    ...answer
                }
            })
        }
    })
    )
}

        /* Render the Second Screen*/
return (
    <div id="second-screen">
            {listAllQuestions} 
            <button id="checkBtn" 
            className="answer-btn"
            onClick={handleCheckAnswers}>Check Answers</button>
        </div>
    )
    
}

export default SecondScreen