import "./SearchList.css";

const SearchList = ({ apiResponse }) => {
  return (
    <div className="search-list-container">
      {apiResponse &&
        apiResponse.map((data, i) => (
          <div className="list-container" key={i}>
            <img src={data.image} />
            <p>{data.title}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchList;
