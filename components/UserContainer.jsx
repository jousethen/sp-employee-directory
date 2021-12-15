import useSwr from 'swr'
import UserCard from './UserCard'
import React, { useState } from 'react'
const fetcher = (url) => fetch(url).then((res) => res.json())

//Render all of the users as well as a search bar that will update list

const UserContainer = (props) => {

  const [users, setUsers] = useState('')
  const [searchText, setSearchText] = useState('')

  const onChange = async e => {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  //use swr hook to get data from our api
  const { data, error } = useSwr(`/api/users`, fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="user-container">
      <form className="search">
        <input
          onChange={(e) => { onChange(e) }}
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