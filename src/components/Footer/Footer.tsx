import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoPinterest,
} from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import logo from '@/assets/images/logo.svg'
import { NavLinks } from '..'

const Footer = () => {
  return (
    <footer className='section-padding bg-black'>
      <div className='container-wrap'>
        <div className='flex flex-col lg:flex-row justify-between gap-10'>
          {/* Links */}
          <div className='flex flex-col items-center lg:items-start gap-8'>
            <img src={logo} width={200} alt='logo' />

            <div className='nav-links'>
              <NavLinks extraStyles='flex-col lg:flex-row' />
            </div>
          </div>

          {/* Socials */}
          <div className='flex flex-col items-center lg:items-end gap-8'>
            <div className='socials'>
              <div className='flex gap-4'>
                <BiLogoFacebookSquare color='white' size={25} />
                <BiLogoTwitter color='white' size={25} />
                <BiLogoPinterest color='white' size={25} />
                <BsInstagram color='white' size={25} />
              </div>
            </div>

            <p className='copywrite'>
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
