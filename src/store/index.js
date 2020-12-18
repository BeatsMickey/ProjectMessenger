import { createStore, combineReducers } from "redux";

import chatReducer from './chat/reducer';
import profileReducer from './profile/reducer'


const store = createStore(
    combineReducers({
        chats: chatReducer,
        profile: profileReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;