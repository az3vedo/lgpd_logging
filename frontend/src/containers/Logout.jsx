import React from 'react';
import { GoogleLogout } from 'react-google-login';
import api from '../api/api';
import {userLogin} from './Login';

const clientId =
  '375874688300-2codq537qg7meqc5uk8k47co11q8dk5a.apps.googleusercontent.com';

const Logout = ({onSetUserIsLogged}) => {
  const onSuccess = () => {
    onSetUserIsLogged(false);

    console.log('Logout made successfully');
    alert('Logout made successfully ✌');

    console.log(userLogin);

    api.post(`http://localhost:8080/login/gerarLogLogout`, userLogin);
  };  

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;