import React from 'react'
import { userContext } from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'
import Router2 from './router2'

function App() {
  let [user, setUser] = React.useState('')

  return <Router2/>

}
export default App;