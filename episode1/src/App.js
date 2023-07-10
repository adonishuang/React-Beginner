import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [catFact, setCatFact] = useState();
    const handleCat = () => {
        axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFact(res.data.fact);
        })
    }
    useEffect(() => {
        handleCat();
    }, []);
    return (
        <div className="App">
            <button onClick={handleCat}>Generate Cat Fact</button>
            <p>{catFact}</p>
        </div>
    )
}

export default App;
