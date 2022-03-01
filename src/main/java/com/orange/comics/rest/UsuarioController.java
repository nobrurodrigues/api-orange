package com.orange.comics.rest;

import com.orange.comics.domain.Comics;
import com.orange.comics.domain.Usuario;
import com.orange.comics.repository.ComicsRepository;
import com.orange.comics.repository.UserRepository;
import com.orange.comics.service.UsuarioService;
import com.orange.comics.util.DataUtil;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
@RequestMapping(path = "/cadastro")
@AllArgsConstructor
@Log4j2
public class UsuarioController {

    // Para fazer o hotswap pressionar ctrl + shift + f9

    private DataUtil dataUtil;
    private ComicsRepository comicsRepository;
    private UserRepository userRepository;
    private UsuarioService service;

    @PostMapping()
    public ResponseEntity<Usuario> cadastrarUsuario(Usuario usuario) {
        Usuario retorno = this.service.save(usuario);
        log.info("Usuário salvo com sucesso --> ", retorno);
        return ResponseEntity.ok(retorno);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Usuario> retornaUsuario(@PathVariable(name = "id") Long id) {
        Usuario usuario = this.userRepository.getById(id);
        return ResponseEntity.ok(usuario);
    }

    

}
