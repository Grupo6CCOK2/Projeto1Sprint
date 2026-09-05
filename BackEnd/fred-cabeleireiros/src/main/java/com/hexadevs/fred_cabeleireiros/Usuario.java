package com.hexadevs.fred_cabeleireiros;

public class Usuario {
    private Integer idUsuario;
    private String nome;
    private String sobrenome;
    private String email;
    private String senha;
    private String telefone;
    private Boolean temDependente;


    public Usuario() {
    }

    public Usuario(Integer idUsuario, String nome, String sobrenome, String email, String senha, String telefone, Boolean temDependente) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.temDependente = temDependente;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Boolean getTemDependente() {
        return temDependente;
    }

    public void setTemDependente(Boolean temDependente) {
        this.temDependente = temDependente;
    }
}


