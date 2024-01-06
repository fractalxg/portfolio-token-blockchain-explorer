import { useState, useRef, useEffect } from "react";
import "./TokenHeaderConter.css";
import axios from "axios";

const TokenHeaderContent = ({ url }) => {
  const [token, setToken] = useState();

  const getToken = async () => {
    const response = await axios.get(url);
    setToken([response.data]);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      {token &&
        token.map((data, i) => (
          <div key={i}>
            <div className="content">
              <img src={data[0].image} />
              <span>{data[0].title}</span>
              <span>{data[0].rate}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TokenHeaderContent;
