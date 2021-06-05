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
import com.fatec.backend.services.LogsService;
import com.fatec.backend.services.UsuarioService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping(value="/usuarios")
@Api(value="API REST USUARIOS")
@CrossOrigin(origins="*")
@ApiIgnore
public class UsuarioResource {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private LogsService logUsuarioService;

	@ApiOperation(value="Retorna um usuário buscando por seu ID")
	@GetMapping("/buscarPorId/{google_id}/{id}")
	public ResponseEntity<Usuario> buscarPorId(@PathVariable("google_id") String googleId, @PathVariable Long id) throws Exception {
		logUsuarioService.inserir(googleId, null, "BUSCA", "USUARIOS");
		Usuario usuario = usuarioService.buscarPorId(id);
		return ResponseEntity.ok().body(usuario);
	}
	
	@ApiOperation(value="Cadastra um usuário")
	@PostMapping("/cadastrar/{google_id}")
	public ResponseEntity<UsuarioDTO> cadastrar(@PathVariable("google_id") String googleId, @RequestBody UsuarioDTO usuarioDTO) throws Exception {
		logUsuarioService.inserir(googleId, usuarioDTO.getCpf(), "CADASTRO", "USUARIOS");
		usuarioService.inserir(usuarioDTO);
		return ResponseEntity.ok(usuarioDTO);
	}
	
	@ApiOperation(value="Edita um usuário")
	@PutMapping(value = "/editar/{google_id}/{id}")
	public ResponseEntity<UsuarioDTO> alterar(@PathVariable("google_id") String googleId, @RequestBody UsuarioDTO usuarioDTO) throws Exception {
		logUsuarioService.inserir(googleId, usuarioDTO.getCpf(), "EDIÇÃO", "USUARIOS");
		usuarioService.alterar(usuarioDTO);
		return  ResponseEntity.ok(usuarioDTO);
	}
	
	@ApiOperation(value="Deleta um usuário")
	@DeleteMapping("excluir/{google_id}/{id}")
	public ResponseEntity<Void> apagar(@PathVariable("google_id") String googleId, @PathVariable Long id) throws Exception {
		Usuario usuario = usuarioService.buscarPorId(id);
		logUsuarioService.inserir(googleId, usuario.getCpf(), "EXCLUSÃO", "USUARIOS");
		usuarioService.deletar(id);
		return ResponseEntity.ok().build();
	}
	
	@ApiOperation(value="Busca todos os usuários")
	@GetMapping("/buscarTodos/{google_id}/{email}")
	public ResponseEntity<List<Usuario>> buscarTodos(@PathVariable("google_id") String googleId, @PathVariable String email) throws Exception {
		logUsuarioService.inserir(googleId, null, "BUSCA", "USUARIOS");
		List<Usuario> usuarios = usuarioService.buscarTodos();
		return ResponseEntity.ok().body(usuarios);
	}
	
	@ApiOperation(value="Busca usuários por CPF")
	@GetMapping("/buscarUsuarioPorCpf/{google_id}/{cpf}")
	public ResponseEntity<List<UsuarioDTO>> buscarUsuarioPorCpf(@PathVariable("google_id") String googleId, @RequestParam String cpf) throws Exception{
			logUsuarioService.inserir(googleId, null, "BUSCA", "USUARIOS");
			List<UsuarioDTO> listaUsuarioDTO = usuarioService.buscarUsuarioPorCpf(cpf);
		return ResponseEntity.ok().body(listaUsuarioDTO);
	}

	
}
