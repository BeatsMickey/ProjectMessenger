import React, { useState, useCallback, useEffect, useRef } from "react";
import Message from './Message';

import BackToDownButton from './BackToDownButton';


export default function MessageField(props) {
    const [backToDownShow, changeBackToDownShow] = useState(false);

    const messageFieldEl = useRef(null);

    useEffect(()=>{
        if(messageFieldEl.current.scrollHeight - (messageFieldEl.current.scrollTop + messageFieldEl.current.clientHeight) < 81) {
            messageFieldEl.current.scrollTop = messageFieldEl.current.scrollHeight;
        } else {
            changeBackToDownShow(true)
        }
    }, [props.messages])

    const backToDown = useCallback(() => {
        messageFieldEl.current.scrollTop = messageFieldEl.current.scrollHeight;
    })

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
            {props.messages.map(messageRender)}
            <BackToDownButton showButton={backToDownShow} changeShowButton={backToDown}/>
        </div>
    );
}