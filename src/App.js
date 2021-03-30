import "./styles/styles.scss"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Aboutme from "./pages/Aboutme"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='App' id='home'>
        <Route exact path='/'>
          <Navbar />
          <Main />
          <Footer />
        </Route>
        <Route path='/aboutme'>
          <Aboutme />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </div>
    </Router>
  )
}

export default App
