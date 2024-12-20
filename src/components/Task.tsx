

type Props = {
    task: string,
    deleteTask: () => void
}

const Task = ({ task, deleteTask }: Props) => {
    return (
        <div className="task">
            <span>{task}</span>
            <button onClick={deleteTask}>Delete Task</button>
        </div>
    )
}

export default Task