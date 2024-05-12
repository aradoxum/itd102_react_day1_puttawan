const db = require("../models");
const Project = db.project;
const Employee = db.employee;
const Employee_project = db.employee_project;

exports.createProject = (req, res) => {
    try {
        if (!req.body.name) {
            res.status(400).json({
                message: "Name cannot be empty!"
            });
            return;
        }
        const projectAttribute = {
            name: req.body.name
        };

        Project.create(projectAttribute)
            .then((data) => {
                res.status(200).json({ message: "Project created." });
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });
    } catch (error) {
        console.log(error);
    }
};

exports.addEmployeeToProject = (req, res) => {
    try {
        if (!req.body.employeeId || !req.body.projectId) {
            res.status(400).json({
                message: "Employee ID or Project ID cannot be empty!"
            });
            return;
        }

        Project.findByPk(req.body.projectId)
            .then((project) => {
                if (!project) {
                    res.status(404).json({ message: "Project not found!" })
                    return null;
                }

                Employee.findByPk(req.body.employeeId)
                    .then((employee) => {
                        if (!employee) {
                            res.status(404).json({ message: "Employee not found!" })
                            return null;
                        }

                        const junctionAttribute = {
                            employeeId: employee.id,
                            projectId: project.id
                        };

                        Employee_project.create(junctionAttribute)
                        .then( res.status(200).json({message: "Employee project created."}))
                        .catch();
                    })
            })
            .catch((err) => res.status(500).json({ message: err.message }));

    } catch (error) {
        console.log(error);
    }
};