import React, { useState } from 'react'

export default function MainContent(props) {
    const [text, setText] = useState('')
    const makeUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const makeLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearText = () => {
        let newText = text;
        newText = ''
        setText(newText)
        setPreview(' ')
    }
    const copyText = () => {
        let newText = text;
        navigator.clipboard.writeText(newText)
    }

    const [preview, setPreview] = useState()
    const seePreview = () => {
        setPreview('Preview')
        if (text.length === 0) {
            setPreview(" ")
        }
    }
    const [alert,setAlert]=useState('')
const [onclickAlert,setOnClickAlert]=useState("d-none")
    const showAlert=(result,description)=>{
        setOnClickAlert("d-block")
setAlert({

    result:result,
    description:description,
})

setTimeout(()=>{
    setOnClickAlert("d-none")
},2000)

    }

const removeExtraSpaces=()=>{
    let newText=text.split(/[ ]+/).join(" ")
    setText(newText)
}

    return (
        <>
<div className={`alert alert-warning alert-dismissible fade position-sticky top-0 show ${onclickAlert}`} role="alert">
  <strong>{alert.result}</strong> {alert.description}
</div>
            <div className="container vh-120 my-4" style={props.mainContentColor}>
                <h2>Enter Text For Analyz</h2>
                <div className='h-50'>
                    <textarea className=" w-100 fs-6" rows="10" placeholder='Write Here' aria-label="With textarea" onKeyUp={seePreview} onChange={(e) => {
                        setText(e.currentTarget.value)
                    }}
                        value={text} style={props.textareaColor}></textarea>

                    <div className='d-flex justify-content-evenly flex-column'>
                        <div className='my-2'>
                            <button type="button" className="btn btn-primary mx-3 my-2" onClick={()=>{
                                makeUpper()
                             showAlert("sucsses : ","Text Transform To UpperCase")}}>UpperCase</button>
                            <button type="button" className="btn btn-primary mx-3 my-2" onClick={()=>{
                                makeLower()
                             showAlert("sucsses : ","Text Transform To LowerCase")}}>LowerCase</button>
                            <button type="button" className="btn btn-primary mx-3 my-2" onClick={()=>{
                                clearText()
                             showAlert("sucsses : ","Text are cleared")}}>Clear</button>
                            <button type="button" className="btn btn-primary mx-3 my-2" onClick={()=>{
                                copyText()
                             showAlert("sucsses : ","Text Are Copied To Your Clipboard")}}>Copy</button>
                            <button type="button" className="btn btn-primary mx-3 my-2" onClick={()=>{
                                removeExtraSpaces()
                             showAlert("sucsses : ","Extra Spaces are removed")}}>Remove Extra Spaces</button>

                        </div>
                        <h3 className='mt-2'>Your Text Summury</h3>
                        <div className='my-2'><button type="button" className="btn btn-secondary mx-3 my-2">Total Word : {text.split(" ").length - 1}</button>
                            <button type="button" className="btn btn-secondary mx-3 my-2">Total Characters : {text.length}</button>
                            <button type="button" className="btn btn-secondary mx-3 my-2">Reading Time : {text.split(" ").length * 0.3 - 0.3} s</button>
                        </div>
                        <div className='my-3'>
                            <h2>{preview}</h2>
                            <p className='text-break fs-5'>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
