function main(str) {
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "_") {
            arr.splice(i, 1);
            arr[i+1] = arr[i+1].toUpperCase();
        }
    }
    return arr.join('');
}

console.log(main("file_name"))