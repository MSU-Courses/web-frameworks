import React from "react";

// bad use of React.useState
const Example4 = () => {
    const [tasks, setTasks] = React.useState([]);

    const onClickAdd = () => {
        const text = prompt("Enter a task");
        tasks.push(text);
        // good: setTask([...tasks, text]);
    }

    return (
        <div>
            <div>
                {tasks.map((task, i) => (<p key={i}>{task}</p>))}
            </div>
            <button onClick={onClickAdd}>Add Task</button>
        </div>
    )
}

export default Example4;