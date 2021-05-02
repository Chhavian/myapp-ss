import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function Card() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <CardContainer>
                <div class="header">Qualified 80+</div>
                <div className="body" >
                    Want more than 80 qualified leads each month ?
                </div>
                <div className="foot"></div>
            </CardContainer>
            <TrialContainer >
                <p onClick={() => setShow(true)}>Get in Touch</p>
                <Modal onClose={() => setShow(false)} title="80+" show={show}>
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
  max-width: 15vw;
  height: 335px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #5a6e8f;
  background: #f7f7f7;
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
    background: #f7f7f7;
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
    padding-top: 5rem;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    font-weight:400;
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
  color: #ee5a36;
  cursor:pointer;
`;

