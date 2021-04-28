import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Record() {

    const [userData, setUserData] = useState({});

    // Se puede hacer así
    // const params = useParams(); // devuelve un objeto con los parametros recibidos por URL
    // const user = params.userID;

    // o deconstruyendo y llamdo directamente a los que necesitamos {user}
    const { user } = useParams();
    // console.log({user})

    const USERS_URL = "https://reqres.in/api/users/";

    useEffect(() => {
         fetch(`${USERS_URL}${user}`)
         .then(response => response.json())
         .then(data => setUserData(data))
    // Para solucionar el problema de que acceda y actualice el usuario de la URL
    // Metemos [user]     
    }, [user]);

    return (
        <div>
            {/* Usamos useParams mejor que props */}
            {/* Record of {props.match.params.user} */}
            <h2>Record of user {user}</h2>
            <ul>
                {/* Encadenamiento opcional (uso de ?) sino, no lo coge. Tambien se puede hacer
                un operador ternario y que sino cumple, devuelva "" (vacio) */}
                <li>{userData.data?.email}</li>
                <li>{userData.data?.first_name}</li>
                <li>{userData.data?.last_name}</li>
                <img src={userData.data?.avatar} alt="Profile" />
            </ul> 
        </div>
    )
}
