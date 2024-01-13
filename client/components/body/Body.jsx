import SearchBar from "../searcher/SearchBar";
import { useState, useEffect } from "react";
import "./Body.css";
import SearchComboBox from "../searcher/SearchComboBox";
import SearchList from "../searcher/SearchList";
import Content from "./COntent";

const Body = ({contentText}) => {
  const [apiResponse, setApiResponse] = useState([]);
  const [tokenData, setTokenData] = useState([]);
  const [selectedChain, setSelectedChain] = useState("Binance");
  const [visible, setVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);

  return (
    <div className="body">
      <div className="search-container">
        <h1>{contentText.search}</h1>
        <div className="search-wrapper">
  
          <SearchComboBox
            setSelectedChain={setSelectedChain}
            setVisible={setVisible}
            setListVisible={setListVisible}
          />
          <div className="search-box-list">
            <SearchBar
              selectedChain={selectedChain}
              setApiResponse={setApiResponse}
              setListVisible={setListVisible}
              contentText={contentText}
            />
            {listVisible && (
              <SearchList
                apiResponse={apiResponse}
                setTokenData={setTokenData}
                setVisible={setVisible}
                setListVisible={setListVisible}
              />
            )}
          </div>
        </div>
      </div>
      {visible && <Content tokenData={tokenData} contentText={contentText}/>}
    </div>
  );
};

export default Body;
