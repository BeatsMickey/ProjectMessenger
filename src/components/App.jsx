import React, { useState, useCallback, useEffect, useRef } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MessageField from "./MessageField";
import MessageForm from "./MessageForm";
import ChatList from "./ChatList";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App(props) {

    const {chatId} = useParams();
    const chatsFromStore = useSelector(state => state.chats.chats)

    return (
        <Container className="p-2">
            <Header />
            <Row>
                <Col sm={chatId ? 2 : 12}>
                    <ChatList />
                </Col>
                {chatId && <Col sm={10}>
                    {chatsFromStore[chatId] ? <MessageField /> : <Redirect to="/" />}
                </Col>}
            </Row>
            {chatId && <MessageForm />}
        </Container>
    );
}
