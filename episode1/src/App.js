import './App.css';
import {useState} from "react";


function App() {
    const [showText, setShowText] = useState(true);
    const handleHide = () => {
        setShowText(!showText);
    }
    return (
        <div className="App">
            {showText && <h1>Hello Pedro</h1>}
            <button onClick={handleHide}>Hide/Show</button>
        </div>
    )
}

export default App;
