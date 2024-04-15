import './Item.css'

const Item = () => {
  const name = "ช็อปปิ้ง"
  const amount = 5000
  return(
    <li className='Item'>
      {name}<span>-{amount}</span>
    </li>
  );
}
export default Item