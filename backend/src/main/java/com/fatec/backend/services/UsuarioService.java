package com.fatec.backend.services;

import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.backend.domain.Usuario;
import com.fatec.backend.dto.UsuarioDTO;
import com.fatec.backend.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	//Decorador que instância automaticamente a dependência
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Usuario buscarPorId(Long id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return usuario.orElseThrow(() -> new ObjectNotFoundException("Usuario não encontrado!", null));
	}
	
	public Usuario inserir(UsuarioDTO usuarioDTO) {

		Usuario usuario = usuarioDTO.toEntityInsert(usuarioDTO);
		
		usuarioRepository.save(usuario);
		return usuario;
	}
	
	public Usuario alterar(UsuarioDTO usuarioDTO) throws Exception {
		if (usuarioDTO.getId() == null) {
			throw new Exception("Id não encontrado");
		}

		Usuario usuario = usuarioDTO.toEntityUpdate(buscarPorId(usuarioDTO.getId()));
		usuarioRepository.save(usuario);
		return usuario;
	}
	
	public void deletar(Long id) {
		usuarioRepository.deleteById(id);
	}
	
	public List<Usuario> buscarTodos() {
		return usuarioRepository.findAll();
	}
}
