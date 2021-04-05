import { useState, useEffect } from "react"
import "./styles/styles.scss"
import Home from "./pages/Home"
import Aboutme from "./pages/Aboutme"
import Drawings from "./pages/Drawings"
import Submit from "./pages/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const _data = await fetch("/drawings", { method: "POST" })
      let json = await _data.json()
      setData(json)
    })()
  }, [])

  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={Aboutme} />
        <Route path='/drawings' render={() => <Drawings data={data} />} />
        <Route path='/contact' component={Submit} />
      </div>
    </Router>
  )
}

export default App
