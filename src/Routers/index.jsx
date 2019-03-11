import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
// import { PrivateRoute } from './privateRoute';
import { Home } from '../Views/Home';

class Routers extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />

                    <Redirect to='/' />
                </Switch>
            </Router>
        );
    }
}

export { Routers };