import { useFilter } from "../../../context/filter-context";
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
    },
    filterDispatch,
  } = useFilter();
  return (
    <aside className="sidebar">
      <ul className="filters-list">
        <h4 className="filters-list-heading">
          Filters<button className="btn btn-secondary-outline h5">Clear</button>
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
          <div
            className="radio-container"
            onChange={(e) =>
              filterDispatch({ type: "SET_MIN_RATING", value: e.target.value })
            }
          >
            <label>
              <input type="radio" name="rating" value="4" className="radio" />4
              Stars & above
            </label>
            <label>
              <input type="radio" name="rating" value="3" className="radio" />3
              Stars & above
            </label>
            <label>
              <input type="radio" name="rating" value="2" className="radio" />2
              Stars & above
            </label>
            <label>
              <input type="radio" name="rating" value="1" className="radio" />1
              Stars & above
            </label>
          </div>
        </li>
        <li className="filter-list-item sort">
          <h4 className="sort-heading">Sort By</h4>
          <div
            className="radio-container"
            onChange={(e) =>
              filterDispatch({ type: "SET_SORT", value: e.target.value })
            }
          >
            <label>
              <input
                type="radio"
                name="sort"
                className="radio"
                value="DESCENDING"
              />
              Price: High to Low
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                className="radio"
                value="ASCENDING"
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
