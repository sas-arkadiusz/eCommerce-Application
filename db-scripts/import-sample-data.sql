-- SAMPLE DATA IMPORT
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('FPS');
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('RPG');
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('Sportowe');
INSERT INTO ECOMMERCE.GAME_GENRE(GENRE_NAME) VALUES ('Zręcznościowe');

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('Battlefield 4', 'First-person shooter video game developed by video game developer EA DICE and published by Electronic Arts.', 
59.99, 'assets/images/games/battlefield4.jpg', true, 75, NOW(), 1);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('Call of Duty WWII', 'First-person shooter video game developed by Sledgehammer Games and published by Activision.', 
79.99, 'assets/images/games/callofdutywwii.jpg', true, 50, NOW(), 1);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('The Witcher 3', 'Action role-playing game developed and published by CD Projekt.', 
39.99, 'assets/images/games/witcher3.jpg', true, 150, NOW(), 2);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('FIFA 21', 'Komputerowa gra sportowa podejmująca tematykę piłki nożnej, stworzona przez studio EA Sports.', 
239.99, 'assets/images/games/fifa21.jpg', true, 250, NOW(), 9);

INSERT INTO ECOMMERCE.GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('Crash Bandicoot 4: Najwyższy Czas', 'Ósma główna gra z serii Crash Bandicoot, ale czwarta chronologiczne.', 
219.99, 'assets/images/games/crash4.jpg', true, 150, NOW(), 10);