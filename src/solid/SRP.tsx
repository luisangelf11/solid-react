import { calculateAge } from "../helper/age"

type Props = {
    user: {
        name: string,
        birthdate: string
    }
}

//SRP (Single Responsability Principle)
// * BUENA PRACTICA
export default function UserComponent({user}: Props) {
    
    return (
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {calculateAge(user.birthdate)}</p>
    </div>
  )
}
