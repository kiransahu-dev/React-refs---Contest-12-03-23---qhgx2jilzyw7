import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here 
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);
  const emailText = useRef(null);
  const passwordText = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  const emailValue = inputEmail.current.value;
  const passwordValue = inputPassword.current.value;
  
  if(emailValue === "" && passwordValue === "")
  {
    inputEmail.current.focus();
  }else if(emailValue === ""){
    inputEmail.current.focus();
  }else if(passwordValue === ""){
    inputPassword.current.focus();
  }else { 
    emailText.current.textContent = `Email : ${emailValue}`;
    passwordText.current.textContent = `Password : ${passwordValue}`;
  }
};

  
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={""} ref={inputEmail} onChange={handleSubmit}/><br/>
      Password
      <input id="inputPassword" type="text" value={""} ref={inputPassword} onChange={handleSubmit}/><br/>
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {}</p>
      <p id ="passwordText">Your Password : {}</p>
      
    </div>
  )
}


export default App;
