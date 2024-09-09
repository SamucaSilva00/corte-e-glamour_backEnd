import { database } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Employee {
  id: number
  firstName: string
  lastName: string
  phone: string
  birth: Date
  profileUrl: string
}

export interface EmployeeCreationAttributes extends Optional<Employee, 'id'> {}

export interface EmployeeInstance extends Model<Employee, EmployeeCreationAttributes>, Employee {
}

export const Employee = database.define<EmployeeInstance, Employee>('Employee', {
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
    phone: {
        allowNull: false,
        type: DataTypes.STRING
    },
    birth: {
        allowNull: false,
        type: DataTypes.DATE
    },
    profileUrl: {
        type: DataTypes.STRING
    },
})