import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Nav from "react-bootstrap/Nav";
import { removeChat } from "../store/chat/actions";

export default function ChatItem(props) {
    const dispatch = useDispatch();

    const handleNavigate = useCallback((event, link) => {
        event.preventDefault();
        dispatch(push(link));
    }, [dispatch]);

    const delChat = useCallback(() => {
        dispatch(removeChat(props.chatId));
    }, [dispatch]);

    return (
        <Nav.Item>
            <Nav.Link onClick={(event)=>handleNavigate(event,`/chat/${props.chatId}`)}> {props.title} </Nav.Link><span onClick={delChat}>x</span>
        </Nav.Item>
    );
}