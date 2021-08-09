import { useState } from 'react';

const ttl = 1000 * 60 * 60;

export function useLocalStorageState (initialValue, key) {
  const [value, setValue] = useState(() => {
    const localStorageInitialValue = localStorage.getItem(key);
    if (!localStorageInitialValue) {
      return initialValue;
    }

    try {
      const data = JSON.parse(localStorageInitialValue);
      const isExpired = Date.now() - data.createdAt > ttl;
      if (isExpired) {
        localStorage.removeItem(key);
        return initialValue;
      }

      return data[key];
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValueInLocalStorageToo = (nextValue) => {
    localStorage.setItem(key, JSON.stringify({
      [key]: nextValue,
      createdAt: Date.now()
    }));
    setValue(nextValue);
  }

  return [value, setValueInLocalStorageToo];
}