import React from 'react';
import Grid from '@material-ui/core/Grid';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '375874688300-2codq537qg7meqc5uk8k47co11q8dk5a.apps.googleusercontent.com';

const Login = ({onSuccess, onFailure}) => {
    return (
        <div style={{
            height: '100vh',
            overflowY: 'hidden',
            backgroundColor: '#1d1e46'
        }}>
        <Grid container spacing={3} style={{
            padding: '100px', 
            background: "url('/wallpaper.jpg') center center / 100% no-repeat " }}>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} style={{placeContent: 'center', display: 'flex', height: 'min-content'}}>
            <h2 style={{
                color: '#fff',
                fontSize: '50px',
                paddingTop: '50px'
                }}>Faça o Login para acessar o sistema! :)</h2>
        </Grid>
            <Grid item xs={12} style={{placeContent: 'center', display: 'grid'}}>
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
        </div>
    );
}

export default Login;