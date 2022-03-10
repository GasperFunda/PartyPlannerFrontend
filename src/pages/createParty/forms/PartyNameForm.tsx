import { ExperimentOutlined } from "@ant-design/icons";
import { Form as AntdForm, Button, Input } from "antd";
import * as React from "react";

const { Item } = AntdForm;

export interface IPartyNameFormProps {
  data: any;
  onSuccess: (data: any) => void;
}

export default function PartyNameForm({
  data,
  onSuccess,
}: IPartyNameFormProps) {
  return (
    <div>
      <AntdForm
        onFinish={onSuccess}
        requiredMark={"optional"}
        initialValues={data}
      >
        <div style={{ textAlign: "center" }}>
          <ExperimentOutlined style={{ fontSize: "60px" }} />
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>
            Let's choose the title of your party!
          </h1>
        </div>

        <Item
          label={
            <p style={{ fontSize: "23px", marginTop: "60px" }}>
              My party is called
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please enter the party name.",
            },
          ]}
          name="title"
          colon={false}
        >
          <Input
            bordered={false}
            style={{ borderBottom: "2px solid #8ee4af", fontSize: "23px" }}
          />
        </Item>
        <Item wrapperCol={{ offset: 9 }}>
          <Button className="button" type="primary" htmlType="submit">
            Next
          </Button>
        </Item>
      </AntdForm>
    </div>
  );
}
