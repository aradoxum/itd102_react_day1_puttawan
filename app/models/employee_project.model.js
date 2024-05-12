module.exports = (sequelize, dataType) => {
    const db = require(".");
    const Employee = db.employee;
    const Project = db.project;

    const Employee_project = sequelize.define("employee_project", {
      employeeId: {
        type: dataType.INTEGER,
        references: {
            model: Employee,
            key: 'id'
        }
      },
      projectId: {
        type: dataType.INTEGER,
        references: {
            model: Project,
            key: 'id'
        }
      }
    },{timestamps: false});
  
    return Employee_project;
  };