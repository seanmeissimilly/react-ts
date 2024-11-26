import Task from "./Task";

type Props = {
  taskList: string[];
  taskDelete: (index: number) => void;
};

const TaskList = ({ taskList, taskDelete }: Props) => {
  return (
    <div className="taskList">
      {taskList.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => taskDelete(index)}></Task>
      ))}
    </div>
  );
};

export default TaskList;
