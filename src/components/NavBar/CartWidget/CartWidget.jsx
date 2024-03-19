import "./cartWidget.css"
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <div className="cart">
      <FaCartShopping size={30}/>
      <div className="burbuja">
        <p className="cant">0</p>
      </div>
    </div>
  )
}

export default CartWidget
