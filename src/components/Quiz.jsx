import Questions from "./Questions"
import Options from "./Answers"
import { useState } from "react";
import { useEffect } from "react";

let interval;
let timeout;

function Quiz() {
    let [selectedOption, setSelectedOption] = useState(null);
    let [currQuestion, setQuestion] = useState(0);
    let [width, setWidth] = useState(100);
    let [score,setScore] = useState(0);

    let updateColor = (idx) => {
        setSelectedOption(idx);
        if(questionsObj[currQuestion].options[idx].isCorrect){
            score+=5;
            setScore(score);
        }
        currQuestion++;
        setTimeout(() => {
            setQuestion(currQuestion);
            setSelectedOption(null);
        }, 1000);
    };

    useEffect(() => {
        interval = setInterval(() => {
            setWidth((prevwidth) => prevwidth - 2);
        }, 100);

        timeout = setTimeout(() => {
            currQuestion++
            setQuestion(currQuestion);
        }, 5050);
        
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
            setWidth(100);
        }
    }, [currQuestion]);

    let questionsObj = [
        {
            question: "Are you Happy?",
            options: [
                { op: "Yes", isCorrect: true },
                { op: "No", isCorrect: false },
                { op: "Not Sure", isCorrect: false },
                { op: "Don't Care", isCorrect: false }
            ]
        },
        {
            question: "Are you Sad?",
            options: [
                { op: "Yes", isCorrect: false },
                { op: "No", isCorrect: true },
                { op: "Not Sure", isCorrect: false },
                { op: "Don't Care", isCorrect: false }
            ]
        },
        {
            question: "Are you Satisfied?",
            options: [
                { op: "Yes", isCorrect: false },
                { op: "No", isCorrect: false },
                { op: "Not Sure", isCorrect: true },
                { op: "Don't Care", isCorrect: false }
            ]
        }];
    return (
        <div className="gamearea">
            <p className="score">Score: {score}</p>
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

export default Quiz