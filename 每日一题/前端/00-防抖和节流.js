// 防抖
// 非立即执行版
function debounce(fn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;

        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}
// 立即执行版
function debounce2(fn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;

        if(timer) clearTimeout(timer);

        let callnow = !timer;
        timer = setTimeout(() => {
            timer = null;
        }, delay);

        if(callnow) fn.apply(context, args);
    }
}

// 节流
function throttle(fn, delay) {
    let flag = true;
    return function(){
        if(!flag) {
            return flag = false;
        }
        flag = false;
        setTimeout(() => {
            fn();
            flag = true;
        }, delay)
    }
}

// 定时器版本
function throttle2(fn, wait) {
    let timer = null;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, wait)
        }
    }
}

// 时间戳版本
function throttle3(fn, wait) {
    // 上一次执行时间
    let previous = 0;
    return function(...args) {
        // 当前时间
        let now = +new Date();
        if (now - previous > wait) {
            previous = now;
            fn.apply(this, args);
        }
    }
}
