package com.fatec.backend.util;

import java.math.BigInteger;
import java.security.MessageDigest;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class MD5 {
    
    public String encrypt(String data) throws Exception {
        MessageDigest m = MessageDigest.getInstance("MD5");
        m.update(data.getBytes(),0,data.length());
        return (new BigInteger(1,m.digest()).toString(16));
            
    }
}
