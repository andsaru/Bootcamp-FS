import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Error from "./pages/Error";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                
                {/* En lugar de usar enlacesa, usamos NavLink: */}
                <NavLink to="/" activeClassName="active" style={{marginRight: "10px"}}>Ir a inicio</NavLink>
                <NavLink to="/dashboard" activeClassName="active" style={{marginRight: "10px"}}>Panel de control</NavLink>
                <NavLink to="/record/5" activeClassName="active">Record 1</NavLink>
                <NavLink to="/record/4" activeClassName="active"> 2</NavLink>
                <NavLink to="/record/3" activeClassName="active"> 3</NavLink>

                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/dashboard" component={Dashboard} />
                    {/* El nombre del parametro lo defino en este momento :user (podría ser :otracosa) */}
                    <Route path="/record/:user" component={Record} />

                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
            <h2>Footer Común</h2>
        </div>
    )
}
