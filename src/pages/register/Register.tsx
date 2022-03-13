import { message } from "antd";
import axios from "axios";
import { ReactElement, useCallback } from "react";
import { UserRegister } from "../../types/user";
import Form from "./Form";

export default function Register(): ReactElement {
  const handleRegisterUser = useCallback((user: UserRegister) => {
    delete user.repeatPassword;
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, user)
      .then(() => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/users/${user.username}`)
          .then((res) => {
            message.success("Register successful!");
            window.location.href = "/login";
          });
      });
  }, []);

  return (
    <div className="loginContainer">
      <div className="registerBody">
        <Form onFinish={handleRegisterUser} />
      </div>
    </div>
  );
}
