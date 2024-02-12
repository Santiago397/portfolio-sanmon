import Greeting from "./components/greeting/Greeting"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <>
      <section className="flexCenter innerWidth">
        <Navbar />
        <Greeting />
      </section>
    </>
  )
}

export default App
