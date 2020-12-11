import React, { useState, useCallback, useEffect, useRef } from "react";
import MessageField from './MessageField';
import MessageForm from "./MessageForm";
import ChatList from "./ChatList";
import Header from "./Header";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App(props) {
    const [messages, changeMessages] = useState(props.messages);

    const addMessage = useCallback((text) => {
        changeMessages([...messages, {id:messages.length, user_id:2, text: text, name: 'man'}]);
    }, [messages])

    const delMessage = useCallback((id) => {
        const array = [...messages];
        array.find((elem, index) => {
            if(elem.id === id) {
                array.splice(index, 1);
                return 1
            }
        })
        changeMessages(array);
    })

    return (
        <Container className="p-2">
            <Header />
            <Row>
                <Col sm={2}>
                    <ChatList />
                </Col>
                <Col sm={10}>
                    <MessageField messages={messages} delMessage={delMessage} />
                </Col>
            </Row>
            <MessageForm addMessage={addMessage} />
        </Container>
    );
}