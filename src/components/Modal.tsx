import { useRef } from "react";

export const Modal = () => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    return (
        <dialog className="modal" ref={dialogRef}>
            <div id="confirmation" className="modal__message">Employee Created!</div>
            <button className="modal__close" onClick={() => dialogRef.current?.close()}>X</button>
        </dialog>
    )
}