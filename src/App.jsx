import Greeting from "./components/greeting/Greeting"
import Navbar from "./components/navbar/Navbar"
import './App.css'
import About from "./components/about/About"
import Experience from "./components/experience/Experience"

const App = () => {
  return (
    <>
      <section className="flexCenter innerWidth app">
        <Navbar />
        <Greeting />
        <About />
        <Experience />
      </section>
    </>
  )
}

export default App
