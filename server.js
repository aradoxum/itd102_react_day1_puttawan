require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require("./app/models");
db.sequelize.sync({force: true}).then(() => {
    console.log('Database sync...');
});

app.get('/', function(req, res){
    res.send('Default Route');
});

require("./app/routes/employee.route")(app);
require("./app/routes/company.route")(app);
require("./app/routes/project.route")(app);

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});
