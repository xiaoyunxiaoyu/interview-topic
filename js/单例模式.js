let shopCar = (function(){
    let instance
    function init(){
        return {
            add: function(food){
                this.list.push(food)
            },
            list: []
        }
    }

    return {
        instance: function(){
            if(!instance){
                instance = this.init()
            }
            return instance
        }
    }
})()

var shop = shopCar.instance()
var shop2 = shopCar.instance()
shop.add('苹果')
shop2.add('雪梨')
console.log(shop.list)
console.log(shop2.list)
