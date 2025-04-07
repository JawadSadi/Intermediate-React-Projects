import { useState, useEffect } from "react";

export function useLocaleStorage(initialValue, key) {
  const [value, setValue] = useState(function () {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value]
  );

  return [value, setValue];
}
