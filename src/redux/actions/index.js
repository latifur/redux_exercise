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

export const CHANGE_QUANTITY = (changeType, slug) => {
  return {
    type: "CHANGE_QUANTITY",
    payload: {
      itemSlug: slug,
      change: changeType
    }
  };
};
