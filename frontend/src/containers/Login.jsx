import React, {useState} from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import api from '../api/api';

const clientId =
  '375874688300-2codq537qg7meqc5uk8k47co11q8dk5a.apps.googleusercontent.com';

export let userLogin;

const Login = () => {

  const onSuccess = (res) => {
    userLogin = ({
      name: res.profileObj.name,
      email: res.profileObj.email,
      googleId: res.profileObj.googleId
    });

    api.post(`http://localhost:8080/login/gerarLogLogin`, userLogin);

    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
