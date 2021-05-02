import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function Card(props) {
  const [show, setShow] = useState(false);
  return (
    <div>

      <CardContainer style={{ background: props.idx % 2 === 0 ? "#fff" : "#f7f7f7" }}>
        {props.idx === 1 ? <PopContainer>
          <p>Most Popular!</p>
        </PopContainer> : " "}
        <div class="header">Qualified {props.qualified}</div>
        <div className="body" >
          <div className="first">
            <p className="big-num">
              <span style={{ color: "#555555" }}>${props.live_transfer}</span>
              <p className="title">Per Qualified Lead</p>
            </p>
          </div>
          <div className="second">
            <p className="title">Qualified Leads per month</p>
            <p className="title-num">{props.qualified}</p>
          </div>
          <div className="third">
            <p className="title">Platform free per month</p>
            <p className="title-num">${props.platform_price}</p>
          </div>
        </div>
        <div className="foot">${props.final_price}/mo</div>
      </CardContainer>
      <TrialContainer onClick={() => setShow(true)} style={{ background: props.idx === 1 ? "#ee5a36" : "#fff", color: props.idx === 1 ? "#fff" : "#ee5a36" }}>
        <p >Start Your Trial</p>
        <Modal onClose={() => setShow(false)} title={props.qualified} show={show}>
          <p>This is modal body</p>
        </Modal>
      </TrialContainer>
    </div >
  );
}

export default Card;
const CardContainer = styled.div`
  margin-top: 5rem;
  display: block;
  min-width: 15vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #5a6e8f;
  background: #fff;
  font-family:'Roboto', sans-sereif;
  // padding:4rem;
  .header {
    background: #5a6e8f;
    justify-content: center;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
  }
  .foot {
    background: #5a6e8f;
    display: flex;
    bottom: 0;
    height: 2.75rem;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    font-weight:bold;

  }
  .body {
    margin: 1rem;
    font-weight:600;
  }
  .big-num {
    margin: 1rem;
    font-size: xx-large;
  }
  .big-num .title{
      margin: 0.25rem;
      font-size:small;
  }
  .title {
    font-size: small;
  }
  .title-num {
    margin-top:0.5rem ;
    margin-bottom:1rem;
    font-size: 17px;
  }
  .first {
    border-bottom: 1px dashed;
    margin: 1rem;
    font-size: small;
  }
  .second {
    border-bottom: 1px dashed;
    margin: 1rem;
    font-size: small;
  }
`;

const TrialContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  border:1px solid #ee5a36;
  min-width: 15vw;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size:14px;
  cursor:pointer;
`;

const PopContainer = styled.div`
  display:flex;
  margin-top: -2.5rem;
  display: flex;
  min-width: 15vw;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: #ee5a36;
  font-size:16px;

`;