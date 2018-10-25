export const FETCH_USER_START = 'api:userStart';
export const FETCH_USER_ERROR = 'api:userError';
export const RECIEVE_USER = 'api:userRecieve';

export function userStart(apiUser) {
  return {
    type: FETCH_USER_START,
    payload: {
      api: apiUser
    }
  };
}

export function userError() {
  return {
    type: FETCH_USER_ERROR,
    payload: {
      api: 'ERROR!'
    }
  };
}

export function userRecieve(apiUser) {
  return {
    type: RECIEVE_USER,
    payload: {
      api: apiUser
    }
  };
}
