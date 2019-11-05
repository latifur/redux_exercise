export const BUY_PRODUCT = slug => {
  return {
    type: "BUY_PRODUCT",
    payload: {
      itemSlug: slug
    }
  };
};

export const REMOVE_PRODUCT = slug => {
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      removedSlug: slug
    }
  };
};
