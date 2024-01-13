import Body from "../components/body/Body";
import "./Home.css";

const Home = ({contentText}) => {
  return (
	<div className="home">
		<Body contentText={contentText}/>
	</div>
	)
	
};

export default Home;
