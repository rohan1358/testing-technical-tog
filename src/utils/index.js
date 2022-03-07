import {PixelRatio, Dimensions, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const pixelRatio = PixelRatio.get();

let {height, width} = Dimensions.get('window');

const adjust = size => {
  if (size >= 5) {
    if (PixelRatio <= 1.5) {
      return size - 4;
    } else if (pixelRatio <= 2) {
      return size - 2;
    } else {
      return size;
    }
  } else {
    return size;
  }
};

const getHeight = persen => {
  if (persen <= 100) {
    return (height * persen) / 100;
  } else {
    return persen;
  }
};

const userLogin = value => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('auth', jsonValue);
      resolve(true);
    } catch (e) {
      reject(false);
    }
  });
};

const checkLogin = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const jsonValue = await AsyncStorage.getItem('auth');
      const results = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (results) {
        resolve(results);
      } else {
        reject(false);
      }
    } catch (e) {
      reject(false);
    }
  });
};

const userLogout = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await AsyncStorage.removeItem('auth');
      resolve(true);
    } catch (e) {
      reject(false);
    }
  });
};

const newAlert = (title, message) => {
  Alert.alert(title || '', message || 'halaman belum tersedia');
};

export {adjust, getHeight, userLogin, checkLogin, userLogout, newAlert};
