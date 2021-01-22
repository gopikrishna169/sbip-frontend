import HttpHelper from '../../helpers/httpHelper';

const headerInfo = {};
class BlockAPI {
    static GetBlockByHash(req) {
        let url = "https://mainnet.infura.io/v3/cd89155d192847d380c56d984593f2fc";
        return HttpHelper.httpRequest(url, 'POST', headerInfo, req)
    }
}

export default BlockAPI;