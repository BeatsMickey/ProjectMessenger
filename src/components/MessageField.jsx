import React, { useState, useCallback, useEffect, useRef } from "react";
import Message from './Message';
import MessageForm from './MessageForm';

export default function MessageField(props) {


    const messageRender = (message) => {
        return <div key={message.id}><Message message={ message } delMessage={props.delMessage} /></div>
    }

    return (
        props.messages.map(messageRender)
    );
}