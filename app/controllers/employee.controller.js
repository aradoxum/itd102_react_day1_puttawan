const db = require("../models");
const Employee = db.employee;
const Setting = db.setting;

exports.findAllEmployee = (req, res) => {
    try {
        Employee.findAll({
            include: [
                {
                    model: Setting,
                    attributes: ["theme"]
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

exports.insertEmployee = (req, res) => {
    try {
        if (!req.body.name || !req.body.position) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }
        const newEmployee = {
            name: req.body.name,
            position: req.body.position,
            companyId: req.body.companyId
        };

        Employee.create(newEmployee)
            .then(data => {
                Setting.create({
                    theme: req.body.theme,
                    employeeId: data.id
                });

                res.status(200).json({ message: "Employee created." });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });

    } catch (error) {
        console.log(error);
    }
};

exports.findEmployeeById = (req, res) => {
    try {
        const id = req.params.id;
        Employee.findByPk(id)
            .then(data => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json({
                        message: "Id not found!"
                    });
                }
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            });
    } catch (error) {
        console.log(error);
    }
};

exports.updateEmployeeById = (req, res) => {
    try {
        const id = req.params.id;

        const updateEmployee = {
            name: req.body.name,
            position: req.body.position,
            companyId: req.body.companyId
        };

        Employee.update(updateEmployee, { where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({
                        message: "Updated successfully"
                    });
                } else {
                    res.status(400).json({
                        message: "Update failed!"
                    });
                }
            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteEmployeeById = (req, res) => {
    try {
        const id = req.params.id;
        Employee.destroy({ where: { id:id } })
        .then( data => {
            if(data == 1){
                res.status(200).json({
                    message: "Deleted successfully"
                });
            }else{
                res.status(400).json({
                    message: "Deleted failed!"
                });
            }
        })
        .catch( err => {
            res.status(500).json({ message: err.message });
        });
    } catch (error) {
        console.log(error);
    }
};