package com.fatec.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LogLoginDTO {

	private Long id;
	private String email;
	private String googleId;
	private String name;

}
