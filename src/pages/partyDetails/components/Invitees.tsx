import { Button } from "antd";
import { User } from "../../../types/user";

export interface IFormProps {
    isUserHost: boolean
    invitees: User[]
}

const attendanceClasses = ["attendanceCardNotSelected", "attendanceCardGoing", "attendanceCardMaybe", "attendanceCardCantGo"];
const attendanceTexts = ["/", "GOING", "MAYBE", "CAN'T GO"];

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
            <div className="inviteesTab">
                {props.invitees.map((invitee) => {
                    return (
                        <div className="invitee" key={invitee.id}>
                            <img className="inviteePicture" src={"../" + invitee.picture}/>
                            {invitee.name + " " + invitee.surname}
                            <span className={"inviteeStatus " + attendanceClasses[invitee.attendanceStatus]}>{attendanceTexts[invitee.attendanceStatus]}</span>
                        </div>
                    )
                })}
            </div>
        </>
    );
}