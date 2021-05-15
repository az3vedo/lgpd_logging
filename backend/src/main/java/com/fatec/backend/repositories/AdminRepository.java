package com.fatec.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fatec.backend.domain.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	@Query("SELECT a FROM Admin a WHERE a.googleId = ?1")
	public Admin findAdminByGoogleId(String googleId);

}
