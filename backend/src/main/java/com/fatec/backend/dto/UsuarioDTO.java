package com.fatec.backend.dto;

import com.fatec.backend.domain.Usuario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UsuarioDTO {

	private Long id;
	private String email;
	private String nome;
	private String senha;
	private String cpf;
	
	public Usuario toEntityInsert(UsuarioDTO usuarioDTO) {
		return new Usuario(
				null, email, nome, senha, cpf);
	}
	
	public Usuario toEntityUpdate(Usuario usuario) {
		usuario.setEmail(this.email);
		usuario.setNome(this.nome);
		usuario.setSenha(this.senha);
		usuario.setCpf(this.cpf);
		return usuario;
	}
}
