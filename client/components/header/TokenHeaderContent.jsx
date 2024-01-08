import { useState, useRef, useEffect } from "react";
import "./TokenHeaderContent.css";
import axios from "axios";
import Loader from "../Loader.jsx"

const TokenHeaderContent = ({ url, tokenSearch, tokenDigit }) => {
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState("");

  const getToken = async () => {
    setIsLoading("loading");
    const response = await axios.get(url + tokenSearch);
    setToken([response.data]);
    setIsLoading("loaded");
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      {isLoading == "loading" ? (
        <Loader />
      ) : (
        token &&
        token.map((data, i) => (
          <div className="content" key={i}>
            <img src={data[0].image} />
            <span>{tokenDigit}</span>
            <span id="currency">{data[0].rate}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default TokenHeaderContent;
