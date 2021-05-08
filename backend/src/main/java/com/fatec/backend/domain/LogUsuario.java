package com.fatec.backend.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@Entity
@Table(name="logs")
public class LogUsuario implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(name="nome_usuario")
	private String nomeUsuario;
	@Column(name="email_usuario")
	private String emailUsuario;
	private String acao;
	@Column(name="tabela")
	private String tabelaAcao;
	@Column(name="data_da_acao")
	private LocalDateTime dataHora;
}
