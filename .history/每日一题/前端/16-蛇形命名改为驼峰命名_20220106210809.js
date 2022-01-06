function main(str) {
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === "_") str[i] = "+";
    }
    return str
}

console.log(main("file_name"))