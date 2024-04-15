import Item from "./Item";
import './Transaction.css'

const Transaction = () => {
    return (
      <ul className="Item-list">
        <Item title ="ค่ารักษาพยาบาล" amount = "2000" />
        <Item title ="เงินเดือน" amount = "25000" />
        <Item title ="ค่าเดินทาง" amount = "500" />
        <Item title ="ค่าเช่าห้อง" amount = "8000" />
      </ul>
    );
  };

  export default Transaction