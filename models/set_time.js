'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_time.init({
    set_time_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_events_id: DataTypes.INTEGER,
    band_id: DataTypes.SMALLINT,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    stage_id: DataTypes.SMALLINT,
    event_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'set_time',
  });
  return set_time;
};