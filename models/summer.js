/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('summer', {
    date: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'summer'
  });
};
