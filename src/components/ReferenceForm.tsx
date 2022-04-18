import { useForm, FieldValues } from 'react-hook-form';

type Props = {}

const ReferenceForm = (props: Props) => {

    const {
        register,
        handleSubmit,
    } = useForm({
        mode: 'all' // validate on blur
    });

    const doSubmit = (data: FieldValues) => {
        // console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(doSubmit)}>

            <fieldset>
                <h4>Personal</h4>

                <label htmlFor='firstName'>First Name</label>
                <input type='text' {...register("firstName")} />

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' {...register('lastName')} />

                <label htmlFor='address'>Address</label>
                <input type='text' {...register('address')} />
            </fieldset>

            <button type="submit">Submit</button>

        </form>
    )
}

export default ReferenceForm