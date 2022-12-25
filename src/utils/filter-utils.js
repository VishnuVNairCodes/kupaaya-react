const categoryFilter = (products, category) =>
  products.filter((product) => product.categories.includes(category));
const genderFilter = (products, showBoy, showGirl, showUnisex) => {
  if (showBoy || showGirl || showUnisex) {
    let filteredProducts = [];
    if (showBoy) {
      const boyProducts = categoryFilter(products, "boy");
      filteredProducts = [...filteredProducts, ...boyProducts];
    }
    if (showGirl) {
      const girlProducts = categoryFilter(products, "girl");
      filteredProducts = [...filteredProducts, ...girlProducts];
    }
    if (showUnisex) {
      const unisexProducts = categoryFilter(products, "unisex");
      filteredProducts = [...filteredProducts, ...unisexProducts];
    }
    return filteredProducts;
  } else {
    return products;
  }
};
const typeOfDressFilter = (
  products,
  showCasuals,
  showBirthdays,
  showEthnicwear,
  showNightwear,
  showAccessories
) => {
  if (
    showCasuals ||
    showBirthdays ||
    showEthnicwear ||
    showNightwear ||
    showAccessories
  ) {
    let filteredProducts = [];
    if (showCasuals) {
      const casuals = categoryFilter(products, "casuals");
      filteredProducts = [...filteredProducts, ...casuals];
    }
    if (showBirthdays) {
      const birthdayDresses = categoryFilter(products, "birthdays");
      filteredProducts = [...filteredProducts, ...birthdayDresses];
    }
    if (showEthnicwear) {
      const ethnicwears = categoryFilter(products, "ethnicwear");
      filteredProducts = [...filteredProducts, ...ethnicwears];
    }
    if (showNightwear) {
      const nightwears = categoryFilter(products, "nightwear");
      filteredProducts = [...filteredProducts, ...nightwears];
    }
    if (showAccessories) {
      const accessories = categoryFilter(products, "accessories");
      filteredProducts = [...filteredProducts, ...accessories];
    }
    return filteredProducts;
  } else {
    return products;
  }
};
const ratingFilter = (products) => products;
const priceFilter = (products) => products;
const getFilteredProducts = (
  dataToFilter,
  {
    showBoy,
    showGirl,
    showUnisex,
    showCasuals,
    showBirthdays,
    showEthnicwear,
    showNightwear,
    showAccessories,
  }
) => {
  const priceFiltered = priceFilter(dataToFilter);
  const ratingAndPriceFiltered = ratingFilter(priceFiltered);
  const genderAndRatingAndPriceFiltered = genderFilter(
    ratingAndPriceFiltered,
    showBoy,
    showGirl,
    showUnisex
  );
  const typeAndGenderAndRatingAndPriceFiltered = typeOfDressFilter(
    genderAndRatingAndPriceFiltered,
    showCasuals,
    showBirthdays,
    showEthnicwear,
    showNightwear,
    showAccessories
  );
  return typeAndGenderAndRatingAndPriceFiltered;
};
export { getFilteredProducts };
