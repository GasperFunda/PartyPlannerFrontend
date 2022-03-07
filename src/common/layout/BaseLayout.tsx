import * as React from "react";
import { ReactElement } from "react";

interface IBaseLayoutProps {
  children: JSX.Element;
}

// Here we will have a base layout with navigation, header and footer and build our pages inside it
export default function BaseLayout({
  children,
}: IBaseLayoutProps): ReactElement {
  return <div></div>;
}
