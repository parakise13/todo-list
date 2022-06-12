import { NavLink, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import classes from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut, modalOpen } from "../store/login-store";
import { RootState } from "../store/store";
import { Fragment } from "react";
import LoginModal from "./LoginModal";
import { removeUserName } from "../store/addUser-store";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(
    (state: RootState) => state.login.isAuthenticated
  );
  const modalOpened = useSelector(
    (state: RootState) => state.login.modalOpened
  );

  const handleOpenModal = () => {
    dispatch(modalOpen());
  };

  const handleLogout = () => {
    dispatch(loggedOut());
    dispatch(removeUserName());

    history.push("/todo-project/todo-list");
  };

  return (
    <Fragment>
      {modalOpened && <LoginModal />}
      <header className={classes.header}>
        <NavLink activeClassName={classes.active} to="/todo-project">
          <div className={classes["logo-wrapper"]}>
            <img src={logoImg} alt="logo" />
          </div>
        </NavLink>
        <ul className={classes.menus}>
          {isAuthenticated ? (
            <Fragment>
              <li>
                <NavLink activeClassName={classes.active} to="/todo-project/todo-list">
                  TODO LIST
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/todo-project/new-todo">
                  ADD NEW TODO
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/todo-project/important-todo">
                  IMPORTANT TODO
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>LOG OUT</button>
              </li>
            </Fragment>
          ) : (
            <li>
              <button onClick={handleOpenModal}>LOG IN</button>
            </li>
          )}
        </ul>
      </header>
    </Fragment>
  );
};

export default Header;
