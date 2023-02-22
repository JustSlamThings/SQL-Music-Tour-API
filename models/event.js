'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    events_id: {
      type: DataTypes.INTEGER,
      // autoIncrement:true,
      allowNull: false,
    },
    name_id: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    stage_id: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};