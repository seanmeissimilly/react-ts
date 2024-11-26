import { useState } from "react";
import TaskList from "./TaskList";

const Todo = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddTask=()=>{

  }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList></TaskList>
    </div>
  );
};

export default Todo;
