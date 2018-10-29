import { UPDATE_PEOPLE, SHOW_ERROR } from '../actions/user-actions';

export default function userReducer(state = [], { type, payload }) {
  switch (type) {
  case UPDATE_PEOPLE:
    return payload.people;
  case SHOW_ERROR:
    return state;
  default:
    return state;
  }
}
