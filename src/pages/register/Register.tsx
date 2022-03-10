import { ReactElement } from "react";
import Form from "./Form";

export default function Register(): ReactElement {
  return (
    <div className="loginContainer">
      <div className="registerBody">
        <Form />
      </div>
    </div>
  );
}
