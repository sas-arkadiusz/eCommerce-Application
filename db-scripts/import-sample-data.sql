-- SAMPLE DATA IMPORT
INSERT INTO ECOMMERCE.GAME_GENRE(CATEGORY_NAME) VALUES ('FPS');
INSERT INTO ECOMMERCE.GAME_GENRE(CATEGORY_NAME) VALUES ('RPG');

INSERT INTO GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('Battlefield 4', 'First-person shooter video game developed by video game developer EA DICE and published by Electronic Arts.', 
59.99, 'assets/images/games/battlefield4.png', true, 75, NOW(), 1);

INSERT INTO GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('Call of Duty WWII', 'First-person shooter video game developed by Sledgehammer Games and published by Activision.', 
79.99, 'assets/images/games/callofdutywwii.png', true, 50, NOW(), 1);

INSERT INTO GAME (NAME, DESCRIPTION, UNIT_PRICE, IMAGE_URL, ACTIVE, UNITS_IN_STOCK, DATE_CREATED, GENRE_ID)
VALUES ('The Witcher 3', 'Action role-playing game developed and published by CD Projekt.', 
39.99, 'assets/images/games/thewitcher3.png', true, 150, NOW(), 1);