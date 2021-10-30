export const initialState = {
    Now:false,
}

const STATE_CHANGE = "STATE_CHANGE"

export const state_change = (data) => {
    return {
        type: STATE_CHANGE,
        data
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case STATE_CHANGE:
            return{
                ...state,
                Now:action.data,
            }
        default:
            return state
    }
}

export default reducer