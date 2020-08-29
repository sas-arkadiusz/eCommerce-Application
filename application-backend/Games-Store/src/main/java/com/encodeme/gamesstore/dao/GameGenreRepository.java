package com.encodeme.gamesstore.dao;

import com.encodeme.gamesstore.entity.GameGenre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameGenreRepository extends JpaRepository<GameGenre, Long> {
}
