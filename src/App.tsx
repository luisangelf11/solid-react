import { getUsers } from "./helper/data";
import UserList from "./solid/DIP";

export default function App() {
  return (
    <div>
      <UserList getData={getUsers} />
    </div>
  )
}
