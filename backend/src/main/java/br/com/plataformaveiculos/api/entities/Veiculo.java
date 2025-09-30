package br.com.plataformaveiculos.api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Data
@Entity
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private String modelo;
    private Integer ano;
    private Double preco;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @JsonIgnore // Evita loops infinitos ao converter para JSON
    private Usuario usuario;
}