import React, { createElement } from 'react';
import ReactDom from 'react-dom';

// Оставлю это пока здесь.
/* const element = createElement(
    'h1',
    { className: 'react-hello' },
    'React is working!',
); */
/* const element = <h1 class="react-hello">React is working with jsx!</h1>; */

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
    let key = 0;
    return props.messages.map((message) => {
        key += 1;
        return <Message key={ key } text={ message } />
    });
};
const Message = (props) => <div>{ props.text }</div>;

const SendMessageButton = (props) => {
    return <button
    onClick={ sendNewMessage }
    >Click Me!</button>
};

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