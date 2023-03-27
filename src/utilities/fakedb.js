//use localStorage to manage cart data
const addToDb = (id) => {
  let shoppingCart = {};

  //   get the shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  //   console.log(quantity);

  if (!quantity) {
    // localStorage.setItem(id, 1);
    shoppingCart[id] = 1;
  } else {
    // localStorage.setItem(id, newQuantity);
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        };
    };
};

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}


export { addToDb, removeFromDb, deleteShoppingCart };
