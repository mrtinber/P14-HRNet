import { Link } from "react-router-dom";
import { useEmployeeForm } from "../hooks/useEmployeeForm";
import { Modal } from "../components/ui/Modal";
import { Header } from "../components/ui/Header";
import { CreateEmployeeForm } from "../components/forms/CreateEmployeeForm";

export const CreateEmployee = () => {
    const {
        isOpen,
        handleClose,
    } = useEmployeeForm()

    return <>
        <Header />
        <div className="content">
            <div className="container">
                <div className="container__header">
                    <h2>Create Employee</h2>
                    <Link to="employee-list">View Current Employees</Link>
                </div>
                <CreateEmployeeForm />
            </div>
        </div>

        <Modal
            open={isOpen}
            onClose={handleClose}
            message='Employee Created!'
            containerClassName='modal'
            messageClassName='modal__message'
            closeButtonClassName='modal__close'
            closeButtonLabel={
                <svg xmlns="http://www.w3.org/2000/svg" stroke="#000" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
            }
        />
    </>
}