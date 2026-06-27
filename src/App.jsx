import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import Card from "./Card";
import { useState } from "react";

export default function App() {

  // let count=10;
  // function checkCount(){
  //   console.log(count);
  //   count++;
  // }

  const [count,setCount]=useState(0);

  return (
    <div className="container">
      <HeaderComponent></HeaderComponent>
      <main className="p-3">
        <h2>Main</h2>
        <p>Parargraph</p>
        <p>Date and Time: {new Date().toLocaleString()}</p>

        {/* <button onClick={checkCount} className="btn btn-primary">Change</button>  <span>{count}</span> */}
        <button onClick={()=>setCount(count+1)} className="btn btn-primary me-3">Add</button>  
        <button onClick={()=>setCount(count-1)} className="btn btn-primary me-3">Subtract</button> 
        <button onClick={()=>setCount(0)} className="btn btn-primary me-3">Reset</button>  <span>{count}</span>
        <hr />
        <h2>Courses Available</h2>
        <p>Here are the available courses:</p>

        <hr />

        <div className="row">
          <div className="col-sm-4">
            <Card course="React with Next" duration={4} trainer="Avinash Malhotra" />
          </div>
          <div className="col-sm-4">
            <Card course="Angular" duration={3} trainer="Avinash Malhotra" />
          </div>
          <div className="col-sm-4">
            <Card course="Node JS" duration={3} trainer="Avinash Malhotra" />
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
