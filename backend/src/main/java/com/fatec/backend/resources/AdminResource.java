package com.fatec.backend.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.dto.AdminDTO;
import com.fatec.backend.services.AdminService;
import com.fatec.backend.services.LogsService;

@RestController
@RequestMapping(value="/login")
@CrossOrigin(origins="*")
public class AdminResource {
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private LogsService logsService;

	@PostMapping("/gerarLogLogin")
	public ResponseEntity<AdminDTO> gerarLogLogin(@RequestBody AdminDTO adminDTO) throws Exception {
		adminService.verificarPorGoogleId(adminDTO);
		logsService.inserir(adminDTO.getGoogle_id(), null, "LOGIN", "ADMINS");
		
		return ResponseEntity.ok(adminDTO);
	}
	
	@PostMapping("/gerarLogLogout")
	public ResponseEntity<AdminDTO> gerarLogLogout(@RequestBody AdminDTO adminDTO) throws Exception {
		logsService.inserir(adminDTO.getGoogle_id(), null, "LOGOUT", "ADMINS");
		return ResponseEntity.ok(adminDTO);
	}
}
