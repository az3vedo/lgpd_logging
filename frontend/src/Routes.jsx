import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './containers/Register';
import Login from './containers/Login';
import Home from './containers/Home';
import Search from './containers/Search';
import Logs from './containers/Logs';

const Routes = () => {

    const [userIsLogged, setUserIsLogged] = useState(false);

    if (userIsLogged) {
        return (
            <>
            <Router>
                <Route path='/' exact>
                    <Home onSetUserIsLogged={setUserIsLogged}/>
                </Route>
                <Route path='/cadastro' exact>
                    <Register onSetUserIsLogged={setUserIsLogged}/>
                </Route>
                <Route path='/consulta' exact >
                    <Search onSetUserIsLogged={setUserIsLogged}/>
                </Route>
                <Route path='/logs' exact >
                    <Logs onSetUserIsLogged={setUserIsLogged}/>
                </Route>
            </Router>

            </>
        );
    }

    return (
        <Router>
            <Route path="/">
                <Login onSetUserIsLogged={setUserIsLogged}/>
            </Route>
        </Router>
    );
};

export default Routes;