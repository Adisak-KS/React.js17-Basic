import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HelloComponent from "./components/HelloComponent";


// // การสร้าง Component
// function HelloComponent(){
//   return <h1>สวัสดี Component</h1>
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HelloComponent/>
//   </React.StrictMode>
// );

// การสร้าง Class Component
// class HelloComponent extends React.Component {
//   render() {
//     return <h1>สวัสดีด Class Component</h1>;
//   }
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>
);
