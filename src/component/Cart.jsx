import { Link } from "react-router-dom"

export default function Cart(){
  return (
    <div className="cart">
      <h1>Cart</h1>
      <Link to='/shop'>Keep Shopping</Link>
    </div>
  )
}