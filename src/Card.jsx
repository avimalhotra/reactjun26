import { useState } from "react";

export default function Card({ course="", duration=0, trainer="", fees="n/a"}) {

  const [x,setX]=useState(0);

  return (
    <div className="card m-2">
      <div className="card-body">
        <h3 className="card-title">{course}</h3>
        <p className="card-text">Duration: {duration} Months </p>
        <p className="card-text">Teacher: {trainer}</p>
        <p>Fees: {fees}</p>
        <a href="#" className="btn btn-primary me-3"> {course} </a>
        <button className="btn btn-secondary" onClick={()=>setX(x+1)}>Add</button>
        <p>{x}</p>
      </div>
    </div>
  );
}

