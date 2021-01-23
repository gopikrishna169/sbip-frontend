import { AnyAction } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import BlockAPI from './block.api';
import  { getBlockbyhashSuccess, getBlockbyhashError, getTxnbyhashSuccess, getTxnbyhashError } from './block.action';

export function* handleGetBlockByhash(action) {
    try {
        const block = yield call(BlockAPI.GetBlockByHash, action.payload);
        yield put(getBlockbyhashSuccess(block.result));
    } catch(e) {
        yield put(getBlockbyhashError(e));
    }

}

export function* handleGetTxnByhash(action) {
    try {
        const txn = yield call(BlockAPI.GetTxnByHash, action.payload);
        yield put(getTxnbyhashSuccess(txn.result));
    } catch(e) {
        yield put(getTxnbyhashError(e));
    }

}

export function* BlockSaga() {

    yield takeEvery("block/BLOCK_TNX_BY_HASH_REQUEST", handleGetBlockByhash)
    yield takeEvery("block/TNX_BY_HASH_REQUEST", handleGetTxnByhash)
    
}