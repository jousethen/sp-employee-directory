import Image from 'next/image';
import { useRouter } from 'next/router';

const UserCard = (props) => {
  console.log(props)
  let imageUrl = props.picture;
  let user = props.user;
  return (
    <div className="cat-card">
      <Image src={imageUrl} />
    </div>
  )
}
export default UserCard;