import { UserOutlined } from "@ant-design/icons";
import { ReactElement, useEffect } from "react";

export function Header(): ReactElement {
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="/home">
          <p className="logoText">Party Planner</p>
        </a>
      </div>

      <UserOutlined
        onClick={() => (window.location.href = "/profile")}
        style={{
          marginLeft: "auto",
          color: "white",
          fontSize: "46px",
          marginRight: "30px",
        }}
      />
    </nav>
  );
}
