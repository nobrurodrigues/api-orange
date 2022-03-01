package com.orange.comics.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(schema = "orange", name = "TB_USUARIO")
public class Usuario extends Object {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 255, nullable = false, unique = true)
    private String nome;

    @Column(nullable = false ,unique = true)
    private Long cpf;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "data_nascimento")
    private Date nascimento;

    @OneToMany
    @JoinColumn(name = "ComicId")
    private List<Comics> comics;
}
