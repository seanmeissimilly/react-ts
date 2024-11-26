import { useState } from "react";
import TaskList from "./TaskList";

const Todo = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTaskList(previousTasks => [...previousTasks, newTask])
    setNewTask("")
  }

  const handleDeleteTask = (index: number) => {
    setTaskList(tasks => tasks.filter((_, i) => i !== index))
  }
  return (
    <div>
      <h1>Tasks List</h1>
      <div className="">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList taskList={taskList} taskDelete={handleDeleteTask}></TaskList>
    </div>
  );
};

export default Todo;
