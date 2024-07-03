import { ReactNode } from "react";

type ModalProps = {
    open: boolean,     // If 'true', the modal is open, if 'false, the modal is closed
    onClose: () => void,      // Allowing you to customize the function called on closing
    message?: string,      // *Optional* : To customize the message of the modal if needed
    containerClassName?: string,     // *Optional* : To customize the class name of the container, to add styles
    messageClassName?: string,     // *Optional* : To customize the class name of the message, to add styles
    closeButtonClassName?: string,     // *Optional* : To customize the class name of the close button, to add styles
    closeButtonLabel: string | ReactNode,     // Allowing you to customize the close button with text or a node
    children?: ReactNode,     // *Optional* : Allowing you to add children nodes if needed
};

// *Note: the "modal-wrapper" class is actually used to define a backdrop if needed*
export const Modal = ({ open, onClose, message, containerClassName, messageClassName, closeButtonClassName, closeButtonLabel, children }: ModalProps) => {
    
    // This is to avoid closing the modal when clicking on the actual message, and only doing so when clicking on the backdrop
    const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };
    
    return (
        <>
            <dialog className='modal__wrapper' open={open} onClick={onClose}>
                <div className={containerClassName} onClick={handleContainerClick}>
                    {message && <div className={messageClassName}>{message}</div>}
                    {children}
                    <button className={closeButtonClassName} onClick={onClose}>{closeButtonLabel}</button>
                </div>
            </dialog>
        </>
    );
};