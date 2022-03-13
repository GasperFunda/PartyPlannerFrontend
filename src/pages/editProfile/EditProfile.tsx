import { Col, Row, Form as AntdForm, Divider, message } from "antd";
import axios from "axios";
import * as React from "react";
import { useCallback, useEffect } from "react";
import { IUser } from "../../types/user";
import { Form } from "./Form";

export interface IEditProfileProps {}

export default function EditProfile(): React.ReactElement {
  const handleFinish = useCallback((user: IUser) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/users/${localStorage.getItem(
          "userID"
        )}`,
        user
      )
      .then(() => {
        message.success("Credentials succesfully updated!");
      });
  }, []);
  const [form] = AntdForm.useForm();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/id/${localStorage.getItem(
          "userID"
        )}`
      )
      .then((res) => {
        form.setFieldsValue(res.data);
      });
  }, []);
  return (
    <Row className="editProfileContainer">
      <Col flex={1}>
        <Form onFinish={handleFinish} form={form} />
      </Col>
      <Divider
        type="vertical"
        className="colorfulDivider"
        style={{
          height: "100%",
          border: "2px solid #F47884",
        }}
      />
      <Col
        flex={1}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img src="profilepicsample.png" alt="profilepic" width={"250px"} />
      </Col>
    </Row>
  );
}
