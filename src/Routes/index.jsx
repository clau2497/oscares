import React from "react"
import { Switch, Route } from "react-router-dom"
import Catalogue from "../components/movie";
import Information  from "../components/MovieInfo"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Catalogue } />
            <Route exact path="/information/:movieId" component={ Information } />
            <Route render={() => <p>Pagina no encontrada</p>} />
        </Switch>
    )
}

export default Routes
