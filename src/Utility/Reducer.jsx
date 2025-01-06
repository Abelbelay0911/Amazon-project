import { Type } from "./action";

export const initialState = {
  basket: [],
  user: null, // user is now an object (null or user object)
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_CART:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updated = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return {
          ...state,
          basket: updated,
        };
      }

    case Type.REMOVE_FROM_CART:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let addedBasket = [...state.basket];

      if (index >= 0) {
        if (addedBasket[index].amount > 1) {
          addedBasket[index] = {
            ...addedBasket[index],
            amount: addedBasket[index].amount - 1,
          };
        } else {
          addedBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: addedBasket,
      };

    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };

    case Type.ADD_USER:
          console.log("User added to context:", action.user); 
          
      return {
        ...state,
        user: action.user, // action.user is now the user object
      };

    default:
      return state;
  }
};
