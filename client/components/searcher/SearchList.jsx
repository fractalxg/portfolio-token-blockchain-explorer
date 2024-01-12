import "./SearchList.css";
import {
  clearSearchInput,
} from "../utils/ComponentsVisibility";

const SearchList = ({
  apiResponse,
  setTokenData,
  setVisible,
  setListVisible,
}) => {
  const tokenData = (value) => {
    setVisible(true);
    setTokenData(value);
    setListVisible(false)
    clearSearchInput();
  };

  return (
    <div id="search-list" className="search-list-container">
      {apiResponse &&
        apiResponse.map((data, i) => (
          <div
            onClick={() => tokenData(data)}
            className="list-container"
            key={i}
          >
            <img src={data.image} />
            <p>{data.title}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchList;
