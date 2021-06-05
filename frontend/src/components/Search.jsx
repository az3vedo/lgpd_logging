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
    xs={12}
    style={{ backgroundColor: "#ffffff", borderRadius: 10, margin: 10, padding: '30px' }}
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


const EditUser = ({ user, editUser, open, setOpen }) => {
  console.log(user.id);
  const classes = useStyles();
  const [newUser, setNewUser] = useState(user);

  return (
    <div>
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
            <h2 id="transition-modal-title" style={{padding: '20px 0'}}>Realize a edição:</h2>
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
                error={false}
                value={user.cpf}
                disabled
                inputMode='numeric'
                required
                style={{ width: '100%' }}
                label="CPF: "
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
              <SimpleButton onClick={() => { editUser(newUser); setOpen(false) }}>
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
  const [open, setOpen] = useState(false);
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
        {users && users.map((user) => (
          <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={9} style={{ color: '#000000', fontSize: 18 }}>
              {user.nome}
            </Grid>
            <Grid container xs={3}>
                <Grid item xs={6}>
                {open === user.id && <EditUser key={user.id} user={user} editUser={editUser} open={open} setOpen={setOpen} />}
                <SimpleButton margin={"20px 5px"} onClick={() => setOpen(user.id)}>
                    Editar
            </SimpleButton>
                </Grid>
                <Grid item xs={6}>
                <SimpleButton margin={"20px 5px"} onClick={() => removeUser(user.id)}>
                    Excluir
                                </SimpleButton>
                </Grid>
            </Grid>
          </Grid>
        ))}
      </ListUsers>
    </Grid>
  );
}

export default Search;