import { useAuthContext } from "../contexts/AuthContextProvider";

export default function Dashboard() {

    const {logOut} = useAuthContext();

    return (
        <div className="container">
            <h1>This is a PRIVATE page</h1>
            <button onClick={logOut} className="btn btn-warning">logOut</button>
        </div>
    )
}