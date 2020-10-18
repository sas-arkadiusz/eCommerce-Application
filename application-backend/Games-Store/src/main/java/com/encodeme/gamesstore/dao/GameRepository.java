package com.encodeme.gamesstore.dao;


import com.encodeme.gamesstore.entity.Game;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin()
public interface GameRepository extends JpaRepository<Game, Long> {

    Page<Game> findByGenreId(@RequestParam("category_id") Long id, Pageable pageable);
    Page<Game> findByLanguageId(@RequestParam("language_id") Long id, Pageable pageable);
    Page<Game> findByHasSingleplayerTrue(Pageable pageable);
    Page<Game> findByHasMultiplayerTrue(Pageable pageable);
    Page<Game> findByHasVrTrue(Pageable pageable);

}
