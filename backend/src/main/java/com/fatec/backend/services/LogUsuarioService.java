package com.fatec.backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.backend.domain.LogUsuario;
import com.fatec.backend.dto.LogUsuarioDTO;
import com.fatec.backend.repositories.LogUsuarioRepository;

@Service
public class LogUsuarioService {
	
	@Autowired
	private LogUsuarioRepository logUsuarioRepository;
	
	public LogUsuario buscarPorId(Long id) {
		Optional<LogUsuario> logUsuario = logUsuarioRepository.findById(id);
		return logUsuario.orElseThrow(() -> new ObjectNotFoundException("Log de usuário não encontrado!", null));
	}
	
	public List<LogUsuario> buscarTodos() {
		return logUsuarioRepository.findAll();
	}

	public LogUsuario inserir(String nomeUsuario, String emailUsuario, String acao, String tabelaAcao) {

		LogUsuarioDTO logUsuarioDTO = new LogUsuarioDTO();
		logUsuarioDTO.setNomeUsuario(nomeUsuario);
		logUsuarioDTO.setEmailUsuario(emailUsuario);
		logUsuarioDTO.setAcao(acao);
		logUsuarioDTO.setTabelaAcao(tabelaAcao);
		logUsuarioDTO.setDataHora(LocalDateTime.now());
		LogUsuario logUsuario = logUsuarioDTO.toEntityInsert(logUsuarioDTO);
		
		logUsuarioRepository.save(logUsuario);
		return logUsuario;
	}
}
