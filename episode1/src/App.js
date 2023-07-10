import './App.css';
import {useState} from "react";
import {Task} from "./Task"

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleInput = (event) => {
        setInputValue(event.target.value)
    }
    const addTask = () => {
        const newTask = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: inputValue,
            isCompleted: false
        }
        setTodoList([...todoList, newTask]);
    }
    const handleDelete = (id) => {
        setTodoList(todoList.filter((task) => {
            return task.id !== id;
        }));
    }
    const handleCompleted = (id) => {
        setTodoList(todoList.map((task) => {
            if (task.id === id) {
                return {...task, isCompleted: true}
            } else {
                return task
            }
        }))
    }
    return (
        <div className="App">
            <div className="addTask">
                <input type="text" onChange={handleInput}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return <Task taskName={task.taskName}
                                 id={task.id}
                                 isCompleted={task.isCompleted}
                                 handleDelete={handleDelete}
                                 handleCompleted={handleCompleted}/>
                })}
            </div>
        </div>
    )
}

export default App;
