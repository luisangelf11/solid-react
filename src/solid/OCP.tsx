import './ocp.css'
type Props = {
    type: "primary" | "secondary" | "danger" | "warning"
    label: string
}


//OCP (Open/Close Principle)
// * BUENA PRACTICA
export default function Button({type = 'primary', label}: Props) {
    return <button className={`btn ${type}`}>{label}</button>
}
