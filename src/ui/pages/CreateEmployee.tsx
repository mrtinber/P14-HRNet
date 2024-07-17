import { Link } from "react-router-dom";
import { useEmployeeForm } from "../hooks/useEmployeeForm";
import { Modal } from "react-modal-tinber";
import { CreateEmployeeForm } from "../components/forms/CreateEmployeeForm";
import { CloseIcon } from "../components/icons/CloseIcon";

export const CreateEmployee = () => {
  const { isOpen, handleClose } = useEmployeeForm();

  return (
    <>
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
        message="Employee Created!"
        containerClassName="modal"
        messageClassName="modal__message"
        closeButtonClassName="modal__close"
        closeButtonLabel={
          <CloseIcon />
        }
      />
    </>
  );
};
