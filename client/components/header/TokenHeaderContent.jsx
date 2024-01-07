import { useState, useRef, useEffect } from "react";
import "./TokenHeaderContent.css";
import axios from "axios";

const TokenHeaderContent = ({ url, tokenSearch, tokenDigit }) => {
  const [token, setToken] = useState();

  const getToken = async () => {
    const response = await axios.get(url + tokenSearch);
    setToken([response.data]);
  };

  useEffect(() => {
    getToken();
  }, []);

  

  return (
    <div>
      {token &&
        token.map((data, i) => (
          <div className="content" key={i}>
            <img src={data[0].image} />
            <span>{tokenDigit}</span>
            <span id="currency">{(data[0].rate)}</span>
          </div>
        ))}
    </div>
  );
};

export default TokenHeaderContent;
