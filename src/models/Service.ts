import { database } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Service {
  id: number
  name: string
  description: string
  iconUrl: string
  value: number
}

export interface ServiceCreationAttributes extends Optional<Service, 'id'> {}

export interface ServiceInstance extends Model<Service, ServiceCreationAttributes>, Service {}

export const Service = database.define<ServiceInstance, Service>('Service', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  iconUrl: {
    type: DataTypes.STRING
  },
  value: {
    allowNull: false,
    type: DataTypes.FLOAT
  }
})