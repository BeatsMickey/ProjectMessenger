import React, { useState, useCallback, useEffect, useRef } from "react";


export default function Message(props) {

    const delMessage = () => {
        props.delMessage(props.message.id);
    }

    return (
        <div>{props.message.name} : {props.message.text} <span onClick={delMessage}>Удалить</span></div>
    );
}