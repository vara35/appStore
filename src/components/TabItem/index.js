// Write your code here

import './index.css'

const TabItem = props => {
  const {tabItem, updateByUSer} = props
  const {displayText, tabId} = tabItem

  const addRealatedApps = () => {
    updateByUSer(tabId)
  }

  return (
    <li className="list-item">
      <button type="button" className="list-heading" onClick={addRealatedApps}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
