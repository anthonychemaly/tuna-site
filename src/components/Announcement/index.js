import React from "react";
import {
  EntypoBell,
  EntypoTwitter,
  EntypoWarning,
  EntypoInstagram,
  EntypoCircleWithCross,
} from "react-entypo-icons";
import "../../App.css";

function getColor(type) {
  switch (type) {
    case "bell":
      return "#FF7A75";
    case "warning":
      return "#F7CD29";
    case "twitter":
      return "#1C9CEA";
    case "instagram":
      return "#000000";
    default:
      return "#02017D";
  }
}

function getIcon(type) {
  switch (type) {
    case "bell":
      return (
        <EntypoBell style={{ height: 70, width: 70 }} color={getColor(type)} />
      );
    case "warning":
      return (
        <EntypoWarning
          style={{ height: 70, width: 70 }}
          color={getColor(type)}
        />
      );
    case "twitter":
      return (
        <EntypoTwitter
          style={{ height: 70, width: 70 }}
          color={getColor(type)}
        />
      );
    case "instagram":
      return (
        <EntypoInstagram
          style={{ height: 70, width: 70 }}
          color={getColor(type)}
        />
      );
    default:
      return (
        <EntypoCircleWithCross
          style={{ height: 70, width: 70 }}
          color={getColor(type)}
        />
      );
  }
}

export default function Announcement({ title, text, postedBy, type }) {
  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        borderRadius: 20,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          paddingTop: "3%",
          paddingBottom: "3%",
        }}
      >
        <div style={{ paddingLeft: "7%", paddingRight: "3%" }}>
          {getIcon(type)}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div
            style={{
              width: "100%",
              flexWrap: "wrap",
              wordBreak: "break-word",
              wordWrap: "break-word",
              paddingRight: "3%",
            }}
          >
            <p style={{ fontSize: 25, fontFamily: "Montserrat" }}>{title}</p>
          </div>
          <br></br>
          <div
            style={{
              fontSize: 15,
              width: "100%",
              flexWrap: "wrap",
              wordBreak: "break-word",
              wordWrap: "break-word",
              paddingRight: "3%",
            }}
          >
            <p style={{ fontSize: 18, fontFamily: "Montserrat" }}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
