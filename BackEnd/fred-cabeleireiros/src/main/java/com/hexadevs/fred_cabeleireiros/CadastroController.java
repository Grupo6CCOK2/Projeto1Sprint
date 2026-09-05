package com.hexadevs.fred_cabeleireiros;


import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;

@RestController
@RequestMapping("/cadastrar")
public class CadastroController {

    private final JdbcTemplate jdbcTemplate;

    public CadastroController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping
    public ResponseEntity<Void> cadastro(@RequestBody Usuario usuario) {

        if (usuario == null) {
            return ResponseEntity.status(400).build();
        } else if (verificarExiste(usuario)) {
            return ResponseEntity.status(409).build();
        }

        String sql = "insert into Usuario (nome, sobrenome, email, senha, telefone, temDependente) values (?, ?, ?, ?, ?, ?)";

        KeyHolder idGerado = new GeneratedKeyHolder();

        jdbcTemplate.update(con ->  {
            PreparedStatement ps = con.prepareStatement(sql,
                    Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getSobrenome());
            ps.setString(3, usuario.getEmail());
            ps.setString(4, usuario.getSenha());
            ps.setString(5, usuario.getTelefone());
            ps.setBoolean(6, usuario.getTemDependente());

            return ps;
        }, idGerado);

        return ResponseEntity.status(201).build();

    }

    public boolean verificarExiste (Usuario usuario) {
        String sql = "select count(*) from Usuario where email like ? or telefone like ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, usuario.getEmail(), usuario.getTelefone()).intValue() > 0;
    }

}
