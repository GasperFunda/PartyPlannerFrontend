import { Button, Space, Card, Tabs } from "antd";
import Text from "antd/lib/typography/Text";
import testImage from "./testImage.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import * as React from "react";

const { TabPane } = Tabs;

export default function PartyDetails() {
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
            <Card className="attendanceCard attendanceCardGoing" title={<span className="attendanceCardTitle">GOING</span>}>Card content</Card>
            <Card className="attendanceCard attendanceCardMaybe" title={<span className="attendanceCardTitle">MAYBE</span>}>Card content</Card>
            <Card className="attendanceCard attendanceCardCantGo" title={<span className="attendanceCardTitle">CAN'T GO</span>}>Card content</Card>
          </Space>
          <Space>
            <Button
              type="primary"
              className="button attendanceButton attendanceButtonGoing"
              size="large"
            >
              GOING
            </Button>
            <Button
              type="primary"
              className="button attendanceButton attendanceButtonMaybe"
              size="large"
            >
              MAYBE
            </Button>
            <Button
              type="primary"
              className="button attendanceButton attendanceButtonCantGo"
              size="large"
            >
              CAN'T
            </Button>
          </Space>
        </div>
        <Tabs className="partyDetailsInfoFromUsers" defaultActiveKey="1">
          <TabPane tab="Wishlist" key="1">
            Your wishes here
          </TabPane>
          <TabPane tab="Comments" key="2">
            Comments here
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}
