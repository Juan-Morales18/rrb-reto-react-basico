import { useNavigate } from "react-router-dom";
import { CartOrder } from "./CartOrder";
import { CartIcon } from "./CartIcon";
import useToggleCartOrder from "../hooks/useToggle";
import "../styles/Header.css";

function Header() {
  const { toggle, handleToggle } = useToggleCartOrder(false);
  const navigate = useNavigate();

  return (
    <nav className="Header">
      <h1 onClick={() => navigate("/")} className="Header__logo">
        RRB
      </h1>
      <div onClick={handleToggle}>
        <CartIcon />
      </div>
      {toggle && <CartOrder />}
    </nav>
  );
}

export { Header };
