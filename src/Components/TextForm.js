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
                        style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text}
                        id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert To  Upper Case</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert To  Lower Case</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleInverseClick}>Inverse Text</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handlePalClick}>Palindrome Check</button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text </button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy </button>
            </div>
            <div className="container my-3 mx-1">
            </div>
            <div className="container my-3 mx-1 " style={{ color: props.mode === "dark" ? "white" : "black" }} >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}  Minutes Read</p>
                <h2>PREVIEW</h2>
                 <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
                <h2>
                    Palindrome Result
                </h2>
                <p>{newText}</p>
            </div>
        </>
    )
}
