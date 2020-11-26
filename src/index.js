import React, { createElement } from 'react';
import ReactDom from 'react-dom';

const messages = ['Hi!', 'How are you?', "I'm fine, thanks."];

const App = (props) => {
    return (
        <div>
            <MessageList messages={ messages } />
            <SendMessageButton />
        </div>
    )
};

const MessageList = (props) => {
    return props.messages.map((message, index) => <Message key={ index } text={ message } />)
};
const Message = (props) => <div>{ props.text }</div>;

const SendMessageButton = (props) => <button onClick={ sendNewMessage }>Click Me!</button>;

function sendNewMessage() {
    messages.push("I'm a new message!");
    render();
};

function render() {
    ReactDom.render(
        <App />,
        document.getElementById('root'),
    );
};

render();
