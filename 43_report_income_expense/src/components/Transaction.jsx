import Item from "./Item";
import "./Transaction.css";
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transaction = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="Item-list">
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
    </div>
  );
};

export default Transaction;
