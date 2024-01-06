import SearchBar from "../SearchBar";
import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <h1>Token & Blockchain Explorer</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Body;
