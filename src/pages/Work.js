import React from "react"
import Navbar from "../components/Navbar"

const Work = () => {
  return (
    <div id='my-work'>
      <Navbar />
      <h1>My work</h1>
      <div id='card-container'>
        <div id='card'>
          <div id='card-header'>
            <h2>Hello</h2>
          </div>
          <div id='card-body'>
            <button>Click here</button>
          </div>
        </div>
        <div id='card'>
          <div id='card-header'>
            <h2>Hello</h2>
          </div>
          <div id='card-body'>
            <button>Click here</button>
          </div>
        </div>
        <div id='card'>
          <div id='card-header'>
            <h2>Hello</h2>
          </div>
          <div id='card-body'>
            <button>Click here</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
