import React, { useState, useCallback, useEffect, useRef } from "react";

import Nav from 'react-bootstrap/Nav';

export default function ChatList(props) {

    const chatListRender = () => {
        const arr = [];
        for(let key in props.chats) {
            arr.push(<Nav.Item>
                        <Nav.Link href={`/chat/${key}`}> {props.chats[key].title} </Nav.Link>
                    </Nav.Item>);
        }
        return arr
    }

    const addChat = () => {
        props.addChat('newChat');
    }

    return (
        <Nav variant="tabs" className="flex-column">
            {chatListRender()}
            <Nav.Item>
                <Nav.Link onClick={addChat}>+</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}