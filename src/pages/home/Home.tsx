import { PlusOutlined } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import Card from "./Card";
import PartyFilters from "./PartyFilters";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { PartyResponse } from "../../types/party";
import moment from "moment";

export default function Home() {
  const [parties, setParties] = useState([] as PartyResponse[]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/parties`).then((res) => {
      setParties(res.data);
    });
  }, []);

  return (
    <div className="homeBody">
      <PartyFilters></PartyFilters>
      <Row justify="space-around">
        {parties.map((party) => (
          <Col
            key={party._id.toString()}
            xs={{ span: 18 }}
            sm={{ span: 14 }}
            md={{ span: 10 }}
            lg={{ span: 7 }}
          >
            <Card
              id={party._id}
              name={party.partyName}
              date={moment(party.dateTime, "MMMM Do YYYY hh:mm").toDate()}
              location={party.location}
              imageLink="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </Col>
        ))}
      </Row>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined style={{ fontSize: "36px" }} />}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#5cdb95",
          border: "none",
          position: "fixed",
          zIndex: 100,
          right: 50,
          bottom: 50,
        }}
        onClick={() => (window.location.href = "/create-party")}
      ></Button>
    </div>
  );
}
