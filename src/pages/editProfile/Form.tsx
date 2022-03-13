import * as React from "react";
import { Button, Col, Form as AntdForm, FormInstance, Input, Row } from "antd";
import { UserRegister } from "../../types/user";

const { Item } = AntdForm;
export interface IFormProps {
  onFinish(user: UserRegister): void;
  form: FormInstance;
}

export function Form({ onFinish, form }: IFormProps) {
  return (
    <AntdForm className="form" name="register" onFinish={onFinish} form={form}>
      <Item
        label="First name"
        name="name"
        className="formItem"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Please input your first name" }]}
      >
        <Input
          className="input"
          bordered={false}
          style={{ borderBottom: "2px solid #8ee4af", fontSize: "16px" }}
        />
      </Item>

      <Item
        label="Last name"
        name="surname"
        className="formItem"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Please input your last name" }]}
      >
        <Input
          className="input"
          bordered={false}
          style={{ borderBottom: "2px solid #8ee4af", fontSize: "16px" }}
        />
      </Item>
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
        <Input
          className="input"
          bordered={false}
          style={{ borderBottom: "2px solid #8ee4af", fontSize: "16px" }}
        />
      </Item>
      <Item
        label="Username"
        name="username"
        className="formItem"
        labelCol={{ span: 24 }}
        rules={[{ required: true, message: "Please input your username" }]}
      >
        <Input
          className="input"
          bordered={false}
          style={{ borderBottom: "2px solid #8ee4af", fontSize: "16px" }}
        />
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
        <Input.Password
          className="input"
          bordered={false}
          style={{ borderBottom: "2px solid #8ee4af", fontSize: "16px" }}
        />
      </Item>
      <Item wrapperCol={{ offset: 10 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="button"
          id="editProfileButton"
        >
          CHANGE
        </Button>
      </Item>
    </AntdForm>
  );
}
