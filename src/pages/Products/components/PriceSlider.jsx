import { useFilter } from "../../../contexts/filter-context";
import "./PriceSlider.css";

const PriceSlider = () => {
  const {
    filterState: { maxPrice },
    filterDispatch,
  } = useFilter();
  return (
    <>
      <h4 className="price-slider-heading">Price</h4>
      <div className="price-slider-container">
        <input
          type="range"
          min="300"
          max="3800"
          step="500"
          value={maxPrice}
          onChange={(e) =>
            filterDispatch({ type: "SET_MAX_PRICE", value: e.target.value })
          }
          list="tickmarks"
          className="price-slider"
        />
        <datalist id="tickmarks">
          <option value="300" label="300"></option>
          <option value="800" label="800"></option>
          <option value="1300" label="1300"></option>
          <option value="1800" label="1800"></option>
          <option value="2300" label="2300"></option>
          <option value="2800" label="2800"></option>
          <option value="3300" label="3300"></option>
          <option value="3800" label="3800"></option>
        </datalist>
      </div>
    </>
  );
};

export { PriceSlider };
