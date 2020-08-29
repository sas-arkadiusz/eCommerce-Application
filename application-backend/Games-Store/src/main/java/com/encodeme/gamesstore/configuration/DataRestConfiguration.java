package com.encodeme.gamesstore.configuration;

import com.encodeme.gamesstore.entity.Game;
import com.encodeme.gamesstore.entity.GameGenre;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class DataRestConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] forbiddenHttpMethods = { HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        config.getExposureConfiguration()
                .forDomainType(Game.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(forbiddenHttpMethods))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(forbiddenHttpMethods));

        config.getExposureConfiguration()
                .forDomainType(GameGenre.class)
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(forbiddenHttpMethods))
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(forbiddenHttpMethods));
    }
}
