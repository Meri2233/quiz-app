
function Result({ result, total }) {
    return (
        <div className="scorepage">
            <div className="title">
                <div className="box">Question</div>
                <div className="box">Correct Answer</div>
                <div className="box">Choosen Asnwer</div>
                <div className="box">Score</div>
            </div>
            <div>
                {result.choosen.map((el, index) => <div className="title">
                    <div className="box">{result.question[index]}</div>
                    <div className="box">{result.correct[index]}</div>
                    <div className="box">{el}</div>
                    <div className="box">{result.score[index]}</div>
                </div>)}
            </div>
            <div className="total">
                <p className="score">Total:{total}</p>
            </div>
        </div>
    )
}

export default Result