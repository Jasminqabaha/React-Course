import { createContext } from "react";


export const CartContext= createContext({
    items:[],
    addItemToCard:()=>{},
    updateItemQuantity:()=>{}
});