import { Button, Col, Form as AntdForm, FormInstance, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Item } = AntdForm;
export interface IAddCommentProps {
  onFinish(comment: any): void;
  hidden: boolean;
  form: FormInstance;
}

export default function AddComment({
  onFinish,
  hidden,
  form,
}: IAddCommentProps) {
  return (
    <AntdForm
      name="comments"
      className="form"
      hidden={hidden}
      onFinish={onFinish}
      form={form}
    >
      <Item
        name="content"
        rules={[
          {
            required: true,
            message: "Please enter comment.",
          },
        ]}
      >
        <TextArea style={{ borderRadius: "25px", height: "200px" }}></TextArea>
      </Item>
      <Item>
        <Button
          className="button"
          type="primary"
          htmlType="submit"
          style={{ marginTop: "35px", left: "35%" }}
        >
          Submit
        </Button>
      </Item>
    </AntdForm>
  );
}
