import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContextProvider"

export default function PrivateRoute({children, ...rest}) {

    const { isAuthenticated } = useAuthContext();

    return (
        // render, se ejecuta cada vez que se "pinta" el componente
        // volviendo a comprobar si está autenticado
        <Route {...rest} render={() => {
            // return user.role === "ADMIN" por ej si fuera admin
            return isAuthenticated
                ?children
                : <Redirect to="/login" />
        }}/>
    )
}
