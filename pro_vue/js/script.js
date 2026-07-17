let App = {
    data: function() {
        return {
            allProducts: [...smartphones, ...smartwatches, ...audio, ...accessories, ...gadgets],
            currentCategory: 'smartphones',
            path: 'products' ,
            cart : [],
        }
    },
    
    computed: {
        filteredProducts() {
            return this.allProducts.filter(pro => pro.category === this.currentCategory);
        },
        cartTotal() {
            return this.cart.reduce((total, item) => {
                return total + (item.pro.price * item.count);
            }, 0);
        }
    },
    
    methods: {
        changeCategory: function(categoryName) {
            this.currentCategory = categoryName;
            this.path = 'products'; 
        },
        addToCart: function(pro) {
            let added = this.cart.find(function(ele) {
                return ele.pro.id === pro.id;
            });
        
            if (added) {
                added.count++;
            } else {
                this.cart.push({ pro: pro, count: 1 });
            }
        
            pro.count--;
        }

    }
    
}

Vue.createApp(App).mount("#App");