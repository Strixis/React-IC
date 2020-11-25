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

const Message = (props) => <div>{ props.text }</div>;
const MessageList = (props) => {
    return props.messages.map((message) => <Message text={ message } />)
};

ReactDom.render(
    <MessageList messages={ messages } />,
    document.getElementById('root'),
);