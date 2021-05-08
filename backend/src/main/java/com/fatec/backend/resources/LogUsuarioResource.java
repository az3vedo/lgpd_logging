package com.fatec.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.domain.LogUsuario;
import com.fatec.backend.services.LogUsuarioService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/logUsuarios")
@CrossOrigin(origins="*")
public class LogUsuarioResource {
	
	@Autowired
	private LogUsuarioService logUsuarioService;

	@ApiOperation(value="Retorna um log de usuário buscando por seu ID")
	@GetMapping("/buscarPorId/{id}")
	public ResponseEntity<LogUsuario> buscarPorId(@PathVariable Long id) {
		LogUsuario logUsuario = logUsuarioService.buscarPorId(id);
		return ResponseEntity.ok().body(logUsuario);
	}
	
	@ApiOperation(value="Busca todos os logs de usuários")
	@GetMapping("/buscarTodos")
	public ResponseEntity<List<LogUsuario>> buscarTodos() {
		List<LogUsuario> logsUsuarios = logUsuarioService.buscarTodos();
		return ResponseEntity.ok().body(logsUsuarios);
	}
	
}
