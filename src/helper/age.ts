export const calculateAge =(birthdate: string): number=>{
    const today = new Date()
    const birth = new Date(birthdate)
    return Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365))
}