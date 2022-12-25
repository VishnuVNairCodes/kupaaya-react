const filterStateInitial = {
  showBoy: false,
  showGirl: false,
  showUnisex: false,
  showCasuals: false,
  showBirthdays: false,
  showEthnicwear: false,
  showNightwear: false,
  showAccessories: false,
  maxPrice: "3800",
  minRating: "NULL",
  sortOrder: "NULL",
};

const filterReducerFunc = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "TOGGLE_BOY":
      return { ...filterState, showBoy: !filterState.showBoy };
    case "TOGGLE_GIRL":
      return { ...filterState, showGirl: !filterState.showGirl };
    case "TOGGLE_UNISEX":
      return { ...filterState, showUnisex: !filterState.showUnisex };
    case "TOGGLE_CASUALS":
      return { ...filterState, showCasuals: !filterState.showCasuals };
    case "TOGGLE_BIRTHDAYS":
      return { ...filterState, showBirthdays: !filterState.showBirthdays };
    case "TOGGLE_ETHNICWEAR":
      return { ...filterState, showEthnicwear: !filterState.showEthnicwear };
    case "TOGGLE_NIGHTWEAR":
      return { ...filterState, showNightwear: !filterState.showNightwear };
    case "TOGGLE_ACCESSORIES":
      return {
        ...filterState,
        showAccessories: !filterState.showAccessories,
      };
    case "SET_MAX_PRICE":
      return {
        ...filterState,
        maxPrice: filterAction.value,
      };
    case "SET_MIN_RATING":
      return {
        ...filterState,
        minRating: filterAction.value,
      };
    case "SET_SORT":
      return {
        ...filterState,
        sortOrder: filterAction.value,
      };
    case "CLEAR_FILTERS":
      return {
        ...filterStateInitial,
      };
    default:
      return filterState;
  }
};

export { filterReducerFunc, filterStateInitial };
