module.exports = (app) => {
var router = require("express").Router();
const employee = require("../controllers/employee.controller");

router.get("/", employee.findAllEmployee);

router.post("/create-employee", employee.insertEmployee);

router.get("/edit-employee/:id", employee.findEmployeeById);

router.put("/update-employee/:id", employee.updateEmployeeById);

router.delete("/delete-employee/:id", employee.deleteEmployeeById);

app.use("/api/employee", router);
};