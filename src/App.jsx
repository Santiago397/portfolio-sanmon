import Greeting from "./components/greeting/Greeting"
import Navbar from "./components/navbar/Navbar"
import './App.css'
import About from "./components/about/About"

const App = () => {
  return (
    <>
      <section className="flexCenter innerWidth app">
        <Navbar />
        <Greeting />
        <About />
      </section>
    </>
  )
}

export default App
