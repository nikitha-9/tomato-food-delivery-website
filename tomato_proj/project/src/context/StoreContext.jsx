import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCount = (prev[itemId] || 0) - 1;
      if (updatedCount <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      } else {
        return {
          ...prev,
          [itemId]: updatedCount,
        };
      }
    });
  };

  const getTotalCartAmount=()=>{
    let totalamount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=food_list.find((product)=>product._id===item)
        totalamount+=itemInfo.price*cartItems[item];

      }
      
    }
    return totalamount;
  }
  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
