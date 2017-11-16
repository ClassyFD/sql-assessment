UPDATE vehicles
SET owner_id = NULL
WHERE id = $1 
AND owner_id = $2
RETURNING *;