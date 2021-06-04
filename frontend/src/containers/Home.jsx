import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { userLogin } from '../containers/Login';

const Home = ({onSetUserIsLogged}) => {

    const [nomeCompleto, setNomeCompleto] = useState('');
    useEffect(() => {
        if (userLogin)
            setNomeCompleto(userLogin.nome_completo);
            //eslint-disable-next-line
    }, [userLogin]);
    const nome = nomeCompleto.split(" ")[0];
    const title = `Olá, ${nome}!`
    return (
        <Layout option={0} title={title} onSetUserIsLogged={onSetUserIsLogged} />
    )
}
export default Home;