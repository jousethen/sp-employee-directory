import Image from 'next/image';
import Modal from '../../components/Modal';
import Router from 'next/router'
import Layout from '../../components/Layout'

const User = (user) => {

  //Fire off when the button on the Modal is clicked
  const handleOnClick = async e => {
    await fetch(`/api/users/${user.id}`, {
      method: 'DELETE',
    })
    await Router.push('/')
  }

  return (
    <Layout>
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
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#fireModal">Fire</button>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.HOST}/api/users/${context.params.id}`)
  const data = await res.json()
  return { props: { ...data } }
}
export default User;