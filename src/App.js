import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@duik/it/dist/styles.css";
import { Widget, TextField, TextArea, Button } from "@duik/it";
import Announcement from "../src/components/Announcement";
import WidgetBar from "./components/WidgetBar";
import NavBar from "./components/NavBar";
import axios from "axios";

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [stats, setStats] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("https://tuna-back.herokuapp.com/front-page").then((res) => {
      setAnnouncements(res.data.announcements);
      setStats(res.data.stats);
    });
  }, []);

  function sendMessage() {
    axios
      .post("https://tuna-back.herokuapp.com/message", {
        postedBy: name,
        text: message,
      })
      .then((res) => {
        alert("Message Posted");
      });
  }

  return (
    <div>
      <NavBar></NavBar>
      <div style={{ padding: "3%" }}>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "3%",
            }}
            sm={12}
            md={6}
          >
            <Widget
              style={{
                width: "100%",
                height: "80vh",
                overflowY: "scroll",
                display: "flex",
              }}
            >
              {announcements !== undefined &&
                announcements.map((item, index) => (
                  <div style={{ padding: "2%" }} key={item._id}>
                    <Announcement
                      type={item.type}
                      text={item.text}
                      title={item.title}
                    />
                  </div>
                ))}
            </Widget>
          </Col>
          {stats[0] !== undefined &&
            stats[1] !== undefined &&
            stats[2] !== undefined &&
            stats[3] !== undefined && (
              <Col sm={12} md={6}>
                <Row style={{ paddingBottom: "3%" }}>
                  <Col>
                    <WidgetBar
                      type={stats[0].type}
                      text={stats[0].text !== undefined && stats[0].text}
                      percentage={
                        stats[0].percentage !== undefined && stats[0].percentage
                      }
                    />
                  </Col>
                  <Col>
                    <WidgetBar
                      type={stats[1].type && stats[1].type}
                      text={stats[1].text && stats[1].text}
                      percentage={
                        stats[1].percentage !== undefined && stats[1].percentage
                      }
                    />
                  </Col>
                </Row>
                <Row style={{ paddingBottom: "3%" }}>
                  <Col>
                    <WidgetBar
                      type={stats[2].type && stats[2].type}
                      text={stats[2].text && stats[2].text}
                      percentage={
                        stats[2].percentage !== undefined && stats[2].percentage
                      }
                    />{" "}
                  </Col>
                  <Col>
                    <WidgetBar
                      type={stats[3].type && stats[3].type}
                      text={stats[3].text && stats[3].text}
                      percentage={
                        stats[3].percentage !== undefined && stats[3].percentage
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Widget>
                      <div style={{ padding: "3%" }}>
                        <h1 style={{ fontFamily: "Montserrat" }}>
                          What are you waiting for!?
                        </h1>
                        <h2 style={{ fontFamily: "Montserrat" }}>
                          Send Tuna a message now!
                        </h2>
                        <TextField
                          placeholder="Name"
                          label="Name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        ></TextField>
                        <TextArea
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          rows={5}
                          placeholder="Write your message here"
                          label="Message"
                        ></TextArea>
                        <Button
                          title="Send Now"
                          primary
                          onClick={() => {
                            sendMessage();
                          }}
                        >
                          Send Now
                        </Button>
                      </div>
                    </Widget>
                  </Col>
                </Row>
              </Col>
            )}
        </Row>
      </div>
    </div>
  );
}

export default App;
