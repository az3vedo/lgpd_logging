import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { SimpleButton } from '../components/Button';
import { maskCPF, validateCPF, unmaskCPF } from '../utils/cpf';

const useStyles = makeStyles(() => ({
  grid: {
    direction: 'row',
    justify: 'spaceAround',
    alignItems: 'center',
    spacing: '3',
  },
  formCadastro: {

  },
  Banner: {

  }
}));

const InputField = ({ error, required, value, onChange, label, inputMode, type }) => {
  return <ValidationTextField
    value={value}
    error={!!value ? error : false}
    isEmpty={!!value}
    inputMode={inputMode}
    onChange={onChange}
    style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: 10 }}
    variant="filled"
    label={label}
    required={required}
    type={type}
  />
}
const ValidationTextField = withStyles(isEmpty => ({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: isEmpty ? 'grey' : 'red',
      borderWidth: 2,
    },
    '& input:hover': {

    },
  },
}))(TextField);


const Register = ({ onRegisterUser }) => {
  const [user, setUser] = useState({
    nome: undefined,
    email: undefined,
    cpf: undefined,
    senha: undefined,
  });

  const [checked, setChecked] = useState(false);
  const validateString = (word) => !!word && !!word.length;
  const validateEmail = (email) => !!email && /\S+@\S+\.\S+/.test(email);
  const maskedCPF = maskCPF(unmaskCPF(user.cpf));
  const verifyAll = validateCPF(user.cpf) && validateEmail(user.email) && validateString(user.nome) && validateString(user.senha) && checked;

  const classes = useStyles();

  return (
    <>
      <div>
        <Grid container className={classes.grid}>
          <form className={classes.formCadastro} autoComplete="off">
            <Grid container spacing={1} style={{ width: '100%' }}>
              <Grid item xs={12}>
                <InputField
                  error={!validateString(user.nome)}
                  required
                  value={user.nome}
                  onChange={(event) => setUser({ ...user, nome: event.target.value })}
                  label="Nome Completo: "
                />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  error={!validateEmail(user.email)}
                  required
                  value={user.email}
                  onChange={(event) => setUser({ ...user, email: event.target.value })}
                  label="Email: "
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  error={!validateCPF(user.cpf)}
                  value={maskedCPF}
                  inputMode='numeric'
                  required
                  onChange={(event) => setUser({ ...user, cpf: unmaskCPF(event.target.value) })}
                  style={{ width: '100%' }}
                  label="CPF: "
                />
              </Grid>
              <Grid item xs={6}>
                <InputField
                  error={!validateString(user.senha)}
                  value={user.senha}
                  inputMode='password'
                  type='password'
                  required
                  onChange={(event) => setUser({ ...user, senha: event.target.value })}
                  label="Senha: "
                />
              </Grid>
              <Grid item xs={12} style={{ color: "#ffffff" }} >
                <FormControlLabel
                  control={
                    <Checkbox
                      required
                      color="primary"
                      value={checked}
                      style={{ backgroundColor: "#ffffff", padding: 8, width: 0, height: 0, borderRadius: 4, margin: 10 }}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Li e Aceito os Termos de Política de Privacidade"
                />
              </Grid>
              <Grid item xs={12}>
                <SimpleButton 
                  margin={0} 
                  disabled={!verifyAll} 
                  onClick={() => onRegisterUser(user).then(() => {
                    setUser({
                      nome: '',
                      email: '',
                      cpf: '',
                      senha: '',
                    });
                    alert(`Cadastro realizado com sucesso! 😍.`);
                  }
                  )}
                >
              
                    Cadastrar
                </SimpleButton>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    </>
  )
}
export default Register;