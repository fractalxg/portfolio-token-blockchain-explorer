import "./Content.css"

const Content = ({tokenData}) => {
  return (
    <div className="content-container">
      <p>{tokenData.address}</p>  
      <p id="currency"> {tokenData.rate}</p> 
    </div>
  )
}

export default Content