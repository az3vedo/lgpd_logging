package com.fatec.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fatec.backend.domain.Logs;

@Repository
public interface LogsRepository extends JpaRepository<Logs, Long>{

}
