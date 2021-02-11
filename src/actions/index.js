const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequsted = () => {
  return {
    type: "MENU_REQUSTED"
  };
};
const errorRecieved = () => {
  return {
    type: "ERROR_RECIEVED",
  };
};
export { menuLoaded, menuRequsted, errorRecieved };