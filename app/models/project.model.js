module.exports = (sequelize, dataType) => {
    const Project = sequelize.define("project", {
      id: {
        type: dataType.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      }
    });
  
    return Project;
  };