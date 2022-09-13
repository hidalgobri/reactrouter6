import { useParams } from "react-router-dom"

export default function Book(){
    const {valor} = useParams()
    return <h1>Book {valor}</h1>
}