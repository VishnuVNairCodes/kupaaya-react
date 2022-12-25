const getSortedProducts = (products, sortOrder) => {
  switch (sortOrder) {
    case "ASCENDING":
      return [...products].sort(
        (product1, product2) =>
          product1.discountedPrice - product2.discountedPrice
      );
    case "DESCENDING":
      return [...products].sort(
        (product1, product2) =>
          product2.discountedPrice - product1.discountedPrice
      );
    case "NULL":
      return products;
    default:
      return products;
  }
};

export { getSortedProducts };
