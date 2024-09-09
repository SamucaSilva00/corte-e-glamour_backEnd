import { Service } from './Service'
import { Employee } from './Employee'
import { EmployeeService } from './EmployeeService'
import { User } from './User'

Employee.belongsToMany(Service, { through: EmployeeService, as: 'Services' });
Service.belongsToMany(Employee, { through: EmployeeService, as: 'Employees' });


export {
  Service,
  Employee,
  EmployeeService,
  User,
}