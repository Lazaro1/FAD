import React from 'react'
import {BrowserRouter, Switch, Route} from  'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route Exact="/" component={Home} />
                <Route Exact="/Home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;