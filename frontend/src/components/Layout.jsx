import Logout from '../containers/Logout';
import Grid from '@material-ui/core/Grid';
import HomeCMP from '../components/Home';
import Register from '../components/Register';
import { SimpleButton } from '../components/Button';
import { Link } from 'react-router-dom';
import Search from './Search';
import Logs from './Logs';

const WelcomeTitle = ({ children }) => <span style={{ fontSize: 34, fontWeight: 700, margin: 20 }}>{children}</span>
const Div = ({ children }) => <div style={{
    width: '100vw', padding: '100px',
    background: "url('/wallpaper.jpg') center center / 100% no-repeat "
}}>{children}</div>
const ActionArea = ({ children }) => <Grid container spacing={2} style={{
    borderRadius: 10, backgroundColor: '#1d1e46', width: 'auto', padding: 20, margin: 20
}}>{children}</Grid>

const Layout = ({ 
    editUser,
    doTheL,
    onSetUserIsLogged, 
    option, 
    title, 
    onRegisterUser, 
    removeUser, 
    getUserByCPF,
    users,
}) => {
    let screenSize = 12;

    if (option === 0 || option === 1){
        screenSize = 6;
    }
    else if (option === 2) {
        screenSize = 10;
    }

    return (
        <Grid container spacing={2} style={{ alignItems: 'center' }}>
            <Grid item xs={12} style={{ padding:0 }}>
                <Div>
                    {option !== 0 &&
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <SimpleButton>
                                Home
                            </SimpleButton>
                        </Link>}
                </Div>
            </Grid>
            <Grid container style={{padding: '60px'}}>
                <Grid item xs={8}>
                    <WelcomeTitle>{title}</WelcomeTitle>
                </Grid>
                <Grid item xs={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Logout onSetUserIsLogged={onSetUserIsLogged} />
                </Grid>
                <Grid item hidden={option === 4} xs={screenSize}>
                    <ActionArea>
                        <Grid item hidden={option !== 0} xs={12}>
                            <HomeCMP />
                        </Grid>
                        <Grid item hidden={option !== 1} xs={12}>
                            <Register onRegisterUser={onRegisterUser} />
                        </Grid>
                        <Grid item hidden={option !== 2} xs={12}>
                            <Search editUser={editUser} users={users} removeUser={removeUser} getUserByCPF={getUserByCPF} />
                        </Grid>
                    </ActionArea>
                </Grid>
                <Grid item hidden={option === 4} xs={12}>
                    <Link to="/logs" style={{textDecoration: "none", fontFamily: "sans-serif", fontSize: "22px", color: "#000", fontWeight: "600", position: 'static', bottom: '20px'}}>Histórico de Ações</Link>
                </Grid>
                <Grid item hidden={option !== 4} xs={12}>
                    <Logs doTheL={doTheL} />       
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Layout;