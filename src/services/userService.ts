import { User } from "../models"

export const userService = {
    createUser: async (email: string , attributes: {
        firstName: string,
        lastName: string,
        address: string,
        phone: string,
        birth: Date, 
        email: string,
        password: string,
        profileUrl: string,
    }) => {

        const userAlreadyExists = await User.findOne({where: { email }})

        if (userAlreadyExists) {
            throw new Error('Este e-mail já está cadastrado!')
        }

        const user = User.create(attributes)
        return user
    },
}