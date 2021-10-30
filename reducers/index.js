import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import post from './post';
import test from './test';

const rootReducer = (state = {}, action) => {
    switch (action.type){
        case HYDRATE:
            return action.payload;
        default:{
            const combineReducer = combineReducers({
                post, test
            })
            return combineReducer(state, action);
        }
    }
}

export default rootReducer;