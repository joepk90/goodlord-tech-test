import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

const schema = Yup.object({
    firstName: Yup.string()
        .min(2, 'Minimum of 2 characters required')
        .max(50, 'Maximum of 50 characters required')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Minimum of 2 characters required')
        .max(50, 'Maximum of 50 characters required')
        .required('Required'),
    address: Yup.string()
        .min(2, 'Minimum of 2 characters required')
        .max(50, 'Maximum of 50 characters required')
        .required('Required')
}).required();

type Props = {}

const ReferenceForm = (props: Props) => {

    const {
        register,
        handleSubmit,
        formState
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'all' // validate on blur
    });

    const {
        errors,
        touchedFields
    } = formState;

    const doSubmit = (data: FieldValues) => {
        // console.log(data);
    }

    const hasError = (property: string) => {
        return touchedFields[property] && errors[property] ? { 'error': errors[property].message } : null
    }

    return (
        <form onSubmit={handleSubmit(doSubmit)}>

            <fieldset>
                <h4>Personal</h4>

                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    {...register("firstName")}
                    {...(hasError("firstName"))}
                />

                <label htmlFor='lastName'>Last Name</label>
                <input
                    type='text'
                    {...register('lastName')}
                    {...(hasError("lastName"))}
                />

                <label htmlFor='address'>Address</label>
                <input
                    type='text'
                    {...register('address')}
                    {...(hasError("address"))}
                />
            </fieldset>

            <button type="submit">Submit</button>

        </form>
    )
}

export default ReferenceForm