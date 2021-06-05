import { Grid, TextField } from "@material-ui/core"
import { useState } from "react";
import { SimpleButton } from '../components/Button';
import { maskCPF, validateCPF, unmaskCPF } from '../utils/cpf';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';

const ListUsers = ({ children }) =>
    <Grid
        item
        xs={10}
        style={{ backgroundColor: "#ffffff", borderRadius: 10, margin: 10 }}
    >
        {children}
    </Grid>

const validateString = (word) => !!word && !!word.length;

const validateEmail = (email) => !!email && /\S+@\S+\.\S+/.test(email);

const InputField = ({ error, required, value, onChange, label, inputMode, type, disabled }) => {
    return <ValidationTextField
      disabled={disabled}
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

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  
const EditUser = ({user, editUser}) => {
    console.log(user);
    const classes = useStyles();

    const maskedCPF = maskCPF(user.cpf);
    
    const [open, setOpen] = useState(false);

    const [newUser, setNewUser] = useState(user);
    
    return (
        <div>
          <SimpleButton onClick={() => setOpen(true)}>
            Editar
          </SimpleButton>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Realize a edição:</h2>
                <Grid item xs={6}>
                    <InputField
                    error={false}
                    value={user.cpf}
                    disabled
                    inputMode='numeric'
                    required
                    style={{ width: '100%' }}
                    label="CPF: "
                    />
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <InputField
                    error={!validateString(newUser.nome)}
                    required
                    value={newUser.nome}
                    onChange={(event) => setNewUser({ ...newUser, nome: event.target.value })}
                    label="Nome Completo: "
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputField
                    error={!validateEmail(newUser.email)}
                    required
                    value={newUser.email}
                    onChange={(event) => setNewUser({ ...newUser, email: event.target.value })}
                    label="Email: "
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputField
                    error={!validateString(newUser.senha)}
                    value={newUser.senha}
                    inputMode='password'
                    type='password'
                    required
                    onChange={(event) => setNewUser({ ...newUser, senha: event.target.value })}
                    label="Senha: "
                    />
                </Grid>
                <SimpleButton onClick={() => {editUser(newUser); setOpen(false)}}>
                    Salvar
                </SimpleButton>
                </Grid>

              </div>
            </Fade>
          </Modal>
        </div>
      );
}

const Search = ({ removeUser, getUserByCPF, users, editUser }) => {
    const [cpf, setCpf] = useState('');
    const maskedCPF = maskCPF(cpf);
    return (
        <Grid container spacing={2} style={{ color: "#ffffff", fontSize: 30 }}>
            <Grid item xs={9}>
                <TextField
                    value={maskedCPF}
                    inputMode='numeric'
                    required
                    onChange={(event) => setCpf(unmaskCPF(event.target.value))}
                    variant="filled"
                    label="CPF"
                    style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: 10 }}
                />
            </Grid>
            <Grid item xs={3}>
                <SimpleButton
                    onClick={() => getUserByCPF(maskedCPF).then(window.console.log)} margin={0}>
                    Buscar
                </SimpleButton>
            </Grid>
            <ListUsers>
                {users && users.map(user => (
                    <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid item xs={6} style={{ color: '#000000', fontSize: 18 }}>
                            {user.nome}
                        </Grid>
                        <Grid item xs={3}>
                            <EditUser user={user} editUser={editUser} />
                        </Grid>
                        <Grid item xs={3}>
                            <SimpleButton onClick={() => removeUser(user.id)}>
                                Excluir
                            </SimpleButton>
                        </Grid>
                    </Grid>
                ))}
            </ListUsers>
        </Grid>
    );
}

export default Search;