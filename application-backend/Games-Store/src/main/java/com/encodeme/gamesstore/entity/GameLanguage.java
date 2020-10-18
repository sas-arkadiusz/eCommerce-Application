package com.encodeme.gamesstore.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "game_language", schema = "ecommerce")
@Getter
@Setter
public class GameLanguage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "language")
    private String language;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "language")
    private Set<Game> games;
}