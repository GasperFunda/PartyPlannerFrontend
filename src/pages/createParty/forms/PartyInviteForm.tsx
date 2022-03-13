import { Form as AntdForm, Button, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { InvitationsTableData } from "../../../types/invitations";
import { InvitationTable } from "../InvitationTable";

const { Item } = AntdForm;
export interface IPartyInviteFormProps {
  data: any;
  onSuccess: (data: any) => void;
  onBack: (data: any) => void;
}

export default function PartyInviteForm({
  data,
  onSuccess,
  onBack,
}: IPartyInviteFormProps) {
  const [invitations, setInvitations] = useState([] as InvitationsTableData[]);
  const [form] = useForm();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then((res) => setInvitations(res.data));
  }, []);

  const addInvite = useCallback(
    (data: InvitationsTableData) => {
      setInvitations([...invitations, data]);
      form.resetFields();
    },
    [invitations, form]
  );
  return (
    <>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px", textAlign: "center" }}>
            Let's invite some people!
          </h1>
        </div>
        <InvitationTable data={invitations} />
        <AntdForm
          layout="inline"
          style={{ marginBottom: "35px" }}
          onFinish={addInvite}
          form={form}
        >
          <Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter the name of the guest.",
              },
            ]}
          >
            <Input className="input" />
          </Item>
          <Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter the email of the guest.",
              },
            ]}
          >
            <Input className="input" />
          </Item>
          <Item>
            <Button className="button" htmlType="submit">
              Add
            </Button>
          </Item>
        </AntdForm>
      </div>
      <div>
        <AntdForm
          onFinish={() => onSuccess(invitations)}
          requiredMark={"optional"}
          initialValues={data}
          name="inviteForm"
        >
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
                Send invitations
              </Button>
            </Item>
          </div>
        </AntdForm>
      </div>
    </>
  );
}
