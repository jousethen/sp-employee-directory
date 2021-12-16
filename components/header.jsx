import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../public/logo.png'

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Image src={logo} alt="" width="300" height="50" className="d-inline-block align-text-top" />
        <a className="navbar-brand" href="/">
          Employee Directory</a>
      </div>
    </nav>
  )
}

export default Header