import React, { useState, useCallback, useEffect, useRef } from "react";
import MessageField from './MessageField';
import MessageForm from "./MessageForm";



export default function App(props) {
    const [messages, changeMessages] = useState(props.messages);

    const addMessage = (text) => {
        changeMessages([...messages, {id:messages.length, user_id:2, text: text, name: 'man'}, botAnswer()]);

    }

    const delMessage = (id) => {
        const array = [...messages];
        for(let i = 0; i <= array.length - 1; i++) {
            if(array[i].id === id) {
                array.splice(i, 1);
                break;
            }
        }
        changeMessages(array);
    }

    const botAnswer = () => {
        return {id:messages.length+1, user_id:1, text: 'Очень  интересно', name: 'bot'}
    }

    return (
        <>
            <MessageField messages={messages} delMessage={delMessage} />
            <MessageForm addMessage={addMessage} />
        </>
    );
}