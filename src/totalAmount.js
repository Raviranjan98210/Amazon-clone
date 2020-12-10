export const getTotalValue = (basket) => {
  return basket?.reduce((totalPrice, product) => {
    return totalPrice + product.price;
  }, 0);
};
