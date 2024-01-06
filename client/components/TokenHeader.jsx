import "./TokenHeader.css";
import TokenHeaderContent from "./TokenHeaderContent";

const TokenHeader = () => {

  return (
    <div className="token-header">
      <TokenHeaderContent url={"http://localhost:3001/ethereum?term=worldcoin"}/>
			<TokenHeaderContent url={"http://localhost:3001/binance?term=bitcoin"}/>
			<TokenHeaderContent url={"http://localhost:3001/binance?term=ethereum"}/>
    </div>
  );
};

export default TokenHeader;
