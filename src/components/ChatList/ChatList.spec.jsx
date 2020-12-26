import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { ChatList } from './ChatList';

test('ChatList should be required', () => {
  const tree = renderer.create(<ChatList chats={[
    {name: "Chat 1", id: "1"},
    {name: "Chat 2", id: "2"},
    {name: "chat 3", id: "3"}
  ]} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('ChatList should be rendered with 3 .list_link element', () => {
  const chatList = shallow(<ChatList chats={[
    {name: "Chat 1", id: "1"},
    {name: "Chat 2", id: "2"},
    {name: "chat 3", id: "3"}
  ]} />);
  const lis = header.find('.list_link');

  expect(lis.length).toBe(3);
});
