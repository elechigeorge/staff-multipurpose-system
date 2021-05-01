import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import Alert from '../layout/Alert';
import Dashboard from '../Dashboard';
import Create from '../Posts/PostForm';
import Posts from '../Posts/Post';
import Post from '../Post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = props => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/create" component={Create} />
                <PrivateRoute exact path="/posts" component={Posts} />
                <PrivateRoute exact path="/posts/:id" component={Post} />
                <Route component={NotFound} />
            </Switch>
        </section>
    );
};

export default Routes;