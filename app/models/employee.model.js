module.exports = (sequelize, dataType) => {
    const Employee = sequelize.define("employee", {
      id: {
        type: dataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      },
      position: {
        type: dataType.STRING,
        allowNull: false,
      }
    });
  
    return Employee;
  };