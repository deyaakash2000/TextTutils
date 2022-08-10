
import React,{useState} from "react"; //react Hooks

export default function Textform(props) {
  const TextUppercase =()=>{
    console.log("upper case clicked " +text);
    let newText = text.toUpperCase() 
    setText(newText)
  }
  const HandleonChange =(e)=>{
    setText(e.target.value)
  }
 const Texttolower=()=>{
  let lowtwxt = text.toLowerCase()
  setText(lowtwxt)
 }
 const Clear=()=>{
  let lowtwxt = ""
  setText(lowtwxt)
 }
 const removeExtraSpace =(e)=>{
  let newText = text.replace(/\s+/,' ')
  setText(newText)

 }
 const copyText =(e)=>{
  navigator.clipboard.writeText(text)

 }

  const [text , setText]=useState("") // react Hoooks syantax
  //text ="W0ewpeowe" // Wrong way to set the text
  //dsetText("afeqwdfqe")// right way to set t he text
  return (
    <>
    <div>
      <div className="container my-5" style={{color :props.navMode === 'dark'?'white':'black'}}>
      <div className="form-group">
        <h1 >{props.title}</h1>
        <label htmlFor="mybox"><p>{props.writeSomething}</p></label>
        <textarea className="form-control mybox" id="mybox"  rows="8" value={text} onChange={HandleonChange} style={{backgroundColor :props.navMode === 'dark'?'#575aa9':'white',color:props.navMode === 'dark'?'white':'black'}}></textarea>  
        </div>
        <button  disabled={text.length === 0}  type="button" className="btn btn-primary my-3 mx-3" onClick={TextUppercase} >Convert uppercase</button>
        <button  disabled={text.length === 0} type="button" className="btn btn-primary my-3 mx-3" onClick={Texttolower} >Convert lowecase</button>
        <button  disabled={text.length === 0} type="button" className="btn btn-primary my-3 mx-3" onClick={Clear} >Clear</button>
        <button  disabled={text.length === 0} type="button" className="btn btn-primary my-3 mx-3" onClick={removeExtraSpace} >remove Extra space</button>
        <button  disabled={text.length === 0} type="button" className="btn btn-primary my-3 mx-3" onClick={copyText} >Copy Text</button>
        
      
    </div>
    </div>
    <div className="container" style={{color :props.navMode === 'dark'?'white':'black'}}>
      <h1>Text summery</h1>
  
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} character</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothig to preview!"}</p>
     
    </div>
    </>
  );
}
