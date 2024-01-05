import React,{useState} from 'react'

export default function TextForm(props) {

  const [text,setText]  = useState('');
  
  const handleOnChange = (event)=>{
    setText(event.target.value)
    

  }

  const handleUpClick = ()=>{
    const newValue = text.toUpperCase();
    setText(newValue);
    if(text.length>0){

      props.showAlert("text is converted to uppercase","success");
    }
    else{
      props.showAlert("Please first enter some text","danger");

    }
  }
  const handleLowClick = ()=>{
    const newValue = text.toLowerCase();
    setText(newValue);
    
    if(text.length>0){

      props.showAlert("text is converted to lowercase","success");
    }
    else{
      props.showAlert("Please first enter some text","danger");

    }
  }
  const handleClearClick = ()=>{
    const newValue = '';
    setText(newValue);
    
    if(text.length>0){

      props.showAlert("text is cleared","success");
    }
    else{
      props.showAlert("Please first enter some text","danger");

    }
  }
  const handleCapClick = ()=>{
    
    
    // Split the input text into an array of words
    const words = text.split(' ');
    
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(abc);
    
    function abc(word){
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return '';
    }
    
    // Join the capitalized words back into a string
    const newValue = capitalizedWords.join(' ');
    
    // Update the state with the capitalized text
    setText(newValue);
  
    if(text.length>0){

      props.showAlert("text is capitalized","success");
    }
    else{
      props.showAlert("Please first enter some text","danger");

    }
    
  }
  // const handleBoldClick = ()=>{
  //   setText(<strong>{text}</strong>);
  // }
  return (
    <>

    <div className={`container my-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'} border border-black`}>
      
          <h1>{props.heading}</h1>
          <div className="mb-3">
          
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" placeholder='Enter your text here'></textarea>
          </div>
            <button className={`btn btn-${props.mode==='light'?'info':'secondary'} mx-1 my-2`}  onClick={handleUpClick}>Convert to UpperCase</button>
            <button className={`btn btn-${props.mode==='light'?'info':'secondary'} mx-1 my-2`}   onClick={handleLowClick}>Convert to LowerCase</button>
            <button className={`btn btn-${props.mode==='light'?'info':'secondary'} mx-1 my-2`}   onClick={handleCapClick}>Capitalize Text</button>
            <button className={`btn btn-${props.mode==='light'?'info':'secondary'} mx-1 my-2`}   onClick={handleClearClick}>Clear Text</button>
            {/* <button className='btn btn-primary mx-1' onClick={handleBoldClick}>Make bold Text</button> */}
    </div>
    <div className={`container my-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'} border border-black`}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>

      <h3>Preview</h3>
      <p>{text.length===0?'Enter some text in above textbox to preview':text}</p>
    </div>
    </>
  )
}
