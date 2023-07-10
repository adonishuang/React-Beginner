import React, {useEffect} from "react";
import {useState} from "react";

export const Text = () => {
    const [text, setText] = useState();
    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        };
    },[])
    return (
        <div>
            <input type="text" onChange={(event) => {
                setText(event.target.value);
            }}/>
            <h1>{text}</h1>
        </div>
    )
}
