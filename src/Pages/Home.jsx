
import { useLocation } from "react-router-dom"

export default function Home() {

    const obj = useLocation()

    return (
        <div>
            Home
        </div>
    )
}