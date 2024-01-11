import "./Header.css";
import Options from "./Options";
import TokenHeader from "./TokenHeader";

const Header = () => {

  return (
    <div className="container">
      <div className="header">
        <Options />
      </div>
      <TokenHeader />
    </div>
  );
};

export default Header;
