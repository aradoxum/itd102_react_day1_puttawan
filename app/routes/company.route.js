module.exports = (app) => {
    var router = require("express").Router();
    const company = require("../controllers/company.controller");

    router.get("/", company.findAllCompany);

    router.post("/create-company", company.createCompany);

    app.use("/api/company", router);
};