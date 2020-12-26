import React from 'react';
import { mount, shallow } from 'enzyme';

import { MessageField } from './MessageField';

test('MessageField should be rendered', () => {
  const mockOnSend = jest.fn();
  const form = mount(<MessageField onSend={mockOnSend} />);

  form.find('button').simulate('click');

  expect(mockOnSend.mock.calls.length).toBe(1);
});

test('MessageField should call handleMessageSend', () => {
  const mockHandleMessageSend = jest.fn();
  const form = shallow(<MessageField onSend={() => {}} />);

  const instance = form.instance();

  instance.handleMessageSend = mockHandleMessageSend;
  instance.handleEnterDown({ ctrlKey: true, keyCode: 13 });
  expect(mockHandleMessageSend.mock.calls.length).toBe(1);

  instance.handleEnterDown({ ctrlKey: false, keyCode: 13 });
  expect(mockHandleMessageSend.mock.calls.length).toBe(1);
});

test('MessageForm.handleInputChange shoud change the state', () => {
  const form = shallow(<MessageField onSend={() => {}} />);

  const instance = form.instance();
  instance.handleInputChange({
    target: {
      name: 'author',
      value: 'V',
    }
  });

  expect(form.state('author')).toBe('V');
});
