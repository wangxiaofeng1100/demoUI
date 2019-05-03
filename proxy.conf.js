/**
 * Created Date: Tuesday, September 19th 2017, 3:54:39 am
 * Author: KSC
 * Copyright (c) 2017 Kingland System Corporation. All Rights Reserved
 */
/**
 * prevent browser call
 *
 * @param {any} req
 * @param {any} res
 * @param {any} proxyOptions
 * @returns
 */
const preventBrowserCalls = function(req, res, proxyOptions) {
    if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
        return '/index.html';
    }
    req.headers['X-Custom-Header'] = 'yes';
};
// # following method is also valid
// const PROXY_CONFIG = {
//   "/api/proxy": {
//       "target": "https://localhost:3000",
//       "secure": false,
//       "bypass": preventBrowserCalls
//   }
// }
const PROXY_CONFIG = [
    {
        context: ['/users'],
        target: 'http://localhost:8080',
        secure: false,
        bypass: preventBrowserCalls
    }
];
module.exports = PROXY_CONFIG;
