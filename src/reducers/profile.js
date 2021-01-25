import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load } from 'actions/profile';

const initialState = new Map({
  loading: false,
  entries: new Map()
});

const profileReducer = handleActions({
  [load]: (state, action) => {
    let entries = {
      id: -1,
      role: 'guest',
      name: 'Guest'
    };

    if (action.payload) entries = {...action.payload};

    return state.set('entries', fromJS(entries))
  }
}, initialState);

export { profileReducer };
