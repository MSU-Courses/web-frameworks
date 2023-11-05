import React from "react";

// This is a bad example of using React.useState
const Example2 = () => {
    const [count, setCount] = React.useState(0);

    // this will not work correctly
    const onClick = () => {
        setCount(count + 1);
        setCount(count * 2);

        // e.g. is count is 10, then first setCount (10 + 1) = 11
        // then second setCount (10 * 2) = 20
        // ...

        // good:
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount * 2);
    }

    return (
        <div>
            <p onClick={onClick}>Count: {count}</p>
        </div>
    );
}

export default Example2;