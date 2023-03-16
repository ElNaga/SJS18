class ShopingCart {
    products

    constructor(products) {
        this.products = products
    }

    getTotalPrice () {
        return this.products.reduce((sum,product) => sum + product.product,0).value
    }

    addProduct (newProduct) {
        this.products.push(newProduct)
    }

    removeProduct (name) {
        this.products.filter(product => {
            if (product.name === name) {
                return false
            }
            return true
        })
    }
}

class Product {
    name
    getTotalPrice
    constructor (name,price) {
        this.name = name
        this.price = price
    }
}

const Milk = new Product('milk',40)
const Bread = new Product('bread',20)
const Egg = new Product('egg',4)
const Banana = new Product('banana',8)

const Breakfast = new ShopingCart([Milk,Bread,Egg])
console.log(Breakfast.getTotalPrice)