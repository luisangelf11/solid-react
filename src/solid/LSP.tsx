type Props = {
    message: string,
    color: string
}

// LSP (Liskov Substitution Principle)
// * BUENA PRACTICA
export  function Alert({message, color}: Props) {
    return (
    <div style={{color}}>{message}</div>
  )
}

export function ErrorAlert({message}: {message: string}){
  return <Alert message={message} color="red" />
}
