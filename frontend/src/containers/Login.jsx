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
      google_id: res.profileObj.googleId,
      email: res.profileObj.email,
      urlFoto: res.profileObj.imageUrl,
      nome_completo: res.profileObj.name
    });

    api.post(`http://localhost:8080/login/gerarLogLogin`, userLogin);

    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Login realizado! Seja bem vindo(a) ${res.profileObj.name} 😍.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Falha no Login:', res);
    alert(
      `Falha no login. 😢 Para eventuais erros acesse: twitter.com/sivanesh_fiz`
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
