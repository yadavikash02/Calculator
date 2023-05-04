import React,{useState} from "react";
function Calculator() {
    const [text,setText]=useState("");
    // let a="*",b="/",c="+",d="-",e="1",f="2",g="3",h="4",i="5",j="6",k="7",l="8",m="9",n="0";
    let b="<-";
    const operation=(event)=>{
      console.log("event fun run");
      setText(event.target.value);
    }
    const Calculate=(event)=>{ 
        // let newtext="542+555555";
        console.log("event fun run call");
        setText(text.concat(event.target.value))
        // newtext+="*"+text;
        
    }
    const CalculateEqualTo=()=>{ 
      console.log("event fun run call");
        let newtext=eval(text).toString();
        setText(newtext);
    }
    const Calculatebackspace=()=>{ 
      console.log("event fun run call");
        let newtext=text.slice(0,text.length-1);
        setText(newtext);
    }
    const CalculateClear=()=>{ 
        setText("");
    }
  return (
    <div className="container my-2">
      <div className="container">
        <div >
          <textarea value={text} onChange={operation} cols={14}  rows={1} className="p-3 mb-2 bg-secondary text-white " style={{fontSize:25}}/>
        </div>
        <div className="row ">
          <div className="col-md-3">
          <button onClick={Calculate} value="*" className="btn btn-lg btn-primary mx-1">*</button >
          <button  onClick={Calculate} value="/" className="btn btn-lg  btn-primary mx-1">/</button>
          <button onClick={Calculate} value="+" className="btn btn-lg mx-1 btn-primary">+</button>
          <button onClick={Calculate} value="-" className="btn btn-lg mx-1 btn-primary">-</button>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-md-4">
          <button onClick={Calculate} value="1" className="btn btn-lg mx-1 btn-primary">1</button >
          <button  onClick={Calculate} value="2" className="btn btn-lg mx-1 btn-primary">2</button>
          <button onClick={Calculate} value="3" className="btn btn-lg mx-1 btn-primary">3</button>
          <button onClick={Calculate} value="4" className="btn btn-lg mx-1 btn-primary">4</button>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-md-4">
          <button onClick={Calculate} value="5" className="btn btn-lg mx-1 btn-primary  ">5</button >
          <button  onClick={Calculate} value="6" className="btn btn-lg mx-1 btn-primary  ">6</button>
          <button onClick={Calculate} value="7" className="btn btn-lg mx-1 btn-primary  ">7</button>
          <button onClick={Calculate} value="8" className="btn btn-lg mx-1 btn-primary  ">8</button>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-md-4">
          <button onClick={Calculate} value="9" className="btn btn-lg mx-1 btn-primary  ">9</button >
          <button  onClick={Calculate} value="0" className="btn btn-lg mx-1 btn-primary  ">0</button>
          <button onClick={Calculate} value="." className="btn btn-lg mx-1 btn-primary  ">.</button>
          <button onClick={CalculateEqualTo} className="btn mx-1 btn-lg btn-success  ">=</button>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-md-4">
          <button onClick={Calculate} value="(" className="btn btn-lg mx-1 btn-primary  ">(</button >
          <button  onClick={Calculate} value=")" className="btn btn-lg mx-1 btn-primary  ">)</button>
          <button onClick={CalculateClear}  className="btn  mx-1 btn-lg btn-danger">C</button>
          <button onClick={Calculatebackspace} className="btn mx-1 btn-lg text-dark btn-primary material-symbols-outlined" >⌫</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
