import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";
import bcrypt from 'bcrypt'

export interface User {
  id: number
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  birth: Date;
  email: string;
  password: string;
  profileUrl: string;
}

export interface UserCreationAttributes extends Optional<User, 'id'> {}

export interface UserInstance extends Model<User, UserCreationAttributes>, User {
}

export const User = database.define<UserInstance, User>( "User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    birth: {
      allowNull: false,
      type: DataTypes.DATE
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    profileUrl: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    hooks: {
        beforeSave: async (user) => {
            if (user.isNewRecord || user.changed('password')) {
                user.password = await bcrypt.hash(user.password.toString(), 10)
            }
        }
    }
});
