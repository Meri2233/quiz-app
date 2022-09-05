import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";
import { useState } from "react";
import { useEffect } from "react";

let interval;
let timeout;

function Main() {
    let [selectedOption, setSelectedOption] = useState(null);
    let [currQuestion, setQuestion] = useState(0);
    let [width, setWidth] = useState(100);
    let [total, setScore] = useState(0);
    let [result, setResult] = useState({ choosen: [], correct: [], score: [], question: [],total:0 })

    let updateColor = (idx) => {
        setSelectedOption(idx);
        let copy = { ...result };
        copy.choosen.push(questionsObj[currQuestion].options[idx].op);
        copy.question.push(questionsObj[currQuestion].question);
        let correctanswer = questionsObj[currQuestion].options.filter(el => el.isCorrect);
        copy.correct.push(correctanswer[0].op);

        if (questionsObj[currQuestion].options[idx].isCorrect) {
            copy.total+=5;
            total += 5;
            copy.score.push(5);
            setScore(total);
        }
        else {
            copy.score.push(0);
        }
        setResult(copy);
        currQuestion++;
        setTimeout(() => {
            setQuestion(currQuestion);
            setSelectedOption(null);
        }, 1000);
    };


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
    return (

        <Routes>
            <Route path="/" element={<Quiz questionsObj={questionsObj} total={total} setScore={setScore} currQuestion={currQuestion} setQuestion={setQuestion} selectedOption={selectedOption} setSelectedOption={setSelectedOption} width={width} setWidth={setWidth} updateColor={updateColor} />} />
            <Route path="/score" element={<Result result={result} total={total}/>} />
        </Routes>
    )
}

export default Main