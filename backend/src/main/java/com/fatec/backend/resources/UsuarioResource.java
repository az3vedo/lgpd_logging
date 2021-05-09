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
import com.fatec.backend.services.LogUsuarioService;
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
	
	@Autowired
	private LogUsuarioService logUsuarioService;

	@ApiOperation(value="Retorna um usuário buscando por seu ID")
	@GetMapping("/buscarPorId/{nome}/{email}/{id}")
	public ResponseEntity<Usuario> buscarPorId(@PathVariable String nome, @PathVariable String email, @PathVariable Long id) {
		logUsuarioService.inserir(nome, email, "BUSCA", "USUARIO");
		Usuario usuario = usuarioService.buscarPorId(id);
		return ResponseEntity.ok().body(usuario);
	}
	
	@ApiOperation(value="Cadastra um usuário")
	@PostMapping("/cadastrar/{nome}/{email}")
	public ResponseEntity<UsuarioDTO> cadastrar(@PathVariable String nome, @PathVariable String email, @RequestBody UsuarioDTO Usuario) {
		logUsuarioService.inserir(nome, email, "CADASTRO", "USUARIO");
		usuarioService.inserir(Usuario);
		return ResponseEntity.ok(Usuario);
	}
	
	@ApiOperation(value="Edita um usuário")
	@PutMapping(value = "/editar/{nome}/{email}/{id}")
	public ResponseEntity<UsuarioDTO> alterar(@PathVariable String nome, @PathVariable String email, @RequestBody UsuarioDTO usuarioDTO) throws Exception {
		logUsuarioService.inserir(nome, email, "EDIÇÃO", "USUARIO");
		usuarioService.alterar(usuarioDTO);
		return  ResponseEntity.ok(usuarioDTO);
	}
	
	@ApiOperation(value="Deleta um usuário")
	@DeleteMapping("excluir/{nome}/{email}/{id}")
	public ResponseEntity<Void> apagar(@PathVariable String nome, @PathVariable String email, @PathVariable Long id) {
		logUsuarioService.inserir(nome, email, "EXCLUSÃO", "USUARIO");
		usuarioService.deletar(id);
		return ResponseEntity.ok().build();
	}
	
	@ApiOperation(value="Busca todos os usuários")
	@GetMapping("/buscarTodos/{nome}/{email}")
	public ResponseEntity<List<Usuario>> buscarTodos(@PathVariable String nome, @PathVariable String email) {
		logUsuarioService.inserir(nome, email, "BUSCA", "USUARIO");
		List<Usuario> usuarios = usuarioService.buscarTodos();
		return ResponseEntity.ok().body(usuarios);
	}
	
	@ApiOperation(value="Busca usuários por CPF")
	@GetMapping("/buscarUsuarioPorCpf/{nome}/{email}/{cpf}")
	public ResponseEntity<List<UsuarioDTO>> buscarUsuarioPorCpf(@PathVariable String nome, @RequestParam String email, @RequestParam String cpf) throws Exception{
			logUsuarioService.inserir(nome, email, "BUSCA", "USUARIO");
			List<UsuarioDTO> listaUsuarioDTO = usuarioService.buscarUsuarioPorCpf(cpf);
		return ResponseEntity.ok().body(listaUsuarioDTO);
	}

	
}
