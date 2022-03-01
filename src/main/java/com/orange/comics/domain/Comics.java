package com.orange.comics.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Entity
@Table(schema = "orange",name = "TB_COMICS")
public class Comics implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ComicId;

    @Column(length = 255, nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String autores;

    private BigDecimal preco;

    private Long ISBN;

    private String descricao;

    @ManyToOne
    @JoinColumn(name = "cpf")
    public Usuario usuario;

}
