package br.com.plataformaveiculos.api.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(unique = true)
    private String email;

    private String senha;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return this.senha; // O Spring Security precisa saber qual campo é a senha.
    }

    @Override
    public String getUsername() {
        return this.email; // Para nosso sistema, o "username" é o e-mail.
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // A conta não expirou.
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // A conta não está bloqueada.
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // As credenciais (senha) não expiraram.
    }

    @Override
    public boolean isEnabled() {
        return true; // O usuário está habilitado.
    }
}