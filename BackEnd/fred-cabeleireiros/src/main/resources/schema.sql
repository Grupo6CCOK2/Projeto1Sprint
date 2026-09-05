CREATE DATABASE IF NOT EXISTS barbearia;
USE barbearia;

CREATE TABLE Usuario (
                         idUsuario INT AUTO_INCREMENT PRIMARY KEY,
                         nome VARCHAR(45) NOT NULL,
                         sobrenome VARCHAR(45) NOT NULL,
                         email VARCHAR(45) NOT NULL UNIQUE,
                         senha VARCHAR(45) NOT NULL,
                         telefone varchar(45) NOT NULL,
                         ativo BOOLEAN DEFAULT TRUE,
                         temDependente BOOLEAN DEFAULT FALSE,
                         dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);