import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { userLogin } from '../containers/Login';
import api from '../api/api';

const Search = ({ onSetUserIsLogged }) => {
    const [users, setUsers] = useState([{
        name: 'nicolas',
        cpf: '468.478.028-71',
        id: 33,
    }]);
    useEffect(() => {
        api.get(`http://localhost:8080/usuarios/buscarTodos/${userLogin.google_id}` )
            .then(window.console.log);
    }, [userLogin]);
    const getAllUsers = () => {
        api.get(`http://localhost:8080/usuarios/buscarTodos/${userLogin.google_id}`)
            .then(setUsers);
    };
    const removeUser = (id) => {
        api.delete(`http://localhost:8080/usuarios/excluir/${userLogin.google_id}/${id}`)
            .then(() => getAllUsers());
    }
    const getUserByCPF = (cpf) => 
        api.get(`http://localhost:8080/usuarios/buscarUsuarioPorCpf/${userLogin.google_id}/{cpf}?cpf=${cpf}`)
            .then(r => setUsers(r.data));

    return (
        <Layout
            option={2}
            users={users}
            title={"Consulte um usuário para uma edição ou exclusão:"}
            removeUser={removeUser}
            getUserByCPF={getUserByCPF}
            onSetUserIsLogged={onSetUserIsLogged}
        />
    )
}
export default Search;