// import AsyncStorage from '@react-native-community/async-storage';
import {createContext} from 'react';
import {isLogin, isLogout} from './type';
let initialValue = {
  isLogin: false,
  authLoad: false,
};
const reducerReact = (state, action) => {
  switch (action.type) {
    case isLogin: {
      return {...state, isLogin: true, authLoad: false};
    }
    case isLogout: {
      return {...state, isLogin: false, authLoad: false};
    }
    default:
      throw new Error();
  }
};
const ContextReact = createContext();

export {initialValue, reducerReact, ContextReact};
