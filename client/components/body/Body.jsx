import SearchBar from "../searcher/SearchBar";
import { useState, useEffect } from "react";
import "./Body.css";
import SearchComboBox from "../searcher/SearchComboBox";
import SearchList from "../searcher/SearchList";
import Content from "./COntent";

const Body = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [tokenData, setTokenData] = useState([]);
  const [visibleList, setVisibleList] = useState(true);
  const [selectedChain, setSelectedChain] = useState("Binance");

  return (
    <div className="body">
      <div className="search-container">
        <h1>Token & Blockchain Explorer</h1>
        <div className="search-wrapper">
          <SearchComboBox 
              setSelectedChain={setSelectedChain}
          />
          <div className="search-box-list">
            <SearchBar
              selectedChain={selectedChain}
              setApiResponse={setApiResponse}
              setVisibleList={setVisibleList}
            />
            {visibleList && (
              <SearchList
                apiResponse={apiResponse}
                setTokenData={setTokenData}
                setVisibleList={setVisibleList}
              />
            )}
          </div>
        </div>
      </div>
      <Content tokenData={tokenData} />
    </div>
  );
};

export default Body;
