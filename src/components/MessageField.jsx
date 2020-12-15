import React, { useState, useCallback, useEffect, useRef } from "react";
import Message from './Message';

import BackToDownButton from './BackToDownButton';


export default function MessageField(props) {
    const [backToDownShow, changeBackToDownShow] = useState(false);

    const messageFieldEl = useRef(null);

    const backToDown = useCallback(() => {
        messageFieldEl.current.scrollTop = messageFieldEl.current.scrollHeight;
    })

    useEffect(()=>{
        if(messageFieldEl.current.scrollHeight - (messageFieldEl.current.scrollTop + messageFieldEl.current.clientHeight) < 81) {
            backToDown()
        } else {
            changeBackToDownShow(true)
        }
    }, [props.chats.messageList])

    const scrollChange = () => {
        if(messageFieldEl.current.scrollHeight - (messageFieldEl.current.scrollTop + messageFieldEl.current.clientHeight) < 35) {
            changeBackToDownShow(false);
        } else {
            changeBackToDownShow(true)
        }
    }

    const messageRender = (message) => {
        return <div key={message.id}><Message message={ message } delMessage={props.delMessage} /></div>
    }

    return (
        <div className="message-field" id="messageField" ref={messageFieldEl} onScroll={scrollChange}>
            <div className="title-message-field">{props.chats.title}</div>
            {props.chats.messageList.map(messageRender)}
            <BackToDownButton showButton={backToDownShow} changeShowButton={backToDown}/>
        </div>

    );
}