import "./NavBar.css"
import "./CartWidget/CartWidget"
import CartWidget from "./CartWidget/CartWidget"
import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="navBar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="menu">
        <li>Valijas</li>
        <li>Mochilas</li>
        <li>Carteras</li>
        <li>Accesorios</li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar
