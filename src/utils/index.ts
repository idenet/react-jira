import { useEffect, useState } from "react";
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const cleanObject = (object: Object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debpunceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debpunceValue;
};

// const debounce = (func, delay) => {
//   let timer;
//   return (...params) => {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       func(...params)
//     }, delay);
//   }
// }
