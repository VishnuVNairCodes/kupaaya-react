import { useFilter } from "../../../contexts/filter-context";
import { PriceSlider } from "./PriceSlider";
import "./SideBar.css";

const SideBar = () => {
  const {
    filterState: {
      showBoy,
      showGirl,
      showUnisex,
      showCasuals,
      showBirthdays,
      showEthnicwear,
      showNightwear,
      showAccessories,
      minRating,
      sortOrder,
    },
    filterDispatch,
  } = useFilter();
  const handleChangeSortOrder = (e) =>
    filterDispatch({ type: "SET_SORT", value: e.target.value });
  const handleChangeMinRating = (e) =>
    filterDispatch({
      type: "SET_MIN_RATING",
      value: e.target.value,
    });

  return (
    <aside className="sidebar">
      <ul className="filters-list">
        <h4 className="filters-list-heading">
          Filters
          <button
            onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
            className="btn btn-secondary-outline h5"
          >
            Clear
          </button>
        </h4>
        <li className="filters-list-item">
          <PriceSlider />
        </li>
        <li className="filter-list-item category">
          <h4 className="category-heading">Shop For</h4>
          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showBoy}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_BOY" });
                }}
              />
              Boy
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showGirl}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_GIRL" });
                }}
              />
              Girl
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showUnisex}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_UNISEX" });
                }}
              />
              Unisex
            </label>
          </div>
        </li>
        <li className="filter-list-item category">
          <h4 className="category-heading">Categories</h4>
          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showCasuals}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_CASUALS" });
                }}
              />
              Casuals
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showBirthdays}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_BIRTHDAYS" });
                }}
              />
              Birthdays
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showEthnicwear}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_ETHNICWEAR" });
                }}
              />
              Ethnicwear
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showNightwear}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_NIGHTWEAR" });
                }}
              />
              Nightwear
            </label>
            <label>
              <input
                type="checkbox"
                className="checkbox"
                checked={showAccessories}
                onChange={() => {
                  filterDispatch({ type: "TOGGLE_ACCESSORIES" });
                }}
              />
              Accessories
            </label>
          </div>
        </li>
        <li className="filter-list-item rating">
          <h4 className="rating-heading">Rating</h4>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                name="rating"
                value="4"
                checked={minRating === "4"}
                onChange={handleChangeMinRating}
                className="radio"
              />
              4 Stars & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="3"
                checked={minRating === "3"}
                onChange={handleChangeMinRating}
                className="radio"
              />
              3 Stars & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="2"
                checked={minRating === "2"}
                onChange={handleChangeMinRating}
                className="radio"
              />
              2 Stars & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value="1"
                checked={minRating === "1"}
                onChange={handleChangeMinRating}
                className="radio"
              />
              1 Stars & above
            </label>
          </div>
        </li>
        <li className="filter-list-item sort">
          <h4 className="sort-heading">Sort By</h4>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                name="sort"
                value="DESCENDING"
                checked={sortOrder === "DESCENDING"}
                onChange={handleChangeSortOrder}
                className="radio"
              />
              Price: High to Low
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="ASCENDING"
                checked={sortOrder === "ASCENDING"}
                onChange={handleChangeSortOrder}
                className="radio"
              />
              Price: Low to High
            </label>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export { SideBar };
