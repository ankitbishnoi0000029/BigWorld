
const initialState = {
  cartItems: [],
  rangeValue :false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingItem.id && item.color === existingItem.color && item.size === existingItem.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),  
        };
        case "INCREMENT_QUANTITY":
            return {
              ...state,
              cartItems: state.cartItems.map(item =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
      
          case "DECREMENT_QUANTITY":
            return {
              ...state,
              cartItems: state.cartItems.map(item =>
                item.id === action.payload.id && item.quantity > 1
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
           case "range":
            return {
              ...state,
              rangeValue: action.payload,
            };
    default:
      return state;
  }
};

export default CartReducer;