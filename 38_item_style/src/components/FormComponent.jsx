import { useState } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const inputTitle = (even) => {
    setTitle(even.target.value)
  };
  const inputAmount = (even) => {
    setAmount(even.target.value)
  };
  const saveItem = (even) => {
    even.preventDefault();
    const itemData = {
        id:uuidv4(),
        title:title,
        amount:Number(amount)
    }
    props.onAddItem(itemData)
    setTitle('')
    setAmount(0)
  };

  return (
    <div>
      <form action="" onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title} />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
        </div>
        <div className="form-control">
          <button type="submit" className="btn"> เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
