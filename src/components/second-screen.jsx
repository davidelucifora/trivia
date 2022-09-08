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
            className={`answer-btn ${props.isSelected && 'selected'}`}>{props.text}</button>
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
                handleSelected={() => handleSelected(answer.id)}/>
                )
            })
            
            /** Handles when answer is selected */
            function handleSelected(id){
                
                setAllQuestions((prevQuestions) => 
                prevQuestions.map(question => {
                    return {
                        ...question,
                        answers : question.answers.map(answer => {
                            if (id === answer.id) {
                                return {
                                    ...answer,
                                    isSelected : !answer.isSelected
                                }
                            }
                            else return {...answer,
                            isSelected:false}
                        })
                    }
                }))
    
            }

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



        /* Render the Second Screen*/
return (
    <div id="second-screen">
            {listAllQuestions} 
            <button id="checkBtn" className="answer-btn">Check Answers</button>
        </div>
    )
    
}

export default SecondScreen