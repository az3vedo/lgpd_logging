package com.fatec.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fatec.backend.domain.Admin;
import com.fatec.backend.dto.AdminDTO;
import com.fatec.backend.repositories.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private LogsService logsService;
	
	public void verificarPorGoogleId(AdminDTO adminDTO) throws Exception {
		Admin admin = adminRepository.findAdminByGoogleId(adminDTO.getGoogle_id());
		
		if(admin == null) {
			this.inserir(adminDTO);
			logsService.inserir(adminDTO.getGoogle_id(), null, "CADASTRO", "ADMINS");
		}
	}
	
	public Admin inserir(AdminDTO adminDTO) {
	
		Admin admin = adminDTO.toEntityInsert(adminDTO);
		
		adminRepository.save(admin);
		return admin;
	}
	
	public Admin buscarPorGoogleId(String googleId) {
		Admin admin = adminRepository.findAdminByGoogleId(googleId);
		return admin;
	}

}
