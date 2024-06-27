import React, { useState } from 'react'

export default function About(props) {

  



    return (
        <div className='container '  >
            <h1 className='my-3 px-4 py-2' style={{ backgroundColor: props.mode === "dark" ? "#19344a" : "white", color: props.mode === "dark" ? "white" : "black" }}>About Us</h1>
            <div className="accordion py-4 px-2" id="accordionExample"  style={{ backgroundColor: props.mode === "dark" ? "#19344a" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button"  style={{ backgroundColor: props.mode === "dark" ? "#39719f" : "white", color: props.mode === "dark" ? "white" : "black" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{ backgroundColor: props.mode === "dark" ? "#39719f" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  style={{ backgroundColor: props.mode === "dark" ? "#39719f" : "white", color: props.mode === "dark" ? "white" : "black" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{ backgroundColor: props.mode === "dark" ? "#39719f" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
                        text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
                        limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"style={{ backgroundColor: props.mode === "dark" ? "#39719f" : "white", color: props.mode === "dark" ? "white" : "black" }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatability</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === "dark" ? "#39719f" : "white", color: props.mode === "dark" ? "white" : "black" }}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                        suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
