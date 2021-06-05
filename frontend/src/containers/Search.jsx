import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import { userLogin } from '../containers/Login';
import api from '../api/api';

const Search = ({ onSetUserIsLogged }) => {
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        api.get(`http://localhost:8080/usuarios/buscarTodos/${userLogin.google_id}/${userLogin.email}`)
            .then(r=>setUsers(r.data.sort((a, b) => a.id - b.id)));
    };

    useEffect(() => {
         getAllUsers();
    }, [userLogin]);

    const editUser = (user) => {
        api.put(`http://localhost:8080/usuarios/editar/${userLogin.google_id}/${user.id}`, user)
            .then(() => {getAllUsers()
                alert('Usuário atualizado com sucesso! ✌');
            });
    }

    const removeUser = (id) => {
        api.delete(`http://localhost:8080/usuarios/excluir/${userLogin.google_id}/${id}`)
            .then(() => { 
                getAllUsers();
                alert('Usuário removido com sucesso! ✌');
            });
    }
    const getUserByCPF = (cpf) => 
        api.get(`http://localhost:8080/usuarios/buscarUsuarioPorCpf/${userLogin.google_id}/{cpf}?cpf=${cpf}`)
            .then(r => setUsers(r.data));

    return (
        <Layout
            option={2}
            users={users}
            title={"Consulte um usuário para uma edição ou exclusão:"}
            editUser={editUser}
            removeUser={removeUser}
            getUserByCPF={getUserByCPF}
            onSetUserIsLogged={onSetUserIsLogged}
        />
    )
}
export default Search;