import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },
    { id: 2, title: "ค่าน้ำมัน", amount: 5000 },
    { id: 3, title: "ค่าเช่าบ้าน", amount: 8000 },
    { id: 4, title: "เงินเดือน", amount: 70000 },
    { id: 5, title: "ค่าประกัน", amount: 300 },
    { id: 6, title: "ค่าเดินทาง", amount: 800 },
  ];
  return (
    <ul className="Item-list">
      {data.map((element) => {
        return <Item {...element} key={element.id} />;
      })}
    </ul>
  );
};

export default Transaction;
