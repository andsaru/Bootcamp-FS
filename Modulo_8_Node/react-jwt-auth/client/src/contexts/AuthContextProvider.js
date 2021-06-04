import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export default function AuthContextProvider({children}) {

    //Crear estado para la info del usuario

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token); // ALERT: XSS - Cross Site Scripting vulnerable
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => loggedInUser.role("TOKEN_KEY");

    const logIn = (token, user) => {
        // Guardar el token
        setToken(token);
        // Actualice el estado loggedInUser
        setLoggedInUser(user);
        // Actualice el estado isAuthenticated
        setIsAuthenticated(true);
    };

    const logOut = (token, user) => {
        removeToken(token);
        setLoggedInUser(user);
        setIsAuthenticated(false);
    };

    // comprueba si tienen un token guardado y si lo tiene te deja logeado
    // useEffect(() => {
    //     const token = getToken();
    //     token && logIn(token, user);
    // }, []);

    const contextValue = {
        logIn,
        logOut,
        isAuthenticated
    };

    return (
        <AuthContext.Provider value={contextValue}>  {/*value={{setToken: setToken}} */}
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook para simplificar el uso de este contexto
const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
};
