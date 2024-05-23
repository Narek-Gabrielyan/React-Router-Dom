
import { Navigate, useNavigate } from "react-router-dom"

export default function About() {

    const navigate = useNavigate();

    const goBack = () => (
        navigate("/", { state: [1, 2, 3, 4]})
    )


    return (
      <>
        <button onClick={goBack}>goBack</button>
        <div>About</div>
      </>
    );
}