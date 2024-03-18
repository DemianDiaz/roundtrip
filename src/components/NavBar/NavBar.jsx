import "./NavBar.css"
import "./CartWidget/CartWidget"
import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="navBar">
      <img className="logo" src="../public/img/logo.png" alt="logo" />
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
