import { Employee, EmployeeService } from "../models"

export const employeeService = {
    createEmployee: async (attributes: {
        firstName: string,
        lastName: string,
        phone: string,
        birth: Date
        profileUrl: string,
    }) => {
        const employee = Employee.create(attributes)
        return employee
    },

    addServiceOnEmployee: async (employeeId: number, serviceId: number) => {
        if (serviceId && employeeId) { 
            const employee = await Employee.findByPk(employeeId);

            if (!employee) {
                return "Employee not found";
            }

            const service = await Employee.findByPk(serviceId);

            if (!service) {
                return "Service not found";
            }

            const employeeService = await EmployeeService.create({employeeId, serviceId})
            return employeeService;

        } else {
            return 'No Service IDs Provided'
        }
    },

    getEmployee: async () => {
        const employees = await Employee.findAll({
            order: [['id', 'ASC']],
            include: {
                association: 'Services',
                attributes: [
                   'id',
                   'name',
                   'description',
                   'value'  
                ],
            }
        })
        return employees
    },

    updateEmployee: async (id: number, attributes: {
        firstName: string,
        lastName: string,
        phone: string,
        birth: Date
        profileUrl: string,
    }) => {
        const [affectedRows ,updatedEmployee] = await Employee.update(attributes, { where: { id }, returning: true })
        return updatedEmployee[0]
    },

    deleteEmployee: async (id: number) => {
        await Employee.destroy({
            where: { id }
        })
    }
}