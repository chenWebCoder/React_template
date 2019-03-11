/**
 * axios 函数封装
 * 发送数据格式：GET、POST(允许发送 FormData 格式的数据)
 * */

import * as originAxios from 'axios';
import { expiredModal } from './expiredModal';

let showExpiredModal = false;

const myAxios = (url, params = {}, options = {}) => {
    let method = 'get',
        tokenName = 'token',
        userInfo = 'user_info';

    const token = localStorage.getItem(tokenName),
        parsedUrl = parseUrl(url, params);

    if (!Object.keys(params).length) {
        if (typeof options.append === 'function' && Array.from(options.keys()).length) {
            method = 'post';
        } else if (Object.keys(options).length) {
            method = 'post';
        }
    }

    return originAxios({
        method: method,
        url: parsedUrl,
        headers: { token: token },
        data: options,
    })
        .then(({ data }) => {
            if (data.ret_code === 4) {
                if (!showExpiredModal && location.pathname !== '/login') {
                    expiredModal();
                    localStorage.removeItem(tokenName);
                    localStorage.removeItem(userInfo);
                    showExpiredModal = true;
                }
                return null;
            }
            return data;
        })
        .catch(err => {
            console.error(err);
        });
};

// 将 GET 请求的参数拼接到 URL 上
const parseUrl = (path, InputParams) => {
    const arr = [];
    for (const key in InputParams) {
        if (key && InputParams[key] !== '' && InputParams[key] !== undefined) {
            let val = encodeURI(InputParams[key]);
            arr.push(`${key}=${val}&`);
        }
    }
    if (arr.length) arr.unshift('?');
    return `${path}${arr.join('').slice(0, -1)}`;
};

export default myAxios;
