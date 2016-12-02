/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var austin = sequelize.define('datweatherdb', {

    DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    HOURLYDRYBULBTEMPF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HOURLYWindSpeed: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HOURLYPrecip: {
      type: 'DOUBLE',
      allowNull: true
    }
  }, {
    tableName: 'datweatherdb'
  });
return Campmabry;
};
