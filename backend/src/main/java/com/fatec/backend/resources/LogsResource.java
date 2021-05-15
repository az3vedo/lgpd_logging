package com.fatec.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.domain.Logs;
import com.fatec.backend.services.LogsService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/logUsuarios")
@CrossOrigin(origins="*")
public class LogsResource {
	
	@Autowired
	private LogsService logUsuarioService;

	@ApiOperation(value="Retorna um log de usuário buscando por seu ID")
	@GetMapping("/buscarPorId/{id}")
	public ResponseEntity<Logs> buscarPorId(@PathVariable Long id) {
		Logs logUsuario = logUsuarioService.buscarPorId(id);
		return ResponseEntity.ok().body(logUsuario);
	}
	
	@ApiOperation(value="Busca todos os logs de usuários")
	@GetMapping("/buscarTodos")
	public ResponseEntity<List<Logs>> buscarTodos() {
		List<Logs> logsUsuarios = logUsuarioService.buscarTodos();
		return ResponseEntity.ok().body(logsUsuarios);
	}
	
}
