package com.orange.comics.service;

import com.orange.comics.domain.Comics;
import com.orange.comics.domain.Usuario;
import com.orange.comics.repository.ComicsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ComicsService {

    private ComicsRepository comicsRepository;

    public List<Comics> listarTodos() {
        return this.comicsRepository.findAll();
    }

    public List<Comics> buscarPorUsuario(Long cpf) {
      List<Comics> comicsList = this.comicsRepository.findByUser(cpf);

      return comicsList;
    }

}
