import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [predictAge,setPredictAge] = useState(null);
    const handleValue = (event) => {
        setInputValue(event.target.value)
    }
    const handlePredict = () => {
        axios.get(`https://api.agify.io/?name=${inputValue}`).then((res)=>{
            setPredictAge(res.data)
        })
    }
    return (
        <div className="App">
            <input type="text" placeholder="huang...." onChange={handleValue}/>
            <button onClick={handlePredict}>Predict Age</button>
            <p>
                <div>PredictName:{predictAge?.name}</div>
                <div>PredictAge:{predictAge?.age}</div>
                <div>PredictCount:{predictAge?.count}</div>
            </p>
        </div>
    )
}

export default App;
