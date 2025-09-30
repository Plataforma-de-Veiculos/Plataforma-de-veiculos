package br.com.plataformaveiculos.api.repositories;

import br.com.plataformaveiculos.api.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}