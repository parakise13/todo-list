import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { modalClose } from "../store/login-store";
import { ChildrenProps } from "./Card";
import classes from "./Modal.module.scss";

const Backdrop = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(modalClose());
  };

  return <div className={classes.Backdrop} onClick={handleCloseModal}></div>;
};

const ModalOverlay = (props: ChildrenProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = (props: ChildrenProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
