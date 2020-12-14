import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const messages = [{id:1, user_id:2, text:'text1', name: 'man'},{id:2, user_id:1, text: 'text2', name: 'bot'}];

ReactDOM.render(
    <App messages={messages} />,
    document.getElementById('root'),
);
