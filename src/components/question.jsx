import React from 'react'
import {useState} from 'react'
import helpers from './../helpers'

export default function Question(props) {


    const [allAnswers, setAllAnswers] = useState([
        ...props.incorrectAnswers.map(answer => {
            return {
                id: helpers.uid(),
                answer: answer,
                isCorrect: false,
                isSelected: false
            }
        }),
        {
            
            id: helpers.uid(),
            answer:props.correctAnswer,
        isCorrect:true,
    isSelected:false}
    ])


    //Button Component
function Button(props) {
    return ( 
    <button
    onClick={props.handleSelectAnswer}
    className="answer-btn">
        {props.answer}</button>
        )
}

function handleSelectAnswer(event, id){

    setAllAnswers(allAnswers => [

        ...allAnswers.map(answer => {
            if (answer.id === id) return {...answer, isSelected:true} 
            else return {...answer}
        }),
    ])
    console.log(allAnswers)
}

    // Render all Buttons with Answers
    const listAnswers = allAnswers.map(answer => {
        return <Button 
        answer={answer.answer}
        key={answer.id}
        handleSelectAnswer={() => handleSelectAnswer(answer.isCorrect, answer.id)}/>
    })
    

    return (
        <div className="questionDiv">
            <h2 className="question">{props.question}</h2>
            <div className="answer-wrapper">
                {/*Shuffle the Array before rendering it*/}
                {helpers.shuffleArray(listAnswers)}
            </div>
        </div>
    )
}
