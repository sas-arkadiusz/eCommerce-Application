package com.encodeme.gamesstore.dao;

import com.encodeme.gamesstore.entity.GameGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin()
public interface GameGenreRepository extends JpaRepository<GameGenre, Long> {
}
