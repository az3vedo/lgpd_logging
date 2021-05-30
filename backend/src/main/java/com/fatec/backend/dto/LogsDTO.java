package com.fatec.backend.dto;

import java.time.LocalDateTime;

import com.fatec.backend.domain.Admin;
import com.fatec.backend.domain.Logs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import springfox.documentation.spring.web.json.Json;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LogsDTO {

	private Long id;
	private String dados;
	private Admin adminId;
	private String acao;
	private String tabelaAcao;
	private LocalDateTime dataHora;
	
	public Logs toEntityInsert(LogsDTO logUsuarioDTO) {
		return new Logs(
				null, dados, adminId, acao, tabelaAcao, dataHora);
	}
}
