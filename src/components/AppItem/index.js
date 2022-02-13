// Write your code here
import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList

  return (
    <li className="list-container">
      <img src={imageUrl} alt={appName} className="app-style" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
