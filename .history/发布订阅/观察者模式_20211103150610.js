function Hunter(name, level) {
    this.name = name
    this.level = level
    this.list = []
}

Hunter.prototype.publish = function(money) {
    console.log(this.level + "猎人" + this.name + "寻求帮助,赏金：" + money)
    this.list.forEach(function(item, index) {
        item(money)
    })
}

Hunter.prototype.subscribe = function(target, fn) {
    console.log(this.level + "猎人" + this.name + "订阅了" + target)
    target.list.push(fn)
}

var ming = new Hunter("小明", "黄金")
var hu = new Hunter("小胡", "白银")
var hei = new Hunter("小黑", "青铜")

ming.subscribe(hei, function(money) {
    var str = money > 200 ? "" : "赏金太少不能"
    console.log("小明" + str + "给与帮助")
})

hu.subscribe(hei, function(money) {
    var str = money > 100 ? "" : "赏金太少不能"
    console.log("小胡" + str + "给与帮助")
})

hei.publish(150)