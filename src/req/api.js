import axios from 'axios';


export const req = () => {
  return axios.get('https://randomuser.me/api/')


}
