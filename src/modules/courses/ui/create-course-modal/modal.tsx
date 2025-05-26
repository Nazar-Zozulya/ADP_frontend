import { Modal } from "../../../../shared/modal";
import { ICreateCourseModalProps } from "./modal.types";



export function CreateCourseModal({isOpen, onClose}: ICreateCourseModalProps){



    return(
        <Modal isOpen={isOpen} onClose={()=>onClose()}>
            <div className="create-course-modal">
                
            </div>
        </Modal>
    )
}