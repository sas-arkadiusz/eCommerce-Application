package com.encodeme.gamesstore.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "game_genre", schema = "ecommerce")
@Getter
@Setter
public class GameGenre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "genre_name")
    private String genreName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "genre")
    private Set<Game> games;
}
