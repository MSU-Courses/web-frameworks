import React from "react";

const Example3 = () => {
    const [id, setId] = React.useState(0)

    const label = React.useMemo(() => {
        if (id === 0) {
            return 'You are zero';
        } else if (id === 1) {
            return 'Wow, you are one';
        } else if (id ===2 ) {
            return "Whoo, bro, you are two";
        }
        else {
            return "Bro, You are not zero, one or two";
        }
    })

    return (
        <div>{label}</div>
    )
}

export default Example3;