import "./SearchBar.css";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="search-bar-container">
        <input type="text" placeholder="Search something..."></input>
        <IoMdSearch className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
