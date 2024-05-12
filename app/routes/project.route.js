module.exports = (app) => {
    var router = require("express").Router();
    const project = require("../controllers/project.controller");

    router.post("/create-project", project.createProject);
    router.post("/create-employee-project", project.addEmployeeToProject);

    app.use("/api/project", router);
};