import axios from 'axios';
import * as rax from 'retry-axios';
import { store } from '../store/store';

export default class HttpHelper {
    static httpRequest = async (
        url,
        methodType,
        orgHeaders,
        body = {}
    ) => {
        let headers = orgHeaders;

        let config = {
            method: methodType,
            url: url,
            headers: headers,
            data: body,
            raxConfig: {
                retry: 3,
                noResponseRetries: 2,
                retryDelay: 100,
                httpMethodsToRetry: ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT'],
                statusCodesToRetry: [[100, 199], [429, 429], [500, 599]]
            }
        };

        return await axios(config)
            .then(function (response) {
                return HttpHelper.successHandler(response);
            })
            .catch(function (error) {
                HttpHelper.errorHandler(error);
            });
    }

    static successHandler = (response) => {
        if (response.status > 199 && response.status < 205) {
            return response.data;
        }
    }

    static errorHandler = (error) => {
        console.log(error.response)
    }

    static httpRequestRetry = async () => {
        rax.attach(axios);
    }
}