import { createContext,useState,useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext= createContext({
    items:[],
    addItemToCard:()=>{},
    updateItemQuantity:()=>{}
});
function shoppingCartReducer(state,action){
    if(action.type==='ADD-ITEM'){
        const updatedItems = [...state.items];
    
          const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
          );
          const existingCartItem = updatedItems[existingCartItemIndex];
    
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
              id: action.payload,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
          }
    
          return {
            ...state, //we did not need this here because the state contain just one value
            items: updatedItems,
          };
    }
    if(action.type==='UPDATE-ITEM'){
        const updatedItems = [...state.items];
          const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += action.payload.amount;
    
          if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
          } else {
            updatedItems[updatedItemIndex] = updatedItem;
          }
    
          return {
            ...state,
            items: updatedItems,
          };
    }
    return state;
}
export default function CartContextProvider({children}){

    const [shoppingCartState,shoppingCartDispatch]=useReducer(
        shoppingCartReducer,
        {
            items: [],
          }
    );
    
      function handleAddItemToCart(id) {
        shoppingCartDispatch(
            {
                type:'ADD-ITEM',
                payload:id
            }
        );
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type:'UPDATE-ITEM',
            payload:{
                productId,
                amount
            }
        });
      }
    
      const ctxValue = {
        items: shoppingCartState.items,
        addItemToCard: handleAddItemToCart,
        updateItemQuantity:handleUpdateCartItemQuantity
      };

      return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
      );
}