import { message } from "antd";
import axios from "axios";
import { ReactElement, useCallback } from "react";
import { UserLogin } from "../../types/user";
import Form from "./Form";

export default function Login(): ReactElement {
  const handleLoginUser = useCallback((user: UserLogin) => {
    axios.post(`${process.env.REACT_APP_API_URL}/login`, user).then((res) => {
      localStorage.setItem("userID", res.data._id);
      localStorage.setItem("username", res.data.username);
      message.success("Login successful!");
      window.location.href = "/home";
    });
  }, []);

  return (
    <div className="loginContainer">
      <div className="signInBody">
        <Form onFinish={handleLoginUser} />
      </div>
    </div>
  );
}
