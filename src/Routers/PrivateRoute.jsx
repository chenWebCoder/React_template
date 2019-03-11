import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render() {
        const { component: Component, moduleName, ...rest } = this.props;
        const token = localStorage.getItem('token');
        
        return (
            <Route
                {...rest}
                render={props => {
                    return token ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    );
                }}
            />
        );
    }
}
export { PrivateRoute };
