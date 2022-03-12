import { CalendarFilled, GlobalOutlined } from "@ant-design/icons";
import { Form as AntdForm, Button, Input } from "antd";

const { Item } = AntdForm;

export interface IPartyLocationFormProps {
  data: any;
  onSuccess: (data: any) => void;
  onBack: (data: any) => void;
}

export default function PartyLocationForm({
  data,
  onSuccess,
  onBack,
}: IPartyLocationFormProps) {
  return (
    <div>
      <AntdForm
        onFinish={onSuccess}
        requiredMark={"optional"}
        initialValues={data}
      >
        <div style={{ textAlign: "center" }}>
          <GlobalOutlined style={{ fontSize: "60px" }} />
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>
            Where will you party?
          </h1>
        </div>

        <Item
          label={
            <p style={{ fontSize: "23px", marginTop: "60px" }}>
              My party will be at/in
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please enter the party location",
            },
          ]}
          name="location"
          colon={false}
        >
          <Input
            placeholder={"Koroška cesta 14, 2000 Maribor"}
            bordered={false}
            style={{ borderBottom: "2px solid #8ee4af", fontSize: "23px" }}
          />
        </Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Item>
            <Button
              onClick={() => onBack(data)}
              type="primary"
              danger
              className="buttonDanger"
            >
              Back
            </Button>
          </Item>
          <Item wrapperCol={{ offset: 9 }}>
            <Button className="button" type="primary" htmlType="submit">
              Next
            </Button>
          </Item>
        </div>
      </AntdForm>
    </div>
  );
}
