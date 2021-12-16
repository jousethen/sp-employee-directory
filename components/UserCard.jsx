import Image from 'next/image'
import Link from 'next/link'

const UserCard = (props) => {
  let user = props.user;
  return (
    <>
      <Link href={`/users/${user.id}`}>
        <a><Image src={user.picture} width="100px" height="100px" /></a>
      </Link>
      <h4 className="user-name">{user.name}</h4>
      <p className="user-info">{user.location} {user.title}</p>
      <p className="user-department">{user.department.name} </p>

    </>
  )
}
export default UserCard;