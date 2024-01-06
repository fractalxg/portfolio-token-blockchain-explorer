import "./TokenHeader.css";
import TokenHeaderContent from "./TokenHeaderContent";

const TokenHeader = () => {
  const ETHEREUM_SERVER = import.meta.env.VITE_ETHEREUM_API_SERVER;
  const BINANCE_SERVER = import.meta.env.VITE_BINANCE_API_SERVER;

  return (
    <div className="token-header">
      <TokenHeaderContent
        url={BINANCE_SERVER}
        tokenSearch={"Binance-Peg Dogecoin Token"}
        tokenDigit={"DOGE"}
      />
      <TokenHeaderContent
        url={BINANCE_SERVER}
        tokenSearch={"Binance-Peg BTCB Token"}
        tokenDigit={"BTC"}
      />
      <TokenHeaderContent
        url={BINANCE_SERVER}
        tokenSearch={"Binance-Peg Ethereum Token"}
        tokenDigit={"ETH"}
      />
      <TokenHeaderContent
        url={ETHEREUM_SERVER}
        tokenSearch={"Worldcoin"}
        tokenDigit={"WLD"}
      />
    </div>
  );
};

export default TokenHeader;
