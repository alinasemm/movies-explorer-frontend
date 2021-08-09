import { useEffect } from 'react';

import * as mainApi from './mainApi';
import { useLocalStorageState } from './useLocalStorageState';

export function useAppContext () {
  const [user, setUser] = useLocalStorageState(null, 'user');
  const [token, setToken] = useLocalStorageState('', 'token');
  const appContext = { user, setUser, token, setToken };

  const getUser = () => {
    mainApi.getUser(token)
      .then(setUser)
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (token && !user) {
      getUser();
    }
  }, [token]);

  return appContext;
}
