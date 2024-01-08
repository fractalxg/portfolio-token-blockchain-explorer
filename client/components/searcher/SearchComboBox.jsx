import "./SearchComboBox.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  handleClearInput,
  hideContent,
  focusSearchInput,
} from "../ComponentsVisibility";

const SearchComboBox = ({ setSelectedChain }) => {
  const [chainSelection, setChainSelection] = useState("Binance");
  const [visible, setVisible] = useState(false);

  const selectedChain = (chain) => {
    setChainSelection(chain);
    setVisible(!visible);
    handleClearInput();
    setSelectedChain(chain);
    hideContent();
    focusSearchInput();
  };

  const selectionDropDown = () => {
    setVisible(!visible);
  };

  const selectedChainLabel = () => {
    return chainSelection === "Binance" ? "Ethereum" : "Binance";
  };

  return (
    <div className="search-box-container">
      <p onClick={() => selectionDropDown()} className="selected">
        {chainSelection} <IoIosArrowDown className="arrow-icon" />
      </p>
      {visible && (
        <div className="selection">
          <p onClick={() => selectedChain(selectedChainLabel)}>
            {selectedChainLabel()}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchComboBox;
