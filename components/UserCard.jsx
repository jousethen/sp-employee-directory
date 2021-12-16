import Image from 'next/image';
import { useRouter } from 'next/router';

const UserCard = (props) => {
  let user = props.user;
  return (
    <>
      <Image src={user.picture} width="100%" height="100%" />
      <h4 className="user-name">{user.name}</h4>
      <p className="user-info">{user.location} {user.title}</p>
      <p className="user-department">{user.department.name} </p>
    </>
  )
}
export default UserCard;