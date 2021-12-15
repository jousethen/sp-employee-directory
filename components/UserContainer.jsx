import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

const UserContainer = (props) => {
  const { data, error } = useSwr('/api/users', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  console.log(data)
  return (
    <div className="user-container">

    </div>
  )
}

export default UserContainer