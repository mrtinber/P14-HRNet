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
            closeButtonLabel={<img src='../circle-xmark-solid.svg' alt='Close' />}
        />
    </>
}