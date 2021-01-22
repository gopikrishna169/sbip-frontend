import { AnyAction, combineReducers } from 'redux';
import BlockReducer from '../store/BlockStore/block.reducer'


const appReducer = combineReducers({
    blockReducer: BlockReducer
});

const rootReducer = (state, action) => {
    let updatedState = state;
    return appReducer(updatedState, action);
};

export default rootReducer;  