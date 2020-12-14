import React, { useState, useCallback, useEffect, useRef } from "react";

import Toast from 'react-bootstrap/Toast';
import {ToastHeader} from "react-bootstrap";

export default function Message(props) {

    const delMessage = () => {
        props.delMessage(props.message.id);
    }

    return (
        <Toast className="message-toast" onClose={delMessage}>
            <ToastHeader>
                <strong className="mr-auto message-item">{props.message.name} : {props.message.text}</strong>
            </ToastHeader>
        </Toast>
    );
}