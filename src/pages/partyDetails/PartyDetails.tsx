import { Button, Space, Card, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import testImage from "./testImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import Wishlist from "./components/Wishlist";
import Comments from "./components/Comments";
import Invitees from "./components/Invitees";
import ShoppingList from "./components/ShoppingList";
import { User } from "../../types/user";
import { Comment } from "../../types/comment";
import "./PartyDetails.css";
import { stat } from "fs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PartyResponse } from "../../types/party";
import axios from "axios";

const { TabPane } = Tabs;

const goingClass = "attendanceButtonGoing";
const maybeClass = "attendanceButtonMaybe";
const cantGoClass = "attendanceButtonCantGo";

function removePressedClasses() {
  document
    .getElementsByClassName(goingClass)[0]
    .classList.remove(goingClass + "Pressed");
  document
    .getElementsByClassName(maybeClass)[0]
    .classList.remove(maybeClass + "Pressed");
  document
    .getElementsByClassName(cantGoClass)[0]
    .classList.remove(cantGoClass + "Pressed");
}

function goingPressed() {
  removePressedClasses();
  document
    .getElementsByClassName(goingClass)[0]
    .classList.add(goingClass + "Pressed");

  // TODO: call DB
}

function maybePressed() {
  removePressedClasses();
  document
    .getElementsByClassName(maybeClass)[0]
    .classList.add(maybeClass + "Pressed");

  // TODO: call DB
}

function cantGoPressed() {
  removePressedClasses();
  document
    .getElementsByClassName(cantGoClass)[0]
    .classList.add(cantGoClass + "Pressed");

  // TODO: call DB
}

export default function PartyDetails(this: any) {
  const { id } = useParams();
  const [isPartyHost, setIsPartyHost] = useState(false);
  const [goingNum, setGoingNum] = useState(0);
  const [maybeNum, setMaybeNum] = useState(0);
  const [cantGoNum, setCantGoNum] = useState(0);
  const [userSelected, setUserSelected] = useState(0);
  const [likes, setLikes] = useState(0);
  const [userLikedParty, setUserLikedParty] = useState(false);
  const [party, setParty] = useState({} as PartyResponse);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/parties/${id}`).then((res) => {
      setParty(res.data);
      setLikes(res.data.likes);
      if (res.data.fk_user_host === localStorage.getItem("userID")) {
        setIsPartyHost(true);
      }
    });
  }, []);
  // 0: not selected yet, 1: going, 2: maybe, 3: cantGo
  var attendanceStatus = 0;
  var invitees = [];
  var comments: Comment[] = [];

  var status = 0;
  for (let i = 0; i < 10; i++) {
    invitees.push(
      new User(
        i,
        "Jože",
        "Test" + i,
        "joze.test@gmail.com",
        status,
        "profilepicsample.png"
      )
    );
    comments.push(
      new Comment(
        i,
        new User(
          i,
          "Jože",
          "Test" + i,
          "joze.test@gmail.com",
          status,
          "profilepicsample.png"
        ),
        "comment no. " + i
      )
    );
    status++;
    if (status === 4) status = 0;
  }

  return (
    <div className="partyDetailsBody">
      <img src={testImage} className="partyDetailsImage" />
      <Card
        className="partyDetailsInfoContainer"
        title={
          <span className="partyDetailsPartyTitle">{party.partyName}</span>
        }
      >
        <div className="partyDetailsImportantInfo">
          <Space>
            <FontAwesomeIcon icon={faLocationDot} fontSize="25px" />
            <Text className="partyDetailsInfoText">{party.location}</Text>
          </Space>
          <Space>
            <FontAwesomeIcon icon={faCalendarDays} fontSize="21px" />
            <Text className="partyDetailsInfoText">{party.dateTime}</Text>
          </Space>
          <Space>
            <FontAwesomeIcon icon={faNoteSticky} fontSize="21px" />
            <Text className="partyDetailsInfoText">{party.description}</Text>
          </Space>
        </div>
        <div className="partyDetailsAttendanceInfo">
          <Space>
            <Card
              className="attendanceCard attendanceCardGoing"
              title={<span className="attendanceCardTitle">GOING</span>}
            >
              0
            </Card>
            <Card
              className="attendanceCard attendanceCardMaybe"
              title={<span className="attendanceCardTitle">MAYBE</span>}
            >
              0
            </Card>
            <Card
              className="attendanceCard attendanceCardCantGo"
              title={<span className="attendanceCardTitle">CAN'T GO</span>}
            >
              0
            </Card>
          </Space>
          {!isPartyHost ? (
            <Space>
              <Button
                type="primary"
                className={
                  "button attendanceButton attendanceButtonGoing" +
                  (attendanceStatus === 1
                    ? " attendanceButtonGoingPressed"
                    : "")
                }
                size="large"
                onClick={goingPressed}
              >
                GOING
              </Button>
              <Button
                type="primary"
                className={
                  "button attendanceButton attendanceButtonMaybe" +
                  (attendanceStatus === 2
                    ? " attendanceButtonMaybePressed"
                    : "")
                }
                size="large"
                onClick={maybePressed}
              >
                MAYBE
              </Button>
              <Button
                type="primary"
                className={
                  "button attendanceButton attendanceButtonCantGo" +
                  (attendanceStatus === 3
                    ? " attendanceButtonCantGoPressed"
                    : "")
                }
                size="large"
                onClick={cantGoPressed}
              >
                CAN'T
              </Button>
            </Space>
          ) : (
            <></>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            className="button"
            style={{ color: "white" }}
            onClick={() => {
              if (userLikedParty) {
                setLikes(likes - 1);
              } else {
                setLikes(likes + 1);
              }
              setUserLikedParty(!userLikedParty);
            }}
          >
            {!userLikedParty ? "Like this party" : "Unlike this party"}
          </Button>
          <p>Number of likes on this party: {likes}</p>
        </div>
        <Tabs className="partyDetailsInfoFromUsers" defaultActiveKey="1">
          <TabPane tab="Wishlist" key="1">
            <Wishlist />
          </TabPane>
          <TabPane tab="Comments" key="2">
            <Comments comments={comments} />
          </TabPane>
          <TabPane tab="Invited" key="3">
            <Invitees invitees={invitees} />
          </TabPane>
          {isPartyHost ? (
            <TabPane tab="Shopping list" key="4">
              <ShoppingList />
            </TabPane>
          ) : (
            <></>
          )}
        </Tabs>
      </Card>
    </div>
  );
}
