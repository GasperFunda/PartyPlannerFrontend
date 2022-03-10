import { CalendarFilled } from "@ant-design/icons";
import { Form as AntdForm, Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const { Item } = AntdForm;

export interface IPartyNotesFormProps {
  data: any;
  onSuccess: (data: any) => void;
  onBack: (data: any) => void;
}

export function PartyNotesForm({
  data,
  onSuccess,
  onBack,
}: IPartyNotesFormProps) {
  return (
    <div>
      <AntdForm onFinish={onSuccess} initialValues={data}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>
            What do you want to tell your guests?
          </h1>
        </div>

        <Item
          label={
            <p style={{ fontSize: "23px", marginTop: "60px" }}>
              Some extra notes:
            </p>
          }
          name="description"
          colon={false}
        >
          <TextArea minLength={15} />
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
