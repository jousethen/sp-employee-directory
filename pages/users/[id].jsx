import Image from 'next/image';
import Modal from '../../components/Modal';
import Router from 'next/router'

const User = (user) => {

  const handleOnClick = async e => {
    await fetch(`http://localhost:3000/api/users/${user.id}`, {
      method: 'DELETE',
    })
    await Router.push('/')
  }

  return (
    <div className="user-profile">
      <Image src={user.picture} width="200%" height="200%" />
      <hr></hr>
      <h2>Personal Information</h2>
      <h4>Name: {user.name} </h4>
      <h4 >Age: {user.age} </h4>
      <hr></hr>
      <h2>Job Information</h2>
      <h4 >Department: {user.department.name} </h4>
      <h4 >Title: {user.title} </h4>
      <h4 >Location: {user.location} </h4>

      <Modal handleOnClick={handleOnClick} />
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#fireModal">Fire</button>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/users/${context.params.id}`)
  const data = await res.json()
  return { props: { ...data } }
}
export default User;