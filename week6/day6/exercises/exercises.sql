-- SELECT * FROM customer;

-- SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- SELECT DISTINCT create_date FROM customer;

-- SELECT DISTINCT create_date FROM customer;

-- SELECT * FROM customer
-- ORDER BY first_name DESC;

-- SELECT film_id, title, description, release_year, rental_rate FROM film
-- ORDER BY rental_rate ASC;

-- SELECT a.address, a.phone
-- FROM customer c
-- JOIN address a ON c.address_id = a.address_id
-- JOIN city ci ON a.city_id = ci.city_id
-- JOIN country co ON ci.country_id = co.country_id
-- WHERE co.country = 'United States' AND ci.city ILIKE '%Texas%';

-- SELECT * FROM film
-- WHERE film_id IN (15, 150);

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'YourFavoriteMovieTitle';

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'YourFavoriteMovieTitle%';

-- SELECT film_id, title, description, rental_rate
-- FROM film
-- ORDER BY rental_rate
-- LIMIT 10;

-- SELECT film_id, title, description, rental_rate
-- FROM film
-- WHERE rental_rate NOT IN (
--     SELECT DISTINCT rental_rate FROM film
--     ORDER BY rental_rate
--     LIMIT 10
-- )
-- ORDER BY rental_rate
-- LIMIT 10;

-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id, p.payment_id;

-- SELECT * FROM film
-- WHERE film_id NOT IN (SELECT film_id FROM inventory);

-- SELECT city.city, country.country
-- FROM city
-- JOIN country ON city.country_id = country.country_id;

SELECT * FROM language;

SELECT f.title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

CREATE TABLE new_film (
    id serial PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO new_film (name) VALUES
('Film A'),
('Film B');

CREATE TABLE customer_review (
    review_id serial PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255),
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES
(1, 1, 'Great Film', 9, 'This movie was fantastic!', NOW()),
(2, 2, 'Average Film', 6, 'Not bad, but not exceptional.', NOW());

DELETE FROM new_film WHERE id = 1;
