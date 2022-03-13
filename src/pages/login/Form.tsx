import { LoginOutlined } from "@ant-design/icons";
import { Button, Form as AntdForm, Input } from "antd";
import { UserLogin } from "../../types/user";

const { Item } = AntdForm;

export interface IFormProps {
  onFinish(user: UserLogin): void;
}

export default function Form({ onFinish }: IFormProps) {
  return (
    <AntdForm name="login" className="form" onFinish={onFinish}>
      <Item wrapperCol={{ offset: 8 }}>
        <LoginOutlined style={{ fontSize: "60px", color: "white" }} />
      </Item>
      <Item
        label="Username"
        name="username"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Please input your username" }]}
      >
        <Input className="input" />
      </Item>
      <Item
        label="Password"
        name="password"
        labelCol={{ span: 24, offset: 0 }}
        rules={[{ required: true, message: "Please input your password" }]}
      >
        <Input.Password className="input" />
      </Item>
      <Item wrapperCol={{ offset: 6 }}>
        <a href="#">Forgot your password?</a>
      </Item>
      <Item wrapperCol={{ offset: 6 }}>
        <Button type="primary" htmlType="submit" className="button">
          LOGIN
        </Button>
      </Item>
      <Item wrapperCol={{ offset: 2 }} style={{ marginTop: "20px" }}>
        <a href="/register">
          <u>Don't have an account yet? Register now.</u>
        </a>
      </Item>
    </AntdForm>
  );
}
