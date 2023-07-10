export const Task = (props) => {
    return (
        <div>
            <h1 style={{background: props.isCompleted ? "green" : "white"}}>{props.taskName}</h1>
            <button onClick={() => props.handleCompleted(props.id)}>Complete</button>
            <button onClick={() => props.handleDelete(props.id)}>X</button>
        </div>
    )
}
