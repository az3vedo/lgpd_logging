import { Grid, TextField } from "@material-ui/core"
import { useState } from "react";
import { Link } from "react-router-dom"
import { SimpleButton } from '../components/Button';
import { maskCPF, validateCPF, unmaskCPF } from '../utils/cpf';

const ListUsers = ({ children }) =>
    <Grid
        item
        xs={10}
        style={{ backgroundColor: "#ffffff", borderRadius: 10, margin: 10 }}
    >
        {children}
    </Grid>
const Search = ({ removeUser, getUserByCPF, users }) => {
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
                            <Link to={`/edit/${user.id}`} style={{textDecoration: 'none'}}>
                                <SimpleButton>Editar</SimpleButton>
                            </Link>
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