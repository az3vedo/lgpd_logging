// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';
import api from '../api/api';
import LoginCMP from '../components/Login';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '375874688300-2codq537qg7meqc5uk8k47co11q8dk5a.apps.googleusercontent.com';

export let userLogin;

const Login = ({ onSetUserIsLogged }) => {

  const onSuccess = (res) => {
    onSetUserIsLogged(true);

    userLogin = ({
      google_id: res.profileObj.googleId,
      email: res.profileObj.email,
      urlFoto: res.profileObj.imageUrl,
      nome_completo: res.profileObj.name
    });

    api.post(`http://localhost:8080/login/gerarLogLogin`, userLogin);

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
    <>
    <LoginCMP onSuccess={onSuccess} onFailure={onFailure} />
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
    </>
  );
}

export default Login;
