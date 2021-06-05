package com.fatec.backend.util;

import java.math.BigInteger;
import java.security.MessageDigest;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class MD5 {
    
    public String encrypt(String emailAdmin, String cpfUser) throws Exception {
    	String dados =  emailAdmin + cpfUser;
    	String veridigit = cpfUser.substring(cpfUser.length() - 1);
    	
        MessageDigest m = MessageDigest.getInstance("MD5");
        m.update(dados.getBytes(),0,dados.length());
        int valorConvertido = converter(veridigit);
        return (new BigInteger(1,m.digest()).toString(valorConvertido));
            
    }
    
    public int converter(String verificador) {
    	int novoNumero = Integer.valueOf(verificador);
    	return novoNumero + 16;
    }
    
    public String verificar(String emailAdmin, String cpfUser) throws Exception {
    	System.out.println(emailAdmin);
    	System.out.println(cpfUser);
    	return encrypt(emailAdmin, cpfUser);
    }
}
