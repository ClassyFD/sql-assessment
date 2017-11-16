const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const CTRL = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive({
  host: 'ec2-54-225-70-53.compute-1.amazonaws.com',
  port: 5432,
  database: 'db08qi0uips0mf',
  user: 'xzqcqgdmghokvw',
  password: '13c0738dea733a4aaa546d080df8c9bbd9fbd72a54007eb00fbe9e3a62f037f3',
  ssl:true
}).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })

})


// ===== Build enpoints below ============


app.get('/api/users/', CTRL.getUsers);
app.get('/api/vehicles/', CTRL.getVehicles);
app.post('/api/users/', CTRL.addUsers);
app.post('/api/vehicles/', CTRL.addVehicles);
app.get('/api/user/:userId/vehiclecount/', CTRL.getVehicleCount);
app.get('/api/user/:userId/vehicle/', CTRL.getVehiclesByUser);
app.get('/api/vehicle/', CTRL.getVehiclesByQuery);
app.get('/api/newervehiclesbyyear/', CTRL.getNewerVehicles);
app.put('/api/vehicle/:vehicleId/user/:userId/', CTRL.changeOwnership)
app.delete('/api/user/:userId/vehicle/:vehicleId/', CTRL.removeOwnership)
app.delete('/api/vehicle/:vehicleId/', CTRL.deleteVehicle)

// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
