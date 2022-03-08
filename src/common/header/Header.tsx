import { ReactElement, useEffect } from "react";

export function Header(): ReactElement {
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="/">
          <p className="logoText">Party Planner</p>
        </a>
      </div>
    </nav>
  );
}
