type InputElementProps = {
    id: string,
    type: string,
    content: string,
}

export const InputElement = ({ id, type, content }: InputElementProps) => {
    return <>
        <label htmlFor={id}>{content}</label>
        <input type={type} id={id} />
    </>
}