import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

const initialState = new Map({
  id: -1,
  role: 'guest',
  name: 'Guest',
});

const profileReducer = handleActions({}, initialState);

export { profileReducer };
