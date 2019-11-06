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

      const productToAdd = state.cartItem.find(
        item => item.slug === action.payload.itemSlug.slug
      );

      if (productToAdd) {
        productToAdd.qty = productToAdd.qty + 1;
        console.log("product quantity is", productToAdd.qty);
      }

      // new total price
      const newTotal = action.payload.itemSlug.price;
      console.log(" product index is ", productToAdd);

      // if product is already added to cart then only update the cart total not array
      if (PreiousAddedItem.length !== 0) {
        const NewState = {
          itemIntoCart: state.itemIntoCart + 1,
          cartItem: [...state.cartItem],
          cartTotal: state.cartTotal + newTotal
        };
        state = NewState;
        console.log(state);

        return state;
      } else {
        const NewState = {
          itemIntoCart: state.itemIntoCart + 1,
          cartItem: [...state.cartItem, action.payload.itemSlug],
          cartTotal: state.cartTotal + newTotal
        };
        state = NewState;
        console.log(state);
        return state;
      }
    }
    case "CHANGE_QUANTITY": {
      const productToRemove = state.cartItem.find(
        item => item.slug === action.payload.itemSlug
      );

      if (action.payload.change == "increase") {
        productToRemove.qty = productToRemove.qty + 1;
        const NewState = {
          itemIntoCart: state.itemIntoCart + 1,
          cartItem: [...state.cartItem],
          cartTotal: state.cartTotal + productToRemove.price
        };
        state = NewState;
        console.log("product quantity is", productToRemove);
      } else {
        productToRemove.qty = productToRemove.qty - 1;
        const NewState = {
          itemIntoCart: state.itemIntoCart - 1,
          cartItem: [...state.cartItem],
          cartTotal: state.cartTotal - productToRemove.price
        };
        state = NewState;
        console.log("product quantity is", productToRemove);
      }
      return state;
    }
    case "REMOVE_PRODUCT": {
      const removedItem = state.cartItem.filter(
        result => result.slug == action.payload.removedSlug
      );
      const NewCartItem = state.cartItem.filter(
        result => result.slug !== action.payload.removedSlug
      );

      const NewState = {
        itemIntoCart: NewCartItem.length,
        cartItem: NewCartItem,
        cartTotal: state.cartTotal - removedItem[0].price * removedItem[0].qty
      };
      state = NewState;
      console.log("this item has been removed: ", removedItem);
      return state;
    }
    default: {
      return state;
    }
  }
};
