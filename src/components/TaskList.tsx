

type Props = {
  taskList:string[],
  taskDelete:(index:number)=>void
}

const TaskList = ({taskList,taskDelete}: Props) => {
  return (
    <div className="taskList">
      {taskList.map((task,index)=>())}
    </div>
  )
}

export default TaskList