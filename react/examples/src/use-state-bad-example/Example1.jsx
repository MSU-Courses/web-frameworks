import React from "react";

// This is a bad example of using React.useState
// The count will not increment every second
const Example1 = () => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => {
            // This will not work
            // good: setCount(prevCount => prevCount + 1);
            setCount(count + 1);
        }, 1000);
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
};

export default Example1;