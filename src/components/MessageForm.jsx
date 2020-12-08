import React, { useState, useCallback, useEffect, useRef } from "react";


export default function (props) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMessage(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Сообщение:
                <input type="text" value={value} onChange={handleChange} />
             </label>
            <input type="submit" value="Отправить" />
        </form>
    );
}