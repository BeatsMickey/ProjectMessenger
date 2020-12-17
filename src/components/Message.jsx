import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Toast from 'react-bootstrap/Toast';
import { ToastHeader } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { removeMessage } from "../store/chat/actions";

export default function Message(props) {

    const {chatId} = useParams();
    const dispatch = useDispatch();

    const delMessage = () => {
        dispatch(removeMessage(chatId, props.message.id));
    }

    return (
        <Toast className="message-toast" onClose={delMessage}>
            <ToastHeader>
                <strong className="mr-auto message-item">{props.message.name} : {props.message.text}</strong>
            </ToastHeader>
        </Toast>
    );
}