package com.fatec.backend.dto;

import com.fatec.backend.domain.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminDTO {

	private Long id;
	private String google_id;
	private String urlFoto;
	private String nome_completo;
	private String email;

	public Admin toEntityInsert(AdminDTO adminDTO) {
		return new Admin(
				null, google_id, urlFoto, nome_completo, email);
	}
}
