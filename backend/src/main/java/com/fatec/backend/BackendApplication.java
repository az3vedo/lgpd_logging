package com.fatec.backend;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fatec.backend.domain.Usuario;
import com.fatec.backend.repositories.UsuarioRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Usuario usuario1 = new Usuario(null, "usuario1@fatec.com.br", "Usuario 1", "123");
		Usuario usuario2 = new Usuario(null, "usuario2@fatec.com.br", "Usuario 2", "Senha legal");
		Usuario usuario3 = new Usuario(null, "usuario3@fatec.com.br", "Usuario 3", "321");
		
		usuarioRepository.saveAll(Arrays.asList(usuario1, usuario2, usuario3));
	}

}
