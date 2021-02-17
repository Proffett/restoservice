const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  summaryPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false,
      };
    case "MENU_REQUSTED":
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false,
      };
    case "ERROR_RECIEVED":
      return {
        ...state,
        menu: state.menu,
        loading: false,
        error: true,
      };
    case "ITEM_ADD_TO_CART":
      const id = action.payload.id;
      const sumPrice = action.payload.price;

      const itemInd = state.items.findIndex((item) => item.id === id);
      if (itemInd >= 0) {
        const itemInState = state.items.find((item) => item.id === id);
        itemInState.qtty++
        // const newItem = {
        //   ...itemInState,
        //   qtty: ++itemInState.qtty,
        // };

        return {
          ...state,
          items: [...state.items],
          summaryPrice: state.summaryPrice + sumPrice,
        };
      }
      //товара не было в корзине
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        price: item.price,
        url: item.url,
        id: item.id,
        qtty: 1,
      };
      return {
        ...state,
        items: [...state.items, newItem],
        summaryPrice: state.summaryPrice + newItem.price,
      };

    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload.id;
      const minusPrice = action.payload.price;
      const itemIndex = state.items.findIndex((item) => item.id === idx);
      return {
        ...state,
        items: [...state.items.slice(0, itemIndex), ...state.items.slice(itemIndex + 1)],
        summaryPrice: state.summaryPrice + minusPrice,
      };

    default:
      return state;
  }
};

export default reducer;
