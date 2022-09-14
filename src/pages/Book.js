import { useParams, useOutletContext, useLocation } from "react-router-dom"

// 1. Pasar datos usando state (no se muestran los datos en la url)
// 3. usar useSearchParams para pasar datos por la url
//tomo los datos que pase en 1. con useLocation
// tomo los datos que pase en 3. usando useParms
export default function Book(){
    const location= useLocation()
    console.log(location.state)
    const {id} = useParams()
    const value = useOutletContext()
    return <>
    {/* {location.state} */}
    <h1>Book {id} {value.contextoOutlet}</h1>

    </>
}