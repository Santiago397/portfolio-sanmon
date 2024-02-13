import Greeting from "./components/greeting/Greeting"
import Navbar from "./components/navbar/Navbar"
import './App.css'

const App = () => {
  return (
    <>
      <section className="flexCenter innerWidth app">
        <Navbar />
        <Greeting />
      </section>
    </>
  )
}

export default App
