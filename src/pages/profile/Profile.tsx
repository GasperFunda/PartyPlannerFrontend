import { Button, Divider } from "antd";
import * as React from "react";

export default function Profile() {
  return (
    <div className="createPartyContainer">
      <img src="profilepicsample.png" alt="profilepic" width={"150px"} />
      <h2>John Doe</h2>
      <hr style={{ width: "250px" }} />
      <h2>Parties held: 3</h2>
      <h2>Parties attended: 15</h2>
      <Button className="button" id="editProfileButton">
        CHANGE USER PROFILE
      </Button>
    </div>
  );
}
