package com.example.Back.Agence.Email;

import lombok.Getter;

@Getter
public enum EmailTemplateName {

    ACTIVATE_ACCOUNT("activate_account"),
    FORGET_password("forget_password");


    private final String name;
    EmailTemplateName(String name) {
        this.name = name;
    }
}