package com.orange.comics.repository;

import com.orange.comics.domain.Comics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComicsRepository extends JpaRepository<Comics, Long> {

    @Query("SELECT c FROM Comics c WHERE c.usuario.cpf = :cpf")
    public List<Comics> findByUser(@Param("cpf") Long cpf);
}
