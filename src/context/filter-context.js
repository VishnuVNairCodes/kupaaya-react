import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
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
      default:
        return filterState;
    }
  };

  const [filterState, filterDispatch] = useReducer(filterReducerFunc, {
    showBoy: false,
    showGirl: false,
    showUnisex: false,
    showCasuals: false,
    showBirthdays: false,
    showEthnicwear: false,
    showNightWear: false,
    showAccessories: false,
    maxPrice: "3500",
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
