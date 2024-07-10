import { useEmployeeForm } from "../../hooks/useEmployeeForm";

type InputElementProps = {
    id: string;
    type: string;
    content: string;
    name?: string;
    pattern: string; 
    errorMessage: string;
}

export const InputElement = ({ id, type, content, name, pattern, errorMessage }: InputElementProps) => {

    const { handleChange, error } = useEmployeeForm()
    
    return <>
        <label htmlFor={id}>{content}</label>
        <input type={type} id={id} name={name} onChange={handleChange} pattern={pattern}/>
        { error && <div className="input__error">{errorMessage}</div>}
    </>
}