import { RevealX } from "../Animation";
import "./Content.css";

const Content = ({ tokenData }) => {
  return (
    <div id="content" className="content-container">
      <RevealX>
        <div className="token-data-container">
          <div className="data-container">
            <h1>Token Title</h1>
            <p>{tokenData.title}</p>
          </div>

          <div className="data-container">
            <h1>Price</h1>
            <p> {tokenData.rate}</p>
          </div>

          <div className="data-container">
            <h1>Address</h1>
            <p> {tokenData.address}</p>
          </div>
        </div>
      </RevealX>
    </div>
  );
};

export default Content;
