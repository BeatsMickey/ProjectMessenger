import React, { useState, useCallback, useEffect, useRef } from "react";
import Header from "./Header";
import Container from 'react-bootstrap/Container';

export default function Profile() {
    return(
            <Container className="p-2">
                <Header />
                <p>Профиль</p>
            </Container>
    )
}