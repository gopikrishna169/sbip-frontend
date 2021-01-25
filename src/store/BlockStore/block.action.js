import { action } from 'typesafe-actions';

export const getBlockbyhashRequest = (hash) => action("block/BLOCK_TNX_BY_HASH_REQUEST", hash);
export const getBlockbyhashSuccess = (data) => action("block/BLOCK_TNX_BY_HASH_SUCCESS", data);
export const getBlockbyhashError = (error) => action("block/BLOCK_TNX_BY_HASH_ERROR", error);

export const getTxnbyhashRequest = (hash) => action("block/TNX_BY_HASH_REQUEST", hash);
export const getTxnbyhashSuccess = (data) => action("block/TNX_BY_HASH_SUCCESS", data);
export const getTxnbyhashError = (error) => action("block/TNX_BY_HASH_ERROR", error);

export const getLogRequest = (hash) => action("block/LOG_REQUEST", hash);
export const getLogSuccess = (data) => action("block/LOG_SUCCESS", data);
export const getLogError = (error) => action("block/LOG_ERROR", error);