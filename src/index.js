// console.log(api)
import api from './api/api.js';
import cart from './models/cart.js';
import itemsCart from './itemsCart.js';

let total = document.getElementById('cartCount');
total.innerHTML = `Carrito ${0}`;

let elementsCart = document.getElementById('addCarts');

const contProduct = document.getElementById('products');

api.forEach((el, i)=>{
  const div = document.createElement('div');
  div.classList.add('col-md-3')
  div.innerHTML = `
  
    <div class="card m-2 text-center" style="width: 90%;">
      <img src="${el.img}" class="card-img-top img-fluid img-thumbnail" alt="NOT-FOUND">
      <div class="card-body">
        <h5 class="card-title">$${el.price}</h5>
        <p class="card-text">${el.name}</p>
        <button class="btn btn-success" id="add${el.id}">Add</button>
      </div>
    </div>

  `
  contProduct.appendChild(div)


  const btn = document.getElementById(`add${el.id}`)
  if (btn) {

    btn.addEventListener('click', () => {
      addCart(el.id)
      showAlert();
    })
  }

})



const addCart = (id) => {
  let coutn = document.getElementById('cartCount');
  const machtId = api.find(el => el.id === id)
  cart.add(machtId)
  
  
  coutn.innerHTML = `Carrito ${cart.count}`;
  elementsCart.innerHTML = `Total = $${cart.total}.00`
  
  UpdateCart();
  // console.log(cart.products)
}
//addCarts es el id de el div del carrito
const UpdateCart = () => {
  cart.products.forEach((produc, i) => {
   
    itemsCart(produc, elementsCart, cart)

    const btnAdd = document.getElementById(`addElement${produc.id}`)
    if (btnAdd) {
  
      btnAdd.addEventListener('click', () => {
        addCart(produc.id)
      })
    }
    const btnDelete = document.getElementById(`delete${produc.id}`)
    if (btnDelete) {
  
      btnDelete.addEventListener('click', () => {
        deletElement(produc.id, i)
        total.innerHTML = `Carrito ${cart.products.length}`;
      })
    }

  })
}

const deletElement = (idElement, i) => {
  const item = cart.products.find((el) => el.id === idElement);
  cart.remove(item.id, i)
  
  elementsCart.innerHTML = `Total = $${cart.total}.00`
  UpdateCart()
}

const showAlert = () => {
  let alerts = document.getElementById('alerts');
  console.log('ESTAS HACIENDO CLICK CIRO');

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="alert alert-success" role="alert" id="trans-alert">
    <h5>Added to cart </h5>
  </div>
  `;

  alerts.appendChild(div);
  setTimeout(() => {
    alerts.removeChild(alerts.firstElementChild);
  }, 2000);
}