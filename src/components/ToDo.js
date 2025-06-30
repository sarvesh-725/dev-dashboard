import { useState } from "react";

function ToDo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([
        { text: "Task1", done: false },
        { text: "Task2", done: false },
        { text: "Task3", done: false }
    ]);

    const handleChange = (e) => setTask(e.target.value);

    const handleAdd = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { text: task, done: false }]);
            setTask("");
        }
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleDone = (index) => {
        const newTasks = tasks.map((t, i) =>
            i === index ? { ...t, done: !t.done } : t
        );
        setTasks(newTasks);
    };

    return (
        <div>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={task}
                    placeholder="Enter the task"
                    className="border p-2 w-full rounded text-black dark:text-white bg-white dark:bg-gray-800 dark:border-gray-600"
                    onChange={handleChange}
                />
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
                    onClick={handleAdd}
                >
                    Add
                </button>
            </div>

            <ul className="list-disc list-inside space-y-2">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded"
                    >
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => toggleDone(index)}
                            />
                            <span
                                className={`${
                                    task.done ? "line-through text-gray-500 dark:text-gray-400" : ""
                                }`}
                            >
                                {task.text}
                            </span>
                        </div>
                        <button
  onClick={() => handleDelete(index)}
  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-600 text-sm"
>
  Delete
</button>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
