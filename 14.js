function createPromise(value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time)
    })
}

let list = [
    createPromise(1, 1000),
    createPromise(2, 6000),
    createPromise(3, 4000),
    createPromise(4, 3000),
];

let last = -1;

function runPromiseByQueue(arr) {
    const res = [];
    return new Promise((resolve, reject) => {
        arr.reduce((acc, cur) => {
            acc.then(cur).then(data => res.push(data))
        }, Promise.resolve())
    }).then(() => resolve(res))
}

let proxy = new Proxy({}, {
    set(target, p, value, receiver) {
        target[p] = value;
        print(target, p)
    }
})

function run (promiseList){
    for(let a = 0; a < promiseList.length; a++){
        let p = promiseList[a];
        p.then(r => {
            proxy[a] = r;
        })
    }
}

run(list)