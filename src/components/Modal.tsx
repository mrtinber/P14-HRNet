import { MutableRefObject, forwardRef } from "react";

export const Modal = forwardRef<HTMLDialogElement, {}>((_, ref) => {
    return (
        <dialog className="modal" ref={ref}>
            <div id="confirmation" className="modal__message">Employee Created!</div>
            <button className="modal__close" onClick={() => (ref as MutableRefObject<HTMLDialogElement>).current?.close()}>X</button>
        </dialog>
    );
});

// type ModalProps = {
//     open: boolean;
//     onClose: () => void;
// };

// export const Modal = ({ open, onClose }: ModalProps) => {
//     return (
//         <dialog className="modal" open={open} onClose={onClose}>
//             <div id="confirmation" className="modal__message">Employee Created!</div>
//             <button className="modal__close" onClick={onClose}>X</button>
//         </dialog>
//     );
// };