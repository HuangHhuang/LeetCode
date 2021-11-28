class HunterUnion {
    constructor() {
        this.topics = []
    }
    subscribe(topic, fn) {
        if(!this.topics[topic]) {
            this.topics[topic] = []
        } 
        this.topics[topic].push(fn)
    }
    publish(topic, money) {
        if(!this.topics[topic]) return
        for(let fn of this.topics[topic]) {
            fn(money)
        }
    }
}

function Hunter(name, level){
    this.name = name
    this.level = level
}

var ming = new Hunter("小明", "黄金")
var hu = new Hunter("小胡", "白银")
var hei = new Hunter("小黑", "青铜")

var Hunters = new HunterUnion();

Hunters.subscribe("tiger", function(money) {
    var str = money > 200 ? "" : "赏金太少不能"
    console.log("小明" + str + "给与帮助")
})

Hunters.subscribe("tiger", function(money) {
    var str = money > 100 ? "" : "赏金太少不能"
    console.log("小胡" + str + "给与帮助")
})

Hunters.publish("tiger", 150)