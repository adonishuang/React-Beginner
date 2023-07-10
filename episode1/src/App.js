import './App.css';

function App() {
    return (
        <div className="App">
            <User name="Pedro" age = {21} email = "pedro@qq.com"/>
            <User name="huang" age = {25} email = "huang@qq.com"/>
            <User name="liu" age = {18} email = "liu@qq.com"/>
        </div>
    );
}

const getName = () => {
    return "pedro"
}

const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}
//组件大写
export default App;
