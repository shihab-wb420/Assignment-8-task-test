import "./Header.css";
import logo from "../../images/logo.png";
const Header = (props) => {
  return (
     <nav className="header">
      <img src={logo} alt="" />
      <div className="mb-4">
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/Blog">Blog</a>
      </div>
    </nav>
    
  );
};

export default Header;
