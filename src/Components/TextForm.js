import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Conveting to Uppercase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Conveting to Lowercase","success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        setnewtext(newText)
        props.showAlert("Clearing Text","danger");
    }
    const handleInverseClick = () => {
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Reversing Text","danger");
    };
    const handlePalClick = () => {
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        // eslint-disable-next-line
        if (newText.toLowerCase() === text.toLowerCase()) {
            setnewtext("True")
        }
        else {
            setnewtext("False")
        }
        props.showAlert("Palindrome Check","warning");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied ","success");
    }
    const [text, setText] = useState("");
    const [newText, setnewtext] = useState("");


    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 >{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === "dark" ? "#39719f" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text}
                        id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-1 my=1" onClick={handleUpClick}>Convert To  Upper Case</button>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-1 my=1" onClick={handleLoClick}>Convert To  Lower Case</button>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-1 my=1" onClick={handlePalClick}>Palindrome Check</button>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-1 my=1" onClick={handleInverseClick}>Inverse Text</button>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-1 my=1" onClick={handleCopy}>Copy Text </button>
                <button disabled={text.length===0} className="btn btn-success my-3 mx-1 my=1" onClick={handleClearClick}>Clear Text </button>
                
            </div>
            <div className="container my-3 mx-1">
            </div>
            <div className="container my-3 mx-1 " style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length}  Minutes Read</p>
                <h2>PREVIEW</h2>
                 <p>{text.length>0?text:<strong>Nothing To Preview</strong>}</p>
                <h2>
                    Palindrome Result
                </h2>
                
                <p>{newText}</p>
            </div>
        </>
    )
}
