import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './containers/Register';
import Login from './containers/Login';
import Logout from './containers/Logout';

const Routes = () => {

    const [userIsLogged, setUserIsLogged] = useState(false);

    if (userIsLogged) {
        return (
            <>
            {/*<Header onSetUserIsLogged={setUserIsLogged} />*/}

            <Router>
             {/*<Route path='/' exact component={Home} />
                <Route path='/cadastro' exact component={Register} />
                <Route path='/consulta' exact component={Search} />
                <Route path='/registros' exact component={Logs} /> */}
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