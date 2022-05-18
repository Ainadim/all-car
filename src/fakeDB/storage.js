// Use local storage as a Data base

let addToDo = (id) => {
  const exists = localStorage.getItem("car_cart");
  let car_cart = {};
  if (!exists) {
    car_cart[id] = 1;
  } else {
    car_cart = JSON.parse(exists);
    if (car_cart[id]) {
      const newCount = car_cart[id] + 1;
      car_cart[id] = newCount;
    } else {
      car_cart[id] = 1;
    }
  }
  updateDb(car_cart);
};

const updateDb = (cart) => {
  localStorage.setItem("car_cart", JSON.stringify(cart));
};

// Remove item from Store//
let removeFromDb = (id) => {
  const exists = localStorage.getItem("car_cart");
  if (!exists) {
  } else {
    const car_cart = JSON.parse(exists);
    delete car_cart[id];
    updateDb(car_cart);
  }
};

export { addToDo, removeFromDb };
