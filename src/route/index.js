// In Route.js in a new project

import React, {useEffect, useReducer} from 'react';
import {checkLogin} from '../utils';
import MainRoute from './MainRoute';
import AuthRoute from './AuthRoute';
import {ContextReact, initialValue, reducerReact} from '../context/reducers';
import {changeLogin, changeLogout} from '../context/action';

function Route() {
  const [data, dispatch] = useReducer(reducerReact, initialValue);
  const value = React.useMemo(() => ({data, dispatch}), [data, dispatch]);

  useEffect(() => {
    checkLogin()
      .then(res => {
        dispatch(changeLogin());
      })
      .catch(err => {
        dispatch(changeLogout());
      });
  }, []);

  return (
    <ContextReact.Provider value={value}>
      {!data.authLoad ? (
        <>
          {data.isLogin ? (
            <>
              <MainRoute />
            </>
          ) : (
            <>
              <AuthRoute />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </ContextReact.Provider>
  );
}

export default Route;
