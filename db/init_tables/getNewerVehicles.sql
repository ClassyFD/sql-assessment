SELECT vehicles.id, make, model, year, owner_id, users.name
FROM vehicles
JOIN users 
ON users.id = owner_id
WHERE year >= 2000
ORDER BY year DESC
