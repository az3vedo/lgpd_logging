package com.fatec.backend.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.util.MD5;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/hash")
@CrossOrigin(origins="*")
public class HashResource {

	@ApiOperation(value="Gera hash do sistema")
	@GetMapping("/verificarHash/{emailAdmin}/{cpfUser}")
	public ResponseEntity<String> buscarPorId(@PathVariable("emailAdmin") String emailAdmin, @PathVariable("cpfUser") String cpfUser) throws Exception {
		MD5 md5 = new MD5();
		String hash = md5.verificar(emailAdmin, cpfUser);
		return ResponseEntity.ok().body(hash);
	}
	
}
