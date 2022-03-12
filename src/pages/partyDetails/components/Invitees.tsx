import { User } from "../../../types/user";

export interface IFormProps {
    invitees: User[]
}

const attendanceClasses = ["attendanceCardNotSelected", "attendanceCardGoing", "attendanceCardMaybe", "attendanceCardCantGo"];
const attendanceTexts = ["/", "GOING", "MAYBE", "CAN'T GO"];

export default function Invitees(props: IFormProps) {
    return (
        <div className="inviteesTab">
            {props.invitees.map((invitee) => {
                return (
                    <div className="invitee" key={invitee.id}>
                        {invitee.name + " " + invitee.surname}
                        <span className={"inviteeStatus " + attendanceClasses[invitee.attendanceStatus]}>{attendanceTexts[invitee.attendanceStatus]}</span>
                    </div>
                )
            })}
        </div>
    );
}