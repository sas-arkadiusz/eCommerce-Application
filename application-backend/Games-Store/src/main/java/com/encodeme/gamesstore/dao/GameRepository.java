package com.encodeme.gamesstore.dao;


import com.encodeme.gamesstore.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
