import "./SearchList.css";
import { useState } from "react";

const SearchList = ({ apiResponse, setTokenData, setVisibleList }) => {
  const tokenData = (value) => {
    setTokenData(value);
    setVisibleList(false);
  };

  return (
    <div className="search-list-container">
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
