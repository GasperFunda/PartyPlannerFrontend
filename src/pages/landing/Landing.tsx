import { Button, Space } from "antd";
import Text from "antd/lib/typography/Text";
import * as React from "react";

export default function Landing() {
  return (
    <Space className="landingBody">
      <Text className="landingText">LET'S PARTY. Without stress.</Text>
      <Button
        type="primary"
        className="button"
        size="large"
        onClick={() => (window.location.href = "/login")}
      >
        JOIN NOW
      </Button>
    </Space>
  );
}
