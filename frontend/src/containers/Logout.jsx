import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '375874688300-2codq537qg7meqc5uk8k47co11q8dk5a.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
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