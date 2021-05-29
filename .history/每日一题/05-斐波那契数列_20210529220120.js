function fibonacci(n) {
    let a = 0, b = 1, sum
    for(let i = 1; i < n; i++) {
        sum = (a + b) % 1000000007
        a = b
        b = sum
    }
    return sum
}

console.log(fibonacci(5));