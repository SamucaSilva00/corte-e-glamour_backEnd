import { Request } from "express"
import { Response } from "express"
import { Employee, EmployeeService } from "../models"
import { employeeService } from "../services/employeesService"

export const employeesController = {
    save: async (req: Request, res: Response) => {
        const {firstName, lastName, phone, birth, profileUrl} = req.body

        try {
            const employee = await employeeService.createEmployee({firstName, lastName,phone,birth,profileUrl})
            return res.status(201).json(employee)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
            } 
        }
    },
    addService: async (req: Request, res: Response) => {
        const { employeeId, serviceId } = req.body;
    
        try {
            const employee = await employeeService.addServiceOnEmployee(employeeId, serviceId)
            return res.status(201).json(employee)
           
        } catch (err) {
            if (err instanceof Error) {
                return res.status(500).json({ message: err.message });
            }
        }
    },
    index: async (req: Request, res: Response) => {
        try {
            const employees = await employeeService.getEmployee()
            return res.status(201).json(employees)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(500).json({ message: err.message });
            }
        }
    },
    update: async (req: Request, res: Response) => {
        const employeeId  = req.params.id
        const {firstName, lastName, phone, birth, profileUrl} = req.body

        try {
            const updatedEmployee = await employeeService.updateEmployee(Number(employeeId), {
                firstName,
                lastName,
                phone,
                birth,
                profileUrl
            })

            return res.status(201).json(updatedEmployee)
            
        } catch (err) {
            if (err instanceof Error) {
                return res.status(500).json({ message: err.message });
            }
        }
    },
    delete: async (req: Request, res: Response) => {
        const employeeId  = req.params.id 
        
        try {
            await employeeService.deleteEmployee(Number(employeeId))
            return res.status(201).json({ message: "data deleted successfully" });
        } catch (err) {
            if (err instanceof Error) {
                return res.status(500).json({ message: err.message });
            }
        }
    }

}