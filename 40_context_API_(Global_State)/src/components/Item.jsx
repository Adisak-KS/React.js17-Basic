import PropTypes from "prop-types"; // ES6
import DataContext from "../data/dataContext";
import './Item.css'
const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  return (
    <li className={status}>
      {title} {status}
      <span>{symbol}{Math.abs(amount)}</span>
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </li>
  );
};
Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
