package com.orange.comics.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(schema = "orange", name = "TB_USUARIO")
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 255, nullable = false, unique = true)
    private String username;

    @Column(length = 8, nullable = false)
    private String password;

    @Column(nullable = false ,unique = true)
    private Long cpf;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "data_nascimento")
    @JsonFormat(pattern = "dd/MM/yyyy", timezone = "GMT-3")
    private Date nascimento;

    @Column
    private String endereco;

    @Column
    private String complemento;

    @Column
    private String cidade;

    @Column
    private String estado;

    @Column
    private String cep;

    @OneToMany(mappedBy = "usuario")
    private List<Comics> comics;

}
