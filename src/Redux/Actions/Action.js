export const addtocart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
 export const removetocart = (id) =>{
  return {
    type : "REMOVE_FROM_CART",
    payload : id
  }
 }

export const incrementQuantity = (id) => ({
    type: "INCREMENT_QUANTITY",
    payload: { id },
  });

  export const decrementQuantity = (id) => ({
    type: "DECREMENT_QUANTITY",
    payload: { id },
  });

  export const Range_data =(val) =>({
    type : "range",
    payload : val
  });
  export const click =(val) =>({
    type : "click",
    payload : val
  });
  export const min =(val) =>({
    type : "min",
    payload : val
  });
  export const max =(val) =>({
    type : "max",
    payload : val
  });