import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
// import Card from "./Card";
import { useState } from "react";

export default function App() {

  const [count,setCount]=useState(0);

  const cars=["swift","baleno","brezza","dzire"];
  const car={name:"swift", power:82, torque:112, price:800000};
  let data=[
    {id:1,"name":"swift","type":"hatchback","price":870000},
    {id:2,"name":"dzire","type":"sedan","price":980000},  
    {id:3,"name":"baleno","type":"hatchback","price":880000},
    {id:4,"name":"fronx","type":"hatchback","price":1150000},
    {id:5,"name":"brezza","type":"suv","price":1250000},
    {id:6,"name":"grand vitara","type":"suv","price":1990000},
    {id:7,"name":"alto","type":"hatchback","price":380000},
    {id:8,"name":"wagon r","type":"hatchback","price":500000},
  ];

  const numbers=[1,2,3,4,5,6,7,8,9,0];
  const even=numbers.filter((elem)=>elem%2==0);
  const odd=numbers.filter((elem)=>elem%2!=0);

  // console.log(numbers);
  // console.log(even);
  // console.log(odd);

  // data=data.filter((elem)=>elem.type=="hatchback");

  const sum=numbers.reduce((x,y)=>x+y);

  console.log(sum);



  return (
    <div className="container">
      <HeaderComponent></HeaderComponent>
      <main className="p-3">
        <h2>Main</h2>
        <p>Parargraph</p>
        <p>Date and Time: {new Date().toLocaleString()}</p>

        <button onClick={()=>setCount(count+1)} className="btn btn-primary me-3">Add</button>  
        <button onClick={()=>setCount(count-1)} className="btn btn-primary me-3">Subtract</button> 
        <button onClick={()=>setCount(0)} className="btn btn-primary me-3">Reset</button>  <span>{count}</span>
        <hr />
        <h2>Courses Available</h2>
        <p>Here are the available courses:</p>

        <hr />

        <h2>Array</h2>
        <ol>
        {
          cars.map((elem)=>(
              <li key={elem}>{elem}</li>
          ))
        }
        </ol>
         <h2>Object</h2>
        <table className="table table-bordered border-primary">
          <thead className="table-dark"><tr><th>Property</th><th>Value</th></tr></thead>
          <tbody>
            {
            Object.entries(car).map(([prop,val],ind)=>(
                <tr key={ind}><td>{prop}</td><td>{val}</td></tr>
            ))
          }
          </tbody>
        </table>
        <h2>JSON Data</h2>
      <table className="table table-bordered border-primary">
          <thead className="table-dark"><tr><th>S No</th><th>Name</th><th>Type</th><th>Price</th><th>On Road price</th></tr></thead>
          <tbody>
        {
          data.map((elem)=>(
            <tr key={elem.id}><td>{elem.id}</td><td>{elem.name}</td><td>{elem.type}</td><td>{(elem.price).toLocaleString("en-in")}</td><td>{(elem.price*1.15).toLocaleString("en-in")}</td></tr>
          ))
        }
        </tbody></table>

      </main>

      <FooterComponent />
    </div>
  );
}
