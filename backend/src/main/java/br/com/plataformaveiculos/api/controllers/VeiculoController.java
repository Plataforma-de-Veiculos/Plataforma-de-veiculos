package br.com.plataformaveiculos.api.controllers;

import br.com.plataformaveiculos.api.entities.Veiculo;
import br.com.plataformaveiculos.api.repositories.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @GetMapping
    public List<Veiculo> listarTodos() {

        return veiculoRepository.findAll();
    }

    @PostMapping
    public Veiculo cadastrar(@RequestBody Veiculo veiculo) {

        return veiculoRepository.save(veiculo);
    }

    @PutMapping("/{id}")
    public Veiculo atualizar(@PathVariable Long id, @RequestBody Veiculo veiculoDetalhes) {

        Veiculo veiculo = veiculoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Veículo não encontrado com o id: " + id));

        veiculo.setMarca(veiculoDetalhes.getMarca());
        veiculo.setModelo(veiculoDetalhes.getModelo());
        veiculo.setAno(veiculoDetalhes.getAno());
        veiculo.setPreco(veiculoDetalhes.getPreco());

        return veiculoRepository.save(veiculo);
    }

    @DeleteMapping("/{id}")
    public String deletar(@PathVariable Long id) {

        veiculoRepository.deleteById(id);

        return "Veículo com o id " + id + " foi deletado com sucesso.";
    }
}