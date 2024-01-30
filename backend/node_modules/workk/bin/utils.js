/**
 * 将await后的异步函数成功和失败回调组成数组返回
 * @param {Promise}
 * @return {Promise}
 */
export const betterAsync = p => p.then(res => [null, res]).catch(err => [err, undefined]);
