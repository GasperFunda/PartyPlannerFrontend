import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, Form as AntdForm, Input } from "antd";

const { Item } = AntdForm;

export interface IFormProps {}

export default function Form(props: IFormProps) {
  return (
    <AntdForm className="signInBody" name="login">
      <Icon type="login" />
      <Item
        label="Email"
        name="email"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Please input your email" }]}
      >
        <Input className="input" />
      </Item>
      <Item
        label="Password"
        name="password"
        className="formItem"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Please input your password" }]}
      >
        <Input.Password className="input" />
      </Item>
      <Item>
        <a href="#">Forgot your password?</a>
      </Item>
      <Item>
        <Button type="primary" htmlType="submit" className="button">
          LOGIN
        </Button>
      </Item>
      <Item>
        <a href="/register">Don't have an account yet? Register now.</a>
      </Item>
    </AntdForm>
  );
}
