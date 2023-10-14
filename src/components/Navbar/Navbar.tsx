import { useIsMobile } from '@/hooks'
import logo from '@/assets/images/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const isMobile = useIsMobile()
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <nav className='py-6 relative'>
      <div className='flex items-center justify-between'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
        </div>

        {isMobile && (
          <AiOutlineMenu color='#fff' size={26} onClick={toggleNav} />
        )}

        {isMobile && isNavOpen ? (
          <div className='mobile-nav'>
            <NavLinks />
          </div>
        ) : (
          <div className='nav-links'>
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
