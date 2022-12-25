import { useFilter } from "../../../context/filter-context";
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
          min="0"
          max="3500"
          step="500"
          value={maxPrice}
          onChange={(e) =>
            filterDispatch({ type: "SET_MAX_PRICE", value: e.target.value })
          }
          list="tickmarks"
          className="price-slider"
        />
        <datalist id="tickmarks">
          <option value="0" label="0"></option>
          <option value="500" label="500"></option>
          <option value="1000" label="1000"></option>
          <option value="1500" label="1500"></option>
          <option value="2000" label="2000"></option>
          <option value="2500" label="2500"></option>
          <option value="3000" label="3000"></option>
          <option value="3500" label="3500"></option>
        </datalist>
      </div>
    </>
  );
};

export { PriceSlider };
