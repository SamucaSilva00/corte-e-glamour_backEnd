import { Request } from "express"
import { Response } from "express"
import { serviceService } from "../services/serviceService"


export const servicesController = {
    save: async (req: Request, res: Response) => {
        const {name, description, iconUrl, value} = req.body

        try {
            const service = await serviceService.createEmployee({name, description, iconUrl, value})
            return res.status(201).json(service)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
            } 
        }
    },
    index: async (req: Request, res: Response) => {
        try {
            const service = await serviceService.getService()
            return res.status(201).json(service)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
            } 
        }
    },   
    update: async (req: Request, res: Response) => {
        const serviceId  = req.params.id
        const {name, description, iconUrl, value} = req.body

        try {
            const updatedEmployee = await serviceService.updateService(Number(serviceId), {
                name,
                description,
                iconUrl,
                value
            })

            return res.status(201).json(updatedEmployee)
            
        } catch (err) {
            if (err instanceof Error) {
                return res.status(500).json({ message: err.message });
            }
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const serviceId = req.params.id

            await serviceService.deleteService(Number(serviceId))
            return res.status(201).json({ message: "data deleted successfully" });
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
            } 
        }
    }
}