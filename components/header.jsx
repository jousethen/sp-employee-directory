import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../public/logo.png'

const Header = () => {
  const router = useRouter()


  return (
    <div className="header">
      <Image src={logo} alt="Red Comic text saying Super Pizza. The last A is a pizza" />
    </div>
  )
}

export default Header