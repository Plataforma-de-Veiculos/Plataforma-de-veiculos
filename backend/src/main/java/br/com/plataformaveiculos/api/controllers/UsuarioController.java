package br.com.plataformaveiculos.api.controllers;

import br.com.plataformaveiculos.api.entities.Usuario;
import br.com.plataformaveiculos.api.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        String senhaPura = usuario.getSenha();

        String senhaHasheada = passwordEncoder.encode(senhaPura);

        usuario.setSenha(senhaHasheada);

        return usuarioRepository.save(usuario);
    }
}