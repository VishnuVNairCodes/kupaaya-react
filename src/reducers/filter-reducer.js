const toggleFilterStateInitial = {
  showBoy: false,
  showGirl: false,
  showUnisex: false,
  showCasuals: false,
  showBirthdays: false,
  showEthnicwear: false,
  showNightwear: false,
  showAccessories: false,
};

const filterStateInitial = {
  ...toggleFilterStateInitial,
  maxPrice: "3800",
  minRating: "NULL",
  sortOrder: "NULL",
};

const filterReducerFunc = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "TOGGLE_BOY":
      return { ...filterState, showBoy: !filterState.showBoy };
    case "SHOW_BOY_ONLY":
      return { ...filterState, ...toggleFilterStateInitial, showBoy: true };
    case "TOGGLE_GIRL":
      return { ...filterState, showGirl: !filterState.showGirl };
    case "SHOW_GIRL_ONLY":
      return { ...filterState, ...toggleFilterStateInitial, showGirl: true };
    case "TOGGLE_UNISEX":
      return { ...filterState, showUnisex: !filterState.showUnisex };
    case "TOGGLE_CASUALS":
      return { ...filterState, showCasuals: !filterState.showCasuals };
    case "SHOW_CASUALS_ONLY":
      return { ...filterState, ...toggleFilterStateInitial, showCasuals: true };
    case "TOGGLE_BIRTHDAYS":
      return { ...filterState, showBirthdays: !filterState.showBirthdays };
    case "SHOW_BIRTHDAYS_ONLY":
      return {
        ...filterState,
        ...toggleFilterStateInitial,
        showBirthdays: true,
      };
    case "TOGGLE_ETHNICWEAR":
      return { ...filterState, showEthnicwear: !filterState.showEthnicwear };
    case "SHOW_ETHNICWEAR_ONLY":
      return {
        ...filterState,
        ...toggleFilterStateInitial,
        showEthnicwear: true,
      };
    case "TOGGLE_NIGHTWEAR":
      return { ...filterState, showNightwear: !filterState.showNightwear };
    case "SHOW_NIGHTWEAR_ONLY":
      return {
        ...filterState,
        ...toggleFilterStateInitial,
        showNightwear: true,
      };
    case "TOGGLE_ACCESSORIES":
      return {
        ...filterState,
        showAccessories: !filterState.showAccessories,
      };
    case "SHOW_ACCESSORIES_ONLY":
      return {
        ...filterState,
        ...toggleFilterStateInitial,
        showAccessories: true,
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
