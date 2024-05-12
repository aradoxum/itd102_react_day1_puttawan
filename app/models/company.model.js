module.exports = (sequelize, dataType) => {
    const Company = sequelize.define("company", {
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
  
    return Company;
  };