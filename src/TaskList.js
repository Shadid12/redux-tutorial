import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function TaskList () {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const removeItem = id => {
        dispatch({
            type: 'REMOVE_TASK',
            payload: {
                id
            }
        })
    }
    return (
        state.map(item => (
            <>
                <li>{item.desc}</li>
                <button onClick={() => removeItem(item.id)}>🗑️</button>
            </>
        ))
    )
}

export default TaskList;