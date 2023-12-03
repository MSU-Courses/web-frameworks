import React from "react";

const Example3 = () => {
    // bad use of React.useState
    const [colors, setColors] = React.useState(
        ["🔴 red", "🟢 green", "🔵 blue", "🟡 yellow"]
    )

    // if data is not changing, we don't need to use React.useState
    // const colors = ["🔴 red", "🟢 green", "🔵 blue", "🟡 yellow"];

    return (
        <div>
            <ul>
                {colors.map((color, i) => (<li key={i}>{colors}</li>))}
            </ul>
        </div>
    )
}

export default Example3;