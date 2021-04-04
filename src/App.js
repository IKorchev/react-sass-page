import "./styles/styles.scss"
import Home from "./components/Home"
import Aboutme from "./pages/Aboutme"
import Drawings from "./pages/Drawings"
import Submit from "./pages/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={Aboutme} />
        <Route path='/drawings' component={Drawings} />
        <Route path='/contact' component={Submit} />
      </div>
    </Router>
  )
}

export default App
