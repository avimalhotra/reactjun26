import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
// import { React, NextJS, Angular } from "./Course";
// import { car, cars } from "./data";
import Card from "./Card";

export default function App() {
  const pi = 3.14;
  let r = 2;

  return (
    <div className="container">
      <HeaderComponent></HeaderComponent>
      <main className="p-3">
        <h2>Main</h2>
        <p>Parargraph</p>
        <p>Parargraph</p>
        <p>Date and Time: {new Date().toLocaleString()}</p>
        <br />
        <label>
          Name : <input type="text" />
        </label>
        <label htmlFor="age">Age: </label>
        <input type="number" id="age" />
        {/* <button className="btn btn-primary" onClick={() => alert(2 + 3)}>Click</button> */}
        <p>
          PI is {pi}, r is {r} and area is {pi * r * r}
        </p>
        {/* <hr />
        <p>{car.name}</p>
        <p>{cars.length}</p> */}
        <hr />
        <h2>Courses Available</h2>
        <p>Here are the available courses:</p>

        <div className="row">
          <div className="col-sm-4">
            <Card
              course="React with Next"
              duration={4}
              trainer="Avinash Malhotra"
            />
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
