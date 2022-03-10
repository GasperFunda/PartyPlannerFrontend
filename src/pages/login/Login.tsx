import { ReactElement } from "react";
import Form from "./Form";

export default function Login(): ReactElement {
  return (
    <div className="loginContainer">
      <div className="signInBody">
        <Form />
      </div>
    </div>
  );
}
