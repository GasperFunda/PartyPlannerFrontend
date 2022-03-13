import { Form as AntdForm, Button, Modal, Input } from "antd";
import { useCallback, useState } from "react";
import { User } from "../../../types/user";
import { InvitationsTableData } from "../../../types/invitations";
import { InvitationTable } from "../../createParty/InvitationTable"
import { useForm } from "antd/lib/form/Form";

const { Item } = AntdForm;

export interface IFormProps {
    isUserHost: boolean
    invitees: User[]
}

const attendanceClasses = ["attendanceNotSelected", "attendanceGoing", "attendanceMaybe", "attendanceCantGo"];
const attendanceContainerClasses = ["attendanceContainerNotSelected", "attendanceContainerGoing", "attendanceContainerMaybe", "attendanceContainerCantGo"];
const attendanceTexts = ["YET TO DECIDE", "GOING", "MAYBE", "CAN'T GO"];

export default function Invitees(props: IFormProps) {
    const [invitations, setInvitations] = useState([] as InvitationsTableData[]);
    const [form] = useForm();
    const [data, setData] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const addInvite = useCallback(
      (data: InvitationsTableData) => {
        setInvitations([...invitations, data]);
        form.resetFields();
      },
      [invitations, form]
    );

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        //TODO: add item do DB
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        //TODO
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal
                className="inviteMoreModal"
                title="Invite more people"
                okButtonProps={{ className: "button" }}
                okText="INVITE"
                cancelButtonProps={{ className: "button redBackground", type: "primary" }}
                cancelText="CANCEL"
                centered={true}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
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
            </Modal>
            {(props.isUserHost) ?
                <Button
                    type="primary"
                    className="button centeredButton"
                    size="middle"
                    onClick={showModal}
                >
                    INVITE MORE
                </Button>
                : <></>}
            <div className="tabContent">
                {props.invitees.map((invitee) => {
                    return (
                        <div className={"listItem " + attendanceContainerClasses[invitee.attendanceStatus]} key={invitee.id}>
                            <img className="picture" src={"../" + invitee.picture} />
                            <div className="inviteeInnerContainer">
                                <span className="userName">{invitee.name + " " + invitee.surname}</span>
                                <span className={"inviteeStatus " + attendanceClasses[invitee.attendanceStatus]}>{attendanceTexts[invitee.attendanceStatus]}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}