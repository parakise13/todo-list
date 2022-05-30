import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import classes from "./Header.module.scss";

const Header = () => {
  return (
		<header className={classes.header}>
			<NavLink activeClassName={classes.active} to="/">
      	<div className={classes["logo-wrapper"]}>
        	<img src={logoImg} alt="logo" />
				</div>
			</NavLink>
      <ul className={classes.menus}>
        <li>
          <NavLink activeClassName={classes.active} to="/todo-list">
            TODO LIST
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/new-todo">
            ADD NEW TODO
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/important-todo">
            IMPORTANT TODO
          </NavLink>
        </li>
        <li>
          <button>LOG IN</button>
        </li>
        <li>
          <button>LOG OUT</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
