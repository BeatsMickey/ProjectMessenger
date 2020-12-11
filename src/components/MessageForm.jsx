import React, { useState, useCallback, useEffect, useRef } from "react";

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';



export default function (props) {
    const [value, setValue] = useState('');

    const inputEl = useRef(null);

    useEffect(()=> {
        inputEl.current.focus();
    })

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
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Введите сообщение"
                    aria-label="Введите сообщение"
                    aria-describedby="basic-addon2"
                    ref={inputEl}
                    value={value}
                    onChange={handleChange}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit" value="Отправить">Отправить</Button>
                </InputGroup.Append>
            </InputGroup>
        </form>
    );
}