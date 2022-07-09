// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="images-container">
      <div>
        <img src={imgUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
