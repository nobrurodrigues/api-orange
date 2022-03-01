package com.orange.comics.service;

import com.orange.comics.domain.Usuario;
import com.orange.comics.repository.ComicsRepository;
import com.orange.comics.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Log4j2
public class UsuarioService {

    private ComicsRepository comicsRepository;
    private UserRepository userRepository;

    public Usuario save(Usuario usuario) {
        Usuario usuarioSave = this.userRepository.save(usuario);
        return usuarioSave;
    }
}
