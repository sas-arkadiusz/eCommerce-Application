-- SCHEMA CREATION
DROP SCHEMA IF EXISTS ecommerce;
CREATE SCHEMA ecommerce;

-- GAME_GENRE TABLE CREATION
CREATE TABLE IF NOT EXISTS ecommerce."game_genre" (
  "id" SERIAL NOT NULL,
  "genre_name" VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY ("id"));

-- GAME_LANGUAGE TABLE CREATION
CREATE TABLE IF NOT EXISTS ecommerce."game_language" (
  "id" SERIAL NOT NULL,
  "language" VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY ("id"));

-- GAME TABLE CREATION
CREATE TABLE IF NOT EXISTS ecommerce."game" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(255) DEFAULT NULL,
  "description" VARCHAR(255) DEFAULT NULL,
  "unit_price" NUMERIC(13,2) DEFAULT NULL,
  "image_url" VARCHAR(255) DEFAULT NULL,
  "active" BOOLEAN DEFAULT true,
  "has_singleplayer" BOOLEAN DEFAULT false,
  "has_multiplayer" BOOLEAN DEFAULT false,
  "has_vr" BOOLEAN DEFAULT false,
  "units_in_stock" INT DEFAULT NULL,
  "date_created" TIMESTAMP(6) DEFAULT NULL,
  "last_updated" TIMESTAMP(6) DEFAULT NULL,
  "genre_id" BIGINT NOT NULL,
  "language_id" BIGINT NOT NULL,
  PRIMARY KEY ("id"),
  FOREIGN KEY ("genre_id") REFERENCES ecommerce."game_genre" ("id"),
  FOREIGN KEY ("language_id") REFERENCES ecommerce."game_language" ("id"));