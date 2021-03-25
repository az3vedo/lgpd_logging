package com.fatec.backend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.backend.domain.Usuario;
import com.fatec.backend.dto.UsuarioDTO;
import com.fatec.backend.repositories.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private EntityManager entityManager;
	
	public Usuario buscarPorId(Long id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return usuario.orElseThrow(() -> new ObjectNotFoundException("Usuário não encontrado!", null));
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
	
	public List<UsuarioDTO> buscarUsuarioPorCpf(String cpf) {
		
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<UsuarioDTO> query = cb.createQuery(UsuarioDTO.class);
		Root<Usuario> usuario = query.from(Usuario.class);
		query.multiselect(usuario.get("id"), usuario.get("email"), usuario.get("nome"), usuario.get("senha"), usuario.get("cpf"));

		List<Predicate> predicateList = new ArrayList<>();
				
		if (cpf != null && !cpf.equals("")) {
			Path<String> cpfUsuario = usuario.get("cpf");
			predicateList.add(cb.equal(cpfUsuario, cpf));
		}	
		
		query.orderBy(cb.asc(usuario.get("id")));
				
		javax.persistence.criteria.Predicate[] predicates = new javax.persistence.criteria.Predicate[predicateList.size()];
		predicateList.toArray(predicates);
		query.where(predicates);

		TypedQuery<UsuarioDTO> typedQuery = entityManager.createQuery(query);
		List<UsuarioDTO> listaUsuarios = typedQuery.getResultList();

		return listaUsuarios;
	}

}
