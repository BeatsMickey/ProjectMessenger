export const ADD_CHAT = 'ACTIONS::ADD_CHAT';
export const REMOVE_CHAT = "ACTIONS::REMOVE_CHAT";
export const ADD_MESSAGE = 'ACTIONS::ADD_MESSAGE';
export const REMOVE_MESSAGE = "ACTIONS::REMOVE_MESSAGE";

export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});

export const removeChat = (id) => ({
    type: REMOVE_CHAT,
    id,
});

export const addMessage = (chatId, text, user_id, name) => ({
    type: ADD_MESSAGE,
    chatId,
    text,
    user_id,
    name
});

export const removeMessage = (chatId, id) => ({
    type: REMOVE_MESSAGE,
    chatId,
    id,
});