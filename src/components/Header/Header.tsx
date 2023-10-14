import { Navbar } from '..'

const Header = () => {
  return (
    <header>
      <div className='container-wrap'>
        <Navbar />
        <div className='hero'>
          <div className='hero-text-box'>
            <h2>Immersive experiences that deliver</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
