import React from "react";

// bad use of React.useState
const Example4 = () => {
    const [task, setTask] = React.useState("");

    const onClickAdd = () => {
        const text = prompt("Enter a task");
        task.push(text);
        // good: setTask([...task, text]);
    }

    return (
        <div>
            <div>
                {task.map((task, i) => (<p key={i}>{task}</p>))}
            </div>
            <button onClick={onClickAdd}>Add Task</button>
        </div>
    )
}

export default Example4;