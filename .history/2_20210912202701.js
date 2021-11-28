function solve(cards, k) {
    let res = 0
    let len = cards.length
    backtrack(0, 0, 0, 0)
    return res
    // 满足要求：所有卡牌的数字之和为3的倍数 红色的卡牌数量 蓝色的卡片数量 
    function backtrack(sum, red, blue, index) {
    // 什么时候返回
    let count = blue + red // 选择的牌的总数量
    let minus = Math.abs(blue - red) // 两个牌之间的数量差
    if (count > 0 && minus <= k && sum % 3 === 0) {
        res++
    }
    if (index === len) return
    for (let i = index; i < len; i++) {
        let cur = cards[i]
        let number = cur[0]
        let color = cur[1]
        if (color == 0) {
        backtrack(sum + number, red + 1, blue, i + 1)
        } else {
        backtrack(sum + number, red, blue + 1, i + 1)
        }
    }
    }
}

function solve(tasks, k) {
    // tasks为处理后的任务 k表示体力上限
    // dp[i][j] 表示在完成第i个任务 体力值为j时的最少金钱
    let len = tasks.length
    let dp = new Array(len)
    for (let i = 0; i < len; i++) {
    dp[i] = new Array(k + 1).fill(false)
    }
    let task1 = tasks[0]
    if (task1[0] > k) {
    dp[i][k] = task1[1] // 花钱
    } else {
    dp[i][k] = task1[1] // 花钱
    dp[i][k - task1[0]] = 0 // 不花钱
    }
    for (let i = 1; i < len; i++) {
    for (let j = k; j >= 0; j--) {
        if (dp[i - 1][j] === false) continue
        // 剩余体力为j
        let curTask = tasks[i]
        let need = curTask[0]
        let money = curTask[1]
        // j >= need 说明可以消耗体力去做这件事
        if (j >= need) {
        if (dp[i][j - need] === false) {
            dp[i][j - need] = dp[i - 1][j]
        } else {
            dp[i][j - need] = Math.min(dp[i][j - need], dp[i - 1][j])
        }
        }
        // 可以不消耗体力，花钱去这件事情
        if (dp[i][j] === false) {
        dp[i][j] = dp[i - 1][j] + money
        } else {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + money)
        }
    }
    }
    let min = Infinity
    for (let i = 0; i <= k; i++) {
    if (dp[len - 1][i] !== false) {
        min = Math.min(min, dp[len - 1][i])
    }
    }
    return min
}