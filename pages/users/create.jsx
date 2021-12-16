import Image from 'next/image';
import Modal from '../../components/Modal';
import Router from 'next/router'
import Layout from '../../components/Layout'

const Create = (user) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [age, setAge] = useState('')
  const [department, setDepartment] = useState('')

  const onHandleSubmit = async e => {
    e.preventDefault()
    try {
      const body = {
        name: name,
        email: email,
        title: title,
        location: location,
        age: age,
        departmentId: department
      }
      await fetch(`${process.env.HOST}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push(`/`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <form onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <div className="mb-3">
            <label for="nameField" className="form-label">Full Name</label>
            <input onChange={e => setName(e.target.value)} type="text" className="form-control" id="fullname" />
          </div>
          <div className="mb-3">
            <label for="titleField" className="form-label">Title</label>
            <input onChange={e => setTitle(e.target.value)} type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label for="locationField" className="form-label">Location</label>
            <input onChange={e => setLocation(e.target.value)} type="text" className="form-control" id="location" />
          </div>
          <div className="mb-3">
            <label for="ageField" className="form-label">Age</label>
            <input onChange={e => setAge(e.target.value)} type="number" className="form-control" id="age" />
          </div>
          <label for="emailField" className="form-label">Email address</label>
          <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="form-check">
          <input onChange={e => setDepartment(4)} className="form-check-input" type="radio" name="flexRadioDefault" id="radio1" />
          <label className="form-check-label" for="flexRadioDefault1">
            Pizza Rogue
          </label>
        </div>
        <div className="form-check">
          <input onChange={e => setDepartment(5)} className="form-check-input" type="radio" name="flexRadioDefault" id="radio2" checked />
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