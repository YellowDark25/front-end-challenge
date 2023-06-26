import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={ < Home /> } />
                <Route path="/:user" element={< Profile />} />
            </Switch>
        </BrowserRouter>
    )
}