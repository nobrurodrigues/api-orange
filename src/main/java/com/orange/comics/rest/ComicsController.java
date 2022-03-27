package com.orange.comics.rest;

import com.orange.comics.domain.Comics;
import com.orange.comics.repository.ComicsRepository;
import com.orange.comics.repository.UserRepository;
import com.orange.comics.service.ComicsService;
import com.orange.comics.util.DataUtil;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/comics")
@AllArgsConstructor
@Log4j2
public class ComicsController {

    private ComicsRepository comicsRepository;
    private ComicsService service;
    private DataUtil dataUtil;

    @GetMapping()
    public ResponseEntity<List<Comics>> listarTodos() {
        List<Comics> lista = this.service.listarTodos();
        return ResponseEntity.ok(lista);
    }

    @GetMapping(path = "/{cpf}")
    public ResponseEntity<List<Comics>> listaPorUsuario(@PathVariable("cpf") Long cpf) {

        List<Comics> listaDeComics = this.service.buscarPorUsuario(cpf);

        return ResponseEntity.ok(listaDeComics);
    }


}

