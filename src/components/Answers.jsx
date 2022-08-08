
function Options(props){
    return(
        <button style={{backgroundColor:props.color}} onClick={(e)=>props.changeColor(props.idx,e)} className="option">{props.option}</button>
    )
}

export default Options