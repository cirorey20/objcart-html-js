class Cart {
    constructor() {
      this.products = [];
      this.count = 0;
      this.total = 0;
    }
  
    add(product) {
      if (this.products.length > 0) {
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            ++this.products[i].quantity;
            return this.#total();
          }
        }
        this.products.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      } else {
        this.products.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
      this.count = this.products.length;
      this.#total();
    } //end add
  
    #total() {
      var total = 0;
      for (var i = 0; i < this.products.length; i++) {
        total = this.products[i].price * this.products[i].quantity + total;
      }
      this.total = total;
    } //end total
  
    remove(idRem, i) {
      var element = this.products.find(el => el.id === idRem)
      if (!element) {
        
        return 'Este Id No esta en el carrito';
      } else {
        if (element.quantity > 1) {
        
          element.quantity--;
          this.#total();
        
        } else {
        
          this.products.splice(i, 1);
          this.#total();
        
        }
        return `Producto ${idRem} eliminado del carrito`;
      }
    } //end remove
  
    clearCart() {
      this.products = [];
      this.count = 0;
      this.total = 0;
    }
  } //end class Cart
  
  let cart = new Cart();
  export default cart;