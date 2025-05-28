import { ReactNode } from "react"

export interface IModalProps {
    // isCover: boolean
    isOpen: boolean
    onClose: ()=> void
    // style: string
    children: ReactNode
}