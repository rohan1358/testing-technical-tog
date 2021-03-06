/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import Main from './src/route';
import {splashScreen} from './assets';
import {useState} from 'react';

const App: () => Node = () => {
  const [finish, setFinish] = useState(false);

  return (
    <>
    <View
          style={{
            flex: 1,
          }}>
          <Main />
        </View>
      {/* {!finish ? (
        <LottieView
          source={splashScreen}
          autoPlay
          onAnimationFinish={() => setFinish(true)}
          loop={false}
        />
      ) : (
        <View
          style={{
            flex: 1,
          }}>
          <Main />
        </View>
      )} */}
    </>
  );
};

export default App;
