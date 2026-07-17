let App = {

    // data
    data: function() {
        return {
            casualWear: casualWear,
            formalAndEvening: formalAndEvening,
            homeAndSleepwear: homeAndSleepwear,
            activewear: activewear,
            path : "product",
            cart : [],
        
        }
    }, 

    // methods 
    methods : {
        addToCart : function(pro){
        
            let ckeck=this.cart.some(function(ele){
                return ele.pro.id==pro.id
            })
            if(ckeck == false){
                this.cart.push({pro : pro , count :1})
            }else{
                let added=this.cart.find(function(proo){
                    return proo.pro.id==pro.id
                })
                added.count++ 
            }
                pro.count--
        },
        getTotal: function() {
            let total = 0;
            this.cart.forEach(function(item) {
                total += item.pro.price * item.count;
            });
            return total;
        }
    }
    

}

Vue.createApp(App).mount("#App")