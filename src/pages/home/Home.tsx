import { Row, Col } from "antd";
import Card from "./Card";
import "./Home.css";

export default function Home() {
  var cols = []

  // TODO: get data form DB
  for (var i = 0; i < 21; i++) {
    cols.push(
      <Col key={i.toString()} xs={{ span: 18 }} sm={{ span: 14 }} md={{ span: 10 }} lg={{ span: 7 }}>
        <Card id="#" name="LIGHT show!" date={new Date()} location="Tyrševa ulica 30, 3000 Maribor" imageLink="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      </Col>
    )
  }

  return (
    <div className="homeBody">
      <Row justify="space-around">
        {cols}
      </Row>
    </div>
  );
}