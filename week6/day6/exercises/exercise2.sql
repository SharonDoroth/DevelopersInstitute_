UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'New Language')
WHERE title IN ('Film Title 1', 'Film Title 2');

DROP TABLE customer_review;

SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

SELECT f.film_id, f.title, f.rental_rate
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

SELECT film_id, title
FROM film
WHERE description LIKE '%sumo wrestler%' AND 
      film_id IN (SELECT film_id FROM film_actor WHERE actor_id IN (SELECT actor_id FROM actor WHERE first_name = 'Penelope' AND last_name = 'Monroe'));

SELECT film_id, title
FROM film
WHERE length < 60 AND rating = 'R';

SELECT f.film_id, f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date BETWEEN '2005-07-28' AND '2005-08-01'
  AND f.rental_rate > 4.00
  AND r.customer_id = (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan');


SELECT film_id, title
FROM film
WHERE (title LIKE '%boat%' OR description LIKE '%boat%') AND replacement_cost > 20.00;

