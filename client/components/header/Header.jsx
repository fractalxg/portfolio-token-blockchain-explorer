import "./Header.css";
import Options from "./Options";
import TokenHeader from "./TokenHeader";

const Header = ({contentText, setContentText}) => {

  return (
    <div className="container">
      <div className="header">
        <Options contentText={contentText} setContentText={setContentText}/>
      </div>
      <TokenHeader />
    </div>
  );
};

export default Header;
