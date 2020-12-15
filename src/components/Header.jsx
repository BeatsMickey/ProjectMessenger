import React, { useState, useCallback, useEffect, useRef } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

export default function Header() {
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Messenger</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Список контактов</Nav.Link>
                <Nav.Link href="#features">Добавить чат</Nav.Link>
                <Nav.Link href="/profile/">Профиль</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
                <Button variant="outline-secondary">Поиск</Button>
            </Form>
        </Navbar>
    );
}