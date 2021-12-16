import Image from 'next/image';
import Modal from '../../components/Modal';
import Router from 'next/router'
import Layout from '../../components/Layout'

const Create = (user) => {

  //Fire off when the button on the Modal is clicked
  const handleOnChange = async e => {
    await fetch(`${process.env.HOST}/api/users/`, {
      method: 'POST',
    })
    await Router.push('/users/')
  }

  return (
    <Layout>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label for="nameField" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullname" />
          </div>
          <div className="mb-3">
            <label for="titleField" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label for="locationField" className="form-label">Location</label>
            <input type="text" className="form-control" id="location" />
          </div>
          <div className="mb-3">
            <label for="ageField" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" />
          </div>
          <label for="emailField" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
          <label className="form-check-label" for="flexRadioDefault1">
            Pizza Rogue
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            IT
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Layout>
  )
}
export default Create;