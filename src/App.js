import "./styles/styles.scss"
import Main from "./components/Main"
import Aboutme from "./pages/Aboutme"
import Drawings from "./pages/Drawings"
import Submit from "./pages/Submit"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='App' id='home'>
        <Route exact path='/' component={Main} />
        <Route path='/aboutme' component={Aboutme} />
        <Route path='/drawings' component={Drawings} />
        <Route path='/contact' component={Submit} />
      </div>
    </Router>
  )
}

export default App
