import { action } from "typesafe-actions"

export const initialState = {
    block: {
        difficulty: '',
        extraData: '',
        gasLimit: '',
        gasUsed: '',
        hash: '',
        logsBloom: '',
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
            console.log(action.payload);
            return Object.assign({}, state,{
                block: action.payload
            })
        }
        default: {
            return state;
        }
    }
}

export default BlockReducer;