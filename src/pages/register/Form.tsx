import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, Col, Form as AntdForm, Input, Row } from "antd";

const { Item } = AntdForm;

export interface IFormProps {}

export default function Form(props: IFormProps) {
  return (
    <AntdForm className="registerBody" name="register">
      <Icon type="login" />
      <Row gutter={8}>
        <Col span={12}>
          <Item
            label="First name"
            name="firstName"
            className="formItem"
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: "Please input your first name" },
            ]}
          >
            <Input className="input" />
          </Item>
        </Col>
        <Col span={12}>
          <Item
            label="Last name"
            name="lastName"
            className="formItem"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: "Please input your last name" }]}
          >
            <Input className="input" />
          </Item>
        </Col>
      </Row>
      <Item
        label="Email"
        name="email"
        className="formItem"
        labelCol={{ span: 24 }}
        rules={[
          {
            pattern: new RegExp(
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9])\])/
            ),
            required: true,
            message: "Please enter your email",
          },
        ]}
      >
        <Input className="input" />
      </Item>
      <Item
        label="Username"
        name="username"
        className="formItem"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Please input your username" }]}
      >
        <Input className="input" />
      </Item>
      <Item
        label="Password"
        name="password"
        className="formItem"
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please enter password.",
          },
          {
            pattern: new RegExp(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/
            ),
            message:
              "Password needs to have at least 7 characters, 1 number, 1 upper case letter and 1 lower case letter.",
          },
        ]}
      >
        <Input.Password className="input" />
      </Item>
      <Item
        label="Repeat password"
        name="repeatPassword"
        className="formItem"
        style={{ marginBottom: "20px" }}
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please enter password.",
          },
          {
            pattern: new RegExp(
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/
            ),
            message:
              "Password needs to have at least 7 characters, 1 number, 1 upper case letter and 1 lower case letter.",
          },
        ]}
      >
        <Input.Password className="input" />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit" className="button">
          REGISTER
        </Button>
      </Item>
      <Item>
        <a href="/login">Already have an account? Log in.</a>
      </Item>
    </AntdForm>
  );
}
