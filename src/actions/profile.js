import { createAction } from 'redux-actions';

const load = createAction('[Profile] Load');

const getProfile = () => dispatch => {
  fetch('http://localhost:3000/profile')
    .then((res) => res.json())
    .then((profile) => dispatch(load(profile)))
    .catch((err) => console.log(err))
};

export {
  load,
  getProfile
}
