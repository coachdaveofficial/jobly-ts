import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function useLocalStorage(key: string, firstValue: string | null = null): [string | null, Dispatch<SetStateAction<string | null>>] {
  const initialValue = localStorage.getItem(key) || firstValue;

  const [item, setItem] = useState<string | null>(initialValue);

  useEffect(() => {
    console.debug("hooks useLocalStorage useEffect", "item=", item);

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, item);
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;
