import useSwr, { useSWRConfig } from 'swr'
import UserCard from './UserCard'

const fetcher = (url) => fetch(url).then((res) => res.json())

//Render all of the users as well as a search bar that will update list

const UserContainer = (props) => {
  //use swr hook to get data from our api
  const { data, error } = useSwr(`${props.endpoint}`, fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>



  return (
    <div className="user-container">
      {data.map(user => (
        <div key={user.id} className="user-card">
          <UserCard user={user} />
        </div>
      ))}
    </div>
  )
}



export default UserContainer