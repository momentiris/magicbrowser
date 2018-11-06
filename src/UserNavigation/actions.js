import { NAVIGATE_TO_URL } from './types';

export function navigateToUrl(url) {
  return {
    type: NAVIGATE_TO_URL,
    payload: url

  };
}
