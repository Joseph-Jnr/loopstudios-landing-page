interface NavLinksProps {
  extraStyles?: string
}

const NavLinks = ({ extraStyles }: NavLinksProps) => {
  return (
    <ul className={extraStyles}>
      <li>
        <a href=''>About</a>
      </li>
      <li>
        <a href=''>Careers</a>
      </li>
      <li>
        <a href=''>Events</a>
      </li>
      <li>
        <a href=''>Products</a>
      </li>
      <li>
        <a href=''>Support</a>
      </li>
    </ul>
  )
}

export default NavLinks
