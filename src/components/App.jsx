import React, { useState, useCallback, useEffect, useRef } from "react";
import { useParams, Redirect } from 'react-router-dom';
import MessageField from './MessageField';
import MessageForm from "./MessageForm";
import ChatList from "./ChatList";
import Header from "./Header";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App(props) {

    const [chats, changeChats] = useState({
        1: {title: 'Чат 1', messageList: [{id:1, user_id:1, text:'text1', name: 'man1' }]},
        2: {title: 'Чат 2', messageList: [{id:2, user_id:2, text: 'text2', name: 'man2' }, {id:3, user_id:3, text: 'text3', name: 'man3' }]},
        3: {title: 'Чат 3', messageList: []},
    });

    const {chatId} = useParams();

    const addMessage = useCallback((text) => {
        const messageId = chats[chatId].messageList.length + 1;
        changeChats({...chats, [chatId]: {...chats[chatId], messageList: [...chats[chatId]['messageList'], {id: messageId, user_id: 1, text: text, name: 'man' }]}});
    }, [chats]);

    const delMessage = useCallback((id) => {
        const array = [...chats[chatId]['messageList']];
        array.find((elem, index) => {
            if(elem.id === id) {
                array.splice(index, 1);
                return 1
            }
        })
        changeChats({...chats, [chatId]: {...chats[chatId], messageList: array}});
    });

    const addChat = useCallback((name) => {
        const newChatId = Object.keys(chats).length + 1;
        changeChats({...chats, [newChatId]: {title: name, messageList: []}});
    });

    return (
        <Container className="p-2">
            <Header />
            <Row>
                <Col sm={chatId ? 2 : 12}>
                    <ChatList chats={chats} addChat={addChat}/>
                </Col>
                {chatId && <Col sm={10}>
                    {chats[chatId] ? <MessageField chats={chats[chatId]} delMessage={delMessage} /> : <Redirect to="/" />}
                </Col>}
            </Row>
            {chatId && <MessageForm addMessage={addMessage} />}
        </Container>
    );
}