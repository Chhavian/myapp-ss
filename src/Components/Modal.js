import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';
import FormModal from './FormModal'

function Modal(props) {
    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    return ReactDOM.createPortal(
        <ModalBox>
            <CSSTransition
                in={props.show}
                unmountOnExit
                timeout={{ enter: 0, exit: 300 }}
            >
                <div className="modal" onClick={props.onClose}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h4 className="modal-title">Get Started with SquadVoice</h4>
                        </div>
                        <div className="modal-body"><FormModal title={props.title} /></div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </ModalBox>,
        document.getElementById("root")
    );
};

export default Modal;

const ModalBox = styled.div`
.modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    z-index:100;
  }
  
  .modal.enter-done {
    opacity: 1;
    pointer-events: visible;
  }
  
  .modal.exit {
    opacity: 0;
  }
  
  .modal-content {
    width: 660px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    transform: translateY(-200px);
  }
  
  .modal.enter-done .modal-content {
    transform: translateY(0);
  }
  
  .modal.exit .modal-content {
    transform: translateY(-200px);
  }
  
  .modal-header,
  .modal-footer {
    padding: 0 40px 0 40px;

  }
  .modal-title {
    text-align:center;
    color:#5a6e8f;
    font-size:22px;
    border-bottom: 1px solid #5a6e8f;
  }`