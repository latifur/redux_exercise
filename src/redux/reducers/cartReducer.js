const initialState = {
  itemIntoCart: 0,
  cartItem: [],
  cartTotal: 0
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_PRODUCT": {
      // find if product is already added to cart
      const PreiousAddedItem = state.cartItem.filter(
        result => result.slug == action.payload.itemSlug.slug
      );

      // new total price
      const newTotal = action.payload.itemSlug.price;
      console.log(" product index is ", state.cartItem);

      // if product is already added to cart then only update the cart total not array
      if (PreiousAddedItem.length !== 0) {
        const NewState = {
          itemIntoCart: state.itemIntoCart + 1,
          cartItem: [...state.cartItem],
          cartTotal: state.cartTotal + newTotal
        };
        state = NewState;
        console.log(state);
        state.cartItem[0].qty++;
        return state;
      } else {
        const NewState = {
          itemIntoCart: state.itemIntoCart + 1,
          cartItem: [...state.cartItem, action.payload.itemSlug],
          cartTotal: state.cartTotal + newTotal
        };
        state = NewState;
        console.log(state);
        state.cartItem[0].qty++;
        return state;
      }
    }
    case "REMOVE_PRODUCT": {
      const removedItem = state.cartItem.filter(
        result => result.slug == action.payload.removedSlug
      );
      const NewCartItem = state.cartItem.filter(
        result => result.slug !== action.payload.removedSlug
      );

      const numberOfItem = removedItem.length;

      const NewState = {
        itemIntoCart: NewCartItem.length,
        cartItem: NewCartItem,
        cartTotal: state.cartTotal - removedItem[0].price * numberOfItem
      };
      state = NewState;
      console.log("this item has been removed: ", action.payload.removedSlug);
      return state;
    }
    default: {
      return state;
    }
  }
};
