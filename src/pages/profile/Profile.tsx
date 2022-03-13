import { Button, Divider } from "antd";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { User } from "../../types/user";

export default function Profile() {
  const [user, setUser] = useState({} as User);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/id/${localStorage.getItem(
          "userID"
        )}`
      )
      .then((res) => {
        console.log(res.data);

        setUser(res.data);
      });
  }, []);
  return (
    <div className="createPartyContainer">
      <img src="profilepicsample.png" alt="profilepic" width={"150px"} />
      <h2>
        {user.name} {user.surname}
      </h2>
      <hr style={{ width: "250px" }} />
      <h2>Parties held: 1</h2>
      <h2>Parties attended: 2</h2>
      <Button
        className="button"
        id="editProfileButton"
        onClick={() => (window.location.href = "/edit-profile")}
      >
        CHANGE USER PROFILE
      </Button>
    </div>
  );
}
