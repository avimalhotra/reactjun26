import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import { React, NextJS, Angular } from "./Course";

export default function App() {
  return (
    <div className="container">
      <HeaderComponent />

      <main className="p-3">
        <h2>Main</h2>
        <p>Parargraph</p>
        <p>Parargraph</p>
        <hr />
        <h2>Courses Available</h2>
        <p>Here are the available courses:</p>
        <React />
        <NextJS />
        <Angular />
      </main>

      <FooterComponent />
    </div>
  );
}
