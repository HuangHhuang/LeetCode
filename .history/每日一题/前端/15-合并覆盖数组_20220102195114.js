let originProducts = [
    {
        id: 1,
        price: 10,
        name: 'name-1'
    },
    {
        id: 2,
        price: 20,
        name: 'name-2'
    }
]
let originProductsSet = new Set(originProducts.map(item => item.id)) // 转成 set
console.log('originProductsSet',originProductsSet);
 
 
// 新的数组
let products = [
    {
        id: 1,
        price: 12,
        name: 'name-1' // 价格变化了
    },
    {
        id: 3,
        price: 30,
        name: 'name-3'
    }
]

let productsMap = products.map(item => [item.id, item]);
console.log(productsMap)