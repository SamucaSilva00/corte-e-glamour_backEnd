import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import { EmployeeInstance } from "./Employee";
import { ServiceInstance } from "./Service";

export interface EmployeeService {
    employeeId: number;
    serviceId: number;
}

export interface EmployeeServiceInstance extends Model<EmployeeService>, EmployeeService { 
    Employee?: EmployeeInstance;
    Service?: ServiceInstance;
}

export const EmployeeService = database.define<EmployeeServiceInstance, EmployeeService>('EmployeeService', {
    employeeId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model: 'employees', 
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    serviceId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model: 'services',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    } 
});
