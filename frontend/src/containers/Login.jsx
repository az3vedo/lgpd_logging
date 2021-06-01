import React, {useState} from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import api from '../api/api';
import LoginCMP from '../components/Login';

export let userLogin;

const Login = ({onSetUserIsLogged}) => {

  const onSuccess = (res) => {
    onSetUserIsLogged(true);

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
    <LoginCMP onSuccess={onSuccess} onFailure={onFailure} />
  );
}

export default Login;
