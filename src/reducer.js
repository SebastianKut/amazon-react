export const initialState = {
  basket: [],
  user: null,
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
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((item) => item.basketId !== action.payload),
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
