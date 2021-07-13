import React, { useState } from "react";
import Sdata from './Sdata';
const Card = () => {
    const [curQues,setCurQues] = useState(0);
    const [show,setShow] = useState(false);
    const [result,setResult] = useState(0);
    const Click = (isCorrect) => {
        setCurQues(curQues+1);
        console.log(isCorrect);
        if (isCorrect===true) {
            setResult(result+1);
        }
        if (curQues < Sdata[curQues].options.length) {
            setShow(false);
        }
        else {
            setShow(true); 
        }
    }
    const reset = () => {
        setCurQues(0);
        setShow(false);
        setResult(0);
    }
    return (
        <>
        <div className="box">
        { show ? <div> 
        <h2>Your Scored is {result} out of 5</h2>
        <button className="btn btn-success" onClick={reset}>Reset</button>
        </div> 
        :
            <div className="card w-50 my-3">
            <div className="card-body">
            <h5 className="card-title">Question:{curQues+1}).</h5>
            <p className="card-text"><strong>{Sdata[curQues].ques}</strong></p>
            </div>
            <div>
            {Sdata[curQues].options.map((val,ind) => {
            return (
            <button className="btn btn-dark mx-1 my-2" onClick={() => Click(val.isCorrect)}>{val.anstxt}</button>
            );
            })}
            </div> 
            </div>             
        }
        </div>
        </>
    )
}
export default Card;