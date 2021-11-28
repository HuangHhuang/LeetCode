const s = '{{lang}} is {{desc}}';
const data = {
    lang: "JS",
    desc: "so easy~",
}
function format(strP, data) {
    let str = strP;
    console.log(str.match(/{{(\w+)}}/g))
    str.match(/{{(\w+)}}/g).forEach((n, i)=>{
        str = str.replace(`{{${n}}}`, data[n]);
    })
    return str;
}
console.log(format(s, data));
