
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from '../App';
import OnSubmit from '../components/on-submit';

const RouteComponent = () => (
    <main>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/submit' component={OnSubmit} />
        </Switch>
    </main>
)

export default RouteComponent