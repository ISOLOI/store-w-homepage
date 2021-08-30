import { createContext, useContext, useReducer } from "react";

const CartAndWishListContext = createContext();

function reducerFunction(state, action) {
  
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCartArray: state.itemsInCartArray.concat(action.payload)
      };
    case "ADD_TO_WISHLIST":
      return {...state, wishListArray: state.wishListArray.concat(action.payload)}
    default:
      console.log("There must be an error, please check!");
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, {
    itemsInCartArray: [],
    wishListArray: []
  });

  return (
    <CartAndWishListContext.Provider value={{ state, dispatch }}>
      {children}
    </CartAndWishListContext.Provider>
  );
}

export function useCartAndWishListContext() {
  return useContext(CartAndWishListContext);
}
