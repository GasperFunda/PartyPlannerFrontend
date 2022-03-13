import { Button, Col, Form as AntdForm, FormInstance, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Item } = AntdForm;
export interface IAddCommentProps {
  onFinish(comment: any): void;
  hidden: boolean;
}

export default function AddComment({ onFinish, hidden }: IAddCommentProps) {
  return (
    <AntdForm
      name="comments"
      className="form"
      hidden={hidden}
      onFinish={onFinish}
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
          style={{ left: "35%", marginTop: "25px" }}
        >
          Submit
        </Button>
      </Item>
    </AntdForm>
  );
}
