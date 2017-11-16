SELECT vehicles.id, make, model, year, owner_id
FROM vehicles
JOIN users
ON users.id = owner_id 
WHERE name like $1 || '%';