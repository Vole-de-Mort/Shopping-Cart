
import { Link } from "react-router-dom"
import Products from "../component/Products"
const Shop = () => {
  return (
    <>
      <div className="shop">
        <h1>Shop</h1>
        <div className="products">
          <Products id='1' />
          <Products id='2' />
          <Products id='3' />
        </div>
        <Link to='/'>Back Home</Link>
      </div>
    </>
  )
}
export default Shop