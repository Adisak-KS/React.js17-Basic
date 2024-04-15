import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: 2000 },
    { title: "ค่าน้ำมัน", amount: 5000 },
    { title: "ค่าเช่าบ้าน", amount: 8000 },
    { title: "เงินเดือน", amount: 70000 },
    { title: "ค่าประกัน", amount: 300 },
    { title: "ค่าเดินทาง", amount: 800 },
  ];
  return (
    <ul className="Item-list">
      {data.map((element) => {
        return <Item title={element.title} amount={element.amount} />;
      })}
    </ul>
  );
};

export default Transaction;
