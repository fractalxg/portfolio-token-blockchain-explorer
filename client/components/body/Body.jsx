import SearchBar from "../searcher/SearchBar";
import { useState } from "react";
import "./Body.css";
import SearchComboBox from "../searcher/SearchComboBox";

const Body = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedChain, setSelectedChain] = useState("Binance");

  return (
    <div className="body">
      <div className="search-container">
        <h1>Token & Blockchain Explorer</h1>
        <div className="search-wrapper">
          <SearchComboBox setSelectedChain={setSelectedChain}/>
          <SearchBar selectedChain={selectedChain}/>
        </div>
      </div>
    </div>
  );
};

export default Body;
