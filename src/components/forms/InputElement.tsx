type InputElementProps = {
    id: string;
    type: string;
    content: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputElement = ({ id, type, content, name, onChange }: InputElementProps) => {
    return <>
        <label htmlFor={id}>{content}</label>
        <input type={type} id={id} name={name} onChange={onChange}/>
    </>
}