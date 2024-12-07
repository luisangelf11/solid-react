type Props = {
    getData: ()=>  Promise<User[]>
}

//DIP (Dependency Inversion Principle)
// * BUENA PRACTICA

import { useEffect, useState } from "react"
import { User } from "../interface/myInterfaces";

export default function UserList({getData}: Props) {
    const [user, setUsers] = useState<User[] | []>();
    
    useEffect(()=>{
        getData().then(setUsers)

    }, [getData])
  return (
    <div>
        {user?.map((el)=> <li key={el.id}>{el.name}</li>)}
    </div>
  )
}
