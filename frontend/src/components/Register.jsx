import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'

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
    style={{ width: '100%' }}
    variant="outlined"
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


export default ({ onRegisterUser }) => {
  const [user, setUser] = useState({
    nome: undefined,
    email: undefined,
    cpf: undefined,
    senha: undefined,
  })
  const [checked, setChecked] = useState(false);
  const validateString = (word) => !!word && !!word.length;
  const validateEmail = (email) => !!email && /\S+@\S+\.\S+/.test(email);
  const validateCPF = (cpf) => {
    if (!cpf) return false;
    if (cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999")
      return false;
    let add = 0;
    let i;
    for (i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i), 10) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
      rev = 0;
    if (rev !== parseInt(cpf.charAt(9), 10))
      return false;
    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i), 10) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
      rev = 0;
    if (rev !== parseInt(cpf.charAt(10), 10))
      return false;
    return true;
  }
  const maskCPF = (cpf) => {
    if (!cpf) return '';
    if (cpf.length < 4) return cpf;
    let masked = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}`;
    if (cpf.length > 6) {
      masked += `.${cpf.substring(6, 9)}`;
    }
    if (cpf.length > 9) {
      masked += `-${cpf.substring(9, 11)}`;
    }
    return masked;
  };

  const unmaskCPF = (cpf) => {
    if (!cpf) return '';
    return cpf.replace(/[^0-9]/gi, '').substring(0, 11);
  };
  const maskedCPF = maskCPF(user.cpf);
  const verifyAll = () => validateCPF(user.cpf) && validateEmail(user.email) && validateString(user.nome) && validateString(user.senha) && checked;

  console.log(validateCPF(user.cpf), validateEmail(user.email), validateString(user.nome), validateString(user.senha), checked);

  useEffect(() => {
    console.log("hello");
  }, [])

  const classes = useStyles();

  return (
    <>
      <div className={classes.Banner}>
        <h2>Banner</h2>
      </div>
      <div>
        <Grid container className={classes.grid}>
          <Grid item xs={6}>
            <h2>Cadastre-se</h2>
            <p>Insira suas informações para receber nossa Newsletter! :) </p>
          </Grid>
          <Grid item xs={6}>
            <form className={classes.formCadastro} autoComplete="off">
              <Grid container spacing={1} style={{ width: '80%' }}>
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        value={checked}
                        onChange={() => setChecked(!checked)}
                      />
                    }
                    label="Li e Aceito os Termos de Política de Privacidade"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button disabled={!verifyAll()} onClick={() => onRegisterUser(user)}>Cadastrar</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
