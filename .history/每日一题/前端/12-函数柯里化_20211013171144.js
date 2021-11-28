function curry(fn){
    let jungle = (...args) => {
        if(fn.length === args.length) return fn(...args);
        return (...args) => {jungle(...args, ...arg)}
    }
    return jungle
}