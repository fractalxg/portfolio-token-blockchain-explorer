import SearchBar from "../searcher/SearchBar";
import { useState, useEffect } from "react";
import "./Body.css";
import SearchComboBox from "../searcher/SearchComboBox";
import SearchList from "../searcher/SearchList";
import Content from "./COntent";

const Body = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [tokenData, setTokenData] = useState([]);
  const [selectedChain, setSelectedChain] = useState("Binance");
  const [visible, setVisible] = useState(false)

  return (
    <div className="body">
      <div className="search-container">
        <h1>Token & Blockchain Explorer</h1>
        <div className="search-wrapper">
          <SearchComboBox setSelectedChain={setSelectedChain} setVisible={setVisible}/>
          <div className="search-box-list">
            <SearchBar
              selectedChain={selectedChain}
              setApiResponse={setApiResponse}
            />
            <SearchList apiResponse={apiResponse} setTokenData={setTokenData} setVisible={setVisible}/>
          </div>
        </div>
      </div>
      {visible && <Content tokenData={tokenData} />}
    </div>
  );
};

export default Body;
