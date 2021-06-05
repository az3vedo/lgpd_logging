import Layout from '../components/Layout'
import api from '../api/api';
import { useEffect, useState } from 'react';

const Logs = ({onSetUserIsLogged}) => {
    const [doTheL, setDoTheL] = useState ([]);

    useEffect(() => {
        api.get(`http://localhost:8080/logs/buscarTodos`)
            .then(r=>setDoTheL(r.data));
    }, [])

    return <Layout option={4} onSetUserIsLogged={onSetUserIsLogged} title={"Histórico de Ações"} doTheL={doTheL} />
}

export default Logs;

