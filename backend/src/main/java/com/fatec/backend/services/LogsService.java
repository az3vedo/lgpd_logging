package com.fatec.backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.backend.domain.Admin;
import com.fatec.backend.domain.Logs;
import com.fatec.backend.dto.LogsDTO;
import com.fatec.backend.repositories.LogsRepository;

@Service
public class LogsService {
	
	@Autowired
	private LogsRepository logUsuarioRepository;
	
	@Autowired
	private AdminService adminService;
	
	public Logs buscarPorId(Long id) {
		Optional<Logs> logUsuario = logUsuarioRepository.findById(id);
		return logUsuario.orElseThrow(() -> new ObjectNotFoundException("Log de usuário não encontrado!", null));
	}
	
	public List<Logs> buscarTodos() {
		return logUsuarioRepository.findAll();
	}

	public Logs inserir(String googleId, String acao, String tabelaAcao) {
		Admin admin = adminService.buscarPorGoogleId(googleId);
		LogsDTO logsDTO = new LogsDTO();
		logsDTO.setDados(null);
		logsDTO.setAdminId(admin);
		logsDTO.setAcao(acao);
		logsDTO.setTabelaAcao(tabelaAcao);
		logsDTO.setDataHora(LocalDateTime.now());
		Logs log = logsDTO.toEntityInsert(logsDTO);
		
		logUsuarioRepository.save(log);
		return log;
	}
}
