// Correctly export the Add action creator
import { Add,Remove } from "./ActionType";
export const addtocart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,  // This is the product data
  });
  
 export const removetocart = (id) =>{
  return {
    type : Remove,
    payload : id
  }
 }
  