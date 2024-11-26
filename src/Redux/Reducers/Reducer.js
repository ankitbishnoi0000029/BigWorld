
const initialState = {
  cartItems: [], // List of items in the cart
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product already exists in the cart (based on ID, color, and size)
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingItem) {
        // If the item exists, increase its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingItem.id && item.color === existingItem.color && item.size === existingItem.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Otherwise, add the new product to the cart with initial quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      // Handle item removal from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default CartReducer;