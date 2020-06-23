import React from 'react';
import { useDispatch } from "react-redux";
import {addNewTask} from './actions'

function Taskform () {
    const [desc, setDesc] = React.useState('');
    const dispatch = useDispatch();

    const handleChange = event => setDesc(event.target.value)

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addNewTask(desc));
        setDesc('')
    }

    return (
        <>
            <input placeholder="Name" onChange={handleChange} value={desc}/>
            <button onClick={handleSubmit}>Create</button>
        </>
    )
}

export default Taskform;