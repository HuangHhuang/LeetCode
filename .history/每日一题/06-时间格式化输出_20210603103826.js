function formatDate(date, format) {
    var obj = {
        yyyy: date.getFullYear(),
        yy: date.getYear(),
        M: date.getMonth() + 1,
        MM: ("0" + date.getMonth() + 1).slice(-2),
        d: date.getDate(),
        dd: ("0" + date.getDate()).slice(-2),
        H: date.getHours(),
        HH: ("0" + date.getHours()).slice(-2),
        h: date.getHours() % 12,
        hh: ("0" + date.getHours() % 12).slice(-2),
        m: date.getMinutes(),
        mm: ("0" + date.getMinutes()).slice(-2),
        s: date.getSeconds(),
        ss: ("0" + date.getSeconds()).slice(-2),
        w: ['日','一','二','三','四','五','六'][date.getDay()]
    }
    return format.replace(/([a-z]+)/ig, ($1) => obj[$1])
}

console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'))