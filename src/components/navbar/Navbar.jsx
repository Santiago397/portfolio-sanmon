import './Navbar.css'

const Navbar = () => {
  return (
    <section className='n-wrapper'>
      <nav className='flexCenter paddings innerWidth n-container '>
        <ul className='flexCenter n-list'>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
