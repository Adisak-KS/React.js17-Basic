import Transaction from "./components/Transaction";

function App() {
  const design ={ color: "red", textAlign: "center" }
  return (
    <div>
      <h1 style={design}>
        โปรแกรมบัญชีรายรับ-รายจ่าย
      </h1>
      <Transaction />
    </div>
  );
}

export default App;
