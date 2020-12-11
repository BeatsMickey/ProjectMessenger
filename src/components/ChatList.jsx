import React, { useState, useCallback, useEffect, useRef } from "react";

import Nav from 'react-bootstrap/Nav';

export default function ChatList() {

    return (
        <Nav variant="tabs" className="flex-column">
            <Nav.Item>
                <Nav.Link href="/"> Chat 1 </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"> Chat 2 </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/"> Chat 3 </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}