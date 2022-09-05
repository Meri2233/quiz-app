import React from 'react'
import Questions from "./Questions"
import Options from "./Answers"
import { useNavigate } from "react-router-dom";


export default function Quiz({questionsObj,total,currQuestion,selectedOption,width,updateColor}) {
    let navigate = useNavigate();
    if (currQuestion === questionsObj.length) {
        navigate("/score", { replace: true });
    }

    return (
        <div className="gamearea">
            <p className="score">Score: {total}</p>
            <Questions text={questionsObj[currQuestion].question} />
            <div className="options-container">
                <Options option={questionsObj[currQuestion].options[0].op} changeColor={updateColor} idx={0} color={selectedOption === 0 ? (questionsObj[currQuestion].options[0].isCorrect ? "green" : "red") : null} />
                <Options option={questionsObj[currQuestion].options[1].op} changeColor={updateColor} idx={1} color={selectedOption === 1 ? (questionsObj[currQuestion].options[1].isCorrect ? "green" : "red") : null} />
                <Options option={questionsObj[currQuestion].options[2].op} changeColor={updateColor} idx={2} color={selectedOption === 2 ? (questionsObj[currQuestion].options[2].isCorrect ? "green" : "red") : null} />
                <Options option={questionsObj[currQuestion].options[3].op} changeColor={updateColor} idx={3} color={selectedOption === 3 ? (questionsObj[currQuestion].options[3].isCorrect ? "green" : "red") : null} />
            </div>
            <div style={{ width: `${width}%` }} className="timebar"></div>
        </div>
    )
}
