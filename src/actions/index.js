const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};

const menuRequsted = () => {
  return {
    type: "MENU_REQUSTED",
  };
};
const errorRecieved = () => {
  return {
    type: "ERROR_RECIEVED",
  };
};
const addedToCart = (id, price) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: {id, price}
  };
};
const deleteFromCart = (id, price) => {
  return {
    type: "ITEM_REMOVE_FROM_CART",
    payload: {id, price}
  };
};

const countSummary = (price) => {
  return {
    type: "COUNT_SUMMARY",
    payload: price,
  };
};
export { menuLoaded, menuRequsted, errorRecieved, addedToCart, deleteFromCart, countSummary };
