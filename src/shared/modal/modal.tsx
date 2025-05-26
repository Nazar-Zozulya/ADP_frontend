import { createPortal } from "react-dom";
import { IModalProps } from "./modal.types";
import { useRef } from "react";




export function Modal(props: IModalProps){
    const { isOpen, onClose, children } = props

    const modalRef = useRef<HTMLDivElement | null>(null)

    function handleClickOutside(event: MouseEvent){
        if (modalRef.current !== event.target && !modalRef.current?.contains(event.target as Node)){
            onClose()
        }
    }

    return createPortal(
        <div ref={modalRef} className="cover-modal">{children}</div>,
        document.body
    )
}