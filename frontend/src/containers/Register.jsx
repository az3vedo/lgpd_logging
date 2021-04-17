import React from 'react';
import RegisterCMP from "../components/Register";
import api from '../api/api';

 const Register = () => {


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

    const createData = (user) => {
        const userToPassToBack = {
            nome: user.nome,
            email: user.email,
            cpf: maskCPF(user.cpf),
            senha: user.senha
        }

        api.post(`http://localhost:8080/usuarios/cadastrar/${userToPassToBack.cpf}`, userToPassToBack)
    }

    return <RegisterCMP onRegisterUser={createData} />;
}

export default Register;