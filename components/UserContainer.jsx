import useSwr from 'swr'
import UserCard from './UserCard'
const fetcher = (url) => fetch(url).then((res) => res.json())

const UserContainer = (props) => {
  //use swr hook to get data from our api
  const { data, error } = useSwr(`/api/users`, fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="user-container">
      <form className="search">
        <input
          type="search"
          aria-label="Search"
          width="50px">
        </input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      {data.map(user => (
        <div key={user.id} className="user-card">
          <UserCard user={user} />
        </div>
      ))}
    </div>
  )
}

export default UserContainer