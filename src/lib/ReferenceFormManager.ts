export default class FormManager {

    firstName: string
    lastName: string
    address: string
    guarantorName: string
    guarantorAddress: string
    guarantorRelationship: string
    employerName: string
    employerStartDate: Date
    employerEndDate: Date

    constructor(data: any) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.address = data.address;
        this.guarantorName = data.guarantorName;
        this.guarantorAddress = data.guarantorAddress;
        this.guarantorRelationship = data.guarantorRelationship;
        this.employerName = data.employerName;
        this.employerStartDate = data.employerStartDate;
        this.employerEndDate = data.employerEndDate;
    }

    convertDate = (date: Date) => {

        const dateObj = new Date(date);
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');

        return `${dateObj.getFullYear()}${month}${day}`;
    }

    getPersonalDetails = () => {
        return {
            "first_name": this.firstName,
            "last_name": this.lastName,
            "current_address": this.address,
        }
    }

    getEmployerDetails = () => {

        const employerDetails = {
            "name": this.employerName,
            "start_date": this.convertDate(this.employerStartDate),
        }

        if (!this.employerEndDate) return employerDetails;

        return {
            ...employerDetails,
            end_date: this.convertDate(this.employerEndDate)
        }
    }

    getGuarantorDetails = () => {
        return {
            "name": this.guarantorName,
            "address": this.guarantorAddress,
            "relation": this.guarantorRelationship,
        }
    }

    getSerializeData = () => {
        return {
            personal: this.getPersonalDetails(),
            employer: [
                this.getEmployerDetails()
            ],
            // guarantor: this.getGuarantorDetails()
        }
    }

}