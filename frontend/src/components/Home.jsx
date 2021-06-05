import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom"
import { SimpleButton } from '../components/Button';

const Home = () => {
    return (
        <Grid container spacing={2} style={{ color: "#ffffff", fontSize: 30 }}>
            <Grid item xs={9}>
                Cadastre um usuário
            </Grid>
            <Grid item xs={3}>
                <Link to="/cadastro" style={{ textDecoration: 'none'}}>
                    <SimpleButton margin={0}>
                        Cadastrar
                    </SimpleButton>
                </Link>
            </Grid>
            <Grid item xs={9}>
                Consulte um usuário
            </Grid>
            <Grid item xs={3}>
                <Link to="/consulta" style={{ textDecoration: 'none'}}>
                    <SimpleButton margin={0}>
                        Consultar
                    </SimpleButton>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Home;