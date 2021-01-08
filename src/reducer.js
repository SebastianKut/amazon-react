export const initialState = {
  basket: [],
};

//Selector

export const getBasketTotal = (basket) =>
  basket?.reduce((price, item) => item.price + price, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
