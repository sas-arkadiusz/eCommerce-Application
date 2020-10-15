package com.encodeme.gamesstore.dao;


import com.encodeme.gamesstore.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin()
public interface GameRepository extends JpaRepository<Game, Long> {
}
