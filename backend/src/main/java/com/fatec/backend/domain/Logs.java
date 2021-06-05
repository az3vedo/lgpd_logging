package com.fatec.backend.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@Entity
@Table(name="logs")
public class Logs implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_log")
	private Long id;
	
	private String dados;
	
	@ManyToOne
	@JoinColumn(name="admin_id")
	private Admin adminId;
	
	private String acao;
	
	@Column(name="tabela")
	private String tabelaAcao;
	
	@Column(name="data_da_acao")
	private LocalDateTime dataHora;
}
