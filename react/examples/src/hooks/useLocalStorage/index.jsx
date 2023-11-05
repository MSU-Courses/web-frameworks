import { useState, useEffect } from 'react';

// useLocalStorage custom hook
function useLocalStorage(key, initialValue) {
    // State to store our value
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;