-- SAMPLE DATA IMPORT
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('FPS');
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('RPG');
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('Sportowe');
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('Zręcznościowe');

INSERT INTO ECOMMERCE.GAME_LANGUAGE(LANGUAGE) VALUES ('Polski');
INSERT INTO ECOMMERCE.GAME_LANGUAGE(LANGUAGE) VALUES ('Angielski');
INSERT INTO ECOMMERCE.GAME_LANGUAGE(LANGUAGE) VALUES ('Japoński');

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('Battlefield 4', 'First-person shooter video game developed by video game developer EA DICE and published by Electronic Arts.', 
59.99, 'assets/images/games/battlefield4.jpg', true, true, true, false, 75, NOW(), 7, 1);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('Call of Duty WWII', 'First-person shooter video game developed by Sledgehammer Games and published by Activision.', 
79.99, 'assets/images/games/callofdutywwii.jpg', true, true, true, false, 50, NOW(), 7, 1);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('The Witcher 3', 'Action role-playing game developed and published by CD Projekt.', 
39.99, 'assets/images/games/witcher3.jpg', true, true, false, false, 150, NOW(), 8, 1);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('FIFA 21', 'Komputerowa gra sportowa podejmująca tematykę piłki nożnej, stworzona przez studio EA Sports.', 
239.99, 'assets/images/games/fifa21.jpg', true, true, true, false, 250, NOW(), 9, 1);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('Crash Bandicoot 4: Najwyższy Czas', 'Ósma główna gra z serii Crash Bandicoot, ale czwarta chronologiczne.', 
219.99, 'assets/images/games/crash4.jpg', true, true, false, false, 150, NOW(), 10, 1);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('F1 2020', 'Wciągająca gra wyścigowa, w której można stworzyć własny zespół F1.', 
119.99, 'assets/images/games/f12020.jpg', true, true, true, true, 120, NOW(), 9, 2);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('Crash Team Racing Nitro-Fueled', 'Crash wraca za kółko! Szykuj się, by wcisnąć gaz do dechy.', 
149.99, 'assets/images/games/ctr-nitro-fueled.jpg', true, true, false, false, 70, NOW(), 10, 2);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, HAS_SINGLEPLAYER, HAS_MULTIPLAYER, HAS_VR, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID, LANGUAGE_ID)
VALUES ('SpongeBob Kanciastoporty', 'Kultowy klasyk powraca, odnowiony ze spongetastycznym przepychem! Graj jako SpongeBob, Patrick oraz Sandy.', 
249.99, 'assets/images/games/spongebob.jpg', true, true, false, false, 40, NOW(), 10, 3);