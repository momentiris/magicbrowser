

export const UPDATE_PEOPLE = 'users:updatePeople';
export const SHOW_ERROR = 'users:showError';

export const FETCHING_USERS = 'FETCHING_USERS';

export function updatePeople(people) {
  return {
    type: UPDATE_PEOPLE,
    payload: {
      people: people
    }
  };
}

export function showError() {
  return {
    type: SHOW_ERROR
  };
}

export const fetchPeople = () => {
  return dispatch => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => {
        return res.json();
      })
      .then(({ results }) => dispatch(updatePeople(results)))
      .catch(err => {
        console.log(err);
        dispatch(showError());
      });
  };
};
