import { Button, Space, Card, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import testImage from "./testImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import Wishlist from './components/Wishlist';
import Comments from "./components/Comments";
import Invitees from "./components/Invitees";
import ShoppingList from "./components/ShoppingList";
import { User } from "../../types/user";
import "./PartyDetails.css";
import { stat } from "fs";

const { TabPane } = Tabs;

const goingClass = "attendanceButtonGoing";
const maybeClass = "attendanceButtonMaybe";
const cantGoClass = "attendanceButtonCantGo";

function removePressedClasses(){
  document.getElementsByClassName(goingClass)[0].classList.remove(goingClass + "Pressed");
  document.getElementsByClassName(maybeClass)[0].classList.remove(maybeClass + "Pressed");
  document.getElementsByClassName(cantGoClass)[0].classList.remove(cantGoClass + "Pressed");
}

function goingPressed(){
  removePressedClasses();
  document.getElementsByClassName(goingClass)[0].classList.add(goingClass + "Pressed");

  // TODO: call DB
}

function maybePressed(){
  removePressedClasses();
  document.getElementsByClassName(maybeClass)[0].classList.add(maybeClass + "Pressed");
  
  // TODO: call DB
}

function cantGoPressed(){
  removePressedClasses();
  document.getElementsByClassName(cantGoClass)[0].classList.add(cantGoClass + "Pressed");
  
  // TODO: call DB
}

export default function PartyDetails(this: any) {
  var isPartyHost = false;
  // 0: not selected yet, 1: going, 2: maybe, 3: cantGo
  var attendanceStatus = 0;
  var invitees = [];

  var status = 0;
  for (let i = 0; i < 10; i++) {
    invitees.push(new User(i, "Jože", "Test" + i, "joze.test@gmail.com", status));
    status++;
    if(status === 4) status = 0;
  }

  return (
    <div className="partyDetailsBody">
      <img src={testImage} className="partyDetailsImage" />
      <Card className="partyDetailsInfoContainer" title={<span className="partyDetailsPartyTitle">Party numero UNO</span>}>
        <div className="partyDetailsImportantInfo">
          <Space>
            <FontAwesomeIcon icon={faLocationDot} fontSize="25px" />
            <Text className="partyDetailsInfoText">Location</Text>
          </Space>
          <Space>
            <FontAwesomeIcon icon={faCalendarDays} fontSize="21px" />
            <Text className="partyDetailsInfoText">Date</Text>
          </Space>
          <Space>
            <FontAwesomeIcon icon={faNoteSticky} fontSize="21px" />
            <Text className="partyDetailsInfoText">Notes</Text>
          </Space>
        </div>
        <div className="partyDetailsAttendanceInfo">
          <Space>
            <Card className="attendanceCard attendanceCardGoing" title={<span className="attendanceCardTitle">GOING</span>}>0</Card>
            <Card className="attendanceCard attendanceCardMaybe" title={<span className="attendanceCardTitle">MAYBE</span>}>0</Card>
            <Card className="attendanceCard attendanceCardCantGo" title={<span className="attendanceCardTitle">CAN'T GO</span>}>0</Card>
          </Space>
          {(!isPartyHost) ?
            <Space>
            <Button
              type="primary"
              className={"button attendanceButton attendanceButtonGoing" + ((attendanceStatus === 1) ? " attendanceButtonGoingPressed" : "")}
              size="large"
              onClick={goingPressed}
            >
              GOING
            </Button>
            <Button
              type="primary"
              className={"button attendanceButton attendanceButtonMaybe" + ((attendanceStatus === 2) ? " attendanceButtonMaybePressed" : "")}
              size="large"
              onClick={maybePressed}
            >
              MAYBE
            </Button>
            <Button
              type="primary"
              className={"button attendanceButton attendanceButtonCantGo" + ((attendanceStatus === 3) ? " attendanceButtonCantGoPressed" : "")}
              size="large"
              onClick={cantGoPressed}
            >
              CAN'T
            </Button>
          </Space>
          : <></>}
        </div>
        <Tabs className="partyDetailsInfoFromUsers" defaultActiveKey="1">
          <TabPane tab="Wishlist" key="1">
            <Wishlist />
          </TabPane>
          <TabPane tab="Comments" key="2">
            <Comments />
          </TabPane>
          <TabPane tab="Invited" key="3">
            <Invitees invitees={invitees}/>
          </TabPane>
          {(isPartyHost) ? 
            <TabPane tab="Shopping list" key="4">
              <ShoppingList />
            </TabPane>
          : <></>}
        </Tabs>
      </Card>
    </div>
  );
}