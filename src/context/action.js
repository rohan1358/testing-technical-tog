import {userLogout} from '../utils';
import {isLogout, isLogin} from './type';

export const changeLogin = data => {
  return {type: isLogin, payload: data};
};

export const changeLogout = data => {
  userLogout();
  return {type: isLogout, payload: data};
};
