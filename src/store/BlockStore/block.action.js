import { action } from 'typesafe-actions';

export const getTnxbyhashRequest = (hash) => action("block/BLOCK_TNX_BY_HASH_REQUEST", hash);
export const getTnxbyhashSuccess = (data) => action("block/BLOCK_TNX_BY_HASH_SUCCESS", data);
export const getTnxbyhashError = (error) => action("block/BLOCK_TNX_BY_HASH_ERROR", error);