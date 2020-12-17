import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../store/chat/actions";

import Nav from 'react-bootstrap/Nav';

export default function ChatList(props) {

    const chatsFromStore = useSelector(state => state.chats.chats);
    const dispatch = useDispatch();

    const chatListRender = () => {
        console.log(chatsFromStore);
        const arr = [];
        for(let key in chatsFromStore) {
            arr.push(<Nav.Item>
                        <Nav.Link href={`/chat/${key}`}> {chatsFromStore[key].title} </Nav.Link>
                    </Nav.Item>);
        }
        return arr
    }

    const add = () => {
        dispatch(addChat('newChat'));
    }

    return (
        <Nav variant="tabs" className="flex-column">
            {chatListRender()}
            <Nav.Item>
                <Nav.Link onClick={add}>+</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}