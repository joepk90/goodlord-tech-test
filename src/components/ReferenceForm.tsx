import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import Fieldset from 'src/components/common/Fieldset';

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
        .required('Required'),
    employerName: Yup.string()
        .min(2, 'Minimum of 2 characters required')
        .max(50, 'Maximum of 50 characters required')
        .required('Required'),
    employerStartDate: Yup.date()
        .required('Required'),
    employmentEndDate: Yup.date(),
    guarantorName: Yup.string()
        .min(2, 'Minimum of 2 characters required')
        .max(50, 'Maximum of 50 characters required')
        .required('Required'),
    guarantorAddress: Yup.string()
        .min(2, 'Minimum of 2 characters required')
        .max(50, 'Maximum of 50 characters required')
        .required('Required'),
    guarantorRelationship: Yup.string().oneOf(
        ['Parent', 'Sibling', 'Employer', 'Other'],
        'Invalid Relationship Type'
    ).required('Required'),
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
        isValid,
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

            <Fieldset>
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
            </Fieldset>

            <Fieldset>

                <h4>Employer</h4>
                <label htmlFor='employerName'>Employer Name</label>
                <input
                    type='text'
                    {...register('employerName')}
                    {...(hasError("employerName"))}
                />

                <label htmlFor='employerStartDate'>Employer Start Date</label>
                <input
                    type='date'
                    {...register('employerStartDate')}
                    {...(hasError("employerStartDate"))}
                />

                <label htmlFor='employerEndDate'>Guarantor Relationship</label>
                <input
                    type='date'
                    {...register('employerEndDate')}
                    {...(hasError("employerEndDate"))}

                />

            </Fieldset>

            <Fieldset>

                <h4>Guarantor</h4>
                <label htmlFor='guarantorName'>Guarantor Name</label>
                <input
                    type='text'
                    {...register('guarantorName')}
                    {...(hasError("guarantorName"))}
                />

                <label htmlFor='guarantorAddress'>Guarantor Address</label>
                <input
                    type='text'
                    {...register('guarantorAddress')}
                    {...(hasError("guarantorAddress"))}
                />

                <label htmlFor='guarantorRelationship'>Relationship to Guarantor</label>
                <select {...register("guarantorRelationship")}>
                    <option value="Parent">Parent</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Employer">Employer</option>
                    <option value="Other">Other</option>
                </select>

            </Fieldset>

            <fieldset style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline' }}>

                <a style={{ padding: '0 20px' }} href='#'>Cancel</a>

                <button type="submit"
                    disabled={!isValid}
                >Submit</button>

            </fieldset>

        </form>
    )
}

export default ReferenceForm