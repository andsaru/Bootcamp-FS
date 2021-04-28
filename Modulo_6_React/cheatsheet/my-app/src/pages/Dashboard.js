import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Dashboard() {

    const [userID, setUserID] = useState(1);

    const history = useHistory();
    //console.log(history); // para ver que hace

    function handleClick(event) {
        // Queremos que nos ellve a /record/userID
        history.push(`/record/${userID}`)
    }

    return (
        <div>
            <input type="text" style={{marginRight: "10px"}} onChange={e => setUserID(e.target.value)} value={userID}/>
            <button onClick={handleClick}>Ir al perfil del usuario {userID}</button>
        </div>
    )
}
