const { DataTypes } = require('sequelize');
const {connection} = require('../../database/db.index');

const User = connection.define('user', {
 
 name: {
   type: DataTypes.STRING,
   allowNull: false
 },

 role: {
   type: DataTypes.ENUM('admin', 'user'),
   allowNull: false,
   defaultValue: 'user'
   
 },

 password: {
    type: DataTypes.STRING,
    allowNull: false
    
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {  
        isEmail: true
    }
    
  },

  direction: {
    type: DataTypes.STRING,
    allowNull: false
    
  },

  postal_code: {
    type: DataTypes.INTEGER,
    allowNull: false
    
  }
}, {
    timestamps: false
});

module.exports = User
