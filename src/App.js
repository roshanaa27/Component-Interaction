import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
function App() {
  const[inputarr,setInputarr]=useState([])
  const[inputdata,SetInputdata]=useState({
    Name:"",
    Comments:""
  })
  function changehandle(e){
     SetInputdata({...inputdata,[e.target.name]:e.target.value})
  }
  let {Name,Comments}=inputdata;
  function changhandle(){
   setInputarr([...inputarr,{Name,Comments}])
   console.log(inputarr)
   console.log(inputdata)
   SetInputdata({Name:"",Comments:""})
  }
  return (
    <div className="App">
      <p3>Comments about Course</p3>
      <table1>
      <p><b>Share your Experience</b></p>
      <label1>Name: </label1><br></br>
     <input type ="text" autocomplete='off' name='Name' value={inputdata.Name} onChange={changehandle} /><br></br>
      <label2>Comments: </label2><br></br>
     <textarea autocomplete='off' name='Comments' value={inputdata.Comments} onChange={changehandle}/>
     <br></br>
     <button onClick={changhandle}>POST</button><br></br><br></br>
     </table1>
     
     <table border={1} width="30%" cellPadding={10}>
      <tbody>
      {
        inputarr.map(
          (info,ind)=>{
            return(
              <tr key={ind}>
                <tr><b>{info.Name}</b></tr>
                <tr>{info.Comments}</tr><br></br>
              </tr>
            )
          }
        )
      }
      </tbody>
     </table>
    </div>
  );
}

export default App;