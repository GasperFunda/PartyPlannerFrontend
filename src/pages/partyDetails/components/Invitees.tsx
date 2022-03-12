import { Button } from "antd";
import { User } from "../../../types/user";


export interface IFormProps {
    isUserHost: boolean
    invitees: User[]
}

const attendanceClasses = ["attendanceNotSelected", "attendanceGoing", "attendanceMaybe", "attendanceCantGo"];
const attendanceContainerClasses = ["attendanceContainerNotSelected", "attendanceContainerGoing", "attendanceContainerMaybe", "attendanceContainerCantGo"];
const attendanceTexts = ["YET TO DECIDE", "GOING", "MAYBE", "CAN'T GO"];

export default function Invitees(props: IFormProps) {
    return (
        <>
            {(props.isUserHost) ?
                <Button
                    type="primary"
                    className="button buttonInviteMore"
                    size="middle"
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
                                <span className={"inviteeStatus rightAndCenter " + attendanceClasses[invitee.attendanceStatus]}>{attendanceTexts[invitee.attendanceStatus]}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}