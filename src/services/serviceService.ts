import { Service } from "../models"

export const serviceService = {
    createEmployee: async (attributes: {
        name: string,
        description: string,
        iconUrl: string,
        value: number
    }) => {
        const service = Service.create(attributes)
        return service
    },

    getService: async () => {
        const service = await Service.findAll()
        return service
    },

    updateService: async (id: number, attributes: {
        name: string,
        description: string,
        iconUrl: string,
        value: number
    }) => {
        const [affectedRows ,updatedEmployee] = await Service.update(attributes, { where: { id }, returning: true })
        return updatedEmployee[0]
    },

    deleteService: async (id: number) => {
        await Service.destroy({
            where: { id }
        })
    }
}