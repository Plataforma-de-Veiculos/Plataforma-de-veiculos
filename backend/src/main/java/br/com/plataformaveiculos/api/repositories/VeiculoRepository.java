package br.com.plataformaveiculos.api.repositories;

import br.com.plataformaveiculos.api.entities.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
}
