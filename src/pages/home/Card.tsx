import { Link } from "react-router-dom";

export interface IFormProps {
    name: String,
    date: Date,
    location: String,
    id: String,
    imageLink: string
}

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function Form(props: IFormProps) {
  var date = props.date.getDate() + ". " + monthNames[props.date.getMonth()];

  return (
    <Link to={"/party/" + props.id}>
        <div className="partyCard">
            <div className="partyCardDate">
              <span className="dateText">
                {date}<br/>
                <span>{weekday[props.date.getDay()]}</span>
              </span>
            </div>
            <div className="partyCardImage">
              <img src={props.imageLink}></img>
            </div>
            <div className="partyCardTitleText">
              <span className="partyCardTitle">
                {props.name}
              </span><br/>
              <span className="partyCardText">
                {props.location}
              </span>
            </div>
        </div>
    </Link>
  );
}
