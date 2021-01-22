import React from 'react';
import renderer from 'react-test-renderer';

import { Message } from './Message';

test('Message should be required', () => {
  const tree = renderer.create(<Message
    author={ "Test Author" }
    message={ "It is a test message with some text" } />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
