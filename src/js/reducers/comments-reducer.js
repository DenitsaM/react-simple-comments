import { actionTypes } from '../actions/action-types';

export default function commentsReducer(state = [], action) {
    if (action.type === actionTypes.LOAD_COMMENTS) {
        return [...state, action.comments];
    }
    if (action.type === actionTypes.DELETE_COMMENTS) {
        const newState = Object.assign([], state);
        const indexOfCommentsToDelete = newState.findIndex(comments => {    
                return comments == action.comments            
        })
        newState.splice(indexOfCommentsToDelete, 1);
        return newState;
    }
    if (action.type === actionTypes.UPDATE_COMMENTS) {
        const newOld = Object.assign([], state).reverse();
        const index = action.comments.id;
        newOld[index] = action.comments.comments;
        return newOld.reverse();
    }
    return state;
}