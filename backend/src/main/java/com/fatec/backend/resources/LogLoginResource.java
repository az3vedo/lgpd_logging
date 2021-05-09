package com.fatec.backend.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.dto.LogLoginDTO;
import com.fatec.backend.services.LogUsuarioService;

import springfox.documentation.annotations.ApiIgnore;

@ApiIgnore
@RestController
@RequestMapping(value="/login")
@CrossOrigin(origins="*")
public class LogLoginResource {
	
	@Autowired
	private LogUsuarioService logUsuarioService;

	@PostMapping("/gerarLogLogin")
	public ResponseEntity<LogLoginDTO> gerarLogLogin(@RequestBody LogLoginDTO logLoginDTO) {
		logUsuarioService.inserir(logLoginDTO.getName(), logLoginDTO.getEmail(), "LOGIN", "");
		return ResponseEntity.ok(logLoginDTO);
	}
	
	@PostMapping("/gerarLogLogout")
	public ResponseEntity<LogLoginDTO> gerarLogLogout(@RequestBody LogLoginDTO logLoginDTO) {
		logUsuarioService.inserir(logLoginDTO.getName(), logLoginDTO.getEmail(), "LOGOUT", "");
		return ResponseEntity.ok(logLoginDTO);
	}
}
