import React from "react";
import { Accordion } from "react-bootstrap";
import ChevronUp from "../../../assets/icons/ChevronUp";

const LetUsHelpCard = (props) => {
  return (
    <div className="letushelp-card">
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>
          <div className="faq-q">
            <h5>{props.ques}</h5>
            <ChevronUp className="light-img" color="#1F194D" />
            <ChevronUp className="dark-img" color="#fff" />
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="faq-a">{props.children}</div>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default LetUsHelpCard;
