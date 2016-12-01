/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Campmabry = sequelize.define('Campmabrymin', {
    STATION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    STATION_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ELEVATION: {
      type: 'DOUBLE',
      allowNull: true
    },
    LATITUDE: {
      type: 'DOUBLE',
      allowNull: true
    },
    LONGITUDE: {
      type: 'DOUBLE',
      allowNull: true
    },
    DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    REPORTTPYE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOURLYSKYCONDITIONS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOURLYPRSENTWEATHERTYPE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOURLYDRYBULBTEMPF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HOURLYDRYBULBTEMPC: {
      type: 'DOUBLE',
      allowNull: true
    },
    HOURLYWETBULBTEMPF: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HOURLYWETBULBTEMPC: {
      type: 'DOUBLE',
      allowNull: true
    },
    HOURLYDewPointTempC: {
      type: 'DOUBLE',
      allowNull: true
    },
    HOURLYRelativeHumidity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HOURLYWindSpeed: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HOURLYWindDirection: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOURLYWindGustSpeed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOURLYStationPressure: {
      type: 'DOUBLE',
      allowNull: true
    },
    HOURLYPressureTendency: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOURLYPressureChange: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HOURLYSeaLevelPressure: {
      type: 'DOUBLE',
      allowNull: true
    },
    HOURLYPrecip: {
      type: 'DOUBLE',
      allowNull: true
    },
    HOURLYAltimeterSetting: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DAILYSunrise: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DAILYSunset: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    DAILYWeather: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'campmabrymin'
  });
return Campmabry;
};
