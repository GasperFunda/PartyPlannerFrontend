import { CalendarFilled } from "@ant-design/icons";
import { Form as AntdForm, Button, TimePicker, DatePicker } from "antd";

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
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          <Item
            label={
              <p style={{ fontSize: "23px", marginTop: "30px" }}>
                This party will start at
              </p>
            }
            rules={[
              {
                required: true,
                message: "Please enter the party date.",
              },
            ]}
            name="date"
            colon={false}
          >
            <DatePicker
              placeholder={`${new Date()}`}
              bordered={false}
              style={{ borderBottom: "2px solid #8ee4af", fontSize: "23px" }}
            />
          </Item>

          <Item
            rules={[
              {
                required: true,
                message: "Please enter the party time.",
              },
            ]}
            name="time"
            colon={false}
          >
            <TimePicker
              placeholder={`20:00:00`}
              bordered={false}
              style={{ borderBottom: "2px solid #8ee4af", fontSize: "23px" }}
            />
          </Item>
        </div>
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
