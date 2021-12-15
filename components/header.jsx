import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../public/logo.png'

const Header = () => {
  const router = useRouter()


  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src={logo} alt="" width="300" height="50" className="d-inline-block align-text-top" />
        </a>
      </div>
    </nav>
  )
}

export default Header