import moment from 'moment';

export function convertToStandardBlock(block) {
    return {
        difficulty: parseInt(block.difficulty),
        extraData: hex_to_ascii(block.extraData),
        gasLimit: parseInt(block.gasLimit) ,
        gasUsed: parseInt(block.gasUsed),
        hash: block.hash,
        miner: block.miner,
        mixHash: block.mixHash,
        nonce: block.nonce,
        number: parseInt(block.number),
        parentHash: block.parentHash,
        receiptsRoot: '',
        sha3Uncles: parseInt(block.sha3Uncles),
        size: parseInt(block.size),
        stateRoot: block.stateRoot,
        timestamp: moment(parseInt(block.timestamp)).format('YYYY MM , h:mm:ss a'),
        totalDifficulty: parseInt(block.totalDifficulty),
        transactions: block.transactions
    }
}

export function convertToStandardTxn(txn) {
    return {
        blockHash: txn.blockHash,
        blockNumber: parseInt(txn.blockNumber),
        from: txn.from,
        gas: parseInt(txn.gas),
        gasPrice: parseInt(txn.gasPrice),
        hash: txn.hash,
        input: txn.input,
        nonce: txn.nonce,
        r: parseInt(txn.r),
        s: parseInt(txn.s),
        to: txn.to,
        transactionIndex: parseInt(txn.transactionIndex),
        v: parseInt(txn.v),
        value: parseInt(txn.value)
    }
}

function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }


