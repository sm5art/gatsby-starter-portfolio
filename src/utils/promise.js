export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const repeat = (func, times) => {
    var promise = Promise.resolve();
    while (times-- > 0) promise = promise.then(func);
    return promise;
}