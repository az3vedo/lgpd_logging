package com.fatec.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fatec.backend.domain.Usuario;
import com.fatec.backend.dto.UsuarioDTO;
import com.fatec.backend.services.UsuarioService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/usuarios")
@Api(value="API REST USUARIOS")
@CrossOrigin(origins="*")
public class UsuarioResource {
	
	@Autowired
	private UsuarioService usuarioService;

	@ApiOperation(value="Retorna um usuário buscando por seu ID")
	@GetMapping("/buscarPorId/{id}")
	public ResponseEntity<Usuario> buscarPorId(@PathVariable Long id) {
		Usuario usuario = usuarioService.buscarPorId(id);
		return ResponseEntity.ok().body(usuario);
	}
	
	@ApiOperation(value="Cadastra um usuário")
	@PostMapping("/cadastrar")
	public ResponseEntity<UsuarioDTO> cadastrar( @RequestBody UsuarioDTO Usuario) {
		usuarioService.inserir(Usuario);
		return ResponseEntity.ok(Usuario);
	}
	
	@ApiOperation(value="Edita um usuário")
	@PutMapping(value = "/editar/{id}")
	public ResponseEntity<UsuarioDTO> alterar(@RequestBody UsuarioDTO usuarioDTO) throws Exception {
		usuarioService.alterar(usuarioDTO);
		return  ResponseEntity.ok(usuarioDTO);
	}
	
	@ApiOperation(value="Deleta um usuário")
	@DeleteMapping("excluir/{id}")
	public ResponseEntity<Void> apagar( @PathVariable Long id) {
		usuarioService.deletar(id);
		return ResponseEntity.ok().build();
	}
	
	@ApiOperation(value="Busca todos os usuários")
	@GetMapping("/buscarTodos")
	public ResponseEntity<List<Usuario>> buscarTodos() {
		List<Usuario> usuarios = usuarioService.buscarTodos();
		return ResponseEntity.ok().body(usuarios);
	}
	
	@ApiOperation(value="Busca usuários por CPF")
	@GetMapping("/buscarUsuarioPorCpf")
	public ResponseEntity<List<UsuarioDTO>> buscarUsuarioPorCpf(@RequestParam String cpf) throws Exception{
			List<UsuarioDTO> listaUsuarioDTO = usuarioService.buscarUsuarioPorCpf(cpf);
		return ResponseEntity.ok().body(listaUsuarioDTO);
	}

	
}
