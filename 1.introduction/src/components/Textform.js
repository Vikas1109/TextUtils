import React, { memo } from "react";

export default memo(function Textform(props) {
  // lower Case conversion
  let lowerCase = () => {
    document.querySelector("#userText").value = document.querySelector("#userText").value.toLowerCase();
    props.showAlert(" Converted to lowecase","success")
  };

  // upperCase Conversion
  let upperCase = () => {
    document.querySelector("#userText").value = document.querySelector("#userText").value.toUpperCase();
    props.showAlert(" Converted to uppercase","success")
  };


  //rmvSpace

  let rmvSpace = ()=>{

    document.querySelector("#userText").value = document.querySelector("#userText").value.replace(/\s+/g, ' ').trim()
    props.showAlert(" Remove extra space","success")


  }
  // character Count

  let chrCount = () => {
    if(document.querySelector("#userText").value === ""){
      document.querySelector("#userText").value = "0";
    }else{

      document.querySelector("#userText").value = document.querySelector("#userText").value.split(" ").length;
    }
    props.showAlert(" Character count","success")
  };
  
  // words count
  
  let wrdsCount = () => {
    document.querySelector("#userText").value = document.querySelector("#userText").value.replace(/\s+/g, ' ').length;
    props.showAlert(" Word count","success")
  };

  // clear Text

  let clr = () => {

    document.querySelector("#userText").value = "";
    props.showAlert(" Clear text","success")
  }

 
  let onhandle = () => {
    console.log("on handle");
  };

  return (
    <div>
    
      <div className="mb-6 my-5">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="userText"
          rows="8"
          placeholder="Enter Text Here"
        ></textarea>
        <div className="operation">
          <button
            className="btn btn-primary"
            onClick={upperCase}
            onChange={onhandle}
          >
            Convert to uppercase
          </button>
          <button className="btn btn-primary" onClick={lowerCase}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary" onClick={rmvSpace}>
            Remove Space
          </button>
        
          <button className="btn btn-primary" onClick={chrCount} id="br">
            Character Count
          </button>
          <button className="btn btn-primary" onClick={wrdsCount} >
            Words Count
          </button>
          <button className="btn btn-primary" onClick={clr} id="br1">Clear Text</button >
        </div>
      </div>
    </div>
  );
});
