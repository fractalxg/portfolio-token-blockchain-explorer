import { RevealX } from "../utils/Animation";
import "./Content.css";

const Content = ({ tokenData, contentText }) => {
  return (
    <div id="content" className="content-container">
      <RevealX>
        <div className="token-data-container">
          <div className="data-container">
            <h1>{contentText.title}</h1>
            <p>{tokenData.title}</p>
          </div>

          <div className="data-container">
            <h1>{contentText.price}</h1>
            <p> {tokenData.rate}</p>
          </div>

          <div className="data-container">
            <h1>{contentText.address}</h1>
            <p> {tokenData.address}</p>
          </div>
        </div>
      </RevealX>
    </div>
  );
};

export default Content;
