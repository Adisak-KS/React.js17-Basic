import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  const design = { color: "red", textAlign: "center" };
  const initData = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -3000 },
    { id: 2, title: "เงินเดือน", amount: 50000 },
  ];

  const [items, setItems] = useState(initData);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItems) => {
      return [newItem, ...prevItems];
    });

    // คำนวณรายได้และรายจ่ายใหม่
    const updatedIncome =
      newItem.amount > 0 ? reportIncome + newItem.amount : reportIncome;
    const updatedExpense =
      newItem.amount < 0 ? reportExpense + newItem.amount : reportExpense;

    // อัปเดตรายได้และรายจ่าย
    setReportIncome(updatedIncome);
    setReportExpense(updatedExpense);
  };

  useEffect(() => {
    const amounts = items.map((item) => item.amount);
    const income = amounts
      .filter((amount) => amount > 0)
      .reduce((total, amount) => total + amount, 0)
      .toFixed(2);
    const expense =
      amounts
        .filter((amount) => amount < 0)
        .reduce((total, amount) => total + amount, 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />} />
              <Route path="/insert" element={<Outlet />}>
                <Route
                  index
                  element={<FormComponent onAddItem={onAddNewItem} />}
                />
                <Route
                  path="transactions"
                  element={<Transaction items={items} />}
                />
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
