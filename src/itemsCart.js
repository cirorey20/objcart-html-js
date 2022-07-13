function itemsCart(produc, elementsCart){
    const div = document.createElement('div');
    div.className = ('producCarrito')
    div.innerHTML = `
      <div class="m-1 text-center">
        
        ${produc.name} 
        <span>
          $${produc.price} X
        </span>
        <span>
          <button id="delete${produc.id}"
            type="button" class="btn btn-outline-danger btn-sm"
          >
            -
          </button>
        </span>
        <span>${produc.quantity}</span>
        <span>
          <button id="addElement${produc.id}"
            type="button" class="btn btn-outline-success btn-sm"
          >
            +
          </button>
        </span>
        
      </div>
    `
    elementsCart.appendChild(div);

}

export default itemsCart;