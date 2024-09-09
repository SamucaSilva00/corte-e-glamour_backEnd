import { Request } from "express"
import { Response } from "express"
import { userService } from "../services/userService"

export const userController = {
    save: async (req: Request, res: Response) => {
        const {firstName, lastName, address, phone, birth, email, password, profileUrl} = req.body

        try {
            const user = await userService.createUser(email, {firstName, lastName,address,phone,birth,email,password,profileUrl})
            return res.status(201).json(user)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
            } 
        }
    },
}