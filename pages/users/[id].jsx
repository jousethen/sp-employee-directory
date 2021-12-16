import Image from 'next/image';
import { useRouter } from 'next/router';

const User = (user) => {
  // let user = props.user;
  console.log(user)
  return (
    <div className="user-profile">
      <Image src={user.picture} width="200%" height="200%" />
      <h4 className="user-name">{user.name}</h4>
      <p className="user-info">{user.location} {user.title}</p>
      <p className="user-department">{user.department.name} </p>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/users/${context.params.id}`)
  const data = await res.json()
  return { props: { ...data } }
}
export default User;