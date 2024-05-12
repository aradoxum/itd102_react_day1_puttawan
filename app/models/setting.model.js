module.exports = (sequelize, dataType) => {
    const Setting = sequelize.define("setting", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        theme: {
            type: dataType.STRING,
            allowNull: false
        }
    });
    return Setting;
};