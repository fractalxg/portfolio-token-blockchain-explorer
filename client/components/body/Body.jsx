import SearchBar from "../searcher/SearchBar";
import { useState } from "react";
import "./Body.css";
import SearchComboBox from "../searcher/SearchComboBox";
import SearchList from "../searcher/SearchList";

const Body = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedChain, setSelectedChain] = useState("Binance");

  return (
    <div className="body">
      <div className="search-container">
        <h1>Token & Blockchain Explorer</h1>
        <div className="search-wrapper">
          <SearchComboBox setSelectedChain={setSelectedChain} />
          <div className="search-box-list">
            <SearchBar
              selectedChain={selectedChain}
              setApiResponse={setApiResponse}
            />
						{<SearchList apiResponse={apiResponse}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
