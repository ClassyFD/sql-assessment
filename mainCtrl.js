module.exports = {
    getUsers: (req, res)=>{
        let db = req.app.get('db');
        db.init_tables.getAllUsers().then((response)=>{
          res.status(200).send(response);
        })
    },
    getVehicles: (req, res)=>{
        let db = req.app.get('db');
        db.init_tables.getAllVehicles().then((response)=>{
          res.status(200).send(response);
        })
    },
    addUsers: (req, res)=>{
        let db = req.app.get('db');
        let {name, email} = req.body;
        db.init_tables.addUsers([name, email]).then((response)=>{
            res.status(200).send(response);
        })
    },
    addVehicles: (req, res)=>{
        let db = req.app.get('db');
        let {make, model, year, owner_id} = req.body;
        db.init_tables.addVehicles([make, model, year, owner_id]).then((response)=>{
            res.status(200).send(response);
        })
    },
    getVehicleCount: (req, res)=>{
        let db = req.app.get('db');
        db.init_tables.getVehicleCount([req.params.userId]).then((response)=>{
            res.status(200).send(response);
        })
    },
    getVehiclesByUser: (req, res)=>{
        let db = req.app.get('db');
        db.init_tables.getVehiclesByUser([req.params.userId]).then((response)=>{
            res.status(200).send(response);
        })
    },
    getVehiclesByQuery: (req, res)=>{
        let db = req.app.get('db');
        if (req.query.userEmail) {
            db.init_tables.getVehiclesByEmail([req.query.userEmail]).then((response)=>{
                res.status(200).send(response);
            })
        } else if (req.query.userFirstStart) {
            db.init_tables.getVehiclesByFirstName([req.query.userFirstStart]).then((response)=>{
                res.status(200).send(response);
            })
        }   
    },
    getNewerVehicles: (req, res)=>{
        let db = req.app.get('db');
        db.init_tables.getNewerVehicles().then((response)=>{
            res.status(200).send(response);
        })
    },
    changeOwnership: (req, res)=>{
        let db = req.app.get('db');
        db.init_tables.changeOwnership([req.params.vehicleId, req.params.userId]).then((response)=>{
            res.status(200).send(response);
        })
    },
    removeOwnership: (req, res)=> {
        let db = req.app.get('db');
        db.init_tables.removeOwnership([req.params.vehicleId, req.params.userId]).then((response)=>{
            res.status(200).send(response);
        })
    },
    deleteVehicle: (req, res)=>{
        let db = req.app.get('db');
        db.init_tables.deleteVehicle([req.params.vehicleId]).then((response)=>{
            res.status(200).send(response);
        })
    }
}