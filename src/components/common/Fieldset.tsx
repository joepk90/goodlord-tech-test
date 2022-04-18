type Props = {
    children: any
}

const Fieldset = ({ children }: Props) => {
    return (
        <fieldset className="fieldset-block">{children}</fieldset>
    )
}

export default Fieldset