import * as actionType from './actionTypes'

let idPrevItem = -1;

function reducer(state = [], action) {
    switch(action.type) {
        case actionType.ADD_NEW_TASK:
            return [
                ...state,
                {
                    id: ++idPrevItem,
                    desc: action.payload.desc
                }
            ]
        case actionType.REMOVE_TASK:
            return state.filter(n => n.id !== action.payload.id);
        default: 
            return state;
    }
}

export default reducer;