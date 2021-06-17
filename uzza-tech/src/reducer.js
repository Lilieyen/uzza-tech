export const initialState = {
    basket: [],
    user: null //we're storing our user
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); //this tallies the number of items plus their tottal prices

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
              (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];

          if (index >= 0) {
            newBasket.splice(index, 1);

          } else {
            console.warn(
                `Cannot remove product (id: ${action.id}) as it is not in your basket!`
            )
          }

          //return current state and basket will be the newBasket that we modifieed up there
          return {
              ...state,
              basket: newBasket
          }

        case "SET_USER":
            return {
                ...state,
                user: action.user //sets action user to the user that we dispatched
            }
        default:
            return state;
    }
};

export default reducer;