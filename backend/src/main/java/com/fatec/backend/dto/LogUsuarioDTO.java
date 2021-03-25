package com.fatec.backend.dto;

import java.time.LocalDateTime;

import com.fatec.backend.domain.LogUsuario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LogUsuarioDTO {

	private Long id;
	private String cpf;
	private String acao;
	private String tabelaAcao;
	private LocalDateTime dataHora;
	
	public LogUsuario toEntityInsert(LogUsuarioDTO logUsuarioDTO) {
		return new LogUsuario(
				null, cpf, acao, tabelaAcao, dataHora);
	}
}
