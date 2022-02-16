import { Badge, Avatar, Card, Typography } from "antd";
import React from "react";
import { AvaxLogo } from "./Chains/Logos";

// import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function Dashboard() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            <Text strong>Current Fund Portflio</Text>
          </>
        }
      >
        <a href="#">
          <Badge count="%100">
            <Avatar src={<AvaxLogo />} shape="square" size="default" />
          </Badge>
        </a>
      </Card>
    </div>
  );
}
