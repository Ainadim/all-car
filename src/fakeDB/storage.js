// Use local storage as a Data base

const addToDo = (id) => {
  const exists = localStorage.getItem("player_cart");
  let player_cart = {};
  if (!exists) {
    player_cart[id] = 1;
  } else {
    player_cart = JSON.parse(exists);
    if (player_cart[id]) {
      const newCount = player_cart[id] + 1;
      player_cart[id] = newCount;
    } else {
      player_cart[id] = 1;
    }
  }
  localStorage.setItem("player_cart", JSON.stringify(player_cart));
};
export { addToDo };
