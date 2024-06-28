import { ReactNode } from "react";

// import { MutableRefObject, forwardRef } from "react";

// export const Modal = forwardRef<HTMLDialogElement, {}>((_, ref) => {
//     return (
//         <dialog className="modal" ref={ref}>
//             <div id="confirmation" className="modal__message">Employee Created!</div>
//             <button className="modal__close" onClick={() => (ref as MutableRefObject<HTMLDialogElement>).current?.close()}>X</button>
//         </dialog>
//     );
// });

type ModalProps = {
    open: boolean,
    onClose: () => void,
    message?: string,
    containerClassName?: string,
    messageClassName?: string,
    closeButtonClassName?: string,
    closeButtonLabel: string | ReactNode,
    children?: ReactNode,
};

export const Modal = ({ open, onClose, message, containerClassName, messageClassName, closeButtonClassName, closeButtonLabel, children }: ModalProps) => {
    return (
        <dialog className={containerClassName} open={open} onClose={onClose}>
            {message && <div className={messageClassName}>{message}</div>}
            {children}
            <button className={closeButtonClassName} onClick={onClose}>{closeButtonLabel}</button>
        </dialog>
    );
};