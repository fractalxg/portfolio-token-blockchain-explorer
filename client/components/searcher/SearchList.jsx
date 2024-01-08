import "./SearchList.css";
import {
  showContent,
  searchListShowHide,
  clearSearchInput,
} from "../ComponentsVisibility";

const SearchList = ({ apiResponse, setTokenData }) => {
  const tokenData = (value) => {
    showContent();
    setTokenData(value);
    searchListShowHide("hidden");
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
