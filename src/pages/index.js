import * as React from "react"
import Animate from "./Moon/LunaRender" 

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <header style={headingStyles}>
        <h1>Lunar Oracle</h1>
        <h2>Moon render testing</h2>
      </header>
      <div id="MoonView">
        <h1>Moon</h1>
        <Animate/>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
