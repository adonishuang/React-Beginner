import './App.css';
import {User} from './User'
function App() {
    // const names = ["Pedro","Jake","Jessica","Mike","Dustin"]
    const users = [
        {name: "Pedro", age: 21}, {name: "Jake", age: 25}, {name: "Jessica", age: 45}
    ]
    return (
        <div className="App">
            {users.map((user, key) => {
                return (
                    <User name={user.name} age={user.age}/>
                )
            })}
        </div>
    );
}

export default App;
