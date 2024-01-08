import "./SearchComboBox.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SearchComboBox = ({setSelectedChain}) => {
  const [chainSelection, setChainSelection] = useState("Binance");
  const [visible, setVisible] = useState(false);

  const selectedChain = (chain) => {
    setChainSelection(chain);
    setVisible(!visible);
    handleClearInput();
    setSelectedChain(chain)

  };

  const selectionDropDown = () => {
    setVisible(!visible);
  };

  const selectedChainLabel = () => {
    return chainSelection === "Binance" ? "Ethereum" : "Binance";
  };

  const handleClearInput = () => {
    const inputElement = document.getElementById("search"); 
    if (inputElement) {
      inputElement.value = "";
    }
  };

  const clearContent = () => {
    const contents = document.querySelectorAll("#content");
    contents.forEach((data) => {
      data.innerHTML = "";
    });
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
