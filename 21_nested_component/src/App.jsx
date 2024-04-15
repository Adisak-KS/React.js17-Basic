import { useState } from "react";
import Transaction from "./components/Transaction";

const Title = () => <h1>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>;

function App() {
  return (
    <div>
      <Title />
      <Transaction />
    </div>
  );
}

export default App;
