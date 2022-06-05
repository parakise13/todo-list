import React, { useState } from "react";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { loggedIn, modalClose } from "../store/login-store";
import { addUserName } from "../store/addUser-store";
// import { addName } from "../../store";

const LoginModal = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handleAddUsername = () => {
    dispatch(addUserName(name));
    dispatch(loggedIn());
    
    const userName = localStorage.getItem("userName");
    alert(`${userName}님 환영합니다!`);
    setName("");
  };

  const handleCloseModal = () => {
    dispatch(modalClose());
  };

  return (
    <Modal>
      <form>
        <label>이름을 입력해주세요!</label>
        <input type="text" value={name} onChange={handleOnChange} />
        <button type="submit" onClick={handleAddUsername}>
          ToDo List 관리하기 시작
        </button>
        <button type="button" onClick={handleCloseModal}>
          취소
        </button>
      </form>
    </Modal>
  );
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addName: (name: string) => dispatch(addName(name))
// 	}
// }

// export default connect(null, mapDispatchToProps)(LoginModal);
export default LoginModal;
