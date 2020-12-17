import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Router from './components/Router';


import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const messages = [{id:1, user_id:2, text:'text1', name: 'man'},{id:2, user_id:1, text: 'text2', name: 'bot'}];

const data = {chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2,3]},
        3: {title: 'Чат 3', messageList: []},
    },
    messages: {
        1: { user_id:1, text:'text1', name: 'man1' },
        2: { user_id:2, text: 'text2', name: 'man2' },
        3: { user_id:3, text: 'text3', name: 'man3' },
    },
};

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('root'),
);
