import React from "react";
import { GiSharpSmile } from "react-icons/gi";
import { FaCouch } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { RiEmotionSadFill } from "react-icons/ri";
import { MdWork, MdFreeBreakfast } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";

import { ImNeutral, ImSmile } from "react-icons/im";
import { Widget, Progress } from "@duik/it";

function getColor(type) {
  switch (type) {
    case "happy":
      return "#62F700";
    case "sad":
      return "#00498B";
    case "neutral":
      return "#EEC945";
    case "hungry":
      return "#E61B22";
    case "hungry-neutral":
      return "#F6BC0F";
    case "lazy":
      return "#737A7B";
    case "active":
      return "#62F700";
    case "work":
      return "#BD9467";
    case "study":
      return "#CF222A";
    case "free":
      return "#1A5C55";
    default:
      return "#EEC945";
  }
}

function getStatusIcon(type) {
  switch (type) {
    case "happy":
      return <ImSmile size={60} color="#62F700" />;
    case "sad":
      return <RiEmotionSadFill size={30} color="#00498B" />;
    case "neutral":
      return <ImNeutral size={60} color="#EEC945" />;
    case "hungry":
      return <GiSharpSmile size={60} color="#E61B22" />;
    case "hungry-neutral":
      return <GiSharpSmile size={60} color="#F6BC0F" />;
    case "lazy":
      return <FaCouch size={60} color="#737A7B" />;
    case "active":
      return <FcSportsMode size={60} />;
    case "work":
      return <MdWork size={60} color="#BD9467" />;

    case "study":
      return <BsBookHalf size={60} color="#CF222A" />;
    case "free":
      return <MdFreeBreakfast size={60} color="#1A5C55" />;

    default:
      return <ImNeutral size={60} color="#EEC945" />;
  }
}

export default function WidgetBar({ percentage, type, text }) {
  return (
    <div>
      <Widget>
        <div
          style={{
            padding: "3%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: "3%" }}>{getStatusIcon(type)}</div>
          <div style={{ width: "100%" }}>
            <h1 style={{ color: getColor(type), fontFamily: "Montserrat" }}>
              {text}
            </h1>
            {typeof percentage == "number" && (
              <Progress fill={percentage}></Progress>
            )}
          </div>
        </div>
      </Widget>
    </div>
  );
}
