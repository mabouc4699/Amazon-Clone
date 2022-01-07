export const setUser = (authUser) => {
  return {
    type: "SET_USER",
    user: authUser,
  };
};

export const removeFromBasket = (id) => {
  return {
    type: "REMOVE_FROM_BASKET",
    id,
  };
};
