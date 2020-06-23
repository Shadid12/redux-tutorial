import * as actionType from './actionTypes';

export const addNewTask = desc => ({
    type: actionType.ADD_NEW_TASK,
    payload: {
        desc
    }
})

export const removeTask = id => ({
    type: actionType.REMOVE_TASK,
    payload: {
        id
    }
})