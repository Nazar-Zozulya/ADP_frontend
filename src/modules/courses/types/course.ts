import { User } from "../../users/types"

export interface Course {
    image: string
    name: string
    description: string
    author: User
    students: User[]
}