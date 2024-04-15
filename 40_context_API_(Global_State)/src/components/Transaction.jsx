import Item from "./Item";
import "./Transaction.css";
import DataContext from "../data/dataContext";

const Transaction = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="Item-list">
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </div>
  );
};

export default Transaction;
