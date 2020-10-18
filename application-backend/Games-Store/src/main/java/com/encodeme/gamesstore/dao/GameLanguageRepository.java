package com.encodeme.gamesstore.dao;

import com.encodeme.gamesstore.entity.GameLanguage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin()
public interface GameLanguageRepository extends JpaRepository<GameLanguage, Long> {
}
