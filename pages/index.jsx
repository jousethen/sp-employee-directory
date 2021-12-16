import UserContainer from "../components/userContainer"
import Layout from "../components/Layout";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
const Home = props => {
  const [searchText, setSearchText] = useState('')
  const [endpoint, setEndpoint] = useState('/api/users')

  //Pass the endpoint as a prop to the container so it updates when we submit
  const onSubmit = async e => {
    e.preventDefault()
    setEndpoint(`/api/users?searchString=${searchText}`)
  }

  return (
    <>
      <Layout>
        <form className="search"
          onSubmit={onSubmit}>
          <input
            onChange={e => setSearchText(e.target.value)}
            type="search"
            aria-label="Search"
            width="50px">
          </input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <Link href={`/users/create`}>
          <a><button className="btn btn-outline-success" >Create New User</button></a>
        </Link>

        <UserContainer endpoint={endpoint} />
      </Layout>
    </>
  )
}


export default Home
