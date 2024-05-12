const db = require("../models");
const Company = db.company;
const Employee = db.employee;

exports.findAllCompany = (req, res) => {
    try {
        Company.findAll({
            include: [
                {
                    model: Employee,
                    attributes: ["name", "position"]
                }
            ]
        })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (error) {
        console.log(error);
    }
};

exports.createCompany = (req, res) => {
    try {
        if (!req.body.name) {
            res.status(400).json({
                message: "Name cannot be empty!"
            });
            return;
        }
        const newCompany = {
            name: req.body.name
        };

        Company.create(newCompany)
            .then(data => {
               res.status(200).json({ message: "Company created." });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });

    } catch (error) {
        console.log(error);
    }
};