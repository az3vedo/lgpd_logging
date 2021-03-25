package com.fatec.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.backend.domain.LogUsuario;

@Repository
public interface LogUsuarioRepository extends JpaRepository<LogUsuario, Long>{

}
