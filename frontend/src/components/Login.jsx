import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '375874688300-2codq537qg7meqc5uk8k47co11q8dk5a.apps.googleusercontent.com';

const Login = ({onSuccess, onFailure}) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} style={{placeContent: 'center', display: 'flex'}}>
            <h2>Faça o Login para acessar o sistema! :)</h2>
        </Grid>
            <Grid item xs={12} style={{placeContent: 'center', display: 'flex'}}>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                />
            </Grid>
        </Grid>
    );
}

export default Login;