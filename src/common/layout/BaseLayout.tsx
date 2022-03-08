import { Col, Layout, Row } from "antd";
import "./BaseLayout.css";
import { ReactElement } from "react";
import { Header } from "../header/Header";

const { Content, Footer } = Layout;

interface IProps {
  children: JSX.Element;
}

export default function BaseLayout({ children }: IProps): ReactElement {
  return (
    <Layout>
      <div className="page-container">
        <Row align="top">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={24}
            className="blackBg"
          >
            <Header />
          </Col>
        </Row>

        <Row style={{ height: "100%" }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <Content>{children}</Content>
          </Col>
        </Row>
      </div>
      <Row align="bottom">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Footer className="footer blackBg">
            <p style={{ color: "white" }}>
              Copyright © {new Date().getFullYear()} Party planner
            </p>
          </Footer>
        </Col>
      </Row>
    </Layout>
  );
}
