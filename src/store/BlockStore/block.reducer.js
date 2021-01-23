import { action } from "typesafe-actions";
import { convertToStandardBlock, convertToStandardTxn } from '../../helpers/utility';

export const initialState = {
    block: {
        difficulty: '',
        extraData: '',
        gasLimit: '',
        gasUsed: '',
        hash: '',
        miner: '',
        mixHash: '',
        nonce: '',
        number: '',
        parentHash: '',
        receiptsRoot: '',
        sha3Uncles: '',
        size: '',
        stateRoot: '',
        timestamp: '',
        totalDifficulty: '',
        transactions: []
    },
    transaction: {
        blockHash: '',
        blockNumber: '',
        from: '',
        gas: '',
        gasPrice: '',
        hash: '',
        input: '',
        nonce: '',
        r: '',
        s: '',
        to: '',
        transactionIndex: '',
        v: '',
        value: ''
    }
}

const BlockReducer = (state = initialState, action) => {
    switch (action.type) {
        case "block/BLOCK_TNX_BY_HASH_SUCCESS": {
            return Object.assign({}, state, {
                block: action.payload === undefined ? null : convertToStandardBlock(action.payload),
                transaction: null
            })
        }

        case "block/TNX_BY_HASH_SUCCESS": {
            return Object.assign({}, state, {
                transaction: action.payload === undefined ? null : convertToStandardTxn(action.payload),
                block: null
            })
        }

        case "block/TNX_BY_HASH_ERROR":
        case "block/BLOCK_TNX_BY_HASH_ERROR":{
            return Object.assign({}, state, {
                transaction: state.transaction,
                block: state.block
            })
        }

        default: {
            return state;
        }
    }
}

export default BlockReducer;