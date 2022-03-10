import { CalendarFilled } from "@ant-design/icons";
import { Form as AntdForm, Button, Input } from "antd";

const { Item } = AntdForm;

export interface IPartyTimeFormProps {
  data: any;
  onSuccess: (data: any) => void;
  onBack: (data: any) => void;
}

export function PartyTimeForm({
  data,
  onSuccess,
  onBack,
}: IPartyTimeFormProps) {
  return (
    <div>
      <AntdForm
        onFinish={onSuccess}
        requiredMark={"optional"}
        initialValues={data}
      >
        <div style={{ textAlign: "center" }}>
          <CalendarFilled style={{ fontSize: "60px" }} />
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>
            When should we come?
          </h1>
        </div>

        <Item
          label={
            <p style={{ fontSize: "23px", marginTop: "60px" }}>
              This party will start at
            </p>
          }
          rules={[
            {
              required: true,
              message: "Please enter the party name.",
            },
          ]}
          name="date"
          colon={false}
        >
          <Input
            placeholder={`${new Date()}`}
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
