import { all } from 'redux-saga/effects';
import { BlockSaga } from '../store/BlockStore/block.saga'

export default function* rootSaga() {
    yield all([
        BlockSaga(),
        
    ]);
}