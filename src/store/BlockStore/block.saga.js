import { AnyAction } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import BlockAPI from './block.api';
import  { getTnxbyhashSuccess, getTnxbyhashError } from './block.action';

export function* handleGetBlockByhash(action) {
    try {
        const block = yield call(BlockAPI.GetBlockByHash, action.payload);
        yield put(getTnxbyhashSuccess(block.result));
    } catch(e) {
        yield put(getTnxbyhashError(e));
    }

}

export function* BlockSaga() {

    yield takeEvery("block/BLOCK_TNX_BY_HASH_REQUEST", handleGetBlockByhash)
    
}